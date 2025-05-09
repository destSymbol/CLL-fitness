<template>
  <div v-if="exercise">
    <div class="bg-white rounded-xl overflow-hidden shadow-lg mb-8">
      <div class="relative">
        <img :src="exercise.image" :alt="exercise.name" class="w-full h-80 object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/30"></div>
        <div class="absolute bottom-0 left-0 p-6 text-white">
          <div class="flex items-center space-x-2 mb-2">
            <span class="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{{ exercise.level }}</span>
            <span class="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">{{ exercise.equipment }}</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold">{{ exercise.name }}</h1>
        </div>
      </div>
      
      <div class="p-6">
        <div class="mb-8">
          <h2 class="text-xl font-bold text-gray-800 mb-3">动作描述</h2>
          <p class="text-gray-700">{{ exercise.description }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 class="text-xl font-bold text-gray-800 mb-3">目标肌肉</h2>
            <ul class="space-y-2">
              <li v-for="(muscle, index) in exercise.targetMuscles" :key="index" class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                <span>{{ muscle }}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 class="text-xl font-bold text-gray-800 mb-3">次要肌肉</h2>
            <ul class="space-y-2">
              <li v-for="(muscle, index) in exercise.secondaryMuscles" :key="index" class="flex items-center">
                <span class="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                <span>{{ muscle }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mb-8">
          <h2 class="text-xl font-bold text-gray-800 mb-3">执行步骤</h2>
          <ol class="list-decimal pl-5 space-y-2">
            <li v-for="(step, index) in exercise.steps" :key="index" class="text-gray-700">{{ step }}</li>
          </ol>
        </div>
        
        <div>
          <h2 class="text-xl font-bold text-gray-800 mb-3">注意事项</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li v-for="(tip, index) in exercise.tips" :key="index" class="text-gray-700">{{ tip }}</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-xl overflow-hidden shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">训练建议</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-800 mb-2">初学者</h3>
          <p class="text-gray-700">{{ exercise.recommendations.beginner }}</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <h3 class="font-semibold text-green-800 mb-2">中级</h3>
          <p class="text-gray-700">{{ exercise.recommendations.intermediate }}</p>
        </div>
        <div class="bg-purple-50 p-4 rounded-lg">
          <h3 class="font-semibold text-purple-800 mb-2">高级</h3>
          <p class="text-gray-700">{{ exercise.recommendations.advanced }}</p>
        </div>
        <div class="bg-orange-50 p-4 rounded-lg">
          <h3 class="font-semibold text-orange-800 mb-2">建议重量</h3>
          <p class="text-gray-700">{{ exercise.recommendations.weight }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-64">
    <div class="text-center">
      <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p class="text-gray-600">加载中...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exercise: null
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
        const exerciseId = this.$route.params.id;
        
        // 模拟数据
        const exercisesData = {
          'bench-press': {
            id: 'bench-press',
            name: '平板卧推',
            level: '初级到高级',
            equipment: '杠铃',
            image: '/images/bench-press.gif',
            description: '平板卧推是一种基础的复合推举动作，主要锻炼胸大肌、三角肌前束和肱三头肌。它是增强上身推力和发展胸肌的基本动作。',
            targetMuscles: ['胸大肌', '胸小肌'],
            secondaryMuscles: ['三角肌前束', '肱三头肌', '前锯肌'],
            steps: [
              '平躺在卧推凳上，双脚平放在地面上以保持稳定。',
              '双手握住杠铃，握距略宽于肩膀，手掌朝前。',
              '将杠铃从架子上取下，保持手臂伸直，杠铃位于胸部上方。',
              '深呼吸，然后控制地将杠铃降至胸部中下部，肘部大约呈45°角向外张开。',
              '触碰胸部后，用力将杠铃推回起始位置，但不要锁定肘部。',
              '重复所需次数。'
            ],
            tips: [
              '保持肩膀下沉并紧贴凳面，避免拱起腰部。',
              '动作过程中保持控制，不要反弹杠铃。',
              '如果是初学者，可以请人保护或使用史密斯机器。',
              '呼吸节奏：下降时吸气，推起时呼气。'
            ],
            recommendations: {
              beginner: '3组10-12次，中等重量',
              intermediate: '4组8-10次，中重量',
              advanced: '5组5-8次，重量递增',
              weight: '根据个人能力，男性建议从空杠或45kg开始尝试，女性可从15kg开始'
            }
          },
          'pull-up': {
            id: 'pull-up',
            name: '引体向上',
            level: '中级到高级',
            equipment: '单杠',
            image: '/images/pull-up.gif',
            description: '引体向上是一种基础的上拉动作，主要锻炼背阔肌、斜方肌下部和肱二头肌。它是增强上身拉力和发展背部宽度的重要动作。',
            targetMuscles: ['背阔肌', '斜方肌下部'],
            secondaryMuscles: ['肱二头肌', '前臂肌群', '菱形肌'],
            steps: [
              '双手握住单杠，握距略宽于肩膀，手掌朝前（正握）。',
              '悬挂在单杠上，双脚离地，身体完全伸展。',
              '收紧核心肌群，然后用背部肌肉将身体向上拉，直到下巴超过单杠。',
              '控制地降低身体回到起始位置，手臂完全伸展。',
              '重复所需次数。'
            ],
            tips: [
              '动作过程中避免摆动身体或使用惯性。',
              '如果无法完成标准引体向上，可以使用辅助带或从负荷引体向上开始。',
              '尝试不同的握法（正握、反握、中性握）可以强调不同的肌肉部位。',
              '呼吸节奏：下降时吸气，上拉时呼气。'
            ],
            recommendations: {
              beginner: '3组尽可能多的次数，或使用辅助带',
              intermediate: '4组8-10次',
              advanced: '5组10-15次，可增加额外重量',
              weight: '初学者从体重开始，随着进步可以添加负重带增加难度'
            }
          }
          // 更多动作数据...
        };
        
        this.exercise = exercisesData[exerciseId] || null;
      }, 500);
    }
  }
}
</script> 