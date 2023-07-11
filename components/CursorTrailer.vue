<template>
  <div v-if="isDesktop" ref="cursorTrailersWrapper">
    <div class="cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1010] pointer-events-none shadow-[gold_0_0_10px_2px]"></div>
    <div class="cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1009] pointer-events-none shadow-[gold_0_0_10px_2px]"></div>
    <div class="cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1008] pointer-events-none shadow-[gold_0_0_10px_2px]"></div>
    <div class="cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1007] pointer-events-none shadow-[gold_0_0_10px_2px]"></div>
    <div class="cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1006] pointer-events-none shadow-[gold_0_0_10px_2px]"></div>
    <div class="cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1005] pointer-events-none shadow-[gold_0_0_10px_2px]"></div>
    <div class="cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1004] pointer-events-none shadow-[gold_0_0_10px_2px]"></div>
    <div class="cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1003] pointer-events-none shadow-[gold_0_0_10px_2px]"></div>
    <div class="cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1002] pointer-events-none shadow-[gold_0_0_10px_2px]"></div>
    <div class="cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1001] pointer-events-none shadow-[gold_0_0_10px_2px]"></div>
  </div>
</template>

<script setup lang="ts">
  const { isDesktop } = useDevice()
  let mouseX = ref(0)
  let mouseY = ref(0)
  const cursorTrailersWrapper = ref<HTMLDivElement | null>(null)
  
  const animateCursorTrailers = (e?: MouseEvent) => {
    if (cursorTrailersWrapper.value) {
      const cursorTrailers = cursorTrailersWrapper.value.querySelectorAll(".cursorTrailer")
      const mouseTarget = e?.target as HTMLElement

      cursorTrailers.forEach((cursorTrailer, arrIndex) => {
        let trailingCursorDelay = {
          left: `${mouseX.value}px`,
          top: `${mouseY.value}px`,
          transform: `scale(${(10 - arrIndex) / 10})`,
          opacity: `${mouseTarget.closest("a, .swiper-button-next, .swiper-button-prev") !== null ? 0.2: 1}`
        }
        
        cursorTrailer.animate(trailingCursorDelay, {
          duration: arrIndex * 15,
          fill: "forwards"
        })
      })
      // if (interacting) {
      //   cursorTrailers[0].animate({opacity: 50}, {duration: 300})
      // }
    }
  }

  const updateCursorCoord = (e: MouseEvent) => {
    if (cursorTrailersWrapper.value) {
      cursorTrailersWrapper.value.querySelectorAll(".cursorTrailer").forEach((cursorTrailer, arrIndex) => {
        mouseX.value = e.clientX - cursorTrailer.clientWidth / 2
        mouseY.value = e.clientY - cursorTrailer.clientHeight / 2
      });
    }
    animateCursorTrailers(e)
  }

  const updateTouchCoord = (e: TouchEvent) => {
    if (cursorTrailersWrapper.value) {
      cursorTrailersWrapper.value.querySelectorAll(".cursorTrailer").forEach((cursorTrailer, arrIndex) => {
        mouseX.value = e.touches[0].clientX - cursorTrailer.clientWidth / 2
        mouseY.value = e.touches[0].clientY - cursorTrailer.clientHeight / 2
      });
    }
    animateCursorTrailers()
  }

  onMounted(() => {
    updateCursorCoord
    window.addEventListener('mousemove', updateCursorCoord)
    window.addEventListener('touchmove', updateTouchCoord)
  })

</script>

<style scoped>

</style>