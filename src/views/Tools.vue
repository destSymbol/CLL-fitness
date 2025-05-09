<template>
  <div>
    <!-- 顶部APP栏 -->
    <v-app-bar color="primary" density="comfortable" elevation="2">
      <v-app-bar-title class="text-white font-weight-bold">
        健身工具
      </v-app-bar-title>
    </v-app-bar>

    <v-container class="pa-0">
      <!-- 页面介绍 -->
      <v-sheet color="primary" class="pa-4 mb-4" rounded="bottom">
        <div class="text-center pb-2">
          <p class="text-white text-body-2">帮助你更科学、高效地健身训练</p>
        </div>
      </v-sheet>

      <!-- 计时器工具 -->
      <v-card class="mb-4 mx-3 rounded-lg" elevation="2">
        <v-card-title class="py-3 px-4 d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-timer</v-icon>
          <span class="text-subtitle-1 font-weight-bold">训练计时器</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="py-4">
          <div class="text-center mb-5">
            <span class="text-h3 font-weight-bold">{{ formatTime(timer) }}</span>
            <div class="d-flex justify-center mt-3 flex-wrap gap-2">
              <v-btn 
                color="primary" 
                size="small" 
                :disabled="isRunning"
                @click="startTimer"
              >
                开始
              </v-btn>
              <v-btn 
                color="warning" 
                size="small"
                :disabled="!isRunning"
                @click="pauseTimer"
              >
                暂停
              </v-btn>
              <v-btn 
                color="error" 
                size="small"
                @click="resetTimer"
              >
                重置
              </v-btn>
            </div>
          </div>
          
          <v-row dense>
            <v-col cols="4">
              <v-text-field
                v-model="restTime"
                label="休息时间 (秒)"
                type="number"
                min="5"
                max="300"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="workTime"
                label="锻炼时间 (秒)"
                type="number"
                min="10"
                max="300"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="sets"
                label="组数"
                type="number"
                min="1"
                max="20"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-alert
            type="info"
            variant="tonal"
            density="compact"
            class="mt-3"
          >
            <ul class="text-body-2 ps-3">
              <li>设置休息时间和锻炼时间，开始间歇训练</li>
              <li>适合HIIT、塔布塔训练方式</li>
            </ul>
          </v-alert>
        </v-card-text>
      </v-card>

      <!-- 1RM计算器 -->
      <v-card class="mb-4 mx-3 rounded-lg" elevation="2">
        <v-card-title class="py-3 px-4 d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-weight</v-icon>
          <span class="text-subtitle-1 font-weight-bold">1RM计算器</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="py-4">
          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model="weight"
                label="重量 (kg)"
                type="number"
                min="1"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="reps"
                label="次数"
                type="number"
                min="1"
                max="12"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-btn 
            block 
            color="primary" 
            class="mt-2 mb-4"
            @click="calculate1RM"
          >
            计算1RM
          </v-btn>
          
          <v-sheet 
            v-if="showResults" 
            color="primary" 
            class="pa-3 rounded-lg text-white mb-3"
          >
            <div class="d-flex justify-space-around">
              <div class="text-center">
                <div class="text-body-2">Epley公式</div>
                <div class="text-h5 font-weight-bold">{{ results.epley }}kg</div>
              </div>
              <v-divider vertical class="mx-3" color="white"></v-divider>
              <div class="text-center">
                <div class="text-body-2">Brzycki公式</div>
                <div class="text-h5 font-weight-bold">{{ results.brzycki }}kg</div>
              </div>
            </div>
          </v-sheet>
          
          <v-alert
            type="info"
            variant="tonal"
            density="compact"
          >
            <p class="text-body-2">
              一次最大重量(1RM)是指你能完成一次的最大重量。用于衡量力量指标，通常建议使用70-85%的1RM进行力量训练。
            </p>
          </v-alert>
        </v-card-text>
      </v-card>
      
      <!-- 卡路里计算器 -->
      <v-card class="mb-4 mx-3 rounded-lg" elevation="2">
        <v-card-title class="py-3 px-4 d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-fire</v-icon>
          <span class="text-subtitle-1 font-weight-bold">卡路里计算器</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="py-4">
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="bodyWeight"
                label="体重 (kg)"
                type="number"
                min="30"
                max="200"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="exerciseType"
                label="训练类型"
                :items="[
                  { title: '轻度训练 (拉伸, 瑜伽)', value: '1.5' },
                  { title: '中度训练 (中等强度举重)', value: '3' },
                  { title: '高强度训练 (HIIT, 交叉训练)', value: '6' },
                  { title: '极高强度训练 (冲刺, 重举)', value: '8' }
                ]"
                item-title="title"
                item-value="value"
                density="compact"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="duration"
                label="时长 (分钟)"
                type="number"
                min="10"
                max="180"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-btn 
            block 
            color="primary" 
            class="mt-2 mb-4"
            @click="calculateCalories"
          >
            计算消耗卡路里
          </v-btn>
          
          <v-sheet 
            v-if="calorieResult > 0" 
            color="success" 
            class="pa-3 rounded-lg text-white text-center"
          >
            <div class="text-body-2 mb-1">预计消耗热量</div>
            <div class="text-h4 font-weight-bold">{{ calorieResult }} 卡路里</div>
          </v-sheet>
        </v-card-text>
      </v-card>

      <!-- 身体数据追踪器 -->
      <v-card class="mb-6 mx-3 rounded-lg" elevation="2">
        <v-card-title class="py-3 px-4 d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-chart-line</v-icon>
          <span class="text-subtitle-1 font-weight-bold">身体数据追踪</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="py-4">
          <!-- 数据输入表单 -->
          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model="bodyData.weight"
                label="体重 (kg)"
                type="number"
                min="30"
                max="200"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="bodyData.bodyFat"
                label="体脂率 (%)"
                type="number"
                min="3"
                max="50"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model="bodyData.chest"
                label="胸围 (cm)"
                type="number"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="bodyData.waist"
                label="腰围 (cm)"
                type="number"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model="bodyData.arm"
                label="手臂围 (cm)"
                type="number"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="bodyData.thigh"
                label="大腿围 (cm)"
                type="number"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense>
            <v-col cols="12">
              <v-menu
                v-model="dateMenu"
                :close-on-content-click="false"
                location="bottom"
              >
                <template v-slot:activator="{ props }">
                  <v-text-field
                    v-model="bodyData.date"
                    label="记录日期"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="props"
                    density="compact"
                    variant="outlined"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="bodyData.date"
                  @update:model-value="dateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          
          <!-- 保存和查看按钮 -->
          <div class="d-flex mt-3 gap-2">
            <v-btn 
              color="primary" 
              @click="saveBodyData"
              class="flex-grow-1"
            >
              <v-icon class="mr-1">mdi-content-save</v-icon>
              保存记录
            </v-btn>
            <v-btn 
              color="secondary" 
              variant="outlined"
              @click="showHistoryData = !showHistoryData"
              class="flex-grow-1"
            >
              <v-icon class="mr-1">mdi-history</v-icon>
              {{ showHistoryData ? '隐藏历史' : '查看历史' }}
            </v-btn>
          </div>

          <!-- 历史数据图表 -->
          <v-expand-transition>
            <div v-if="showHistoryData && bodyHistory.length > 0" class="mt-4">
              <v-tabs v-model="activeTab" color="primary" align-tabs="center">
                <v-tab value="weight">体重</v-tab>
                <v-tab value="bodyFat">体脂率</v-tab>
                <v-tab value="measurements">围度</v-tab>
              </v-tabs>
              
              <v-window v-model="activeTab" class="mt-2">
                <v-window-item value="weight">
                  <div class="pa-2">
                    <div class="text-center text-subtitle-1 font-weight-medium">体重趋势 (kg)</div>
                    <div class="chart-container">
                      <div v-for="(record, index) in bodyHistory" :key="index" class="data-point">
                        <div 
                          class="data-bar"
                          :style="{ height: `${getBarHeight(record.weight, 'weight')}%`, backgroundColor: 'rgb(25, 118, 210)' }"
                        ></div>
                        <div class="data-label">{{ record.weight }}</div>
                        <div class="date-label">{{ formatDate(record.date) }}</div>
                      </div>
                    </div>
                  </div>
                </v-window-item>
                
                <v-window-item value="bodyFat">
                  <div class="pa-2">
                    <div class="text-center text-subtitle-1 font-weight-medium">体脂率趋势 (%)</div>
                    <div class="chart-container">
                      <div v-for="(record, index) in bodyHistory" :key="index" class="data-point">
                        <div 
                          class="data-bar"
                          :style="{ height: `${getBarHeight(record.bodyFat, 'bodyFat')}%`, backgroundColor: 'rgb(76, 175, 80)' }"
                        ></div>
                        <div class="data-label">{{ record.bodyFat }}</div>
                        <div class="date-label">{{ formatDate(record.date) }}</div>
                      </div>
                    </div>
                  </div>
                </v-window-item>
                
                <v-window-item value="measurements">
                  <div class="pa-2">
                    <div class="text-center text-subtitle-1 font-weight-medium">围度趋势 (cm)</div>
                    <div class="chart-container">
                      <div v-for="(record, index) in bodyHistory" :key="index" class="data-point multi-bar">
                        <div class="multi-bar-container">
                          <div 
                            class="data-bar"
                            :style="{ height: `${getBarHeight(record.chest, 'chest')}%`, backgroundColor: 'rgb(244, 67, 54)' }"
                            title="胸围"
                          ></div>
                          <div 
                            class="data-bar"
                            :style="{ height: `${getBarHeight(record.waist, 'waist')}%`, backgroundColor: 'rgb(33, 150, 243)' }"
                            title="腰围"
                          ></div>
                          <div 
                            class="data-bar"
                            :style="{ height: `${getBarHeight(record.arm, 'arm')}%`, backgroundColor: 'rgb(255, 193, 7)' }"
                            title="手臂围"
                          ></div>
                          <div 
                            class="data-bar"
                            :style="{ height: `${getBarHeight(record.thigh, 'thigh')}%`, backgroundColor: 'rgb(156, 39, 176)' }"
                            title="大腿围"
                          ></div>
                        </div>
                        <div class="date-label">{{ formatDate(record.date) }}</div>
                      </div>
                    </div>
                    <div class="d-flex justify-center flex-wrap gap-2 mt-2">
                      <v-chip size="small" color="error" variant="flat">胸围</v-chip>
                      <v-chip size="small" color="primary" variant="flat">腰围</v-chip>
                      <v-chip size="small" color="warning" variant="flat">手臂围</v-chip>
                      <v-chip size="small" color="purple" variant="flat">大腿围</v-chip>
                    </div>
                  </div>
                </v-window-item>
              </v-window>
            </div>
          </v-expand-transition>

          <!-- 没有历史数据的提示 -->
          <div v-if="showHistoryData && bodyHistory.length === 0" class="mt-4 text-center">
            <v-icon size="large" color="grey-lighten-1">mdi-chart-timeline-variant</v-icon>
            <p class="text-medium-emphasis mt-2">暂无历史数据记录</p>
          </div>
          
          <v-alert
            type="info"
            variant="tonal"
            density="compact"
            class="mt-4"
          >
            <p class="text-body-2">
              定期追踪身体数据可以帮助你了解训练效果，及时调整训练计划和饮食策略。建议每周记录一次数据。
            </p>
          </v-alert>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 计时器数据
      timer: 0,
      restTime: 60,
      workTime: 45,
      sets: 3,
      currentSet: 1,
      isResting: false,
      isRunning: false,
      timerInterval: null,
      
      // 1RM计算器数据
      weight: 80,
      reps: 5,
      showResults: false,
      results: {
        epley: 0,
        brzycki: 0
      },
      
      // 卡路里计算器数据
      bodyWeight: 70,
      exerciseType: '3',
      duration: 60,
      calorieResult: 0,

      // 身体数据追踪数据
      bodyData: {
        weight: 70,
        bodyFat: 15,
        chest: 95,
        waist: 80,
        arm: 35,
        thigh: 55,
        date: new Date().toISOString().substr(0, 10)
      },
      bodyHistory: [],
      dateMenu: false,
      showHistoryData: false,
      activeTab: 'weight',
    }
  },
  methods: {
    // 计时器方法
    startTimer() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.timerInterval = setInterval(() => {
          if (this.timer > 0) {
            this.timer--;
          } else {
            // 时间到
            this.switchPhase();
          }
        }, 1000);
      }
    },
    pauseTimer() {
      clearInterval(this.timerInterval);
      this.isRunning = false;
    },
    resetTimer() {
      this.pauseTimer();
      this.timer = this.isResting ? this.restTime : this.workTime;
      this.currentSet = 1;
      this.isResting = false;
    },
    switchPhase() {
      if (this.isResting) {
        // 休息时间结束，开始锻炼
        this.isResting = false;
        this.timer = this.workTime;
      } else {
        // 锻炼时间结束，开始休息
        this.currentSet++;
        if (this.currentSet > this.sets) {
          // 所有组数完成
          this.pauseTimer();
          this.currentSet = 1;
          alert('训练完成！');
          return;
        }
        this.isResting = true;
        this.timer = this.restTime;
      }
    },
    formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },
    
    // 1RM计算器方法
    calculate1RM() {
      // Epley公式: 1RM = weight * (1 + reps/30)
      this.results.epley = Math.round(this.weight * (1 + this.reps / 30));
      
      // Brzycki公式: 1RM = weight / (1.0278 - 0.0278 * reps)
      this.results.brzycki = Math.round(this.weight / (1.0278 - 0.0278 * this.reps));
      
      this.showResults = true;
    },
    
    // 卡路里计算器方法
    calculateCalories() {
      // 卡路里估算：体重(kg) * MET值 * 时长(小时)
      // MET值根据运动类型有所不同
      const met = parseFloat(this.exerciseType);
      const hours = this.duration / 60;
      
      this.calorieResult = Math.round(this.bodyWeight * met * hours);
    },

    // 身体数据追踪方法
    saveBodyData() {
      // 克隆当前数据
      const newRecord = JSON.parse(JSON.stringify(this.bodyData));
      
      // 添加到历史记录中
      this.bodyHistory.push(newRecord);
      
      // 按日期排序
      this.bodyHistory.sort((a, b) => new Date(a.date) - new Date(b.date));
      
      // 保存到localStorage
      localStorage.setItem('bodyTrackingData', JSON.stringify(this.bodyHistory));
      
      // 显示成功消息
      alert('数据记录成功！');
      
      // 自动切换到历史视图
      this.showHistoryData = true;
    },
    
    // 获取图表柱子高度
    getBarHeight(value, dataType) {
      if (!this.bodyHistory.length) return 0;
      
      const values = this.bodyHistory.map(record => Number(record[dataType])).filter(v => !isNaN(v) && v > 0);
      if (!values.length) return 0;
      
      const min = Math.min(...values) * 0.9; // 稍微降低最小值，让最小的数据也有高度
      const max = Math.max(...values) * 1.1; // 稍微提高最大值，避免最高的数据顶到头
      
      const percentage = ((value - min) / (max - min)) * 100;
      return Math.max(5, Math.min(100, percentage)); // 确保高度在5%到100%之间
    },
    
    // 格式化日期
    formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
  },
  created() {
    this.timer = this.workTime;
    
    // 从localStorage加载数据
    const savedData = localStorage.getItem('bodyTrackingData');
    if (savedData) {
      try {
        this.bodyHistory = JSON.parse(savedData);
      } catch (e) {
        console.error('Error loading saved body data:', e);
        this.bodyHistory = [];
      }
    }
  },
  beforeUnmount() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}
</script>

<style scoped>
/* 防止移动端点击闪烁 */
* {
  -webkit-tap-highlight-color: transparent;
}

/* 数据图表样式 */
.chart-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 180px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.data-point {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  max-width: 60px;
}

.data-bar {
  width: 20px;
  background-color: #1976D2;
  border-radius: 4px 4px 0 0;
  transition: height 0.5s ease;
  min-height: 5px;
}

.data-label {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

.date-label {
  font-size: 10px;
  color: #999;
  margin-top: 2px;
}

.multi-bar {
  width: 25%;
}

.multi-bar-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.multi-bar .data-bar {
  width: 8px;
  margin: 0 1px;
}
</style> 