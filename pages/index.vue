<template>
  <div>
    <section class="max-w-screen-lg m-auto px-5 py-8 flex flex-col md:flex-row md:items-center">
      <div class="flex-1">
        <h1 class="font-bold text-4xl">
          Bersama Bentuk Generasi Penerus Bangsa Berilmu Amaliah Beramal Ilmiah
        </h1>
        <p class="mt-4">
          Kami siap membentuk generasi penerus bangsa yang berkualitas secara aqidah, akhlakul kharimah, cerdas, kreatif, inovatif, mandiri dan berjiwa sosial.
        </p>
        <button class="mt-4 rounded-full bg-brand-primary px-5 py-3 text-white">
          Baca selengkapnya
        </button>
      </div>
      <div class="max-w-md mx-auto mt-10 md:mt-0 md:ml-10 relative">
        <img src="~/assets/img/hero-1.webp" alt="Foto Hero 1" class="w-full -mr-20 z-10 relative">
        <img src="~/assets/img/dots.webp" alt="Dots" class="absolute bottom-0 -left-6 z-0">
        <img src="~/assets/img/green-circle.webp" alt="Green Circle" class="absolute w-44 -right-28 top-0 z-0">
      </div>
    </section>
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
    <section class="max-w-screen-lg m-auto px-5 py-16 flex flex-col md:flex-row">
      <div class="w-80 flex-shrink-0 mb-10 md:mb-0 md:mr-10">
        <h2 class="font-bold text-4xl">
          Program Unggulan
        </h2>
        <p class="mt-4">
          Kami berkomitmen membentuk generasi penerus bangsa yang berkualitas melalui beberapa program.
        </p>
        <nuxt-link
          to="program"
          class="inline-block text-center mt-4 rounded-full bg-brand-primary px-5 py-3 text-white"
        >
          Baca selengkapnya
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
                  <p class="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque molestias voluptatum minima quod fuga hic velit vero earum ut?
                  </p>
                </div>
              </div>
            </swiper-slide>
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
                  <p class="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque molestias voluptatum minima quod fuga hic velit vero earum ut?
                  </p>
                </div>
              </div>
            </swiper-slide>
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
                  <p class="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque molestias voluptatum minima quod fuga hic velit vero earum ut?
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
    </section>
    <section class="max-w-screen-lg m-auto px-5 py-16">
      <h2 class="font-bold text-4xl text-center">
        Galeri
      </h2>
      <p class="text-center">
        Cuplikan pengabadian momen kegiatan dan pembelajaran.
      </p>
      <ul class="grid grid-cols-4 gap-4 mt-8">
        <li class="col-span-4 row-span-2 md:col-span-2 relative rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dau2gxgbw/image/upload/v1637112149/ra-yasdjanur/galeri-1_xnglv9.png"
            alt="Galeri 1"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-b from-transparent to-brand-primary">
            <h3 class="font-bold">
              Keseruan Siswa-Siswa RA Yasdjanur
            </h3>
            <p>
              Menyantap makan siang bersama
            </p>
          </div>
        </li>
        <li class="col-span-2 md:col-span-1 h-40 rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dau2gxgbw/image/upload/v1637112149/ra-yasdjanur/galeri-1_xnglv9.png"
            alt="Galeri 1"
            class="w-full h-full object-cover"
          >
        </li>
        <li class="col-span-2 md:col-span-1 h-40 rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dau2gxgbw/image/upload/v1637112149/ra-yasdjanur/galeri-1_xnglv9.png"
            alt="Galeri 1"
            class="w-full h-full object-cover"
          >
        </li>
        <li class="col-span-2 md:col-span-1 h-40 rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dau2gxgbw/image/upload/v1637112149/ra-yasdjanur/galeri-1_xnglv9.png"
            alt="Galeri 1"
            class="w-full h-full object-cover"
          >
        </li>
        <li class="col-span-2 md:col-span-1 h-40 rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dau2gxgbw/image/upload/v1637112149/ra-yasdjanur/galeri-1_xnglv9.png"
            alt="Galeri 1"
            class="w-full h-full object-cover"
          >
        </li>
      </ul>
    </section>
    <section class="max-w-screen-lg m-auto px-5 py-16">
      <h2 class="font-bold text-4xl text-center">
        Testimoni
      </h2>
      <p class="text-center">
        Pendapat dari alumni dan wali siswa tentang RA Yasdjanur.
      </p>
      <ul class="mt-8 grid grid-cols-3 gap-4">
        <li class="bg-white p-4 rounded-lg">
          <div>
            <img
              src="https://res.cloudinary.com/dau2gxgbw/image/upload/v1637115236/ra-yasdjanur/muhammad-ruqi-yaddin-hxLv1jqP0_o-unsplash_1_f0canh.png"
              alt="Tania Munfisah Guwo"
              class="w-14 h-14 inline-block rounded-full"
            >
            <div class="inline-block align-middle ml-3">
              <h3 class="font-bold">
                Tania Munsifah Guwo
              </h3>
              <p class="text-sm text-gray-600">
                Wali Murid Siswa
              </p>
            </div>
          </div>
          <blockquote class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </blockquote>
        </li>
        <li class="bg-white p-4 rounded-lg">
          <div>
            <img
              src="https://res.cloudinary.com/dau2gxgbw/image/upload/v1637115236/ra-yasdjanur/muhammad-ruqi-yaddin-hxLv1jqP0_o-unsplash_1_f0canh.png"
              alt="Tania Munfisah Guwo"
              class="w-14 h-14 inline-block rounded-full"
            >
            <div class="inline-block align-middle ml-3">
              <h3 class="font-bold">
                Tania Munsifah Guwo
              </h3>
              <p class="text-sm text-gray-600">
                Wali Murid Siswa
              </p>
            </div>
          </div>
          <blockquote class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </blockquote>
        </li>
        <li class="bg-white p-4 rounded-lg">
          <div>
            <img
              src="https://res.cloudinary.com/dau2gxgbw/image/upload/v1637115236/ra-yasdjanur/muhammad-ruqi-yaddin-hxLv1jqP0_o-unsplash_1_f0canh.png"
              alt="Tania Munfisah Guwo"
              class="w-14 h-14 inline-block rounded-full"
            >
            <div class="inline-block align-middle ml-3">
              <h3 class="font-bold">
                Tania Munsifah Guwo
              </h3>
              <p class="text-sm text-gray-600">
                Wali Murid Siswa
              </p>
            </div>
          </div>
          <blockquote class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </blockquote>
        </li>
      </ul>
    </section>
  </div>
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
