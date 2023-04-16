<template>
  <div class="bg-[#dadada] max-w-[400px] backdrop-blur-lg">
  <div class="mb-3">
    <slot name="image"></slot>
    </div>
    <div class="p-3 pt-0">
      <div class="font-display font-bold leading-loose text-black/80"><slot name="title"/></div>
      <p class="text-black/60"><slot name="body"/></p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps(["img"])

</script>

<style scoped>

</style>