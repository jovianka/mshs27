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
      class="select-none"
    >
      <SwiperSlide v-if="!isMobile"></SwiperSlide>
      <SwiperSlide v-for="slide in numberOfStudents" :key="slide">
        <nuxt-img format="webp" :src="`yearbook/foto-biodata/${schoolClass}/${slide}.JPG`" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide v-if="!isMobile"></SwiperSlide>
      <StudentBioData class="pt-52" />
    </Swiper>
  </div>
</template>

<script setup lang="ts">

  const { isMobile } = useDevice()

  defineProps(['numberOfStudents', 'schoolClass'])
  
</script>

<style scoped>

</style>