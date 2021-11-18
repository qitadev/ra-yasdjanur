<template>
  <section class="max-w-screen-lg m-auto px-5 py-16">
    <h2 class="font-bold text-4xl text-center">
      Galeri
    </h2>
    <p class="text-center">
      Cuplikan pengabadian momen kegiatan dan pembelajaran.
    </p>
    <SkeletonLandingPageGallery v-if="$fetchState.pending" class="mt-8" />
    <ErrorFetchData v-else-if="$fetchState.error" class="mt-8" />
    <ul v-else class="grid grid-cols-4 gap-4 mt-8">
      <template v-for="(photo, i) in firstFivePhotos">
        <li v-if="i === 0" :key="photo.id" class="col-span-4 row-span-2 md:col-span-2 relative rounded-xl overflow-hidden">
          <img
            :src="photo.photo"
            :alt="photo.title"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-b from-transparent to-brand-primary">
            <h3 class="font-bold">
              {{ photo.title }}
            </h3>
            <p>
              {{ photo.caption }}
            </p>
          </div>
        </li>
        <li v-else :key="photo.id" class="col-span-2 md:col-span-1 h-40 rounded-xl overflow-hidden relative">
          <img
            :src="photo.photo"
            :alt="photo.title"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
            <div class="absolute bottom-0 inset-x-0 p-4 text-white bg-gradient-to-b from-transparent to-brand-primary rounded-b-lg">
              <h3 class="font-bold">
                {{ photo.title }}
              </h3>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      photos: []
    }
  },
  async fetch () {
    const photos = await this.$getSheetData(1)
    this.photos = photos
  },
  computed: {
    firstFivePhotos () {
      return this.photos.slice(0, 5)
    }
  },
  fetchOnServer: false
}
</script>
