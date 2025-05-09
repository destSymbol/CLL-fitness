<template>
  <div class="faq-container">
    <!-- 顶部APP栏 -->
    <v-app-bar color="white" flat density="comfortable" elevation="0" class="app-bar">
      <v-app-bar-title class="text-primary font-weight-bold">
        <span class="google-style">常见问题</span>
      </v-app-bar-title>

      <!-- 右侧动作按钮 -->
      <template v-slot:append>
        <v-btn color="primary" variant="text" rounded="pill" @click="toggleTrainingPlans" class="mr-1">
          <v-icon class="mr-1">mdi-dumbbell</v-icon>
          训练计划
        </v-btn>
        <v-btn icon @click="toggleDarkMode" class="elevation-0">
          <v-icon>{{ isDarkMode ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <!-- 热门问题轮播 -->
    <div class="hot-questions-carousel">
      <v-carousel hide-delimiters height="56" show-arrows="hover" :continuous="true" :cycle="true" interval="5000">
        <v-carousel-item v-for="(hotQuestion, i) in hotQuestions" :key="i" @click="scrollToQuestion(hotQuestion.id)">
          <div class="hot-question-item d-flex align-center justify-center">
            <v-icon color="white" class="mr-2">mdi-fire</v-icon>
            <span>{{ hotQuestion.text }}</span>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- 固定的搜索区域 -->
    <div class="search-area-fixed">
      <!-- 搜索框 -->
      <div class="px-4 pt-4 pb-2">
        <v-text-field 
          v-model="searchQuery" 
          placeholder="搜索常见问题..." 
          variant="outlined" 
          density="comfortable" 
          hide-details
          append-inner-icon="mdi-magnify" 
          bg-color="grey-lighten-5" 
          class="rounded-pill elevation-0 search-input" 
          clearable
          @click:append-inner="performSearch" 
          @keyup.enter="performSearch"
        ></v-text-field>
      </div>

      <!-- 分类选择 -->
      <div class="px-4 py-2">
        <v-slide-group class="my-2" show-arrows>
          <v-slide-group-item v-for="category in categories" :key="category.id" v-slot="{ isSelected, toggle }">
            <v-chip
              class="ma-1 category-chip"
              :color="isSelected || category.id === currentCategory.id ? getCategoryColor(category.id) : undefined"
              :variant="isSelected || category.id === currentCategory.id ? 'elevated' : 'outlined'"
              @click="switchCategory(category)"
              elevation="0"
            >
              <template v-slot:prepend>
                <v-icon :color="isSelected || category.id === currentCategory.id ? 'white' : getCategoryColor(category.id)">
                  {{ category.icon }}
                </v-icon>
              </template>
              {{ category.name }}
              <template v-slot:append v-if="category.questions">
                <v-chip size="x-small" variant="flat" color="grey-lighten-3" class="ml-1">{{ category.questions.length }}</v-chip>
              </template>
            </v-chip>
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>

    <!-- 训练计划显示区域 -->
    <v-expand-transition>
      <div v-if="showTrainingPlans" class="training-plans-section pa-4">
        <v-card>
          <v-card-title class="text-h5 font-weight-bold">
            <v-icon large color="primary" class="mr-2">mdi-calendar-clock</v-icon>
            训练计划
          </v-card-title>
          
          <v-tabs v-model="activeTab" color="primary" align-tabs="center">
            <v-tab value="trainingPlans">训练计划</v-tab>
            <v-tab value="exercises">动作库</v-tab>
            <v-tab value="tools">健身工具</v-tab>
          </v-tabs>
          
          <v-window v-model="activeTab">
            <!-- 训练计划标签页 -->
            <v-window-item value="trainingPlans">
              <v-container fluid>
                <v-row>
                  <v-col v-for="plan in trainingPlans" :key="plan.id" cols="12" md="4">
                    <v-card variant="elevated" class="h-100 plan-card" rounded="lg">
                      <v-card-item>
                        <template v-slot:prepend>
                          <v-avatar rounded="lg" class="gradient-bg" :color="getPlanColor(plan.id)">
                            <v-icon color="white">{{ getPlanIcon(plan.id) }}</v-icon>
                          </v-avatar>
                        </template>
                        <v-card-title class="text-h5 font-weight-bold pt-2">{{ plan.name }}</v-card-title>
                        <v-card-subtitle class="py-1">
                          <v-chip size="small" label color="primary" variant="flat" class="mr-2">{{ plan.duration }}</v-chip>
                          <v-chip size="small" label variant="outlined">{{ plan.frequency }}</v-chip>
                        </v-card-subtitle>
                      </v-card-item>
                      
                      <v-card-text>
                        <p class="text-body-1">{{ plan.description }}</p>
                        
                        <v-expansion-panels class="mt-4" variant="accordion">
                          <v-expansion-panel density="compact" rounded="lg" elevation="0" 
                                           bg-color="grey-lighten-4">
                            <v-expansion-panel-title class="font-weight-medium">
                              <v-icon color="primary" class="mr-2">mdi-calendar-text</v-icon>
                              查看训练安排
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                              <div v-for="day in plan.schedule" :key="day.day" class="mb-3 py-2">
                                <div class="d-flex align-center">
                                  <v-badge color="primary" dot class="mr-2"></v-badge>
                                  <div class="text-subtitle-1 font-weight-bold">{{ day.day }}: {{ day.focus }}</div>
                                </div>
                                <v-divider class="my-2"></v-divider>
                                <v-list density="compact" bg-color="transparent" class="exercise-list" v-if="Array.isArray(day.exercises)">
                                  <v-list-item v-for="(exercise, i) in day.exercises" :key="i" 
                                             rounded="lg" class="mb-1 exercise-item" hover>
                                    <template v-slot:prepend>
                                      <v-avatar size="32" :color="getExerciseColor(exercise.name)" class="mr-2">
                                        <v-icon size="small" color="white">{{ getExerciseIcon(exercise.name) }}</v-icon>
                                      </v-avatar>
                                    </template>
                                    <v-list-item-title class="d-flex justify-space-between align-center">
                                      <span>{{ exercise.name }}</span>
                                      <span v-if="exercise.sets" class="text-caption text-grey">
                                        {{ exercise.sets }}组 × {{ exercise.reps }}
                                      </span>
                                    </v-list-item-title>
                                    
                                    <template v-slot:append>
                                      <v-dialog v-model="exercise.showGif" max-width="400">
                                        <template v-slot:activator="{ props }">
                                          <v-btn icon variant="text" color="primary" v-bind="props">
                                            <v-icon>mdi-play-circle</v-icon>
                                          </v-btn>
                                        </template>
                                        <v-card>
                                          <v-card-title class="text-subtitle-1 font-weight-bold">
                                            {{ exercise.name }} 动作示范
                                          </v-card-title>
                                          <v-card-text class="text-center pa-4">
                                            <template v-if="exercise.gifUrl">
                                              <v-img
                                                :src="exercise.gifUrl || findGifForExercise(exercise.name)"
                                                :alt="exercise.name"
                                                class="gif-animation rounded-lg mx-auto"
                                                max-height="240"
                                                contain
                                                @error="(e) => handleExerciseGifError(e, exercise)"
                                              >
                                                <template v-slot:placeholder>
                                                  <v-row class="fill-height ma-0" align="center" justify="center">
                                                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                                                  </v-row>
                                                </template>
                                                <template v-slot:error>
                                                  <v-sheet color="grey-lighten-3" class="pa-4 rounded-lg">
                                                    <div class="text-center">
                                                      <v-icon size="large" color="grey">mdi-image-off</v-icon>
                                                      <div class="text-caption mt-2">无法加载动作示范</div>
                                                    </div>
                                                  </v-sheet>
                                                </template>
                                              </v-img>
                                              <div class="text-caption text-grey mt-2">{{ exercise.name }} 标准动作</div>
                                            </template>
                                            <template v-else>
                                              <v-alert
                                                type="info"
                                                variant="tonal"
                                                class="ma-2 text-center"
                                                color="primary"
                                                border="start"
                                                icon="mdi-information"
                                              >
                                                <span class="text-body-2 font-weight-medium">
                                                  暂无动作示范图，请参考文字说明
                                                </span>
                                              </v-alert>
                                            </template>
                                          </v-card-text>
                                          <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" variant="text" @click="exercise.showGif = false">
                                              关闭
                                            </v-btn>
                                          </v-card-actions>
                                        </v-card>
                                      </v-dialog>
                                    </template>
                                  </v-list-item>
                                </v-list>
                                <div v-else class="ml-8 text-body-2">{{ day.exercises }}</div>
                              </div>
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-card-text>
                      
                      <v-divider></v-divider>
                      
                      <v-card-actions>
                        <v-btn variant="text" prepend-icon="mdi-content-save" class="text-none">保存计划</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn variant="tonal" color="primary" prepend-icon="mdi-share-variant" class="text-none">分享</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>
            
            <!-- 动作库标签页 -->
            <v-window-item value="exercises">
              <v-container fluid>
                <v-row>
                  <v-col v-for="part in exerciseLibrary" :key="part.bodyPart" cols="12">
                    <v-card variant="outlined" class="mb-6" rounded="lg">
                      <v-card-item>
                        <template v-slot:prepend>
                          <v-avatar rounded="lg" class="gradient-bg" :color="getBodyPartColor(part.bodyPart)">
                            <v-icon color="white">{{ getBodyPartIcon(part.bodyPart) }}</v-icon>
                          </v-avatar>
                        </template>
                        <v-card-title class="text-h5 font-weight-bold">
                          {{ part.bodyPart }}训练
                        </v-card-title>
                      </v-card-item>
                      
                      <v-divider></v-divider>
                      
                      <v-card-text class="pa-0">
                        <v-expansion-panels variant="popout">
                          <v-expansion-panel
                            v-for="exercise in part.exercises" 
                            :key="exercise.name"
                            class="mb-2"
                            rounded="lg"
                          >
                            <v-expansion-panel-title class="exercise-title">
                              <div class="d-flex align-center">
                                <v-avatar size="36" color="grey-lighten-3" class="mr-3">
                                  <v-icon color="primary">mdi-arm-flex</v-icon>
                                </v-avatar>
                                <div>
                                  <span class="text-h6">{{ exercise.name }}</span>
                                  <div>
                                    <v-chip size="x-small" color="primary" class="mr-1" variant="flat">{{ exercise.difficulty }}</v-chip>
                                    <v-chip size="x-small" v-for="muscle in exercise.targetMuscles.slice(0,1)" :key="muscle" class="mr-1">
                                      {{ muscle }}
                                    </v-chip>
                                  </div>
                                </div>
                              </div>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                              <v-card flat class="bg-grey-lighten-5 pa-3" rounded="lg">
                                <v-row>
                                  <v-col cols="12" v-if="exercise.gifUrl" class="mb-3">
                                    <div class="d-flex justify-center">
                                      <v-card flat class="elevation-0 bg-transparent gif-card">
                                        <v-img
                                          :src="exercise.gifUrl"
                                          :alt="exercise.name"
                                          class="gif-animation rounded-lg"
                                          max-height="240"
                                          contain
                                          @error="handleGifError"
                                        >
                                          <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                              <v-progress-circular indeterminate color="primary"></v-progress-circular>
                                            </v-row>
                                          </template>
                                          <template v-slot:error>
                                            <v-sheet color="grey-lighten-3" class="pa-4 rounded-lg">
                                              <div class="text-center">
                                                <v-icon size="large" color="grey">mdi-image-off</v-icon>
                                                <div class="text-caption mt-2">无法加载动作示范</div>
                                              </div>
                                            </v-sheet>
                                          </template>
                                        </v-img>
                                        <v-card-text class="text-center pa-2">
                                          <span class="text-caption text-grey">{{ exercise.name }} 动作示范</span>
                                        </v-card-text>
                                      </v-card>
                                    </div>
                                  </v-col>
                                  <v-col cols="12" md="6">
                                    <div class="mb-3">
                                      <div class="text-subtitle-1 font-weight-bold mb-2 d-flex align-center">
                                        <v-icon size="small" color="primary" class="mr-2">mdi-target</v-icon>
                                        目标肌肉
                                      </div>
                                      <div class="d-flex flex-wrap">
                                        <v-chip size="small" v-for="muscle in exercise.targetMuscles" 
                                              :key="muscle" class="ma-1" color="primary" variant="flat">
                                          {{ muscle }}
                                        </v-chip>
                                      </div>
                                    </div>
                                    <div class="mb-3">
                                      <div class="text-subtitle-1 font-weight-bold mb-2 d-flex align-center">
                                        <v-icon size="small" color="grey-darken-1" class="mr-2">mdi-weight</v-icon>
                                        所需器材
                                      </div>
                                      <div class="d-flex flex-wrap">
                                        <v-chip size="small" v-for="eq in exercise.equipment" 
                                              :key="eq" class="ma-1" color="grey-lighten-2" variant="flat">
                                          {{ eq }}
                                        </v-chip>
                                      </div>
                                    </div>
                                  </v-col>
                                  <v-col cols="12" md="6">
                                    <div class="text-subtitle-1 font-weight-bold mb-2 d-flex align-center">
                                      <v-icon size="small" color="green-darken-1" class="mr-2">mdi-clipboard-list</v-icon>
                                      执行步骤
                                    </div>
                                    <v-timeline density="compact" align="start">
                                      <v-timeline-item
                                        v-for="(step, i) in exercise.instructions"
                                        :key="i"
                                        dot-color="primary"
                                        size="small"
                                      >
                                        <div class="text-body-2">{{ step }}</div>
                                      </v-timeline-item>
                                    </v-timeline>
                                  </v-col>
                                  <v-col cols="12">
                                    <div class="text-subtitle-1 font-weight-bold mb-2 d-flex align-center">
                                      <v-icon size="small" color="amber-darken-2" class="mr-2">mdi-lightbulb</v-icon>
                                      训练贴士
                                    </div>
                                    <v-alert
                                      v-for="(tip, i) in exercise.tips"
                                      :key="i"
                                      color="amber-lighten-5"
                                      border="start"
                                      border-color="amber-darken-2"
                                      variant="tonal"
                                      class="mb-2 pa-3"
                                      density="compact"
                                    >
                                      {{ tip }}
                                    </v-alert>
                                  </v-col>
                                </v-row>
                              </v-card>
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>
            
            <!-- 健身工具标签页 -->
            <v-window-item value="tools">
              <v-container fluid>
                <v-row>
                  <v-col v-for="tool in fitnessTools" :key="tool.id" cols="12" sm="6" md="4">
                    <v-card variant="elevated" class="h-100 tool-card" rounded="lg">
                      <div class="tool-header" :class="`bg-${getToolColor(tool.id)}`">
                        <v-icon size="36" color="white">{{ getToolIcon(tool.id) }}</v-icon>
                      </div>
                      <v-card-title class="font-weight-bold text-h6 mt-2">{{ tool.name }}</v-card-title>
                      <v-card-text>
                        <p class="mb-4 text-body-1">{{ tool.description }}</p>
                        <v-sheet v-if="tool.usage" class="mb-3 pa-3" color="grey-lighten-4" rounded="lg">
                          <div class="text-subtitle-2 font-weight-bold mb-1">使用方法</div>
                          <p class="text-body-2">{{ tool.usage }}</p>
                        </v-sheet>
                        <div v-if="tool.features" class="mb-2">
                          <div class="text-subtitle-2 font-weight-bold mb-2">功能特点</div>
                          <v-list bg-color="transparent" class="pa-0">
                            <v-list-item v-for="(feature, i) in tool.features" :key="i" class="px-0 py-1"
                                       density="compact">
                              <template v-slot:prepend>
                                <v-icon color="success" size="small">mdi-check-circle</v-icon>
                              </template>
                              <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </div>
                      </v-card-text>
                      <v-card-actions class="pb-4 px-4">
                        <v-btn color="primary" variant="tonal" block prepend-icon="mdi-open-in-new">使用工具</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>
          </v-window>
        </v-card>
      </div>
    </v-expand-transition>

    <!-- 内容区域 -->
    <v-container class="pa-0 content-container">
      <!-- 添加错误提示 -->
      <v-snackbar
        v-model="gifLoadError"
        timeout="3000"
        color="error"
        location="top"
        class="gif-error-snackbar"
        elevation="4"
      >
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-alert-circle</v-icon>
          <span class="text-white font-weight-medium">动作示范图加载失败，请稍后再试</span>
        </div>
        <template v-slot:actions>
          <v-btn
            color="white"
            variant="text"
            @click="gifLoadError = false"
          >
            关闭
          </v-btn>
        </template>
      </v-snackbar>
        
      <!-- 按分类分组显示 -->
      <div v-if="!searchQuery.trim() && currentCategory.id === 'all' && !isLoading" class="category-groups px-4">
        <v-expansion-panels class="mb-4">
          <v-expansion-panel v-for="category in categoriesWithFaqs" :key="category.id" class="category-panel">
            <v-expansion-panel-title>
              <div class="d-flex align-center">
                <v-avatar size="32" :color="getCategoryColor(category.id)" class="mr-3">
                  <v-icon color="white">{{ category.icon }}</v-icon>
                </v-avatar>
                <div>
                  <div class="text-h6">{{ category.name }}</div>
                  <div class="text-caption">{{ category.count }}个问题</div>
                </div>
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-list>
                <v-list-item v-for="faq in category.questions" :key="faq.id || `${category.id}-${index}`" :id="`faq-${category.id}-${index}`" class="faq-list-item"
                  @click="openFaqDetail(faq)">
                  <template v-slot:prepend>
                    <v-icon size="small" :color="getCategoryColor(category.id)">mdi-help-circle</v-icon>
                  </template>

                  <v-list-item-title>{{ faq.question }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <!-- 搜索结果列表或筛选结果 -->
      <v-sheet v-else class="px-4 py-4 mb-6 faq-content-sheet">
        <div v-if="isLoading" class="text-center py-6">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
          <p class="mt-2">正在加载问题...</p>
        </div>

        <div v-else-if="filteredFaqs.length === 0" class="text-center text-medium-emphasis py-8 empty-state">
          <v-icon size="x-large" color="grey-lighten-2" class="mb-3">mdi-file-search-outline</v-icon>
          <p>未找到相关问题</p>
          <v-btn variant="text" color="primary" class="mt-2" @click="resetFilters">
            重置筛选条件
          </v-btn>
        </div>

        <v-list v-else>
          <v-list-item v-for="(faq, index) in filteredFaqs" :key="faq.id || `${currentCategory.id}-${index}`" :id="`faq-${currentCategory.id}-${index}`" class="faq-list-item mb-2"
            rounded="lg" @click="openFaqDetail(faq)">
            <template v-slot:prepend>
              <v-avatar size="36" :color="getCategoryColor(currentCategory.id)" class="mr-2">
                <v-icon size="small" color="white">{{ currentCategory.icon }}</v-icon>
              </v-avatar>
            </template>
            <v-list-item-title class="text-subtitle-1 font-weight-medium">
              {{ faq.question }}
            </v-list-item-title>
            <template v-slot:append>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-container>

    <!-- 返回顶部按钮 -->
    <v-btn v-show="showBackToTop" class="back-to-top" icon color="primary" elevation="3" @click="scrollToTop">
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>

    <!-- FAQ详情对话框 -->
    <v-dialog v-model="faqDetailDialog" max-width="600" scrollable>
      <v-card v-if="selectedFaq" rounded="lg">
        <v-toolbar :color="getCategoryColor(currentCategory.id)" flat>
          <v-avatar rounded="lg" style="margin-left: 12px;" size="42" class="mr-2" color="white">
            <v-icon :color="getCategoryColor(currentCategory.id)">{{ currentCategory.icon }}</v-icon>
          </v-avatar>
          <v-toolbar-title class="text-white">{{ selectedFaq.question }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="faqDetailDialog = false" color="white">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pa-4">
          <div v-if="selectedFaq.gifUrl" class="gif-container mb-4 text-center">
            <v-img
              :src="selectedFaq.gifUrl"
              :alt="selectedFaq.question"
              class="gif-animation rounded-lg mx-auto"
              max-height="240"
              contain
              @error="handleGifError"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </v-row>
              </template>
              <template v-slot:error>
                <v-sheet color="grey-lighten-3" class="pa-4 rounded-lg">
                  <div class="text-center">
                    <v-icon size="large" color="grey">mdi-image-off</v-icon>
                    <div class="text-caption mt-2">无法加载动作示范</div>
                  </div>
                </v-sheet>
              </template>
            </v-img>
            <div class="text-caption text-grey mt-1">动作示范</div>
          </div>
          <div class="answer-content text-body-1 py-2">
            {{ selectedFaq.answer }}
          </div>
          
          <v-divider class="my-3"></v-divider>
          
          <div class="d-flex justify-space-between align-center mt-4">
            <div class="useful-buttons d-flex align-center">
              <span class="text-caption mr-3">这个回答有帮助吗？</span>
              <v-btn density="comfortable" variant="text" color="primary" icon="mdi-thumb-up" size="small"
                class="mr-1" @click="rateAnswer(selectedFaq.id || `${currentCategory.id}-question`, 'up')"></v-btn>
              <v-btn density="comfortable" variant="text" color="grey" icon="mdi-thumb-down" size="small"
                @click="rateAnswer(selectedFaq.id || `${currentCategory.id}-question`, 'down')"></v-btn>
            </div>
            <div class="action-buttons">
              <v-btn density="comfortable" variant="text" color="primary" icon="mdi-share-variant" size="small"
                class="mr-1" @click="shareQuestion(selectedFaq)"></v-btn>
              <v-btn density="comfortable" variant="text" color="amber-darken-2"
                :icon="isBookmarked(selectedFaq.id || `${currentCategory.id}-question`) ? 'mdi-bookmark' : 'mdi-bookmark-outline'" size="small"
                @click="toggleBookmark(selectedFaq.id || `${currentCategory.id}-question`)"></v-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- 分享对话框 -->
    <v-dialog v-model="shareDialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">分享问题</v-card-title>
        <v-card-text>
          <p class="mb-4">{{ selectedQuestion?.question || '' }}</p>
          <v-text-field v-model="shareLink" label="链接" readonly append-inner-icon="mdi-content-copy"
            @click:append-inner="copyToClipboard"></v-text-field>
          <div class="d-flex justify-center mt-4">
            <v-btn variant="text" color="primary" class="mx-2" prepend-icon="mdi-wechat">微信</v-btn>
            <v-btn variant="text" color="primary" class="mx-2" prepend-icon="mdi-sina-weibo">微博</v-btn>
            <v-btn variant="text" color="primary" class="mx-2" prepend-icon="mdi-qqchat">QQ</v-btn>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="shareDialog = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 提示消息 -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="3000">
      {{ snackbar.text }}
    </v-snackbar>
  </div>
</template>

<script>
// 导入数据
import { data } from '../data/data.js';

export default {
  data() {
    return {
      searchQuery: '',
      currentCategory: 'all',
      selectedCategory: 'all',
      isDarkMode: false,
      showBackToTop: false,
      shareDialog: false,
      faqDetailDialog: false,
      selectedQuestion: null,
      selectedFaq: null,
      shareLink: '',
      snackbar: {
        show: false,
        text: '',
        color: 'success'
      },
      bookmarkedQuestions: [],
      isLoading: false,
      isMobileView: false,
      // 从导入的数据中获取热门问题
      hotQuestions: data.hotQuestions,
      // 从导入的数据中获取分类
      categories: [],
      // 将所有问题整合到一个数组中
      allFaqs: [],
      // 训练计划数据
      trainingPlans: data.trainingPlans || [],
      // 动作库数据
      exerciseLibrary: data.exerciseLibrary || [],
      // 健身工具数据
      fitnessTools: data.fitnessTools || [],
      // 是否显示训练计划模块
      showTrainingPlans: false,
      activeTab: 'trainingPlans',
      // GIF动图相关数据
      gifSearchEndpoint: 'https://api.giphy.com/v1/gifs/search',
      gifApiKey: 'your_giphy_api_key', // 实际使用时需要替换为真实的API密钥
      // 使用data.js中的exerciseGifs数据
      exerciseGifs: data.exerciseGifs || {},
      gifLoadError: false
    }
  },
  computed: {
    filteredFaqs() {
      let result = this.allFaqs;
      
      // 如果当前分类不是"全部"，则筛选属于当前分类的问题
      if (this.currentCategory && this.currentCategory.id !== 'all') {
        result = this.currentCategory.questions || [];
      }
      
      // 如果有搜索关键词，则进一步筛选包含关键词的问题
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase().trim();
        result = result.filter(faq =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
        );
      }
      
      return result;
    },
    categoriesWithFaqs() {
      // 为每个分类添加对应的FAQ
      return this.categories
        .filter(category => category.id !== 'all')
        .map(category => {
          return {
            ...category,
            count: category.questions ? category.questions.length : 0
          };
        });
    }
  },
  watch: {
    // 监听筛选条件变化
    currentCategory() {
      this.loadFaqs();
    },
    searchQuery() {
      this.loadFaqs();
    }
  },
  mounted() {
    // 初始化数据
    this.categories = data.categoriesTree || [];
    
    // 打印分类和问题数量，便于调试
    console.log(`已加载 ${this.categories.length} 个分类`);
    this.categories.forEach(cat => {
      console.log(`${cat.name}: ${cat.questions ? cat.questions.length : 0}个问题`);
    });
    
    // 初始化所有问题数组并增强内容
    this.initAllFaqs();
    
    // 为训练分类的问题添加GIF
    this.enhanceTrainingQuestions();
    
    // 设置初始分类
    this.currentCategory = this.categories.find(c => c.id === "all") || this.categories[0];
    
    // 检查路由参数，如果有categoryId，则切换到对应分类
    if (this.$route.params.categoryId) {
      const targetCategory = this.categories.find(c => c.id === this.$route.params.categoryId);
      if (targetCategory) {
        this.currentCategory = targetCategory;
      }
    }
    
    // 搜索框固定效果初始化
    window.addEventListener('scroll', this.handleScroll);

    // 从本地存储加载书签
    const savedBookmarks = localStorage.getItem('bookmarkedFaqs');
    if (savedBookmarks) {
      try {
        this.bookmarkedQuestions = JSON.parse(savedBookmarks);
      } catch (e) {
        console.error('解析书签数据失败', e);
        this.bookmarkedQuestions = [];
      }
    }

    // 检测是否为移动设备
    this.checkDeviceType();
    window.addEventListener('resize', this.checkDeviceType);

    // 初始加载数据
    this.loadFaqs();

    // 检查URL参数是否有特定问题ID
    this.checkUrlParams();

    // 初始化动作库GIF
    this.initExerciseLibraryWithGifs();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.checkDeviceType);
  },
  methods: {
    // 初始化所有问题数组
    initAllFaqs() {
      // 将categoriesTree中的所有问题整合到allFaqs数组中
      this.allFaqs = [];
      this.categories.forEach(category => {
        if (category.questions && category.questions.length > 0) {
          // 为每个问题添加唯一ID和内部链接
          const questionsWithIds = category.questions.map((q, index) => ({
            ...q,
            id: `${category.id || category.name.toLowerCase()}-${index}`
          }));
          this.allFaqs = [...this.allFaqs, ...questionsWithIds];
        }
      });

      // 打印问题总数，便于调试
      console.log(`总共加载了 ${this.allFaqs.length} 个问题`);
      
      // 如果全部分类下没有问题，则将所有分类的问题合并到全部分类下
      const allCategory = this.categories.find(c => c.name === "全部");
      if (allCategory && (!allCategory.questions || allCategory.questions.length === 0)) {
        allCategory.questions = [...this.allFaqs];
      }
    },
    loadFaqs() {
      this.isLoading = true;

      // 模拟网络请求延迟
      setTimeout(() => {
        this.isLoading = false;
      }, 300);
    },
    filterByCategory(categoryId) {
      this.currentCategory = categoryId;
    },
    performSearch() {
      // 实现搜索时的视觉反馈
      if (this.searchQuery.trim()) {
        this.showSnackbar(`正在搜索"${this.searchQuery}"...`, 'info');
        this.loadFaqs();
      }
    },
    openFaqDetail(faq) {
      if (!faq) return;
      this.selectedFaq = { ...faq }; // 使用复制对象避免修改原始数据
      
      // 检查问题是否与训练动作相关，如果是则查找相关GIF
      if (faq.category === 'training' && !faq.gifUrl) {
        try {
          // 从问题标题中提取可能的动作名称
          const exerciseMatch = faq.question.match(/如何正确进行(.*?)？/);
          if (exerciseMatch && exerciseMatch[1]) {
            const exerciseName = exerciseMatch[1];
            this.selectedFaq.gifUrl = this.findGifForExercise(exerciseName);
          }
          
          // 尝试从问题内容中提取关键词
          if (!this.selectedFaq.gifUrl && faq.question) {
            // 提取问题中可能的训练动作名
            for (const [keyword, exercise] of Object.entries(this.exerciseGifs)) {
              if (faq.question.includes(keyword)) {
                this.selectedFaq.gifUrl = exercise;
                break;
              }
            }
          }
        } catch (error) {
          console.error('设置GIF出错', error);
        }
      }
      
      this.faqDetailDialog = true;
    },
    handleScroll() {
      // 控制返回顶部按钮显示
      this.showBackToTop = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    scrollToQuestion(id) {
      // 查找问题
      const faqToShow = this.allFaqs.find(f => f.id === id);
      if (!faqToShow) return;

      // 如果在分组视图中，需要先展开相应分类
      if (!this.searchQuery.trim() && this.currentCategory === 'all') {
        // 找到问题所属分类面板并自动展开
        this.$nextTick(() => {
          const element = document.getElementById(`faq-${id}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // 点击打开详情
            setTimeout(() => {
              this.openFaqDetail(faqToShow);
            }, 500);
          }
        });
      } else {
        // 如果是在搜索或者分类过滤视图，直接打开详情
        this.openFaqDetail(faqToShow);
      }
    },
    resetFilters() {
      this.searchQuery = '';
      this.switchCategory(this.categories.find(c => c.id === 'all') || this.categories[0]);
    },
    getCategoryIcon(categoryId) {
      const category = this.categories.find(c => c.id === categoryId);
      return category ? category.icon : 'mdi-help-circle';
    },
    getCategoryColor(categoryId) {
      const colors = {
        'all': 'primary',
        'basics': 'indigo',
        'training': 'teal',
        'nutrition': 'amber-darken-2',
        'recovery': 'light-blue-darken-1',
        'muscle': 'deep-purple',
        'equipment': 'brown',
        'mistakes': 'red',
        'special': 'pink'
      };
      return colors[categoryId] || 'grey';
    },
    toggleBookmark(id) {
      if (!id) return;

      const bookmarkIndex = this.bookmarkedQuestions.indexOf(id);

      if (bookmarkIndex === -1) {
        this.bookmarkedQuestions.push(id);
        this.showSnackbar('已添加到收藏', 'success');
      } else {
        this.bookmarkedQuestions.splice(bookmarkIndex, 1);
        this.showSnackbar('已从收藏中移除', 'info');
      }

      // 保存到本地存储
      try {
        localStorage.setItem('bookmarkedFaqs', JSON.stringify(this.bookmarkedQuestions));
      } catch (e) {
        console.error('保存书签失败', e);
      }
    },
    isBookmarked(id) {
      return id && this.bookmarkedQuestions.includes(id);
    },
    rateAnswer(id, type) {
      if (!id) return;

      const message = type === 'up' ? '感谢您的反馈！' : '感谢您的反馈，我们会努力改进';
      this.showSnackbar(message, type === 'up' ? 'success' : 'info');
    },
    shareQuestion(faq) {
      if (!faq) return;

      this.selectedQuestion = faq;
      this.shareLink = `${window.location.origin}${window.location.pathname}?faq=${faq.id}`;
      this.shareDialog = true;
    },
    copyToClipboard() {
      if (!this.shareLink) return;

      navigator.clipboard.writeText(this.shareLink)
        .then(() => {
          this.showSnackbar('链接已复制到剪贴板', 'success');
        })
        .catch(() => {
          this.showSnackbar('复制失败，请手动复制', 'error');
        });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-theme', this.isDarkMode);
    },
    showSnackbar(text, color = 'success') {
      this.snackbar.text = text;
      this.snackbar.color = color;
      this.snackbar.show = true;
    },
    checkDeviceType() {
      this.isMobileView = window.innerWidth < 768;
    },
    checkUrlParams() {
      try {
        // 从URL获取问题ID并跳转
        const urlParams = new URLSearchParams(window.location.search);
        const faqId = urlParams.get('faq');

        if (faqId) {
          const id = parseInt(faqId);
          if (!isNaN(id)) {
            setTimeout(() => {
              this.scrollToQuestion(id);
            }, 500);
          }
        }
      } catch (e) {
        console.error('解析URL参数失败', e);
      }
    },
    // 切换分类
    switchCategory(category) {
      // 更新当前分类
      this.currentCategory = category;
      // 更新路由参数
      this.$router.push({ 
        name: 'FAQ', 
        params: { categoryId: category.id || category.name.toLowerCase() } 
      }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
      
      // 重置搜索状态
      this.searchQuery = '';
      this.searchResults = [];
      this.isSearching = false;

      // 打印当前分类信息
      console.log(`切换到分类: ${category.name}, 问题数量: ${category.questions ? category.questions.length : 0}`);
    },
    toggleTrainingPlans() {
      this.showTrainingPlans = !this.showTrainingPlans;
    },
    getPlanColor(id) {
      const colors = {
        '1': 'primary',
        '2': 'teal',
        '3': 'amber-darken-2',
        '4': 'light-blue-darken-1',
        '5': 'deep-purple'
      };
      return colors[id] || 'grey';
    },
    getPlanIcon(id) {
      const icons = {
        '1': 'mdi-dumbbell',
        '2': 'mdi-run',
        '3': 'mdi-food-apple',
        '4': 'mdi-sleep',
        '5': 'mdi-weight'
      };
      return icons[id] || 'mdi-help-circle';
    },
    getBodyPartColor(bodyPart) {
      const colors = {
        'chest': 'teal',
        'back': 'deep-purple',
        'shoulders': 'indigo',
        'arms': 'amber-darken-2',
        'legs': 'light-blue-darken-1',
        'core': 'teal',
        'cardio': 'pink',
        'flexibility': 'pink',
        'balance': 'indigo'
      };
      return colors[bodyPart] || 'grey';
    },
    getBodyPartIcon(bodyPart) {
      const icons = {
        'chest': 'mdi-human-male',
        'back': 'mdi-human-male-board',
        'shoulders': 'mdi-human-male-female',
        'arms': 'mdi-arm-flex',
        'legs': 'mdi-leg-flex',
        'core': 'mdi-human-pregnant',
        'cardio': 'mdi-run',
        'flexibility': 'mdi-yoga',
        'balance': 'mdi-balance'
      };
      return icons[bodyPart] || 'mdi-help-circle';
    },
    getToolColor(id) {
      const colors = {
        '1': 'teal',
        '2': 'amber-darken-2',
        '3': 'light-blue-darken-1',
        '4': 'deep-purple',
        '5': 'pink'
      };
      return colors[id] || 'grey';
    },
    getToolIcon(id) {
      const icons = {
        '1': 'mdi-dumbbell',
        '2': 'mdi-food-apple',
        '3': 'mdi-sleep',
        '4': 'mdi-weight',
        '5': 'mdi-heart'
      };
      return icons[id] || 'mdi-help-circle';
    },
    // 修改findGifForExercise方法使用exerciseGifs数据
    findGifForExercise(exerciseName) {
      // 首先直接从exerciseGifs中查找
      if (this.exerciseGifs[exerciseName]) {
        return this.exerciseGifs[exerciseName];
      }
      
      // 部分匹配
      const exerciseKey = Object.keys(this.exerciseGifs).find(key => 
        exerciseName.includes(key) || key.includes(exerciseName)
      );
      
      if (exerciseKey) {
        return this.exerciseGifs[exerciseKey];
      }
      
      // 智能匹配关键词
      const keywordMap = {
        '胸': '卧推',
        '推胸': '卧推',
        '胸肌': '卧推',
        '背': '引体向上',
        '背部': '引体向上',
        '肩': '杠铃肩推',
        '三角肌': '侧平举',
        '腿': '深蹲',
        '股四头肌': '深蹲',
        '臀': '硬拉',
        '核心': '平板支撑',
        '手臂': '杠铃弯举',
        '二头肌': '杠铃弯举',
        '三头肌': '三头下压'
      };
      
      for (const [keyword, exercise] of Object.entries(keywordMap)) {
        if (exerciseName.includes(keyword) && this.exerciseGifs[exercise]) {
          return this.exerciseGifs[exercise];
        }
      }
      
      // 如果没有匹配，返回通用健身GIF
      console.log(`未找到匹配"${exerciseName}"的GIF动画，使用默认GIF`);
      return 'https://media1.tenor.com/m/U7_1cC29pccAAAAC/perfect-squat-squat.gif';
    },
    // 在初始化exerciseLibrary时添加GIF
    initExerciseLibraryWithGifs() {
      if (this.exerciseLibrary) {
        this.exerciseLibrary.forEach(part => {
          if (part.exercises) {
            part.exercises.forEach(exercise => {
              if (!exercise.gifUrl) {
                exercise.gifUrl = this.findGifForExercise(exercise.name);
              }
            });
          }
        });
      }
    },
    handleGifError(event) {
      // 处理GIF加载错误后的逻辑
      console.error('GIF加载失败', event);
      
      // 如果是训练动作详情中的GIF，标记为不可用
      if (this.selectedFaq && this.selectedFaq.gifUrl) {
        this.selectedFaq.gifUrl = null;
      }
      
      // 显示错误提示
      this.gifLoadError = true;
      
      // 3秒后自动关闭错误提示
      setTimeout(() => {
        this.gifLoadError = false;
      }, 3000);
    },
    // 增强训练问题的GIF
    enhanceTrainingQuestions() {
      if (this.categories) {
        // 找到训练相关的分类
        const trainingCategory = this.categories.find(c => c.id === "training");
        
        if (trainingCategory && trainingCategory.questions) {
          // 遍历该分类下的所有问题
          trainingCategory.questions.forEach(question => {
            // 检查问题是否与训练动作相关，如果是则查找相关GIF
            if (!question.gifUrl) {
              try {
                // 从问题标题中提取可能的动作名称
                const exerciseMatch = question.question.match(/如何正确进行(.*?)？/);
                if (exerciseMatch && exerciseMatch[1]) {
                  const exerciseName = exerciseMatch[1];
                  question.gifUrl = this.findGifForExercise(exerciseName);
                  console.log(`为问题"${question.question}"找到GIF: ${question.gifUrl}`);
                }
                
                // 尝试从问题内容中提取关键词
                if (!question.gifUrl) {
                  // 循环检查问题中是否包含已知的训练动作名称
                  for (const exerciseName of Object.keys(this.exerciseGifs)) {
                    if (question.question.includes(exerciseName)) {
                      question.gifUrl = this.exerciseGifs[exerciseName];
                      console.log(`从关键词"${exerciseName}"为问题"${question.question}"找到GIF`);
                      break;
                    }
                  }
                }
              } catch (error) {
                console.error('为问题设置GIF出错', error);
              }
            }
          });
        }
      }
      
      // 为训练计划中的动作添加GIF
      if (this.trainingPlans) {
        this.trainingPlans.forEach(plan => {
          if (plan.schedule) {
            plan.schedule.forEach(day => {
              if (Array.isArray(day.exercises)) {
                day.exercises = day.exercises.map(exercise => {
                  if (typeof exercise === 'object') {
                    // 如果没有GIF，尝试添加
                    if (!exercise.gifUrl) {
                      exercise.gifUrl = this.findGifForExercise(exercise.name);
                    }
                    // 添加UI控制属性
                    exercise.showGif = exercise.showGif || false;
                  }
                  return exercise;
                });
              }
            });
          }
        });
      }
    },
    handleExerciseGifError(event, exercise) {
      console.error('训练动作GIF加载失败', exercise?.name);
      
      // 将这个动作的GIF标记为不可用
      if (exercise) {
        exercise.gifUrl = null;
      }
      
      // 不显示错误提示，静默处理
    },
    getExerciseColor(exerciseName) {
      const colors = {
        '深蹲': 'teal',
        '卧推': 'amber-darken-2',
        '引体向上': 'deep-purple',
        '硬拉': 'pink',
        '划船': 'teal',
        '杠铃肩推': 'indigo',
        '俯卧撑': 'teal',
        '箭步蹲': 'teal',
        '平板支撑': 'teal',
        '哑铃卧推': 'amber-darken-2',
        '坐姿划船': 'teal',
        '杠铃弯举': 'amber-darken-2',
        '三头下压': 'deep-purple',
        '侧平举': 'indigo',
        '反向卷腹': 'teal',
        '罗马尼亚硬拉': 'pink'
      };
      return colors[exerciseName] || 'grey';
    },
    getExerciseIcon(exerciseName) {
      const icons = {
        '深蹲': 'mdi-dumbbell',
        '卧推': 'mdi-bench-press',
        '引体向上': 'mdi-pull-up',
        '硬拉': 'mdi-deadlift',
        '划船': 'mdi-barbell-row',
        '杠铃肩推': 'mdi-overhead-press',
        '俯卧撑': 'mdi-push-up',
        '箭步蹲': 'mdi-lunge',
        '平板支撑': 'mdi-plank',
        '哑铃卧推': 'mdi-dumbbell',
        '坐姿划船': 'mdi-cable-row',
        '杠铃弯举': 'mdi-dumbbell',
        '三头下压': 'mdi-tricep-flexion',
        '侧平举': 'mdi-lateral-raise',
        '反向卷腹': 'mdi-crunch',
        '罗马尼亚硬拉': 'mdi-romanian-deadlift'
      };
      return icons[exerciseName] || 'mdi-help-circle';
    }
  }
}
</script>

<style scoped>
.faq-container {
  position: relative;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.search-area-fixed {
  position: sticky;
  top: 64px;
  z-index: 4;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 0 0 24px 24px;
}

.hot-questions-carousel {
  background: linear-gradient(135deg, #4285F4, #34A853);
  color: white;
}

.hot-question-item {
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.content-container {
  padding-bottom: 24px;
}

.faq-content-sheet {
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.category-chip {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 16px;
}

.category-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.category-panel {
  margin-bottom: 12px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.category-panel:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.faq-list-item {
  border-radius: 12px;
  margin-bottom: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background-color: white;
}

.faq-list-item:hover {
  background-color: #f5f5f5;
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.answer-content {
  line-height: 1.6;
  color: #424242;
}

.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 5;
  border-radius: 28px;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-to-top:hover {
  transform: translateY(-4px);
}

.search-input:deep(input) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.search-input:focus-within:deep(input) {
  transform: scale(1.01);
}

.empty-state {
  border-radius: 16px;
  background-color: white;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.category-groups {
  padding-top: 16px;
  padding-bottom: 24px;
}

.training-plans-section {
  background-color: #f8f9fa;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 16px 16px 24px;
}

.training-plans-section .v-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.training-plans-section .v-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.training-plans-section .v-expansion-panel {
  border-radius: 12px !important;
  margin-bottom: 8px;
  overflow: hidden;
}

.training-plans-section .v-expansion-panel-title {
  padding: 12px 16px;
}

/* 训练计划卡片样式 */
.plan-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.exercise-item {
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.exercise-item:hover {
  background-color: rgba(66, 133, 244, 0.05);
}

.exercise-title {
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 动作库样式 */
.exercise-title:hover {
  background-color: rgba(66, 133, 244, 0.05);
}

/* 健身工具卡片样式 */
.tool-card {
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.tool-header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradient-bg {
  background: linear-gradient(135deg, var(--v-theme-primary), #34A853);
}

.bg-teal {
  background: linear-gradient(135deg, #009688, #4DB6AC);
}

.bg-amber-darken-2 {
  background: linear-gradient(135deg, #FF8F00, #FFB300);
}

.bg-light-blue-darken-1 {
  background: linear-gradient(135deg, #039BE5, #29B6F6);
}

.bg-deep-purple {
  background: linear-gradient(135deg, #673AB7, #9575CD);
}

.bg-pink {
  background: linear-gradient(135deg, #E91E63, #F48FB1);
}

.bg-grey {
  background: linear-gradient(135deg, #607D8B, #90A4AE);
}

/* GIF动画相关样式 */
.gif-animation {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #f5f5f5;
  min-height: 180px;
}

.gif-animation:hover {
  transform: scale(1.02);
}

.gif-container {
  position: relative;
  max-width: 360px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
}

.gif-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 16px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.gif-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12) !important;
}

/* 动作示范区域 */
.exercise-demo-placeholder {
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.gif-error-snackbar {
  z-index: 1000;
}

.gif-error-snackbar .v-snackbar__content {
  color: white;
  font-weight: medium;
}

/* 适配暗黑模式 */
:deep(.dark-theme) {
  .faq-container {
    background-color: #121212;
  }

  .search-area-fixed,
  .faq-list-item {
    background-color: #1e1e1e !important;
    color: #f5f5f5;
  }

  .faq-content-sheet {
    background-color: #121212;
  }

  .faq-list-item:hover {
    background-color: #2c2c2c;
  }

  .answer-content {
    color: #e0e0e0;
  }
  
  .empty-state {
    background-color: #1e1e1e;
  }

  .gif-animation,
  .gif-card,
  .exercise-demo-placeholder {
    background-color: #2c2c2c;
  }
}

/* 过渡动画 */
.v-expand-transition-enter-active,
.v-expand-transition-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* 响应式调整 */
@media (max-width: 600px) {
  .search-area-fixed {
    top: 56px;
    border-radius: 0 0 16px 16px;
  }

  .back-to-top {
    bottom: 16px;
    right: 16px;
  }
  
  .training-plans-section {
    padding: 8px 8px 16px;
  }
}

/* Google Material Design 风格字体设置 */
.google-style {
  font-family: 'Roboto', 'Google Sans', 'Arial', sans-serif;
  letter-spacing: 0.5px;
  font-size: 1.25rem;
}

.app-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.text-h5, .text-h6, .text-subtitle-1 {
  font-family: 'Roboto', 'Google Sans', 'Arial', sans-serif !important;
  letter-spacing: 0.25px;
}

/* 分享对话框样式优化 */
.v-dialog .v-card {
  border-radius: 16px;
  overflow: hidden;
}

/* 搜索栏美化 */
.search-input {
  max-width: 700px;
  margin: 0 auto;
}

.search-input:deep(.v-field__outline) {
  opacity: 0.8;
}

.search-input:deep(.v-field--focused .v-field__outline) {
  opacity: 1;
}

/* 过渡效果 */
.v-slide-group-item {
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-btn {
  letter-spacing: 0.5px;
  text-transform: none;
}

.training-plans-section .v-tabs {
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 4px;
  margin: 0 16px 16px;
}
</style>