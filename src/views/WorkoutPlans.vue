<template>
  <div>
    <!-- 顶部APP栏 -->
    <v-app-bar color="primary" density="comfortable" elevation="2">
      <v-app-bar-title class="text-white font-weight-bold">
        训练计划
      </v-app-bar-title>
    </v-app-bar>

    <v-container class="pa-0">
      <!-- 过滤器卡片 -->
      <v-card class="mx-3 mt-4 mb-4 rounded-lg" elevation="1">
        <v-card-text class="py-3">
          <v-row dense>
            <v-col cols="12">
              <v-select
                v-model="filters.type"
                label="训练类型"
                :items="[
                  { title: '所有类型', value: '' },
                  { title: '全身训练', value: '全身' },
                  { title: '分化训练', value: '分化' },
                  { title: '增肌训练', value: '增肌' },
                  { title: '减脂训练', value: '减脂' },
                  { title: '力量训练', value: '力量' }
                ]"
                item-title="title"
                item-value="value"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-3"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="filters.level"
                label="难度级别"
                :items="[
                  { title: '所有级别', value: '' },
                  { title: '初学者', value: '初级' },
                  { title: '中级', value: '中级' },
                  { title: '高级', value: '高级' }
                ]"
                item-title="title"
                item-value="value"
                variant="outlined"
                density="compact"
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="filters.duration"
                label="训练时长"
                :items="[
                  { title: '所有时长', value: '' },
                  { title: '30分钟以内', value: '短' },
                  { title: '30-60分钟', value: '中' },
                  { title: '60分钟以上', value: '长' }
                ]"
                item-title="title"
                item-value="value"
                variant="outlined"
                density="compact"
                hide-details
              ></v-select>
            </v-col>
          </v-row>
          
          <v-btn 
            v-if="isFiltered"
            color="primary" 
            variant="text" 
            size="small" 
            class="mt-3" 
            @click="resetFilters"
            prepend-icon="mdi-filter-remove"
          >
            重置筛选
          </v-btn>
        </v-card-text>
      </v-card>

      <!-- 训练计划列表 -->
      <div class="px-3 pb-4">
        <template v-if="filteredPlans.length > 0">
          <WorkoutPlanCard v-for="plan in filteredPlans" :key="plan.id" :plan="plan" class="mb-3" />
        </template>
        
        <v-sheet v-else class="pa-6 rounded-lg text-center" color="grey-lighten-4">
          <v-icon size="x-large" color="grey-lighten-2" class="mb-3">mdi-dumbbell</v-icon>
          <p class="text-medium-emphasis">没有找到符合条件的训练计划</p>
        </v-sheet>
      </div>
    </v-container>
  </div>
</template>

<script>
import WorkoutPlanCard from '../components/WorkoutPlanCard.vue';

export default {
  components: {
    WorkoutPlanCard
  },
  data() {
    return {
      filters: {
        type: '',
        level: '',
        duration: ''
      },
      plans: [
        {
          id: 1,
          name: '初学者全身训练',
          type: '初学者',
          level: '初级',
          duration: 45,
          exerciseCount: 8,
          description: '适合初学者的全身训练计划，涵盖所有主要肌群，帮助建立基础力量和耐力。'
        },
        {
          id: 2,
          name: '上下身分化训练',
          type: '中级',
          level: '中级',
          duration: 60,
          exerciseCount: 12,
          description: '针对上半身和下半身分别训练的计划，让肌肉有足够的恢复时间，提高训练效果。'
        },
        {
          id: 3,
          name: '增肌计划',
          type: '增肌',
          level: '中级',
          duration: 75,
          exerciseCount: 15,
          description: '专注于肌肉生长的训练计划，包含中等重量、高容量的复合动作，促进肌肥大。'
        },
        {
          id: 4,
          name: '高强度减脂训练',
          type: '减脂',
          level: '中高级',
          duration: 45,
          exerciseCount: 10,
          description: '结合高强度间歇训练和复合动作，最大化脂肪燃烧，保持肌肉质量。'
        },
        {
          id: 5,
          name: '力量突破计划',
          type: '力量',
          level: '高级',
          duration: 90,
          exerciseCount: 8,
          description: '专注于提高最大力量的训练计划，采用低次数、高重量的训练模式，提升核心复合动作的表现。'
        },
        {
          id: 6,
          name: '30分钟快速训练',
          type: '全身',
          level: '初中级',
          duration: 30,
          exerciseCount: 6,
          description: '为时间紧张的健身者设计的高效训练，在短时间内刺激全身主要肌群。'
        },
        {
          id: 7,
          name: '3天分化训练',
          type: '分化',
          level: '中级',
          duration: 60,
          exerciseCount: 18,
          description: '将全身训练分为推、拉、腿三天，每个训练日专注于特定肌群，提供充分的恢复时间。'
        },
        {
          id: 8,
          name: '5x5力量训练',
          type: '力量',
          level: '中级',
          duration: 75,
          exerciseCount: 5,
          description: '经典的5组5次训练模式，专注于基础复合动作，有效提高整体力量水平。'
        },
        {
          id: 9,
          name: '家庭徒手训练',
          type: '全身',
          level: '初级',
          duration: 40,
          exerciseCount: 10,
          description: '无需器械的徒手训练计划，适合在家锻炼，通过自重训练刺激全身肌群。'
        }
      ]
    }
  },
  computed: {
    filteredPlans() {
      let result = this.plans;
      
      if (this.filters.type) {
        result = result.filter(plan => plan.type.includes(this.filters.type));
      }
      
      if (this.filters.level) {
        result = result.filter(plan => plan.level.includes(this.filters.level));
      }
      
      if (this.filters.duration) {
        switch(this.filters.duration) {
          case '短':
            result = result.filter(plan => plan.duration < 30);
            break;
          case '中':
            result = result.filter(plan => plan.duration >= 30 && plan.duration <= 60);
            break;
          case '长':
            result = result.filter(plan => plan.duration > 60);
            break;
        }
      }
      
      return result;
    },
    isFiltered() {
      return this.filters.type !== '' || this.filters.level !== '' || this.filters.duration !== '';
    }
  },
  methods: {
    resetFilters() {
      this.filters = {
        type: '',
        level: '',
        duration: ''
      };
    }
  }
}
</script> 

<style scoped>
/* 防止移动端点击闪烁 */
* {
  -webkit-tap-highlight-color: transparent;
}
</style> 