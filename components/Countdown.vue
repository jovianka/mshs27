<template>
  <ClientOnly>
    <template #default>
      <p class="
      text-md md:text-xl lg:text-2xl text-center text-white/[0.7]
      font-display
      select-none">{{
        formatDate()
      }}
      </p>
    </template>

    <template #fallback>
      <p class="text-center font-time text-white/[0.7] text-xl md:text-3xl lg:text-5xl ">Loading...</p>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">

let date = ref(new Date());
setInterval(() => { date.value = new Date() }, 250);

const formatDate = () => {
  let millis = Date.parse("2023-06-09T18:30:00.00") - date.value.getTime()
  let seconds = millis / 1000

  let second = Math.floor(seconds % 60)
  let minute = Math.floor(seconds / 60) % 60
  let hours = Math.floor(seconds / 3600) % 24
  let days = Math.floor(seconds / 86400)
  return `${days} days : ${hours} hours : ${minute} minutes : ${second} seconds`
}

</script>

<style scoped>

</style>