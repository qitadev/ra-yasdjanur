<template>
  <section class="max-w-screen-lg m-auto px-5 py-16">
    <h2 class="font-bold text-4xl text-center">
      Testimoni
    </h2>
    <p class="text-center">
      Pendapat dari alumni dan wali siswa tentang RA Yasdjanur.
    </p>
    <SkeletonLandingPageTestimonials v-if="$fetchState.pending" class="mt-8" />
    <ErrorFetchData v-else-if="$fetchState.error" class="mt-8" />
    <ul v-else class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <li v-for="testimonial in firstThreeTestimonials" :key="testimonial.id" class="bg-white p-4 rounded-lg">
        <div class="flex items-center">
          <img
            :src="testimonial.photo"
            :alt="testimonial.name"
            class="w-14 h-14 rounded-full object-cover"
          >
          <div class="p-3">
            <h3 class="font-bold">
              {{ testimonial.name }}
            </h3>
            <p class="text-sm text-gray-600">
              {{ testimonial.designation }}
            </p>
          </div>
        </div>
        <blockquote class="mt-4 line-clamp-4">
          {{ testimonial.testimonial }}
        </blockquote>
      </li>
    </ul>
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
  fetchOnServer: false,
  computed: {
    firstThreeTestimonials () {
      return this.testimonials.slice(0, 3)
    }
  }
}
</script>
