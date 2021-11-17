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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
