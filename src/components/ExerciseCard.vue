<template>
  <router-link :to="`/exercise/${exercise.id}`" class="block">
    <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div class="relative h-40 overflow-hidden">
        <img :src="exercise.image" :alt="exercise.name" class="w-full h-full object-cover">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 class="text-white text-lg font-semibold">{{ exercise.name }}</h3>
        </div>
      </div>
      <div class="p-4">
        <div class="flex space-x-2 mb-2">
          <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{{ exercise.targetMuscle }}</span>
          <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{{ exercise.difficulty }}</span>
        </div>
        <p class="text-gray-700 text-sm line-clamp-2">{{ exercise.description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    exercise: {
      type: Object,
      required: true
    }
  }
}
</script> 