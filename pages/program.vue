<template>
  <section class="max-w-5xl mx-auto px-5 py-8 lg:py-8">
    <div id="breadcrumbs" class="flex items-center">
      <nuxt-link to="/" class="text-gray-400 hover:text-gray-900">
        <span>Beranda</span>
      </nuxt-link>
      <div class="mx-4">
        <span class="text-gray-400"> > </span>
      </div>
      <nuxt-link to="#">
        <span class="inline-block border border-brand-primary rounded-full py-1 px-3 text-brand-primary">Program</span>
      </nuxt-link>
    </div>
    <article class="w-full mt-8">
      <h1 class="text-4xl font-bold">
        Program
      </h1>
      <hr class="w-20 border-2 border-brand-primary mt-4 mb-8">
      <p class="font-extralight">
        Kami berkomitmen membentuk generasi penerus bangsa yang berkualitas melalui beberapa program.
      </p>
      <ul class="mt-8">
        <li class="sm:flex">
          <div class="w-full sm:w-80">
            <div class="relative w-full pt-[56.25%]">
              <img
                src="~/assets/img/program-character.webp"
                alt="Character Building"
                class="absolute w-full h-full inset-0 object-cover rounded-lg"
              >
            </div>
          </div>
          <div class="flex-1 mt-4 ml-0 sm:mt-0 sm:ml-4">
            <h2 class="font-bold">
              Character Building
            </h2>
            <p>
              Kegiatan yang dilakukan untuk membina, memperbaiki dan/atau membentuk tabiat, watak, sifat kejiwaan, akhlak (budi pekerti), insan manusia (peserta didik) sehingga menunjukkan perangai dan tingkah laku yang baik.
            </p>
          </div>
        </li>
        <li class="mt-8 sm:flex">
          <div class="w-full sm:w-80">
            <div class="relative w-full pt-[56.25%]">
              <img
                src="~/assets/img/program-fun.webp"
                alt="Fun Learning"
                class="absolute w-full h-full inset-0 object-cover rounded-lg"
              >
            </div>
          </div>
          <div class="flex-1 mt-4 ml-0 sm:mt-0 sm:ml-4">
            <h2 class="font-bold">
              Fun Learning
            </h2>
            <p>
              Kegiatan pembelajaran dilakukan dengan seru melalui kemasan permainan agar para siswa dan siswi mendapatkan pengalaman serta kesan bahwa belajar itu sangat menyenangkan. Selain itu prinsip yang pelajaran yang diajarkan kepada siswa/siswa yaitu berfokus pada pendidikan karakter dan pengembangan pengetahuan agar siswa/siswi tidak hanya memiliki pemahaman serta kecerdasan namun diimbangi dengan sifat akhlakul karimah
            </p>
          </div>
        </li>
        <li class="mt-8 sm:flex">
          <div class="w-full sm:w-80">
            <div class="relative w-full pt-[56.25%]">
              <img
                src="~/assets/img/program-full.webp"
                alt="Full Day School"
                class="absolute w-full h-full inset-0 object-cover rounded-lg"
              >
            </div>
          </div>
          <div class="flex-1 mt-4 ml-0 sm:mt-0 sm:ml-4">
            <h2 class="font-bold">
              Full Day School
            </h2>
            <p>
              Full day school adalah kegiatan belajar mengajar siswa dengan menjangkai seluruh aspek dari perkembangan pembelajaran siswa. Full day school menghadirkan pengalaman pembelajaran bagi para siswa/siswi agar aktif dan nyaman. Program ini sangat cocok dengan orang tua yang memiliki aktivitas yang padat.
            </p>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>
