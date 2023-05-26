<template>
  <div>
    <Swiper
      :modules="[SwiperNavigation, SwiperPagination, SwiperVirtual, SwiperEffectCoverflow, SwiperEffectFlip, SwiperKeyboard]"
      :slides-per-view="3"
      :loop="true"
      :pagination="{
        dynamicBullets: true, 
      }"
      :allow-slide-next="true"
      :allow-slide-prev="true"
      :keyboard="{ enabled: true, onlyInViewport: true }" 
      :navigation="true"
      :lazy-preload-prev-next="1"
      effect="coverflow"
      ref="parentSwiperState"
      class="select-none"
    >
      <SwiperSlide v-for="slide in numberOfStudents" :key="slide">

        <Swiper
          :modules="[SwiperEffectFlip]"
          :allow-slide-next="true"
          :allow-slide-prev="true"
          :allow-touch-move="false"
          :loop="true"
          effect="flip"
        >
          <SwiperSlide>
            <nuxt-img format="webp" :src="`yearbook/foto-biodata/${schoolClass}/${slide}.JPG`" loading="lazy" />
            <SwiperNextSlideButton />
          </SwiperSlide>
          <SwiperSlide>
            <li>Nama: Kinansih</li>
            <li>Hobi: Main </li>
            <SwiperNextSlideButton />
          </SwiperSlide>
        </Swiper>

      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">

  defineProps(['numberOfStudents', 'schoolClass'])

</script>

<style scoped>

</style>