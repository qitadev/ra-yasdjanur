<template>
  <section class="max-w-screen-lg m-auto px-5 py-16 flex flex-col md:flex-row">
    <div class="max-w-xs mx-auto mb-10 md:mb-0 md:mr-10">
      <img src="~/assets/img/foto-profil.webp" alt="Foto Profil" class="w-full">
    </div>
    <div class="flex-1">
      <h2 class="font-bold text-4xl">
        Profil
      </h2>
      <p class="mt-4">
        RA YASDJANUR didirikan pada tahun 1996 dibawah naungan Yayasan Sitti Chadidjah An Nur. Tokoh yang paling berjasa dalam membidani lahirnya RA YASDJANUR adalah Bunda Sitti Chadidjah An Nur.
        Bunda Sitti yang saat itu tercatat sebagai aktivis wanita merasa prihatin melihat banyak anak-anak usia 2-6 tahun yang berkerumun tanpa ada aktivitas pembelajaran.
      </p>
      <nuxt-link
        to="profil"
        class="inline-block text-center mt-4 rounded-full bg-brand-primary px-5 py-3 text-white"
      >
        Baca selengkapnya
      </nuxt-link>
    </div>
  </section>
</template>
