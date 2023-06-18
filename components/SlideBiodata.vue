<template #default>
  <div>
    <Swiper
    :modules="[SwiperNavigation, SwiperPagination, SwiperVirtual, SwiperEffectCoverflow, SwiperKeyboard]"
    :slides-per-view="isMobile ? 1 : 3"
    :pagination="{ dynamicBullets: true, type: 'bullets'}"
    :allow-slide-next="true"
    :allow-slide-prev="true"
    :keyboard="{ enabled: true, onlyInViewport: true }" 
    :navigation="true"
    :lazy-preload-prev-next="1"
    effect="coverflow"
    ref="parentSwiperState"
    class="select-none">
      <SwiperSlide v-if="!isMobile"></SwiperSlide>
      <SwiperSlide v-for="slide in studentCount" :key="slide">
        <nuxt-img format="webp" :src="`yearbook/foto-biodata/${studentClass}/${slide}.JPG`" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide v-if="!isMobile"></SwiperSlide>
      <div class="relative">
        <StudentBioData :studentCount="studentCount" :studentClass="studentClass" class="py-20 text-2xl text-center font-body" />
      </div>
    </Swiper>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps(["studentCount", "studentClass"])

  const { isMobile } = useDevice()
  
</script>

<style scoped>

</style>