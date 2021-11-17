<template>
  <header class="bg-white shadow-md rounded-[36px] flex justify-center items-center flex-col md:flex-row md:justify-between z-50">
    <div class="flex items-center justify-between w-full md:w-auto">
      <div class="flex items-center">
        <img src="~/assets/img/logo.webp" alt="Logo" class="w-16 my-2 ml-4">
        <h1 class="ml-4 font-bold text-md">
          RA Yasdjanur
        </h1>
      </div>
      <button class="md:hidden m-4" @click="handleBurgerClick">
        <IconsBurger class="h-6 w-6" />
      </button>
    </div>
    <ul class="md:flex items-center overflow-hidden transition-max-height duration-300 ease-in-out" :class="isExpand ? 'max-h-80' : 'max-h-0 md:max-h-80'">
      <li>
        <nuxt-link to="/profil" class="block text-center m-4 font-medium">
          Profil
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/program" class="block text-center m-4 font-medium">
          Program
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/galeri" class="block text-center m-4 font-medium">
          Galeri
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/profil" class="block text-center m-4 font-medium">
          Testimoni
        </nuxt-link>
      </li>
      <li>
        <a href="https://bit.ly/InformasiPPDBRAYasdjanur" target="_blank" rel="noopener noreferrer" class="block text-center m-4 px-4 py-2 bg-brand-primary text-white rounded-full">
          Informasi PPDB
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isExpand: false
    }
  },
  methods: {
    handleBurgerClick () {
      this.isExpand = !this.isExpand
    }
  }
}
</script>
