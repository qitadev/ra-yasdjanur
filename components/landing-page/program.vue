<template>
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
