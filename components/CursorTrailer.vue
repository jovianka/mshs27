<template>
  <div v-if="isDesktop" ref="cursorTrailersWrapper" class="absolute" v-show="mouseX">
    <div class="flex justify-center items-center cursorTrailer rounded-full bg-white w-9 h-9 fixed z-[1011] pointer-events-none"></div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="cursorTrailer z-[1010] -scale-x-100 fixed pointer-events-none" viewBox="0 0 16 16">
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
    </svg>
    <div class="cursorTrailer rounded-full bg-white w-2 h-2 fixed z-[1009] pointer-events-none shadow-[#DBC07A_0_0_10px_0]"></div>
    <div class="cursorTrailer rounded-full bg-white w-2 h-2 fixed z-[1008] pointer-events-none shadow-[#DBC07A_0_0_10px_0]"></div>
    <div class="cursorTrailer rounded-full bg-white w-2 h-2 fixed z-[1007] pointer-events-none shadow-[#DBC07A_0_0_10px_0]"></div>
    <div class="cursorTrailer rounded-full bg-white w-2 h-2 fixed z-[1006] pointer-events-none shadow-[#DBC07A_0_0_10px_0]"></div>
    <div class="cursorTrailer rounded-full bg-white w-2 h-2 fixed z-[1005] pointer-events-none shadow-[#DBC07A_0_0_10px_0]"></div>
    <div class="cursorTrailer rounded-full bg-white w-2 h-2 fixed z-[1004] pointer-events-none shadow-[#DBC07A_0_0_10px_0]"></div>
    <div class="cursorTrailer rounded-full bg-white w-2 h-2 fixed z-[1003] pointer-events-none shadow-[#DBC07A_0_0_10px_0]"></div>
    <div class="cursorTrailer rounded-full bg-white w-2 h-2 fixed z-[1002] pointer-events-none shadow-[#DBC07A_0_0_10px_0]"></div>
  </div>
</template>

<script setup lang="ts">
  const { isDesktop } = useDevice()
  const mouseX = ref(0)
  const mouseY = ref(0)
  const mouseIsInteracting = ref(false)
  const cursorTrailersWrapper = ref<HTMLElement | null>(null)
  
  const animateCursorTrailers = (e?: MouseEvent) => {
    if (cursorTrailersWrapper.value) {
      const cursorTrailers = cursorTrailersWrapper.value.querySelectorAll(".cursorTrailer")
      const mouseTarget = e?.target as HTMLElement
      mouseIsInteracting.value = mouseTarget.closest("a") !== null ? true : false

      // MAIN CURSOR
      const mainCursor = cursorTrailers[1]
      mainCursor.animate({
        left: `${mouseX.value}px`,
        top: `${mouseY.value}px`,
        opacity: `${mouseIsInteracting.value ? 0 : 1}`
      }, {duration: 0, fill: "forwards"})

      // SMART CURSOR TRAILER
      const smartCursorTrailer = cursorTrailers[0]

      let trailingCursorAnimation: PropertyIndexedKeyframes
      let smartCursorTrailerAnimation: PropertyIndexedKeyframes = {
        left: `${mouseX.value - 20}px`,
        top: `${mouseY.value - 20}px`,
        transform: `scale(${mouseIsInteracting.value ? 2 : 0})`,
        mixBlendMode: `${mouseIsInteracting.value ? "difference" : "normal"}`
      }
      
      smartCursorTrailer.animate(smartCursorTrailerAnimation, {duration: 300, fill: "forwards"})


      // CURSOR TRAILERS
      for (let i = 2; i < 10; i++) {
        trailingCursorAnimation = {
          left: `${mouseX.value + 20}px`,
          top: `${mouseY.value + 20}px`,
          opacity: `${mouseIsInteracting.value ? 0 : 1}`
        }
        cursorTrailers[i].animate(trailingCursorAnimation,{
          duration: i * 40,
          fill: "forwards"
        })
      }

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
    window.addEventListener('mousemove', updateCursorCoord)
    window.addEventListener('touchmove', updateTouchCoord)
  })

</script>

<style scoped>

</style>