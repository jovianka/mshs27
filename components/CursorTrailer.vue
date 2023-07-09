<template>
  <div v-if="isDesktop" ref="cursorTrailers">
    <div class="cursorTrailer rounded-full bg-gradient-to-bl from-orange-400 to-white w-9 h-9 fixed z-50 pointer-events-none"></div>
    <div class="cursorTrailer rounded-full bg-gradient-to-bl from-orange-400 to-white w-9 h-9 fixed z-40 pointer-events-none"></div>
    <div class="cursorTrailer rounded-full bg-gradient-to-bl from-orange-400 to-white w-9 h-9 fixed z-30 pointer-events-none"></div>
    <div class="cursorTrailer rounded-full bg-gradient-to-bl from-orange-400 to-white w-9 h-9 fixed z-20 pointer-events-none"></div>
    <div class="cursorTrailer rounded-full bg-gradient-to-bl from-orange-400 to-white w-9 h-9 fixed z-10 pointer-events-none"></div>
    <div class="cursorTrailer rounded-full bg-gradient-to-bl from-orange-400 to-white w-9 h-9 fixed z-0 pointer-events-none"></div>
    <div class="cursorTrailer rounded-full bg-gradient-to-bl from-orange-400 to-white w-9 h-9 fixed -z-10 pointer-events-none"></div>
    <div class="cursorTrailer rounded-full bg-gradient-to-bl from-orange-400 to-white w-9 h-9 fixed -z-20 pointer-events-none"></div>
    <div class="cursorTrailer rounded-full bg-gradient-to-bl from-orange-400 to-white w-9 h-9 fixed -z-30 pointer-events-none"></div>
    <div class="cursorTrailer rounded-full bg-gradient-to-bl from-orange-400 to-white w-9 h-9 fixed -z-40 pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
  const { isDesktop } = useDevice()
  let mouseX = ref(0)
  let mouseY = ref(0)
  const cursorTrailers = ref<HTMLDivElement | null>(null)
  
  const moveCursorTrailers = () => {
    if (cursorTrailers.value) {
      cursorTrailers.value.querySelectorAll(".cursorTrailer").forEach((cursorTrailer, arrIndex) => {
        let trailingCursorDelay = {
          left: `${mouseX.value}px`,
          top: `${mouseY.value}px`,
          transform: `scale(${(10 - arrIndex) / 10})`
        }
        
        cursorTrailer.animate(trailingCursorDelay, {
          duration: arrIndex * 15,
          fill: "forwards"
        })
      });
    }
  }
  
  const updateCursorCoord = (e: MouseEvent) => {
    if (cursorTrailers.value) {
      cursorTrailers.value.querySelectorAll(".cursorTrailer").forEach((cursorTrailer, arrIndex) => {
        mouseX.value = e.clientX - cursorTrailer.clientWidth / 2
        mouseY.value = e.clientY - cursorTrailer.clientHeight / 2
      });
    }
    moveCursorTrailers()
  }

  const updateTouchCoord = (e: TouchEvent) => {
    if (cursorTrailers.value) {
      cursorTrailers.value.querySelectorAll(".cursorTrailer").forEach((cursorTrailer, arrIndex) => {
        mouseX.value = e.touches[0].clientX - cursorTrailer.clientWidth / 2
        mouseY.value = e.touches[0].clientY - cursorTrailer.clientHeight / 2
      });
    }
    moveCursorTrailers()
  }

  onMounted(() => {
    updateCursorCoord
    window.addEventListener('mousemove', updateCursorCoord)
    window.addEventListener('touchmove', updateTouchCoord)
  })

</script>

<style scoped>

</style>