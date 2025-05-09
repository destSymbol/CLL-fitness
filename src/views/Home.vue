<template>
  <div>
    <!-- 顶部APP栏 -->
    <v-app-bar color="primary" density="comfortable" elevation="2">
      <v-app-bar-title class="text-white font-weight-bold">
        男士健身助手
      </v-app-bar-title>
    </v-app-bar>

    <!-- 主页内容 -->
    <v-container class="pa-0">
      <!-- 顶部轮播图 -->
      <v-carousel
        height="220"
        hide-delimiters
        show-arrows="hover"
        cycle
        interval="5000"
      >
        <v-carousel-item
          src="/images/fitness-hero.gif"
          cover
        >
          <div class="d-flex flex-column fill-height justify-center align-center bg-black bg-opacity-30">
            <h2 class="text-white text-h5 font-weight-bold mb-2">男士健身助手</h2>
            <p class="text-white text-subtitle-2 text-center px-4">专为男性设计的健身训练指南</p>
            <v-btn
              color="primary"
              class="mt-3"
              to="/muscle/chest"
              variant="elevated"
            >
              开始训练
            </v-btn>
          </div>
        </v-carousel-item>
      </v-carousel>

      <!-- 快捷入口卡片组 -->
      <v-row class="ma-0 pa-2">
        <v-col cols="3" class="pa-2">
          <v-card class="rounded-lg" to="/muscle/chest" variant="flat" height="110">
            <v-card-text class="text-center pa-2 d-flex flex-column align-center justify-center fill-height">
              <v-icon size="x-large" color="primary" class="mb-1">mdi-arm-flex</v-icon>
              <span class="text-body-2 font-weight-medium">肌肉训练</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3" class="pa-2">
          <v-card class="rounded-lg" to="/workout-plans" variant="flat" height="110">
            <v-card-text class="text-center pa-2 d-flex flex-column align-center justify-center fill-height">
              <v-icon size="x-large" color="primary" class="mb-1">mdi-clipboard-list</v-icon>
              <span class="text-body-2 font-weight-medium">训练计划</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3" class="pa-2">
          <v-card class="rounded-lg" to="/tools" variant="flat" height="110">
            <v-card-text class="text-center pa-2 d-flex flex-column align-center justify-center fill-height">
              <v-icon size="x-large" color="primary" class="mb-1">mdi-tools</v-icon>
              <span class="text-body-2 font-weight-medium">健身工具</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3" class="pa-2">
          <v-card class="rounded-lg" to="/faq" variant="flat" height="110">
            <v-card-text class="text-center pa-2 d-flex flex-column align-center justify-center fill-height">
              <v-icon size="x-large" color="primary" class="mb-1">mdi-help-circle</v-icon>
              <span class="text-body-2 font-weight-medium">常见问题</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- 肌群训练部分 -->
      <v-sheet class="pa-3 mb-3">
        <div class="d-flex justify-space-between align-center mb-2">
          <h2 class="text-subtitle-1 font-weight-bold">肌群训练</h2>
          <v-btn
            variant="text"
            size="small"
            to="/workout-plans"
            color="primary"
            class="text-capitalize"
          >
            查看全部
            <v-icon size="small">mdi-chevron-right</v-icon>
          </v-btn>
        </div>

        <v-row class="ma-0" dense>
          <v-col 
            v-for="muscle in muscles.slice(0, 4)" 
            :key="muscle.id" 
            cols="6" 
            sm="4"
            class="pa-2"
          >
            <v-card
              :to="`/muscle/${muscle.id}`"
              class="rounded-lg"
              elevation="2"
              ripple
            >
              <v-img
                :src="muscle.image"
                height="120"
                cover
                class="rounded-t-lg"
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </div>
                </template>
              </v-img>
              <v-card-title class="text-subtitle-2 font-weight-medium py-2 px-3">
                {{ muscle.name }}
                <v-chip
                  size="x-small"
                  color="primary"
                  variant="flat"
                  label
                  class="ml-1"
                >
                  {{ muscle.exerciseCount }}
                </v-chip>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>

      <!-- 热门训练计划 -->
      <v-sheet class="pa-3 mb-3">
        <div class="d-flex justify-space-between align-center mb-2">
          <h2 class="text-subtitle-1 font-weight-bold">热门训练计划</h2>
          <v-btn
            variant="text"
            size="small"
            to="/workout-plans"
            color="primary"
            class="text-capitalize"
          >
            查看全部
            <v-icon size="small">mdi-chevron-right</v-icon>
          </v-btn>
        </div>

        <v-row class="ma-0">
          <v-col
            v-for="plan in featuredPlans"
            :key="plan.id"
            cols="12"
            class="pa-2"
          >
            <v-card
              :to="`/workout-plan/${plan.id}`"
              class="rounded-lg"
              elevation="2"
              ripple
            >
              <v-card-item>
                <template v-slot:prepend>
                  <v-avatar color="primary" variant="flat" size="42">
                    <v-icon color="white">mdi-dumbbell</v-icon>
                  </v-avatar>
                </template>
                <v-card-title>{{ plan.name }}</v-card-title>
                <v-card-subtitle>
                  <v-chip size="x-small" color="primary" variant="outlined" class="mr-1">{{ plan.type }}</v-chip>
                  <v-chip size="x-small" color="grey" variant="outlined">{{ plan.level }}</v-chip>
                </v-card-subtitle>
              </v-card-item>

              <v-card-text class="pb-0 pt-0">
                <p class="text-body-2 text-medium-emphasis">{{ plan.description }}</p>
              </v-card-text>

              <v-card-actions class="pa-3 pt-0">
                <v-spacer></v-spacer>
                <div class="d-flex align-center mr-3">
                  <v-icon size="small" color="primary" class="mr-1">mdi-clock-outline</v-icon>
                  <span class="text-caption font-weight-medium">{{ plan.duration }}分钟</span>
                </div>
                <div class="d-flex align-center">
                  <v-icon size="small" color="primary" class="mr-1">mdi-lightning-bolt</v-icon>
                  <span class="text-caption font-weight-medium">{{ plan.exerciseCount }}个动作</span>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>

      <!-- 健身工具 -->
      <v-sheet class="pa-3 mb-6">
        <div class="d-flex justify-space-between align-center mb-2">
          <h2 class="text-subtitle-1 font-weight-bold">健身工具</h2>
          <v-btn
            variant="text"
            size="small"
            to="/tools"
            color="primary"
            class="text-capitalize"
          >
            查看全部
            <v-icon size="small">mdi-chevron-right</v-icon>
          </v-btn>
        </div>

        <v-row class="ma-0" dense>
          <v-col
            v-for="tool in tools"
            :key="tool.id"
            cols="6"
            class="pa-2"
          >
            <v-card
              class="rounded-lg"
              height="100"
              elevation="1"
              ripple
            >
              <v-card-text class="d-flex flex-column align-center justify-center fill-height pa-2 text-center">
                <span class="text-h6 mb-1">{{ tool.icon }}</span>
                <span class="text-body-2 font-weight-medium">{{ tool.name }}</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      muscles: [
        {
          id: 'chest',
          name: '胸肌',
          image: '/images/chest.gif',
          exerciseCount: 12,
          description: '胸大肌是上半身前侧的大型肌肉群，负责手臂向前和交叉移动。'
        },
        {
          id: 'back',
          name: '背部',
          image: '/images/back.gif',
          exerciseCount: 15,
          description: '背部肌群包括斜方肌、背阔肌等，负责上肢向后运动和保持脊柱稳定。'
        },
        {
          id: 'shoulders',
          name: '肩部',
          image: '/images/shoulders.gif',
          exerciseCount: 10,
          description: '三角肌覆盖肩关节，分为前、中、后三束，负责手臂抬高和外展动作。'
        },
        {
          id: 'arms',
          name: '手臂',
          image: '/images/arms.gif',
          exerciseCount: 14,
          description: '包括肱二头肌和肱三头肌，分别负责手臂弯曲和伸直。'
        },
        {
          id: 'legs',
          name: '腿部',
          image: '/images/legs.gif',
          exerciseCount: 16,
          description: '腿部肌群包括股四头肌、腘绳肌和小腿三头肌等大型肌肉。'
        },
        {
          id: 'abs',
          name: '腹肌',
          image: '/images/abs.gif',
          exerciseCount: 12,
          description: '腹直肌、腹外斜肌等组成腹肌群，负责躯干弯曲和保持核心稳定。'
        },
        {
          id: 'core',
          name: '核心',
          image: '/images/core.gif',
          exerciseCount: 9,
          description: '核心肌群包括腹肌、竖脊肌和臀肌等，维持身体平衡和稳定。'
        },
        {
          id: 'glutes',
          name: '臀部',
          image: '/images/glutes.gif',
          exerciseCount: 8,
          description: '臀大肌、臀中肌和臀小肌组成臀部肌群，是人体最大的肌肉群之一。'
        }
      ],
      featuredPlans: [
        {
          id: 1,
          name: '初学者全身训练',
          type: '初学者',
          level: '入门级',
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
          level: '中高级',
          duration: 75,
          exerciseCount: 15,
          description: '专注于肌肉生长的训练计划，包含中等重量、高容量的复合动作，促进肌肥大。'
        }
      ],
      tools: [
        {
          id: 1,
          name: '计时器',
          icon: '⏱️',
          description: '训练间隔计时工具，帮助你控制组间休息时间和HIIT训练。'
        },
        {
          id: 2,
          name: '重量记录',
          icon: '📊',
          description: '记录你的训练重量和次数，追踪进步。'
        },
        {
          id: 3,
          name: '肌群指南',
          icon: '🔍',
          description: '详细的肌肉解剖指南，了解每个动作锻炼的肌肉。'
        },
        {
          id: 4,
          name: '1RM计算器',
          icon: '🧮',
          description: '计算你的一次最大重量(1RM)，帮助制定训练计划。'
        }
      ]
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