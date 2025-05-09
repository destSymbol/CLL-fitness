<template>
  <div>
    <!-- 顶部APP栏 -->
    <v-app-bar color="primary" density="comfortable" elevation="2">
      <v-app-bar-nav-icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title class="text-white font-weight-bold">
        {{ plan ? plan.name : '训练计划详情' }}
      </v-app-bar-title>
    </v-app-bar>

    <div v-if="plan">
      <v-container class="pa-0">
        <!-- 顶部封面 -->
        <v-img
          src="/images/fitness-hero.gif"
          height="180"
          cover
          gradient="to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)"
          class="mb-4"
        >
          <div class="d-flex fill-height flex-column justify-end pa-4">
            <v-chip class="mb-2" color="primary" size="small" variant="flat">
              {{ plan.type }} · {{ plan.level }}
              <template v-slot:append>
                <span class="ml-1">
                  <v-icon
                    v-for="i in 5"
                    :key="i"
                    :color="i <= difficultyLevel ? 'yellow' : 'grey-lighten-3'"
                    size="x-small"
                    class="ml-n1"
                  >
                    mdi-star
                  </v-icon>
                </span>
              </template>
            </v-chip>
            <h1 class="text-h5 text-white font-weight-bold mb-1">{{ plan.name }}</h1>
            <p class="text-white text-body-2 text-opacity-80">{{ plan.description }}</p>
          </div>
        </v-img>

        <!-- 计划数据 -->
        <v-row dense class="px-2 mb-4">
          <v-col cols="4">
            <v-card variant="flat" class="rounded-lg">
              <v-card-text class="text-center pa-2">
                <v-icon color="primary" size="medium" class="mb-1">mdi-clock-outline</v-icon>
                <div class="text-caption text-medium-emphasis">时长</div>
                <div class="text-subtitle-2 font-weight-bold">{{ plan.duration }}分钟</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card variant="flat" class="rounded-lg">
              <v-card-text class="text-center pa-2">
                <v-icon color="primary" size="medium" class="mb-1">mdi-dumbbell</v-icon>
                <div class="text-caption text-medium-emphasis">训练动作</div>
                <div class="text-subtitle-2 font-weight-bold">{{ plan.exercises.length }}个</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card variant="flat" class="rounded-lg">
              <v-card-text class="text-center pa-2">
                <v-icon color="primary" size="medium" class="mb-1">mdi-lightning-bolt</v-icon>
                <div class="text-caption text-medium-emphasis">难度</div>
                <div class="text-subtitle-2 font-weight-bold">{{ plan.level }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- 开始训练按钮 -->
        <div class="px-4 mb-6">
          <v-btn color="primary" block size="large">
            <v-icon left>mdi-play-circle</v-icon>
            开始训练
          </v-btn>
        </div>

        <!-- 计划介绍卡片 -->
        <v-card class="mb-4 mx-3 rounded-lg" elevation="1">
          <v-card-title class="py-3 px-4">
            <v-icon color="primary" class="mr-2">mdi-information-outline</v-icon>
            <span class="text-subtitle-1 font-weight-bold">训练计划说明</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="py-3 px-4">
            <div class="mb-3">
              <p class="text-subtitle-2 font-weight-bold text-primary mb-1">计划概述</p>
              <p class="text-body-2 text-medium-emphasis">{{ plan.overview }}</p>
            </div>
            <v-divider class="my-3"></v-divider>
            <div class="mb-3">
              <p class="text-subtitle-2 font-weight-bold text-primary mb-1">适合人群</p>
              <p class="text-body-2 text-medium-emphasis">{{ plan.targetAudience }}</p>
            </div>
            <v-divider class="my-3"></v-divider>
            <div>
              <p class="text-subtitle-2 font-weight-bold text-primary mb-1">建议频率</p>
              <p class="text-body-2 text-medium-emphasis">{{ plan.frequency }}</p>
            </div>
          </v-card-text>
        </v-card>

        <!-- 训练动作列表 -->
        <div class="px-3 mb-2">
          <p class="text-subtitle-1 font-weight-bold mb-2 d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-dumbbell</v-icon>
            训练动作
          </p>
        </div>

        <v-card
          v-for="(exercise, index) in plan.exercises"
          :key="exercise.id"
          class="mb-3 mx-3 rounded-lg"
          elevation="1"
          :to="`/exercise/${exercise.id}`"
          ripple
        >
          <div class="d-flex">
            <v-img
              :src="exercise.image"
              :alt="exercise.name"
              width="120"
              class="rounded-l-lg"
              cover
            >
              <div class="fill-height d-flex align-start justify-start pa-1">
                <v-chip
                  size="small"
                  color="primary"
                  variant="flat"
                  class="text-white font-weight-bold"
                >
                  {{ index + 1 }}
                </v-chip>
              </div>
            </v-img>
            
            <div class="flex-grow-1 pa-3">
              <div class="d-flex justify-space-between align-center mb-1">
                <h3 class="text-subtitle-1 font-weight-bold">{{ exercise.name }}</h3>
                <v-chip size="x-small" color="primary" variant="outlined">{{ exercise.level }}</v-chip>
              </div>
              <p class="text-caption text-medium-emphasis text-truncate-2">{{ exercise.description }}</p>
              
              <div class="d-flex mt-2">
                <div class="mr-3 text-center">
                  <div class="text-caption text-medium-emphasis">组数</div>
                  <div class="text-caption font-weight-bold">{{ exercise.sets }}</div>
                </div>
                <div class="mr-3 text-center">
                  <div class="text-caption text-medium-emphasis">次数</div>
                  <div class="text-caption font-weight-bold">{{ exercise.reps }}</div>
                </div>
                <div class="mr-3 text-center">
                  <div class="text-caption text-medium-emphasis">休息</div>
                  <div class="text-caption font-weight-bold">{{ exercise.rest }}秒</div>
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </v-container>
    </div>
    
    <div v-else class="d-flex justify-center align-center" style="min-height: 300px">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plan: null
    }
  },
  computed: {
    difficultyLevel() {
      const levels = {
        '入门级': 1,
        '初级': 1,
        '中级': 3, 
        '中高级': 4,
        '高级': 5
      };
      return levels[this.plan?.level] || 3;
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route.params.id'() {
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      // 模拟API调用
      setTimeout(() => {
        const planId = parseInt(this.$route.params.id);
        
        // 训练计划数据
        const plansData = {
          1: {
            id: 1,
            name: '初学者全身训练',
            type: '初学者',
            level: '入门级',
            duration: 45,
            description: '适合初学者的全身训练计划，涵盖所有主要肌群，帮助建立基础力量和耐力。',
            overview: '这是一个为健身新手设计的全身性训练计划，每次训练会锻炼全身主要肌群，帮助你在短时间内建立基础力量和肌肉耐力。训练动作简单易学，强调正确的姿势和技术。',
            targetAudience: '健身新手、长期不运动后重返健身房的人、希望从简单开始的人群。',
            frequency: '每周3-4次，每次训练之间至少休息一天。',
            exercises: [
              {
                id: 'push-up',
                name: '俯卧撑',
                level: '初级',
                equipment: '徒手',
                image: '/images/push-up.gif',
                description: '全身性锻炼，主要强化胸肌、肩部和肱三头肌。',
                sets: '3组',
                reps: '10-12次',
                rest: '60',
                targetMuscle: '胸肌'
              },
              {
                id: 'squat',
                name: '深蹲',
                level: '初级',
                equipment: '徒手/哑铃',
                image: '/images/squat.gif',
                description: '下半身基础动作，锻炼股四头肌、臀大肌和核心肌群。',
                sets: '3组',
                reps: '12-15次',
                rest: '60',
                targetMuscle: '腿部'
              },
              {
                id: 'plank',
                name: '平板支撑',
                level: '初级',
                equipment: '徒手',
                image: '/images/plank.gif',
                description: '强化核心肌群，提高身体稳定性。',
                sets: '3组',
                reps: '30秒',
                rest: '45',
                targetMuscle: '核心'
              }
            ]
          },
          2: {
            id: 2,
            name: '上下身分化训练',
            type: '中级',
            level: '中级',
            duration: 60,
            description: '针对上半身和下半身分别训练的计划，让肌肉有足够的恢复时间，提高训练效果。',
            overview: '这个训练计划采用上下身分化的训练模式，分别在不同的训练日锻炼上半身和下半身，让肌肉有更充分的时间恢复和生长。相比全身训练，可以在每个肌群上投入更多的训练量。',
            targetAudience: '有3-6个月以上训练经验的健身者，希望进一步提高肌肉量和力量的人群。',
            frequency: '每周4-5次，上半身和下半身训练交替进行。',
            exercises: [
              {
                id: 'bench-press',
                name: '平板卧推',
                level: '中级',
                equipment: '杠铃',
                image: '/images/bench-press.gif',
                description: '基础的胸肌训练动作，也锻炼三角肌前束和肱三头肌。',
                sets: '4组',
                reps: '8-10次',
                rest: '90',
                targetMuscle: '胸肌'
              },
              {
                id: 'pull-up',
                name: '引体向上',
                level: '中级到高级',
                equipment: '单杠',
                image: '/images/pull-up.gif',
                description: '训练背部的最佳动作之一，着重锻炼背阔肌。',
                sets: '4组',
                reps: '6-8次',
                rest: '90',
                targetMuscle: '背部'
              },
              {
                id: 'squat',
                name: '深蹲',
                level: '中级',
                equipment: '杠铃',
                image: '/images/squat.gif',
                description: '下半身训练的基石，全面发展腿部肌群。',
                sets: '4组',
                reps: '8-10次',
                rest: '120',
                targetMuscle: '腿部'
              }
            ]
          },
          3: {
            id: 3,
            name: '增肌计划',
            type: '增肌',
            level: '中高级',
            duration: 75,
            description: '专注于肌肉生长的训练计划，包含中等重量、高容量的复合动作，促进肌肥大。',
            overview: '这是一个专为增加肌肉体积设计的高强度训练计划，以中等重量、高训练容量和较短休息时间为特点，创造最佳的肌肉生长环境。计划中包含复合动作和针对性训练，全面刺激肌纤维生长。',
            targetAudience: '有至少1年训练经验的中高级健身者，希望增加肌肉量的人群。',
            frequency: '每周5-6次，采用分化训练模式，每个肌群每周训练2次。',
            exercises: [
              {
                id: 'deadlift',
                name: '硬拉',
                level: '中高级',
                equipment: '杠铃',
                image: '/images/deadlift.gif',
                description: '全身性动作，主要锻炼背部、臀部和腿后侧肌群。',
                sets: '5组',
                reps: '5-8次',
                rest: '120',
                targetMuscle: '背部/腿部'
              },
              {
                id: 'military-press',
                name: '军械推举',
                level: '中高级',
                equipment: '杠铃',
                image: '/images/military-press.gif',
                description: '经典肩部训练动作，全面发展三角肌三个头部。',
                sets: '4组',
                reps: '8-10次',
                rest: '90',
                targetMuscle: '肩部'
              },
              {
                id: 'barbell-row',
                name: '杠铃划船',
                level: '中级',
                equipment: '杠铃',
                image: '/images/barbell-row.gif',
                description: '增强背部厚度和力量的基础动作。',
                sets: '4组',
                reps: '8-10次',
                rest: '90',
                targetMuscle: '背部'
              }
            ]
          }
        };
        
        this.plan = plansData[planId];
      }, 500);
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
</style> 