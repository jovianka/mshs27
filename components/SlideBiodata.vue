<template #default>
  <div>
    <Swiper
    :watch-slides-progress="true"
    :modules="[SwiperNavigation, SwiperPagination, SwiperVirtual, SwiperEffectCoverflow, SwiperKeyboard, SwiperAutoplay, SwiperEffectCards]"
    :slides-per-view="isMobile ? 1 : 3"
    :pagination="{ dynamicBullets: true, type: 'bullets'}"
    :allow-slide-next="true"
    :allow-slide-prev="true"
    :keyboard="{ enabled: true, onlyInViewport: true }" 
    :navigation="true"
    :lazy-preload-prev-next="3"
    :effect="isMobile ? '' : 'coverflow'"
    :autoplay="{ delay: 4000, }"
    @autoplay-time-left=""
    @slide-change="(swiper) => {studentNumber = swiper.realIndex}"
    @swiper="(swiper) => {studentNumber = swiper.realIndex}"
    class="select-none">
      <SwiperSlide v-if="!isMobile"></SwiperSlide>
      <SwiperSlide v-for="slide in studentCount" :key="slide">
        <nuxt-img :src="`yearbook/foto-biodata/${studentClass}/${slide}.JPG`"
        class="px-11 pt-11 pb-10 sm:p-2 sm:pb-12" />
      </SwiperSlide>
      <SwiperSlide v-if="!isMobile"></SwiperSlide>
    </Swiper>
    <StudentBioData :studentNumber="studentNumber" :studentClass="studentClass" class="pb-10" />
  </div>
</template>

<script setup lang="ts">

  defineProps(["studentCount", "studentClass"])

  const { isMobile } = useDevice()

  let studentNumber: Ref<number> = ref(0)

  const onAutoplayTimeLeft = (swiper: any, timeLeft: number, percentage: number) => {
    
  }
  
</script>

<style scoped>

</style>