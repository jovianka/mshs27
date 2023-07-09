<template #default>
  <div>
    <Swiper
    :watch-slides-progress="true"
    :modules="[SwiperNavigation, SwiperVirtual, SwiperEffectCoverflow, SwiperKeyboard, SwiperAutoplay, SwiperEffectCards]"
    :slides-per-view="isMobile ? 1 : 3"
    :allow-slide-next="true"
    :allow-slide-prev="true"
    :keyboard="{ enabled: true, onlyInViewport: true }" 
    :navigation="true"
    :lazy-preload-prev-next="3"
    :effect="isMobile ? '' : 'coverflow'"
    :autoplay="{ delay: 4000, }"
    @autoplay-time-left=""
    @slide-change="(swiper: any) => {studentNumber = swiper.realIndex}"
    @swiper="(swiper: any) => {studentNumber = swiper.realIndex}"
    :touch-start-prevent-default="false"
    class="select-none">
      <SwiperSlide v-if="!isMobile"></SwiperSlide>
      <SwiperSlide v-for="slide in studentCount" :key="slide">
        <nuxt-img :src="`yearbook/foto-biodata/${studentClass}/${slide}.JPG`" class="border-8 border-yellow-400 pointer-events-none" />
      </SwiperSlide>
      <SwiperSlide v-if="!isMobile"></SwiperSlide>
    </Swiper>
    <StudentBioData :studentNumber="studentNumber" :studentClass="studentClass" />
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