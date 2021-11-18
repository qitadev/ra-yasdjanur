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
        <span class="inline-block border border-brand-primary rounded-full py-1 px-3 text-brand-primary">Testimoni</span>
      </nuxt-link>
    </div>
    <article class="w-full mt-8">
      <h1 class="text-4xl font-bold">
        Testimoni
      </h1>
      <hr class="w-20 border-2 border-brand-primary mt-4 mb-8">
      <p class="font-extralight">
        Berikut pendapat dan kesan pembelajaran dari wali murid yang sudah mempercayai Raudhatul Athfal Yasdjanur menjadi tempat belajar putra-putrinya.
      </p>
      <SkeletonTestimonials v-if="$fetchState.pending" class="mt-8" />
      <ErrorFetchData v-else-if="$fetchState.error" class="mt-8" />
      <ul v-else class="mt-8">
        <li
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.id"
          class="p-4 bg-white rounded-xl overflow-hidden"
          :class="{ 'mt-4': i !== 0 }"
        >
          <blockquote class="text-sm">
            {{ testimonial.testimonial }}
          </blockquote>
          <div class="flex items-center mt-4">
            <img
              :src="testimonial.photo"
              :alt="testimonial.name"
              class="w-16 h-16 object-cover rounded-full"
            >
            <div class="ml-4">
              <h2 class="font-bold">
                {{ testimonial.name }}
              </h2>
              <p class="text-sm">
                {{ testimonial.designation }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  data () {
    return {
      testimonials: []
    }
  },
  async fetch () {
    const testimonials = await this.$getSheetData(0)
    this.testimonials = testimonials
  },
  fetchOnServer: false
}
</script>
