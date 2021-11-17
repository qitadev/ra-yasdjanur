<template>
  <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <li v-for="i in 3" :key="i" class="bg-white p-4 rounded-lg">
      <div class="flex items-center">
        <div>
          <div class="w-14 h-14 bg-gray-300 animate-pulse rounded-full" />
        </div>
        <div class="flex-1 p-3">
          <div class="w-full h-4 bg-gray-300 animate-pulse rounded-full" />
          <div class="mt-2 w-1/2 h-3 bg-gray-300 animate-pulse rounded-full" />
        </div>
      </div>
      <div class="mt-4 w-full h-4 bg-gray-300 animate-pulse rounded-full" />
      <div class="mt-4 w-full h-4 bg-gray-300 animate-pulse rounded-full" />
      <div class="mt-4 w-3/4 h-4 bg-gray-300 animate-pulse rounded-full" />
    </li>
  </ul>
</template>
