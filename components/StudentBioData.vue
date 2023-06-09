<template>
  <div :key="componentKey">
    {{ studentName() }}
    {{ swiper.realIndex }}
  </div>
</template>

<script setup lang="ts">

  let componentKey = ref(0)

  const swiper = useSwiper()

  swiper.value.on('slideChange', () => {
    componentKey.value += 1
  })

  defineProps(["numberOfStudents"])

  const { data }: any = await useAsyncData('biodata', () => queryContent('/biodata').findOne())


  function sortBiodataByName(a: any, b: any) {
    const nameA = a.namaLengkap.toUpperCase(); // ignore upper and lowercase
    const nameB = b.namaLengkap.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    
    // names must be equal
    return 0
  }

  const studentName = () => {
    return data._rawValue.body
            .filter((orang: any) => orang.kelas == "XII IPA 3")
            .sort(sortBiodataByName)[swiper.value.realIndex].kesanPesan
  }


</script>

<style scoped>

</style>