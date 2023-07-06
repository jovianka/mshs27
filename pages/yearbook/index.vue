<template>
  <div class=" min-h-[200vh]">
    <div class="lg:px-72">
      <SlideBiodata studentClass="IPA3" class="mb-24" :studentCount="33" />
      <div>mouseX = {{ mouseX }}</div>
      <div>mouseY = {{ mouseY }}</div>
      <div ref="cursorTrailers">
        <div class="cursorTrailer rounded-full bg-white w-6 h-6 fixed z-50 pointer-events-none"></div>
        <div class="cursorTrailer rounded-full bg-white w-6 h-6 fixed z-50 pointer-events-none"></div>
        <div class="cursorTrailer rounded-full bg-white w-6 h-6 fixed z-50 pointer-events-none"></div>
        <div class="cursorTrailer rounded-full bg-white w-6 h-6 fixed z-50 pointer-events-none"></div>
        <div class="cursorTrailer rounded-full bg-white w-6 h-6 fixed z-50 pointer-events-none"></div>
        <div class="cursorTrailer rounded-full bg-white w-6 h-6 fixed z-50 pointer-events-none"></div>
        <div class="cursorTrailer rounded-full bg-white w-6 h-6 fixed z-50 pointer-events-none"></div>
        <div class="cursorTrailer rounded-full bg-white w-6 h-6 fixed z-50 pointer-events-none"></div>
        <div class="cursorTrailer rounded-full bg-white w-6 h-6 fixed z-50 pointer-events-none"></div>
        <div class="cursorTrailer rounded-full bg-white w-6 h-6 fixed z-50 pointer-events-none"></div>
      </div>

    </div>
  </div >
</template>

<script setup lang="ts">
  let mouseX = ref(0)
  let mouseY = ref(0)
  const cursorTrailers = ref<HTMLDivElement | null>(null)

  onMounted(() => {
    window.addEventListener('mousemove', (e) => {
      if (cursorTrailers.value) {
        cursorTrailers.value.querySelectorAll(".cursorTrailer").forEach((cursorTrailer, arrIndex) => {
          mouseX.value = e.clientX - cursorTrailer.clientWidth / 2
          mouseY.value = e.clientY - cursorTrailer.clientHeight / 2
          
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
    })

  })

</script>

<style scoped>

</style>