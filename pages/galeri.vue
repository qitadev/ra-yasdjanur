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
        <span class="inline-block border border-brand-primary rounded-full py-1 px-3 text-brand-primary">Galeri</span>
      </nuxt-link>
    </div>
    <article class="w-full mt-8">
      <h1 class="text-4xl font-bold">
        Galeri
      </h1>
      <hr class="w-20 border-2 border-brand-primary mt-4 mb-8">
      <p class="font-extralight">
        Berikut kumpulan dokumentasi foto dari keseruan pembelajaran dan kegiatan Raudhatul Athfal Yasdjanur bersama guru, siswa-siswi dan wali murid.
      </p>
      <SkeletonGallery v-if="$fetchState.pending" class="mt-8" />
      <ErrorFetchData v-else-if="$fetchState.error" class="mt-8" />
      <ul v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <li v-for="photo in photos" :key="photo.id" class="relative pt-[56.25%]">
          <img :src="photo.photo" :alt="photo.title" class="absolute inset-0 w-full h-full object-cover rounded-lg">
          <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
            <div class="absolute bottom-0 inset-x-0 p-4 text-white bg-gradient-to-b from-transparent to-brand-primary rounded-b-lg">
              <h3 class="font-bold">
                {{ photo.title }}
              </h3>
              <p>
                {{ photo.caption }}
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
      photos: []
    }
  },
  async fetch () {
    const photos = await this.$getSheetData(1)
    this.photos = photos
  }
}
</script>
