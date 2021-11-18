<template>
  <section class="max-w-screen-lg m-auto px-5 py-16 flex flex-col md:flex-row">
    <div class="w-full md:w-80 flex-shrink-0 mb-10 md:mb-0 md:mr-10">
      <h2 class="font-bold text-4xl">
        Program Unggulan
      </h2>
      <p class="mt-4">
        Kami berkomitmen membentuk generasi penerus bangsa yang berkualitas melalui beberapa program.
      </p>
      <nuxt-link
        to="program"
        class="mt-8 inline-block font-bold"
      >
        Selengkapnya
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </nuxt-link>
    </div>
    <div class="flex-1 overflow-hidden">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <div class="rounded-lg border overflow-hidden bg-white w-72">
              <img
                src="~/assets/img/program-character.webp"
                alt="Program Character Building"
                class="w-full h-40 object-cover"
              >
              <div class="p-4">
                <h3 class="font-bold text-lg">
                  Character Building
                </h3>
                <p class="text-sm text-gray-600 line-clamp-5">
                  Kegiatan yang dilakukan untuk membina, memperbaiki dan/atau membentuk tabiat, watak, sifat kejiwaan, akhlak (budi pekerti), insan manusia (peserta didik) sehingga menunjukkan perangai dan tingkah laku yang baik.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="rounded-lg border overflow-hidden bg-white w-72">
              <img
                src="~/assets/img/program-fun.webp"
                alt="Program Fun Learning"
                class="w-full h-40 object-cover"
              >
              <div class="p-4">
                <h3 class="font-bold text-lg">
                  Fun Learning
                </h3>
                <p class="text-sm text-gray-600 line-clamp-5">
                  Kegiatan pembelajaran dilakukan dengan seru melalui kemasan permainan agar para siswa dan siswi mendapatkan pengalaman serta kesan bahwa belajar itu sangat menyenangkan. Selain itu prinsip yang pelajaran yang diajarkan kepada siswa/siswa yaitu berfokus pada pendidikan karakter dan pengembangan pengetahuan agar siswa/siswi tidak hanya memiliki pemahaman serta kecerdasan namun diimbangi dengan sifat akhlakul karimah
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="rounded-lg border overflow-hidden bg-white w-72">
              <img
                src="~/assets/img/program-full.webp"
                alt="Program Full Day School"
                class="w-full h-40 object-cover"
              >
              <div class="p-4">
                <h3 class="font-bold text-lg">
                  Full Day School
                </h3>
                <p class="text-sm text-gray-600 line-clamp-5">
                  Full day school adalah kegiatan belajar mengajar siswa dengan menjangkai seluruh aspek dari perkembangan pembelajaran siswa. Full day school menghadirkan pengalaman pembelajaran bagi para siswa/siswi agar aktif dan nyaman. Program ini sangat cocok dengan orang tua yang memiliki aktivitas yang padat.
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 16
      }
    }
  }
}
</script>

<style scoped>
.swiper-slide {
  width: auto;
}
</style>
