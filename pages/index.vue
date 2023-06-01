<template>
  <NuxtLayout name="default">


    <template #header>
      <header class="absolute w-full z-10">
        <nav class="p-6 flex flex-row justify-center">
          <div class="flex flex-row justify-start items-center">
            <nuxt-img src="logo-transparent-bg-gold.svg" alt="" class="w-16 sm:w-12 m-3 outline-2 outline outline-[#DBC07A]" />
            <h1 class="font-display font-bold text-xl sm:text-2xl text-white/[0.87]">MSHS 27 PROM NIGHT</h1>
          </div>
        </nav>
      </header>
    </template>
    
    <template #default>
      <main>
        <section class="relative min-h-screen flex flex-col justify-center bg-cover bg-center bg-[url('https://ik.imagekit.io/c8l1fmjugx/mountains.jpg')] overflow-hidden">
          <div class="absolute bg-black/50 backdrop-blur-[5px] w-full h-full"></div>
          <SaveTheDate />
        </section>
        <div class="absolute bottom-7 flex justify-center w-full">
          <button @click="useSmoothScrollTo('details')" class="w-max text-white/[0.5] flex flex-row justify-center items-center hover:text-white/[0.7] transition-all">
            <h2 class="mr-2 text-lg">Details</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg>
          </button>
        </div>
    
        <section id="details" class="my-24 px-6 sm:px-24">
          <h1 class="font-display text-center text-3xl sm:text-4xl lg:text-5xl mb-12 leading-relaxed">Ada Apa Aja?</h1>
          <div class="flex flex-row flex-wrap justify-center gap-12">
            <Card>
              <template #image><nuxt-img format="webp" src="ramen.jpg" /></template>
              <template #title>Very-very Good Food</template>
              <template #body>Kita akan menikmati makanan yang disajikan dengan cara prasmanan!</template>
            </Card>
            <Card>
              <template #image><nuxt-img format="webp" src="mic.jpg" /></template>
              <template #title>Penampilan dari MSHS 27</template>
              <template #body>Band dan modern dance!</template>
            </Card>
            <Card>
              <template #image><nuxt-img format="webp" src="djyea.jpg" /></template>
              <template #title>DEEJAY</template>
              <template #body><i>Prom night</i>DEEEEEEJAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY!</template>
            </Card>
          </div>
        </section>
        <section id="contactUs" class="my-24 px-6 sm:px-24">
          <h1 class="font-display text-2xl mb-6 leading-relaxed text-center sm:text-start">Ada Pertanyaan?</h1>
          <div>
            <FormKit type="form" id="promQuestions" @submit="submitPromQuestion">
              <FormKit type="text" name="from_name" id="from_name" label="Nama Anda" input-class="text-white/60" validation="required" />
              <FormKit type="email" name="from_email" id="from_email" label="Email Anda" input-class="text-white/60" validation="required|email" />
              <FormKit type="textarea" name="message" label="Pertanyaan" input-class="text-white/60" validation="required" />
            </FormKit>
          </div>
        </section>
      </main>
    </template>


  </NuxtLayout>
</template>

<script setup lang="ts">
import emailjs from "@emailjs/browser";

const config = useRuntimeConfig()

definePageMeta({
  layout: false
})

async function submitPromQuestion(fields: any) {
  try {
    const res = await emailjs.send("prom_questions", "template_prom_questions", fields, config.public.EMAILJS_PUBLIC_KEY);
    await alert(res ? "Pertanyaan anda telah kami terima! Mohon tunggu jawaban kami :D" : "Ada kesalahan dalam pengiriman pertanyaan :(");
  } catch(err) {
    console.log(err)
    alert("Ada kesalahan dalam pengiriman pertanyaan :(")
  }
}

</script>

<style scoped>

</style>