<template>
  <div>
    <div v-for="i in 4" :key="i" class="p-4 bg-white rounded-xl" :class="{ 'mt-4': i !== 0 }">
      <div class="h-4 w-full bg-gray-300 animate-pulse" />
      <div class="mt-2 h-4 w-full bg-gray-300 animate-pulse" />
      <div class="mt-2 h-4 w-full bg-gray-300 animate-pulse" />
      <div class="mt-2 h-4 w-1/3 bg-gray-300 animate-pulse" />
      <div class="mt-4 flex items-center">
        <div class="w-16 h-16 rounded-full bg-gray-300 animate-pulse" />
        <div class="ml-4 flex-1">
          <div class="h-4 w-1/4 bg-gray-300 animate-pulse" />
          <div class="mt-2 h-4 w-1/6 bg-gray-300 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
</template>
