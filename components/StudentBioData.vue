<template>
  <div :key="componentKey">
    <p>{{ studentName() }}</p>
    <p>{{ studentSocialMedia() }}</p>
    <p>{{ studentQuotes() }}</p>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps(["studentCount", "studentClass"])

  let componentKey = ref(0)
  const swiper = useSwiper()

  swiper.value.on('slideChange', () => {
    componentKey.value += 1
  })


  const { data }: any = await useAsyncData('biodata', () => queryContent('/biodata').findOne())

  // SORT BIODATA
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
            .filter((student: any) => student.kelas == props.studentClass)
            .sort(sortBiodataByName)[swiper.value.realIndex].namaLengkap
  }

  const studentSocialMedia = () => {
    return data._rawValue.body
            .filter((orang: any) => orang.kelas == props.studentClass)
            .sort(sortBiodataByName)[swiper.value.realIndex].medsos
  }

  const studentQuotes = () => {
    return data._rawValue.body
            .filter((orang: any) => orang.kelas == props.studentClass)
            .sort(sortBiodataByName)[swiper.value.realIndex].kesanPesan
  }


</script>

<style scoped>

</style>