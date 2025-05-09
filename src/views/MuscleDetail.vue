<template>
  <div v-if="muscle">
    <div class="bg-gradient-to-r from-blue-600 to-blue-800 py-12 rounded-xl mb-8">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">{{ muscle.name }}</h1>
        <p class="text-blue-100 text-lg max-w-2xl mx-auto">{{ muscle.description }}</p>
      </div>
    </div>

    <section class="mb-12">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">推荐训练动作</h2>
        <span class="text-gray-500">{{ exercises.length }}个动作</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="exercise in exercises" :key="exercise.id" 
             class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <router-link :to="`/exercise/${exercise.id}`">
            <img :src="exercise.image" :alt="exercise.name" class="w-full h-48 object-cover">
            <div class="p-5">
              <h3 class="font-bold text-xl mb-2">{{ exercise.name }}</h3>
              <div class="flex items-center mb-3">
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">{{ exercise.level }}</span>
                <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{{ exercise.equipment }}</span>
              </div>
              <p class="text-gray-600 text-sm line-clamp-2">{{ exercise.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">肌肉解剖学</h2>
      <div class="bg-white rounded-xl shadow-md p-6">
        <p class="text-gray-700 mb-4">{{ muscle.anatomyDescription }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 class="font-semibold text-lg mb-3">主要参与的肌肉</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li v-for="(m, index) in muscle.primaryMuscles" :key="index">{{ m }}</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-3">次要参与的肌肉</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li v-for="(m, index) in muscle.secondaryMuscles" :key="index">{{ m }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
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
      muscle: null,
      exercises: []
    }
  },
  created() {
    // 模拟从API获取数据
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
        const muscleId = this.$route.params.id;
        
        // 肌肉详情数据
        const musclesData = {
          chest: {
            id: 'chest',
            name: '胸肌',
            description: '胸大肌是上半身前侧的大型肌肉群，负责手臂向前和交叉移动，是男性塑造上身形态的重要肌群。',
            anatomyDescription: '胸肌主要由胸大肌、胸小肌和前锯肌组成。胸大肌是一个扇形肌肉，覆盖了胸部大部分区域，分为锁骨部分、胸骨部分和腹部部分。它的主要功能是内收肩膀和旋转手臂。',
            primaryMuscles: ['胸大肌', '胸小肌'],
            secondaryMuscles: ['前锯肌', '三角肌前束']
          },
          back: {
            id: 'back',
            name: '背部',
            description: '背部肌群包括斜方肌、背阔肌等，负责上肢向后运动和保持脊柱稳定，是打造宽阔背部的关键肌群。',
            anatomyDescription: '背部肌肉是人体最大的肌肉群之一，包括背阔肌、斜方肌、菱形肌和竖脊肌等。背阔肌呈扇形，是背部最宽的肌肉，负责将手臂向下拉和向后转动。',
            primaryMuscles: ['背阔肌', '斜方肌'],
            secondaryMuscles: ['菱形肌', '竖脊肌', '肱二头肌']
          },
          // 其他肌肉数据...
          shoulders: {
            id: 'shoulders',
            name: '肩部',
            description: '肩部肌群主要由三角肌组成，分为前、中、后三束，负责手臂的抬升和外展动作。',
            anatomyDescription: '肩部主要由三角肌、冈上肌、冈下肌、小圆肌和大圆肌组成。三角肌覆盖肩关节，分为前部、中部和后部三个部分，各自负责不同方向的手臂运动。',
            primaryMuscles: ['三角肌前束', '三角肌中束', '三角肌后束'],
            secondaryMuscles: ['冈上肌', '冈下肌', '胸大肌上部']
          }
        };
        
        // 训练动作数据
        const exercisesData = {
          chest: [
            {
              id: 'bench-press',
              name: '平板卧推',
              level: '初级到高级',
              equipment: '杠铃',
              image: '/images/bench-press.gif',
              description: '平板卧推是锻炼胸肌的基础复合动作，也是增强上半身推力的重要训练。'
            },
            {
              id: 'dumbbell-fly',
              name: '哑铃飞鸟',
              level: '初级到中级',
              equipment: '哑铃',
              image: '/images/dumbbell-fly.gif',
              description: '哑铃飞鸟可以很好地拉伸胸肌，增加胸肌的宽度和形态。'
            },
            {
              id: 'push-up',
              name: '俯卧撑',
              level: '初级',
              equipment: '徒手',
              image: '/images/push-up.gif',
              description: '俯卧撑是最基础的胸肌训练动作，不需要任何设备就能有效锻炼胸肌、肩部和三头肌。'
            }
          ],
          back: [
            {
              id: 'pull-up',
              name: '引体向上',
              level: '中级到高级',
              equipment: '单杠',
              image: '/images/pull-up.gif',
              description: '引体向上是训练背部的王牌动作，能够全面发展背阔肌和上背部肌群。'
            },
            {
              id: 'barbell-row',
              name: '杠铃划船',
              level: '初级到中级',
              equipment: '杠铃',
              image: '/images/barbell-row.gif',
              description: '杠铃划船是锻炼背部厚度的重要动作，也能增强全身稳定性。'
            },
            {
              id: 'lat-pulldown',
              name: '高位下拉',
              level: '初级',
              equipment: '器械',
              image: '/images/lat-pulldown.gif',
              description: '高位下拉是初学者学习引体向上前的理想选择，可以有效锻炼背阔肌。'
            }
          ],
          // 其他动作数据...
          shoulders: [
            {
              id: 'overhead-press',
              name: '肩上推举',
              level: '初级到高级',
              equipment: '杠铃/哑铃',
              image: '/images/overhead-press.gif',
              description: '肩上推举是训练肩部的基础复合动作，能全面发展三角肌三个部位。'
            },
            {
              id: 'lateral-raise',
              name: '侧平举',
              level: '初级',
              equipment: '哑铃',
              image: '/images/lateral-raise.gif',
              description: '侧平举主要锻炼三角肌中束，是塑造肩部宽度的关键动作。'
            }
          ]
        };
        
        this.muscle = musclesData[muscleId];
        this.exercises = exercisesData[muscleId] || [];
      }, 500);
    }
  }
}
</script> 