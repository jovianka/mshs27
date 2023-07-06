<template>
  <div class="font-body text-center flex flex-col items-center">
    <div class="w-4/5
      bg-red500 font-script font-semibold
      text-3xl text-white/90
      mt-9 mb-5 px-5">
      <h2>{{ studentNumber }}</h2>
      <h2 class="">
        {{ student().namaLengkap }} ({{ student().namaPanggilan }})
      </h2>
    </div>
    <div class="w-4/5 bg--900">
      <p>{{ student().kesanPesan }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps(["studentClass", "studentNumber"])
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

  const student = () => {
    return data._rawValue.body
            .filter((student: any) => student.kelas == props.studentClass)
            .sort(sortBiodataByName)[props.studentNumber]
  }

</script>

<style scoped>

</style>