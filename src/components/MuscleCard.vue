<template>
  <router-link :to="`/muscle/${muscle.id}`" class="block rounded-xl overflow-hidden shadow-lg card-hover group">
    <div class="relative h-56 overflow-hidden">
      <img :src="muscle.image" :alt="muscle.name" class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div class="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-2.5 py-1.5 rounded-full shadow-md transform rotate-3 group-hover:rotate-0 transition-all duration-300">
        {{ muscle.exerciseCount }} 个训练动作
      </div>
      
      <div class="absolute bottom-0 left-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 class="text-2xl font-bold mb-1 flex items-center">
          {{ muscle.name }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </h3>
        <div class="w-12 h-1 bg-blue-400 rounded mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        <p class="text-blue-100 text-sm max-w-xs">{{ muscle.description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    muscle: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style> 