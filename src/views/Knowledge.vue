<template>
  <div>
    <!-- 顶部APP栏 -->
    <v-app-bar color="primary" density="comfortable" elevation="2">
      <v-app-bar-title class="text-white font-weight-bold">
        健身知识库
      </v-app-bar-title>
      <template v-slot:append>
        <v-btn icon @click="toggleFavoriteMode">
          <v-icon>{{ showFavoritesOnly ? 'mdi-bookmark-check' : 'mdi-bookmark-outline' }}</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-container class="pa-0">
      <!-- 搜索框 -->
      <div class="px-4 pt-4 pb-2">
        <v-text-field
          v-model="searchQuery"
          placeholder="搜索健身知识..."
          variant="outlined"
          density="compact"
          hide-details
          append-inner-icon="mdi-magnify"
          bg-color="white"
          class="rounded-lg"
          @click:append-inner="searchFocus = true"
          @blur="searchFocus = false"
          :class="{ 'search-focused': searchFocus }"
        ></v-text-field>
      </div>

      <!-- 分类选择 -->
      <div class="px-2">
        <v-sheet class="mx-auto" max-width="100%">
          <v-slide-group
            v-model="selectedCategory"
            selected-class="bg-primary"
            show-arrows
            class="py-3"
          >
            <v-slide-group-item
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
              v-slot="{ isSelected, toggle }"
            >
              <v-chip
                class="ma-1 category-chip"
                :color="isSelected ? 'primary' : undefined"
                :variant="isSelected ? 'elevated' : 'flat'"
                @click="toggle(); currentCategory = category.id"
              >
                <v-icon start size="small" class="mr-1">{{ category.icon }}</v-icon>
                {{ category.name }}
              </v-chip>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>

      <!-- 文章列表 -->
      <div v-if="filteredArticles.length > 0" class="px-3">
        <v-card
          v-for="article in filteredArticles"
          :key="article.id"
          class="mb-4 rounded-lg article-card"
          variant="outlined"
          elevation="1"
        >
          <div class="d-flex">
            <div class="flex-grow-1">
              <v-card-item>
                <template v-slot:prepend>
                  <v-avatar color="primary" variant="flat" size="42" class="mr-2">
                    <v-icon color="white" size="large">
                      {{ getCategoryIcon(article.categoryId) }}
                    </v-icon>
                  </v-avatar>
                </template>
                <v-card-title class="text-subtitle-1 font-weight-bold">
                  {{ article.title }}
                  <v-chip v-if="article.isPopular" size="x-small" color="error" label class="ml-1">热门</v-chip>
                </v-card-title>
                
                <template v-slot:append>
                  <v-btn 
                    icon="mdi-bookmark" 
                    variant="text" 
                    size="small"
                    :color="isArticleFavorited(article.id) ? 'amber' : undefined"
                    @click.stop="toggleFavorite(article.id)"
                  ></v-btn>
                </template>
              </v-card-item>

              <v-card-text class="pt-0 pb-0">
                <div class="mb-2 d-flex flex-wrap">
                  <v-chip
                    size="small"
                    color="primary"
                    variant="flat"
                    class="mr-1 mb-1"
                  >
                    {{ getCategoryName(article.categoryId) }}
                  </v-chip>
                  <v-chip
                    v-for="tag in article.tags"
                    :key="tag"
                    size="small"
                    color="grey-lighten-3"
                    variant="flat"
                    class="mr-1 mb-1"
                  >
                    {{ tag }}
                  </v-chip>
                </div>
                <p class="text-body-2 text-medium-emphasis">{{ article.summary }}</p>
                
                <div class="d-flex align-center text-caption text-medium-emphasis mt-2">
                  <v-icon size="x-small" class="mr-1">mdi-clock-outline</v-icon>
                  <span class="mr-3">{{ article.readTime || '5分钟' }}阅读</span>
                  
                  <v-icon size="x-small" class="mr-1">mdi-eye-outline</v-icon>
                  <span>{{ article.views || Math.floor(Math.random() * 1000) }}次浏览</span>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  variant="text"
                  color="primary"
                  @click="toggleArticle(article.id)"
                  class="read-more-btn"
                >
                  {{ expandedArticles.includes(article.id) ? '收起内容' : '阅读全文' }}
                  <v-icon
                    :icon="expandedArticles.includes(article.id) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    class="ml-1"
                  ></v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </div>

          <v-expand-transition>
            <div v-if="expandedArticles.includes(article.id)">
              <v-divider></v-divider>
              <v-card-text>
                <div v-for="(section, index) in article.content" :key="index" class="mb-4">
                  <h3 v-if="section.title" class="text-subtitle-1 font-weight-bold mb-2 text-primary section-title">{{ section.title }}</h3>
                  <p class="text-body-2 mb-2 section-text">{{ section.text }}</p>
                  <v-list v-if="section.points" density="compact" class="bg-transparent pa-0 mb-3 points-list">
                    <v-list-item
                      v-for="(point, pointIndex) in section.points"
                      :key="pointIndex"
                      density="compact"
                      class="text-body-2 pa-0 pl-3 point-item"
                    >
                      <template v-slot:prepend>
                        <v-icon size="x-small" color="primary" class="mr-2">mdi-circle-small</v-icon>
                      </template>
                      {{ point }}
                    </v-list-item>
                  </v-list>
                </div>

                <v-alert
                  type="info"
                  variant="tonal"
                  density="comfortable"
                  title="总结要点"
                  class="rounded-lg mb-3"
                >
                  <v-list density="compact" class="bg-transparent pa-0">
                    <v-list-item
                      v-for="(point, pointIndex) in article.keyPoints"
                      :key="pointIndex"
                      density="compact"
                      class="text-body-2 pa-0 pl-2"
                    >
                      <template v-slot:prepend>
                        <v-icon size="x-small" color="info" class="mr-1">mdi-check-circle</v-icon>
                      </template>
                      {{ point }}
                    </v-list-item>
                  </v-list>
                </v-alert>

                <!-- 相关训练计划 -->
                <v-alert
                  v-if="article.relatedWorkouts && article.relatedWorkouts.length > 0"
                  type="success"
                  variant="tonal"
                  density="comfortable"
                  title="相关训练计划"
                  class="rounded-lg mb-3 related-plans"
                >
                  <div class="d-flex flex-wrap gap-2">
                    <v-btn
                      v-for="workout in article.relatedWorkouts"
                      :key="workout.id"
                      :to="`/workout-plan/${workout.id}`"
                      size="small"
                      variant="flat"
                      color="success"
                      prepend-icon="mdi-dumbbell"
                      class="plan-btn"
                    >
                      {{ workout.name }}
                    </v-btn>
                  </div>
                </v-alert>

                <div class="d-flex justify-space-between align-center mb-3">
                  <div class="d-flex align-center">
                    <span class="text-caption mr-2">文章评分</span>
                    <v-rating
                      v-model="article.userRating"
                      color="amber"
                      half-increments
                      hover
                      size="small"
                    ></v-rating>
                    <span class="text-caption ml-2">{{ article.userRating || 0 }}/5分</span>
                  </div>
                  <v-btn
                    size="small"
                    variant="text"
                    color="primary"
                    prepend-icon="mdi-share-variant"
                    @click="shareArticle(article)"
                  >
                    分享
                  </v-btn>
                </div>

                <div v-if="article.references && article.references.length > 0" class="text-caption text-medium-emphasis reference-section">
                  <p class="font-weight-medium mb-1">参考来源:</p>
                  <v-list density="compact" class="bg-transparent pa-0 pl-3">
                    <v-list-item
                      v-for="(ref, refIndex) in article.references"
                      :key="refIndex"
                      density="compact"
                      class="text-caption pa-0"
                    >
                      {{ ref }}
                    </v-list-item>
                  </v-list>
                </div>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>

      <div v-else class="px-4 py-8 text-center empty-state">
        <v-icon size="x-large" color="grey-lighten-2" class="mb-3">mdi-file-search-outline</v-icon>
        <p class="text-medium-emphasis">{{ showFavoritesOnly ? '暂无收藏的知识内容' : '未找到相关知识内容' }}</p>
        <v-btn 
          variant="text" 
          color="primary" 
          class="mt-2"
          @click="resetFilters"
        >
          重置筛选
        </v-btn>
      </div>

      <!-- 常见问题 -->
      <v-sheet class="px-4 py-4 mb-6 bg-grey-lighten-4">
        <h2 class="text-h6 font-weight-bold mb-3">常见问题</h2>
        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            v-for="(faq, index) in faqs"
            :key="index"
            rounded="lg"
            elevation="0"
            class="mb-2 bg-white faq-panel"
          >
            <v-expansion-panel-title>
              {{ faq.question }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              {{ faq.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-sheet>
    </v-container>
    
    <!-- 返回顶部按钮 -->
    <v-btn
      v-show="showScrollTop"
      icon
      color="primary"
      size="large"
      elevation="3"
      class="scroll-top-btn"
      @click="scrollToTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      currentCategory: 'all',
      selectedCategory: 'all',
      expandedArticles: [],
      favoriteArticles: [],
      showFavoritesOnly: false,
      showScrollTop: false,
      searchFocus: false,
      
      categories: [
        { id: 'all', name: '全部', icon: 'mdi-bookshelf' },
        { id: 'basics', name: '健身基础', icon: 'mdi-dumbbell' },
        { id: 'nutrition', name: '营养饮食', icon: 'mdi-food-apple' },
        { id: 'technique', name: '训练技巧', icon: 'mdi-arm-flex' },
        { id: 'scientific', name: '科学原理', icon: 'mdi-microscope' },
        { id: 'recovery', name: '恢复与休息', icon: 'mdi-sleep' },
        { id: 'mistakes', name: '常见错误', icon: 'mdi-alert-circle' },
        { id: 'plans', name: '训练计划', icon: 'mdi-calendar-check' },
        { id: 'psychology', name: '心理与动机', icon: 'mdi-brain' },
        { id: 'special', name: '特殊人群', icon: 'mdi-account-group' }
      ],
      
      articles: [
        {
          id: 1,
          title: '新手健身入门指南',
          summary: '为健身新手量身定制的入门建议，帮助你科学开启健身之路。',
          categoryId: 'basics',
          tags: ['新手', '入门', '健身计划'],
          content: [
            { title: '为什么要健身', text: '健身不仅能改善体型，还能提升健康水平和生活质量。' },
            { title: '如何开始', text: '建议从全身训练和基础动作入手，逐步建立习惯。', points: ['选择适合自己的训练计划', '保持规律作息', '合理饮食'] }
          ],
          keyPoints: ['循序渐进', '重视恢复', '饮食与训练同等重要'],
          isPopular: true,
          readTime: '6分钟',
          views: 1234,
          relatedWorkouts: [ { id: 101, name: '新手全身训练' } ],
          references: ['《健身圣经》', '网络公开资料']
        },
        {
          id: 2,
          title: '高效增肌饮食原则',
          summary: '掌握增肌期的营养要点，助力肌肉增长。',
          categoryId: 'nutrition',
          tags: ['增肌', '营养', '蛋白质'],
          content: [
            { title: '蛋白质摄入', text: '每天每公斤体重建议摄入1.6-2.2克蛋白质。' },
            { title: '碳水与脂肪', text: '合理分配碳水和脂肪比例，保证能量供应。' }
          ],
          keyPoints: ['优质蛋白', '适量碳水', '健康脂肪'],
          isPopular: false,
          readTime: '4分钟',
          views: 888,
          relatedWorkouts: [ { id: 102, name: '增肌训练计划' } ],
          references: ['《运动营养学》']
        },
        {
          id: 3,
          title: '深蹲动作要点与常见错误',
          summary: '深蹲是复合动作之王，掌握正确技巧避免受伤。',
          categoryId: 'technique',
          tags: ['深蹲', '动作教学', '安全'],
          content: [
            { title: '标准动作', text: '保持背部挺直，膝盖朝向脚尖，蹲至大腿与地面平行。' },
            { title: '常见错误', text: '', points: ['膝盖内扣', '弓背', '下蹲不够深'] }
          ],
          keyPoints: ['动作标准', '避免错误', '循序渐进'],
          isPopular: true,
          readTime: '5分钟',
          views: 1560,
          relatedWorkouts: [ { id: 103, name: '下肢力量训练' } ],
          references: ['《力量训练基础》']
        },
        {
          id: 4,
          title: '训练后如何科学恢复',
          summary: '恢复是进步的关键，科学恢复让你事半功倍。',
          categoryId: 'recovery',
          tags: ['恢复', '拉伸', '睡眠'],
          content: [
            { title: '主动恢复', text: '轻度有氧、拉伸和泡沫轴有助于缓解酸痛。' },
            { title: '睡眠与营养', text: '保证充足睡眠和营养摄入，促进身体修复。' }
          ],
          keyPoints: ['重视恢复', '合理拉伸', '保证睡眠'],
          isPopular: false,
          readTime: '3分钟',
          views: 520,
          relatedWorkouts: [],
          references: ['《运动康复指南》']
        }
      ],
      
      faqs: [
        {
          question: '新手多久能看到健身效果？',
          answer: '一般坚持训练4-8周后，体型和力量会有明显变化，具体因人而异。关键是保持规律和科学的训练与饮食。'
        },
        {
          question: '训练后需要拉伸吗？',
          answer: '建议训练后进行拉伸，有助于缓解肌肉酸痛、促进恢复和提升柔韧性。'
        },
        {
          question: '增肌期间一定要吃蛋白粉吗？',
          answer: '蛋白粉只是补充手段，优先保证日常饮食中的蛋白质摄入，实在不足时可适量补充。'
        },
        {
          question: '每天都可以锻炼吗？',
          answer: '建议合理安排训练与休息，避免同一肌群连续高强度训练，保证身体有足够恢复时间。'
        },
        {
          question: '如何避免健身受伤？',
          answer: '注意热身、动作标准、循序渐进增加强度，训练后拉伸，出现不适及时调整训练计划。'
        }
      ]
    }
  },
  // 好的，我先帮他部署到线上，但是我不会，我想让所有人都访问倒他
  computed: {
    filteredArticles() {
      let result = this.articles;
      
      // 显示收藏
      if (this.showFavoritesOnly) {
        result = result.filter(article => this.isArticleFavorited(article.id));
      }
      
      // 按类别筛选
      if (this.currentCategory !== 'all') {
        result = result.filter(article => article.categoryId === this.currentCategory);
      }
      
      // 按搜索词筛选
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase().trim();
        result = result.filter(article => 
          article.title.toLowerCase().includes(query) || 
          article.summary.toLowerCase().includes(query) ||
          article.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      return result;
    }
  },
  methods: {
    toggleArticle(id) {
      const index = this.expandedArticles.indexOf(id);
      if (index >= 0) {
        this.expandedArticles.splice(index, 1);
      } else {
        this.expandedArticles.push(id);
        // 如果打开文章，记录到本地存储的历史记录中
        this.addToReadHistory(id);
      }
    },
    resetFilters() {
      this.searchQuery = '';
      this.currentCategory = 'all';
      this.selectedCategory = 'all';
      this.showFavoritesOnly = false;
    },
    getCategoryName(categoryId) {
      const category = this.categories.find(c => c.id === categoryId);
      return category ? category.name : '';
    },
    getCategoryIcon(categoryId) {
      const category = this.categories.find(c => c.id === categoryId);
      return category ? category.icon : 'mdi-book-open-variant';
    },
    isArticleFavorited(id) {
      return this.favoriteArticles.includes(id);
    },
    toggleFavorite(id) {
      const index = this.favoriteArticles.indexOf(id);
      if (index >= 0) {
        this.favoriteArticles.splice(index, 1);
        this.$nextTick(() => {
          // 显示消息
          this.showMessage(`已从收藏中移除`);
        });
      } else {
        this.favoriteArticles.push(id);
        this.$nextTick(() => {
          // 显示消息
          this.showMessage(`已添加到收藏`);
        });
      }
      // 保存到本地存储
      localStorage.setItem('favoriteArticles', JSON.stringify(this.favoriteArticles));
    },
    toggleFavoriteMode() {
      this.showFavoritesOnly = !this.showFavoritesOnly;
    },
    shareArticle(article) {
      // 简单的分享实现
      if (navigator.share) {
        navigator.share({
          title: article.title,
          text: article.summary,
          url: window.location.href,
        })
        .catch((error) => console.log('分享失败：', error));
      } else {
        this.showMessage('已复制链接，请手动分享');
        // 在实际应用中这里可以实现复制链接功能
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.showScrollTop = window.scrollY > 300;
    },
    addToReadHistory(id) {
      // 获取现有历史记录
      let history = JSON.parse(localStorage.getItem('readHistory') || '[]');
      // 如果已存在则删除
      history = history.filter(item => item !== id);
      // 添加到最前面
      history.unshift(id);
      // 限制历史记录最多20项
      if (history.length > 20) {
        history = history.slice(0, 20);
      }
      // 保存到本地存储
      localStorage.setItem('readHistory', JSON.stringify(history));
    },
    showMessage(text) {
      // 在实际应用中，这里可以实现显示消息的逻辑
      console.log(text);
    }
  },
  created() {
    // 从本地存储加载收藏的文章
    const savedFavorites = localStorage.getItem('favoriteArticles');
    if (savedFavorites) {
      try {
        this.favoriteArticles = JSON.parse(savedFavorites);
      } catch (e) {
        console.error('Error loading saved favorites:', e);
        this.favoriteArticles = [];
      }
    }
    
    // 为了测试方便，为文章数据添加默认的userRating属性
    this.articles.forEach(article => {
      if (!article.hasOwnProperty('userRating')) {
        article.userRating = 0;
      }
    });
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
/* 防止移动端点击闪烁 */
* {
  -webkit-tap-highlight-color: transparent;
}

/* 搜索框样式 */
.search-focused {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

/* 分类标签 */
.category-chip {
  transition: all 0.3s ease;
}

.category-chip:hover {
  transform: translateY(-2px);
}

/* 文章卡片样式 */
.article-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1) !important;
}

/* 文章内容样式 */
.summary-text {
  line-height: 1.5;
}

.article-content {
  line-height: 1.6;
}

.section-title {
  position: relative;
  padding-left: 12px;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 16px;
  background-color: var(--v-primary-base);
  border-radius: 2px;
}

.section-text {
  color: rgba(0, 0, 0, 0.7);
}

.points-list .v-list-item:hover {
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 4px;
}

/* 总结和相关内容样式 */
.summary-alert, .related-alert {
  border-left-width: 4px;
}

/* 操作按钮样式 */
.read-more-btn {
  position: relative;
  overflow: hidden;
}

.read-more-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: var(--v-primary-base);
  transition: width 0.3s;
}

.read-more-btn:hover::after {
  width: 80%;
}

.workout-btn {
  transition: all 0.2s;
}

.workout-btn:hover {
  transform: translateY(-2px);
}

.share-btn:hover {
  opacity: 0.8;
}

/* FAQ区域样式 */
.faq-section {
  border-radius: 8px;
}

.faq-item {
  margin-bottom: 8px;
  transition: all 0.3s;
}

.faq-item:hover {
  transform: translateX(4px);
}

/* 返回顶部按钮 */
.scroll-top-btn {
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 99;
  transition: all 0.3s;
}

.scroll-top-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 10px rgba(0,0,0,0.2) !important;
}

/* 空状态样式 */
.empty-state {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 适配移动设备 */
@media (max-width: 600px) {
  .article-card .v-card-title {
    font-size: 1rem !important;
  }
  
  .actions-row {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .actions-row .share-btn {
    margin-top: 8px;
  }
}
</style>