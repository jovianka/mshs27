<template #default>
  <div class="">
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
    :set-wrapper-size="true"
    @autoplay-time-left=""
    @slide-change="(swiper: any) => {studentNumber = swiper.realIndex}"
    @swiper="(swiper: any) => {studentNumber = swiper.realIndex}"
    :touch-start-prevent-default="false">
      <SwiperSlide v-if="!isMobile"></SwiperSlide>
      <SwiperSlide v-for="slide in studentCount" :key="slide">
        <div class="biodata-image aspect-[2/3] bg-center bg-[size:100%] hover:bg-[size:110%] transition-all m-9 md:m-2
         border border-accent1"
        :style="{backgroundImage: `url(https://ik.imagekit.io/c8l1fmjugx/yearbook/foto-biodata/${studentClass}/${slide}.JPG)`}">
        </div>
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
  
</script>

<style scoped>

</style>