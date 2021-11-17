<template>
  <section class="max-w-5xl mx-auto px-5 py-8 lg:py-8">
    <div id="breadcrumbs" class="flex items-center">
      <nuxt-link to="/" class="text-gray-400">
        <span>Beranda</span>
      </nuxt-link>
      <div class="mx-4">
        <span class="text-gray-400"> > </span>
      </div>
      <nuxt-link to="#">
        <span class="border border-brand-primary rounded-full py-1 px-3 text-brand-primary">Galeri</span>
      </nuxt-link>
    </div>
    <article class="w-full mt-8">
      <section id="heading">
        <h1 class="text-4xl font-bold">
          Galeri
        </h1>
        <hr class="w-20 border-2 border-brand-primary mt-4 mb-8">
        <p class="font-extralight">
          Berikut kumpulan dokumentasi foto dari keseruan pembelajaran dan kegiatan Raudhatul Athfal Yasdjanur bersama guru, siswa-siswi dan wali murid.
        </p>
      </section>
      <section id="gallery" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <article class="relative">
          <img src="~/assets/img/program-character.webp" alt="Foto Galeri" class="w-full h-full object-cover rounded-lg">
          <div class="absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-b from-transparent to-brand-primary rounded-b-lg opacity-0 hover:opacity-100">
            <h3 class="font-bold">
              Keseruan Siswa-Siswa RA Yasdjanur
            </h3>
            <p>
              Menyantap makan siang bersama
            </p>
          </div>
        </article>
        <article class="relative">
          <img src="~/assets/img/program-character.webp" alt="Foto Galeri" class="w-full h-full object-cover rounded-lg">
          <div class="absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-b from-transparent to-brand-primary rounded-b-lg opacity-0 hover:opacity-100">
            <h3 class="font-bold">
              Keseruan Siswa-Siswa RA Yasdjanur
            </h3>
            <p>
              Menyantap makan siang bersama
            </p>
          </div>
        </article>
        <article class="relative">
          <img src="~/assets/img/program-character.webp" alt="Foto Galeri" class="w-full h-full object-cover rounded-lg">
          <div class="absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-b from-transparent to-brand-primary rounded-b-lg opacity-0 hover:opacity-100">
            <h3 class="font-bold">
              Keseruan Siswa-Siswa RA Yasdjanur
            </h3>
            <p>
              Menyantap makan siang bersama
            </p>
          </div>
        </article>
      </section>
    </article>
  </section>
</template>

<script>

</script>
