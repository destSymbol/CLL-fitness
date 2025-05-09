<template>
  <v-app>
    <!-- 主内容区域 -->
    <v-main>
      <v-container fluid class="pa-0">
        <router-view v-slot="{ Component }">
          <v-fade-transition mode="out-in">
            <component :is="Component" />
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>

    <!-- 移动APP风格的底部导航栏 -->
    <v-bottom-navigation
      grow
      color="primary"
      :elevation="8"
    >
      <v-btn
        :to="{ name: 'Home' }" 
        value="home"
      >
        <v-icon>mdi-home</v-icon>
        <span>首页</span>
      </v-btn>

      <v-btn
        :to="{ name: 'WorkoutPlans' }"
        value="workout-plans"
      >
        <v-icon>mdi-clipboard-list</v-icon>
        <span>训练计划</span>
      </v-btn>

      <v-btn
        :to="{ name: 'Tools' }"
        value="tools"
      >
        <v-icon>mdi-tools</v-icon>
        <span>健身工具</span>
      </v-btn>

      <v-btn
        :to="{ name: 'Knowledge' }"
        value="knowledge"
      >
        <v-icon>mdi-book-open-variant</v-icon>
        <span>健身知识</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 全局样式 */
html {
  overflow-y: auto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* 顶部安全区域，适配iPhone X等机型 */
@supports (padding-top: env(safe-area-inset-top)) {
  .v-app-bar {
    padding-top: env(safe-area-inset-top);
    height: calc(64px + env(safe-area-inset-top)) !important;
  }
}

/* 底部安全区域，适配iPhone X等机型 */
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .v-bottom-navigation {
    padding-bottom: env(safe-area-inset-bottom);
    height: calc(56px + env(safe-area-inset-bottom)) !important;
  }
}

/* 页面转场动画 */
.v-fade-transition-enter-active,
.v-fade-transition-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-fade-transition-enter-from,
.v-fade-transition-leave-to {
  opacity: 0;
}
</style> 