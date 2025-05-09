<template>
  <v-card class="rounded-lg" elevation="1" :to="`/workout-plan/${plan.id}`" ripple>
    <v-card-item>
      <v-card-title class="pb-1 text-subtitle-1 font-weight-bold">{{ plan.name }}</v-card-title>
      
      <template v-slot:append>
        <v-chip
          size="x-small"
          color="primary"
          variant="flat"
          class="mr-1"
        >
          {{ plan.type }}
        </v-chip>
        <v-chip
          size="x-small"
          color="grey-lighten-3"
          variant="flat"
        >
          {{ plan.level }}
        </v-chip>
      </template>
    </v-card-item>
    
    <v-card-text class="pb-1">
      <p class="text-body-2 text-medium-emphasis text-truncate-2 mb-3">{{ plan.description }}</p>
      
      <div class="d-flex">
        <v-chip
          size="small"
          color="primary-lighten-5"
          variant="flat"
          prepend-icon="mdi-clock-outline"
          class="mr-2 px-2"
        >
          {{ plan.duration }}分钟
        </v-chip>
        
        <v-chip
          size="small"
          color="primary-lighten-5"
          variant="flat"
          prepend-icon="mdi-dumbbell"
          class="px-2"
        >
          {{ plan.exerciseCount }}个动作
        </v-chip>
      </div>
    </v-card-text>
    
    <v-divider class="mt-2"></v-divider>
    
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        variant="text"
        color="primary"
        size="small"
        :to="`/workout-plan/${plan.id}`"
      >
        查看详情
        <v-icon right>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    plan: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 防止移动端点击闪烁 */
* {
  -webkit-tap-highlight-color: transparent;
}
</style> 