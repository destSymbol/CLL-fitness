export const data = {
    "hotQuestions": [
        { "text": "新手多久能看到健身效果？" },
        { "text": "增肌期间一定要吃蛋白粉吗？" },
        { "text": "如何避免健身受伤？" },
        { "text": "空腹有氧更减脂吗？" }
    ],
    "exerciseGifs": {
        "深蹲": "https://media1.tenor.com/m/U7_1cC29pccAAAAC/perfect-squat-squat.gif",
        "卧推": "https://media1.tenor.com/m/n7LLd5E_w1wAAAAC/bench-press-weight-lifting.gif",
        "引体向上": "https://media1.tenor.com/m/QKmeFYEdb98AAAAC/pull-up-back-muscles.gif",
        "硬拉": "https://media1.tenor.com/m/IIAjUwl2yMgAAAAd/deadlift-deadlifts.gif",
        "划船": "https://media1.tenor.com/m/qntdqCnNAYsAAAAC/barbell-row-workout.gif",
        "杠铃肩推": "https://media1.tenor.com/m/A_uFBDQbGzAAAAAC/overhead-press-chris-jones.gif",
        "俯卧撑": "https://media1.tenor.com/m/jqwaOmRs-7gAAAAC/workout-push-ups.gif",
        "箭步蹲": "https://media1.tenor.com/m/QDPKUvuuWlIAAAAC/exercise-lunge.gif",
        "平板支撑": "https://media1.tenor.com/m/c6MHW9VLhScAAAAC/plank-exercise.gif",
        "哑铃卧推": "https://media1.tenor.com/m/zqLPQQ7kGcwAAAAC/dumbbell-bench-press-chest-day.gif",
        "坐姿划船": "https://media1.tenor.com/m/SRZJ0oQHGOUAAAAC/seated-cable-row-cable-row.gif",
        "杠铃弯举": "https://media1.tenor.com/m/GBIm1xRC_DMAAAAC/dumbbell-curls.gif",
        "三头下压": "https://media1.tenor.com/m/CdPF6vW9X1UAAAAd/tricep-pushdowns-triceps.gif",
        "侧平举": "https://media1.tenor.com/m/ykgMEtdvxRYAAAAC/lateral-raises-shoulders.gif",
        "反向卷腹": "https://media1.tenor.com/m/r0H0tUQT0cIAAAAC/reverse-crunch-core-workout.gif",
        "罗马尼亚硬拉": "https://media1.tenor.com/m/EFLx1aimEL4AAAAC/romanian-deadlift-deadlift.gif",
        "杠铃卧推": "https://media1.tenor.com/m/n7LLd5E_w1wAAAAC/bench-press-weight-lifting.gif",
        "哑铃飞鸟": "https://media1.tenor.com/m/ykgMEtdvxRYAAAAC/lateral-raises-shoulders.gif",
        "坐姿推胸机": "https://media1.tenor.com/m/g02sUhSP-g4AAAAC/chest-press-machine-workout.gif",
        "窄距俯卧撑": "https://media1.tenor.com/m/jqwaOmRs-7gAAAAC/workout-push-ups.gif",
        "单臂哑铃划船": "https://media1.tenor.com/m/qntdqCnNAYsAAAAC/barbell-row-workout.gif"
    },
    "trainingPlans": [
        {
            "id": "beginner",
            "name": "新手入门计划",
            "description": "适合健身0-3个月的新手，以建立基础动作模式、提升基础力量和耐力为目标",
            "duration": "8周",
            "frequency": "每周3-4天",
            "schedule": [
                {
                    "day": "周一",
                    "focus": "全身训练A",
                    "exercises": [
                        { "name": "深蹲", "sets": 3, "reps": "12-15", "rest": "60秒", "gifUrl": "https://media1.tenor.com/m/U7_1cC29pccAAAAC/perfect-squat-squat.gif" },
                        { "name": "俯卧撑", "sets": 3, "reps": "10-12", "rest": "60秒", "gifUrl": "https://media1.tenor.com/m/jqwaOmRs-7gAAAAC/workout-push-ups.gif" },
                        { "name": "单臂哑铃划船", "sets": 3, "reps": "12-15", "rest": "60秒", "gifUrl": "https://media1.tenor.com/m/qntdqCnNAYsAAAAC/barbell-row-workout.gif" },
                        { "name": "哑铃肩推", "sets": 3, "reps": "12-15", "rest": "60秒", "gifUrl": "https://media1.tenor.com/m/A_uFBDQbGzAAAAAC/overhead-press-chris-jones.gif" },
                        { "name": "平板支撑", "sets": 3, "reps": "30秒", "rest": "60秒", "gifUrl": "https://media1.tenor.com/m/c6MHW9VLhScAAAAC/plank-exercise.gif" }
                    ]
                },
                {
                    "day": "周二",
                    "focus": "休息或轻度有氧",
                    "exercises": [
                        { "name": "散步", "duration": "30分钟" },
                        { "name": "拉伸", "duration": "10分钟" }
                    ]
                },
                {
                    "day": "周三",
                    "focus": "全身训练B",
                    "exercises": [
                        { "name": "箭步蹲", "sets": 3, "reps": "10-12/侧", "rest": "60秒", "gifUrl": "https://media1.tenor.com/m/QDPKUvuuWlIAAAAC/exercise-lunge.gif" },
                        { "name": "哑铃卧推", "sets": 3, "reps": "12-15", "rest": "60秒", "gifUrl": "https://media1.tenor.com/m/zqLPQQ7kGcwAAAAC/dumbbell-bench-press-chest-day.gif" },
                        { "name": "直臂下拉", "sets": 3, "reps": "12-15", "rest": "60秒", "gifUrl": "https://media1.tenor.com/m/CdPF6vW9X1UAAAAd/tricep-pushdowns-triceps.gif" },
                        { "name": "侧平举", "sets": 3, "reps": "12-15", "rest": "60秒", "gifUrl": "https://media1.tenor.com/m/ykgMEtdvxRYAAAAC/lateral-raises-shoulders.gif" },
                        { "name": "反向卷腹", "sets": 3, "reps": "15-20", "rest": "60秒", "gifUrl": "https://media1.tenor.com/m/r0H0tUQT0cIAAAAC/reverse-crunch-core-workout.gif" }
                    ]
                },
                {
                    "day": "周四",
                    "focus": "休息或轻度有氧",
                    "exercises": [
                        { "name": "游泳", "duration": "20分钟" },
                        { "name": "拉伸", "duration": "10分钟" }
                    ]
                },
                {
                    "day": "周五",
                    "focus": "全身训练A/B交替",
                    "exercises": "与周一或周三相同，交替进行"
                },
                {
                    "day": "周六",
                    "focus": "有氧耐力",
                    "exercises": [
                        { "name": "中强度有氧", "duration": "30分钟", "intensity": "心率120-140" },
                        { "name": "全身拉伸", "duration": "15分钟" }
                    ]
                },
                {
                    "day": "周日",
                    "focus": "完全休息",
                    "exercises": [
                        { "name": "休息", "note": "确保充分恢复" }
                    ]
                }
            ],
            "progression": "每两周增加重量5-10%或增加1-2次重复次数"
        },
        {
            "id": "muscle-gain",
            "name": "增肌计划",
            "description": "适合已有3-6个月训练经验，目标是增加肌肉质量的训练者",
            "duration": "12周",
            "frequency": "每周5天",
            "schedule": [
                {
                    "day": "周一",
                    "focus": "胸部和三头肌",
                    "exercises": [
                        { "name": "杠铃卧推", "sets": 4, "reps": "8-10", "rest": "90秒" },
                        { "name": "上斜哑铃卧推", "sets": 4, "reps": "8-10", "rest": "90秒" },
                        { "name": "绳索下压", "sets": 3, "reps": "10-12", "rest": "60秒" },
                        { "name": "窄距俯卧撑", "sets": 3, "reps": "10-12", "rest": "60秒" },
                        { "name": "哑铃飞鸟", "sets": 3, "reps": "12-15", "rest": "60秒" }
                    ]
                },
                {
                    "day": "周二",
                    "focus": "背部和二头肌",
                    "exercises": [
                        { "name": "引体向上/辅助引体向上", "sets": 4, "reps": "6-10", "rest": "90秒" },
                        { "name": "杠铃划船", "sets": 4, "reps": "8-10", "rest": "90秒" },
                        { "name": "坐姿绳索划船", "sets": 3, "reps": "10-12", "rest": "60秒" },
                        { "name": "哑铃弯举", "sets": 3, "reps": "10-12", "rest": "60秒" },
                        { "name": "锤式弯举", "sets": 3, "reps": "10-12", "rest": "60秒" }
                    ]
                },
                {
                    "day": "周三",
                    "focus": "腿部和核心",
                    "exercises": [
                        { "name": "杠铃深蹲", "sets": 4, "reps": "8-10", "rest": "120秒" },
                        { "name": "罗马尼亚硬拉", "sets": 4, "reps": "8-10", "rest": "90秒" },
                        { "name": "保加利亚分体蹲", "sets": 3, "reps": "10-12/侧", "rest": "60秒" },
                        { "name": "腿屈伸", "sets": 3, "reps": "12-15", "rest": "60秒" },
                        { "name": "悬挂举腿", "sets": 3, "reps": "12-15", "rest": "60秒" }
                    ]
                },
                {
                    "day": "周四",
                    "focus": "肩部和核心",
                    "exercises": [
                        { "name": "杠铃肩推", "sets": 4, "reps": "8-10", "rest": "90秒" },
                        { "name": "哑铃侧平举", "sets": 4, "reps": "10-12", "rest": "60秒" },
                        { "name": "杠铃俯身划船", "sets": 3, "reps": "10-12", "rest": "60秒" },
                        { "name": "面拉", "sets": 3, "reps": "12-15", "rest": "60秒" },
                        { "name": "腹肌轮", "sets": 3, "reps": "10-15", "rest": "60秒" }
                    ]
                },
                {
                    "day": "周五",
                    "focus": "全身强化",
                    "exercises": [
                        { "name": "硬拉", "sets": 4, "reps": "6-8", "rest": "120秒" },
                        { "name": "杠铃推举", "sets": 4, "reps": "8-10", "rest": "90秒" },
                        { "name": "深蹲跳", "sets": 3, "reps": "10", "rest": "60秒" },
                        { "name": "俯身飞鸟", "sets": 3, "reps": "12-15", "rest": "60秒" },
                        { "name": "侧平板支撑", "sets": 3, "reps": "30秒/侧", "rest": "60秒" }
                    ]
                },
                {
                    "day": "周六/周日",
                    "focus": "休息或轻度有氧",
                    "exercises": [
                        { "name": "低强度有氧", "duration": "30-40分钟" },
                        { "name": "全身拉伸", "duration": "15-20分钟" }
                    ]
                }
            ],
            "progression": "每两周增加重量5%，保持相同重复次数"
        },
        {
            "id": "fat-loss",
            "name": "减脂计划",
            "description": "适合希望减少体脂，保持肌肉量的训练者",
            "duration": "8周",
            "frequency": "每周4-5天",
            "schedule": [
                {
                    "day": "周一",
                    "focus": "全身高重复训练",
                    "exercises": [
                        { "name": "杠铃深蹲", "sets": 3, "reps": "15-20", "rest": "45秒" },
                        { "name": "杠铃胸推", "sets": 3, "reps": "15-20", "rest": "45秒" },
                        { "name": "单臂哑铃划船", "sets": 3, "reps": "15-20", "rest": "45秒" },
                        { "name": "肩推", "sets": 3, "reps": "15-20", "rest": "45秒" },
                        { "name": "核心训练组合", "sets": 2, "duration": "2分钟", "rest": "60秒" }
                    ]
                },
                {
                    "day": "周二",
                    "focus": "HIIT有氧",
                    "exercises": [
                        { "name": "热身", "duration": "5分钟" },
                        { "name": "间歇冲刺", "intervals": "30秒冲刺+90秒恢复", "sets": 8 },
                        { "name": "放松", "duration": "5分钟" }
                    ]
                },
                {
                    "day": "周三",
                    "focus": "超级组训练",
                    "exercises": [
                        { "name": "A1: 杠铃箭步蹲", "sets": 3, "reps": "12/侧", "rest": "无" },
                        { "name": "A2: 引体向上", "sets": 3, "reps": "最大次数", "rest": "60秒" },
                        { "name": "B1: 臀推", "sets": 3, "reps": "15", "rest": "无" },
                        { "name": "B2: 俯卧撑", "sets": 3, "reps": "最大次数", "rest": "60秒" },
                        { "name": "C1: 腿弯举", "sets": 3, "reps": "15", "rest": "无" },
                        { "name": "C2: 侧平举", "sets": 3, "reps": "15", "rest": "60秒" }
                    ]
                },
                {
                    "day": "周四",
                    "focus": "中强度有氧",
                    "exercises": [
                        { "name": "热身", "duration": "5分钟" },
                        { "name": "心率稳定区间训练", "duration": "30-40分钟", "intensity": "心率130-150" },
                        { "name": "放松", "duration": "5分钟" }
                    ]
                },
                {
                    "day": "周五",
                    "focus": "全身力量循环",
                    "exercises": [
                        { "name": "负重深蹲", "sets": 3, "reps": "12-15", "rest": "最小" },
                        { "name": "双杠臂屈伸", "sets": 3, "reps": "12-15", "rest": "最小" },
                        { "name": "负重引体向上", "sets": 3, "reps": "12-15", "rest": "最小" },
                        { "name": "俯身哑铃划船", "sets": 3, "reps": "12-15", "rest": "最小" },
                        { "name": "举腿卷腹", "sets": 3, "reps": "15-20", "rest": "最小" },
                        { "name": "完成所有动作算1组，休息2分钟，重复3组" }
                    ]
                },
                {
                    "day": "周六",
                    "focus": "活动恢复",
                    "exercises": [
                        { "name": "低强度有氧", "duration": "40-60分钟", "intensity": "心率110-130" },
                        { "name": "全身拉伸", "duration": "15-20分钟" }
                    ]
                },
                {
                    "day": "周日",
                    "focus": "完全休息",
                    "exercises": [
                        { "name": "休息", "note": "确保充分恢复，为下周训练做准备" }
                    ]
                }
            ],
            "note": "与饮食计划配合使用效果最佳，建议保持300-500卡路里的热量缺口"
        }
    ],
    "exerciseLibrary": [
        {
            "bodyPart": "胸部",
            "exercises": [
                {
                    "name": "杠铃卧推",
                    "difficulty": "中级",
                    "targetMuscles": ["胸大肌", "三角肌前束", "肱三头肌"],
                    "equipment": ["杠铃", "卧推凳"],
                    "instructions": [
                        "仰卧在卧推凳上，双脚平放在地面",
                        "握住杠铃，手臂略宽于肩，肩胛骨下沉并收紧",
                        "将杠铃从架子上取下，控制杠铃降至胸部中下方",
                        "推起杠铃至手臂伸直，保持手腕与前臂在同一直线上"
                    ],
                    "tips": [
                        "避免臀部抬离卧推凳",
                        "保持手腕中立，避免过度弯曲",
                        "控制速度，避免借助反弹力量"
                    ],
                    "variations": ["上斜卧推", "下斜卧推", "窄距卧推"],
                    "videoUrl": "",
                    "gifUrl": "https://media1.tenor.com/m/n7LLd5E_w1wAAAAC/bench-press-weight-lifting.gif"
                },
                {
                    "name": "哑铃飞鸟",
                    "difficulty": "初级",
                    "targetMuscles": ["胸大肌", "三角肌前束"],
                    "equipment": ["哑铃", "卧推凳"],
                    "instructions": [
                        "仰卧在平板卧推凳上，每只手握一个哑铃",
                        "双臂微屈，掌心相对，垂直举起哑铃",
                        "保持肘部微屈，缓慢将双臂向两侧打开，直至与地面平行",
                        "感受胸部伸展，然后控制哑铃回到起始位置"
                    ],
                    "tips": [
                        "不要放得太低，避免肩膀过度伸展",
                        "保持肘部微屈，不要完全伸直",
                        "重量轻一些，注重感觉胸肌的伸展和收缩"
                    ],
                    "variations": ["上斜飞鸟", "下斜飞鸟", "缆绳交叉飞鸟"],
                    "videoUrl": "",
                    "gifUrl": "https://media1.tenor.com/m/ykgMEtdvxRYAAAAC/lateral-raises-shoulders.gif"
                }
            ]
        },
        {
            "bodyPart": "背部",
            "exercises": [
                {
                    "name": "引体向上",
                    "difficulty": "中高级",
                    "targetMuscles": ["背阔肌", "斜方肌", "肱二头肌"],
                    "equipment": ["引体向上杠", "辅助引体向上器械(可选)"],
                    "instructions": [
                        "双手握住横杠，略宽于肩宽",
                        "从完全悬垂位置开始，肩胛骨下沉并稳定",
                        "通过背部肌肉拉起身体，直到下巴超过横杠",
                        "控制回到起始位置，完全伸展背部"
                    ],
                    "tips": [
                        "避免借助摆动的力量完成动作",
                        "专注于背部肌肉发力，而非手臂",
                        "如果无法完成标准引体向上，可使用辅助带或辅助设备"
                    ],
                    "variations": ["窄距引体向上", "宽距引体向上", "反手引体向上"],
                    "videoUrl": "",
                    "gifUrl": "https://media1.tenor.com/m/QKmeFYEdb98AAAAC/pull-up-back-muscles.gif"
                },
                {
                    "name": "坐姿划船",
                    "difficulty": "初级",
                    "targetMuscles": ["背阔肌", "斜方肌中部", "菱形肌"],
                    "equipment": ["坐姿划船机", "缆绳"],
                    "instructions": [
                        "坐在划船机上，双脚踏板上，轻微弯曲膝盖",
                        "挺直上身，胸部微微前倾",
                        "抓住把手，手臂自然伸直",
                        "将肩胛骨向后收紧，将把手拉向腹部",
                        "控制还原，回到起始位置"
                    ],
                    "tips": [
                        "保持背部挺直，避免驼背",
                        "肘部靠近身体，避免外展",
                        "专注于肩胛骨后缩，而非仅仅弯曲手臂"
                    ],
                    "variations": ["单臂坐姿划船", "宽距划船", "窄距划船"],
                    "videoUrl": "",
                    "gifUrl": "https://media1.tenor.com/m/SRZJ0oQHGOUAAAAC/seated-cable-row-cable-row.gif"
                }
            ]
        }
    ],
    "fitnessTools": [
        {
            "id": "bmi-calculator",
            "name": "BMI计算器",
            "description": "计算身体质量指数，评估体重是否在健康范围内",
            "usage": "输入身高(cm)和体重(kg)，系统自动计算BMI值并给出健康建议"
        },
        {
            "id": "tdee-calculator",
            "name": "每日能量消耗计算器",
            "description": "计算每日总能量消耗，帮助制定科学的饮食计划",
            "usage": "输入年龄、性别、身高、体重和活动水平，系统计算基础代谢率和每日能量消耗"
        },
        {
            "id": "protein-calculator",
            "name": "蛋白质需求计算器",
            "description": "根据训练目标和体重计算每日蛋白质需求量",
            "usage": "输入体重和训练目标(增肌/减脂/健康维持)，系统计算每日所需蛋白质"
        },
        {
            "id": "workout-timer",
            "name": "训练计时器",
            "description": "专业健身计时器，支持HIIT、Tabata等多种训练模式",
            "features": ["HIIT间歇训练", "组间休息计时", "Tabata模式", "自定义训练模式"]
        },
        {
            "id": "progress-tracker",
            "name": "健身进度追踪",
            "description": "记录和可视化展示训练表现和身体变化",
            "features": ["体重变化曲线", "训练容量追踪", "体围变化记录", "体脂率监测"]
        }
    ],
    "userDataStructure": {
        "profile": {
            "basic": {
                "name": "",
                "age": 0,
                "gender": "",
                "height": 0,
                "startingWeight": 0
            },
            "fitnessGoal": {
                "primary": "",
                "specific": "",
                "timeframe": ""
            },
            "healthConditions": {
                "existing": [],
                "limitations": []
            },
            "preferences": {
                "workoutDays": [],
                "preferredTime": "",
                "workoutDuration": 0,
                "trainingStyle": []
            }
        },
        "measurements": {
            "weight": [
                {"date": "", "value": 0}
            ],
            "bodyFat": [
                {"date": "", "value": 0}
            ],
            "circumference": {
                "chest": [{"date": "", "value": 0}],
                "waist": [{"date": "", "value": 0}],
                "hip": [{"date": "", "value": 0}],
                "thigh": [{"date": "", "value": 0}],
                "arm": [{"date": "", "value": 0}]
            },
            "performance": {
                "strength": [
                    {"date": "", "exercise": "", "weight": 0, "reps": 0}
                ],
                "endurance": [
                    {"date": "", "exercise": "", "duration": 0, "distance": 0}
                ]
            }
        },
        "workoutLogs": [
            {
                "date": "",
                "plan": "",
                "completed": true,
                "exercises": [
                    {
                        "name": "",
                        "sets": [
                            {"weight": 0, "reps": 0, "rpe": 0}
                        ],
                        "notes": ""
                    }
                ],
                "duration": 0,
                "energyLevel": 0,
                "notes": ""
            }
        ],
        "nutritionLogs": [
            {
                "date": "",
                "meals": [
                    {
                        "name": "",
                        "time": "",
                        "foods": [
                            {"name": "", "portion": 0, "calories": 0, "protein": 0, "carbs": 0, "fat": 0}
                        ]
                    }
                ],
                "totalCalories": 0,
                "totalProtein": 0,
                "totalCarbs": 0,
                "totalFat": 0,
                "waterIntake": 0,
                "notes": ""
            }
        ]
    },
    "categoriesTree": [
        {
            "id": "all",
            "name": "全部",
            "icon": "mdi-help-circle",
            "questions": [] // 实际开发中通过合并所有分类问题生成，此处保留空数组
        },
        {
            "id": "basics",
            "name": "健身基础",
            "icon": "mdi-dumbbell",
            "questions": [
                { "question": "新手多久能看到健身效果？", "answer": "一般坚持训练4-8周后，体型和力量会有明显变化，具体因人而异。关键是保持规律和科学的训练与饮食。", "category": "basics" },
                { "question": "健身一定要去健身房吗？", "answer": "不一定。家用哑铃、弹力带、自重训练同样有效，关键是坚持和科学训练。", "category": "basics" },
                { "question": "如何设定合理的健身目标？", "answer": "采用SMART原则：具体（如3个月体脂降5%）、可衡量（用体脂秤/围度记录）、可实现（新手每周减重不超过体重1%）、相关性（目标与自身条件匹配）、有时限（设定3-6个月周期）。", "category": "basics" },
                { "question": "健身前需要做哪些体测？", "answer": "必测项目：体重、体脂率（建议用InBody仪器）、围度（胸/腰/臀/大臂/腿）、静息心率、血压。进阶可测肌肉量、基础代谢率（BMR），用于定制训练计划。", "category": "basics" },
                { "question": "在家健身需要哪些基础器械？", "answer": "哑铃（可调节重量）、弹力带、瑜伽垫、俯卧撑支架，进阶可加TRX悬挂带或壶铃，自重训练（深蹲/俯卧撑/平板支撑）也是核心。", "category": "basics" },
                { "question": "如何制定周训练计划？", "answer": "新手建议3天分化：Day1胸+三头，Day2背+二头，Day3腿+核心，每次训练60-75分钟，组间休息60-90秒。每周安排1-2天完全休息或主动恢复（散步/瑜伽）。", "category": "basics" },
                { "question": "健身需要每天记录数据吗？", "answer": "建议记录：训练内容（重量/次数/组数）、饮食热量（用MyFitnessPal）、体围变化（每周一早晨空腹测量）、睡眠质量（使用智能手环）。数据追踪能帮助调整计划，提升训练效率。", "category": "basics" },
                { "question": "健身计划多久需要调整一次？", "answer": "每4-6周调整一次，当出现以下情况时需调整：① 相同重量能轻松完成计划次数；② 训练后无疲劳感；③ 体围/体脂率停滞2周以上。调整方式：增加重量（5-10%）、减少组间休息、更换动作变式。", "category": "basics" },
                { "question": "如何选择适合自己的健身房？", "answer": "考虑因素：① 地理位置（通勤时间<30分钟）；② 器械齐全度（是否有深蹲架、龙门架等基础设备）；③ 人群密度（避开高峰时段过于拥挤的场馆）；④ 私教专业性（可观察教练是否指导动作细节）；⑤ 价格与会员期限（优先选择短期试练卡）。", "category": "basics" },
                { "question": "健身穿什么衣服合适？", "answer": "选择吸湿排汗的运动面料（如聚酯纤维、氨纶混纺），避免棉质（吸汗后增重）。力量训练穿支撑性好的运动鞋（如Nike Metcon），有氧运动选缓冲跑鞋（如亚瑟士GEL）。女性需穿专业运动内衣（高强度训练选压缩型，中低强度选防震型）。", "category": "basics" },
                { "question": "健身前需要吃东西吗？", "answer": "建议训练前30-60分钟补充易消化碳水+少量蛋白质（如香蕉+鸡蛋），提供能量并预防肌肉分解。空腹训练可能导致低血糖（尤其有氧训练），但过量饮食会影响训练状态，以7分饱为宜。", "category": "basics" },
                { "question": "健身后多久可以洗澡？", "answer": "建议训练后休息10-15分钟，待心率恢复正常（60-100次/分）再洗澡。水温不宜过高（38-40℃），时间控制在15分钟内，避免血液过度集中导致头晕。冷水澡可缓解肌肉酸痛，热水澡促进血液循环，根据需求选择。", "category": "basics" },
                { "question": "如何快速进入健身状态？", "answer": "① 固定训练时间（如每天19:00）形成生物钟；② 听高强度音乐（BPM 120-140）提升兴奋度；③ 提前准备好装备（训练服/水杯/补剂）减少拖延；④ 从简单动作开始（如5分钟高抬腿）逐步进入状态。", "category": "basics" },
                { "question": "健身时手机要不要带？", "answer": "建议放在更衣室或用臂带固定，避免分心。如需记录动作视频（用于动作矫正），可在组间拍摄，但单次查看时间不超过2分钟，保持训练专注度。频繁刷手机会延长组间休息，降低训练效率。", "category": "basics" },
                { "question": "健身前后需要补充水分吗？", "answer": "需要。训练前2小时喝300-500ml水，训练中每15-20分钟喝100-150ml（加少量电解质），训练后根据体重下降量补水（每丢失1kg补1-1.5L）。避免一次性大量饮水，以防水中毒。", "category": "basics" },
                { "question": "如何克服健身懒惰期？", "answer": "① 设定小目标（如今天只练10分钟），降低启动难度；② 找训练伙伴互相监督；③ 更换训练内容（如力量训练改HIIT）增加新鲜感；④ 记录身体变化（拍照对比）强化正反馈；⑤ 调整作息，确保训练时精力充沛。", "category": "basics" },
                { "question": "健身需要忌口吗？", "answer": "不需要完全忌口，但需控制高油高糖高盐食物（如油炸食品、蛋糕、腌制食品）。建议遵循80/20原则：80%饮食为优质蛋白+全谷物+蔬菜，20%可自由选择喜欢的食物，既能保证营养又提升依从性。", "category": "basics" },
                { "question": "增肌期如何计算蛋白质摄入量？", "answer": "按体重计算：普通训练者1.6-2.2g/kg，进阶选手2.2-2.8g/kg。例如70kg男性每日需112-196g，优先从天然食物（鸡胸肉/鸡蛋/鱼类）获取，不足部分用蛋白粉补充。注意分4-6餐摄入，每餐不超过40g（消化上限）。", "category": "nutrition" },
                { "question": "健身新手如何避免受伤？", "answer": "1. 训练前充分热身，激活目标肌群；2. 动作标准，避免盲目加重；3. 循序渐进增加训练量和强度；4. 训练后拉伸，促进恢复；5. 出现疼痛及时停止训练并寻求专业指导。", "category": "basics" },
                { "question": "健身计划如何科学安排？", "answer": "建议每周安排3-5次训练，分为力量训练和有氧训练。力量训练可采用分部位或全身训练法，有氧训练可选择跑步、游泳、骑行等。每次训练后保证48小时恢复时间。", "category": "basics" },
                { "question": "健身过程中如何保持动力？", "answer": "1. 设定阶段性小目标，逐步实现；2. 记录训练进展，感受变化；3. 与朋友组队训练，互相激励；4. 尝试新动作或课程，保持新鲜感；5. 奖励自己达成目标后的坚持。", "category": "basics" },
                { "question": "健身遇到平台期怎么办？", "answer": "1. 调整训练计划，增加新动作或变换训练顺序；2. 适当增加训练强度或组数；3. 检查饮食结构，保证营养均衡；4. 保证充足睡眠和恢复；5. 可尝试短期休息后再恢复训练。", "category": "basics" },
                { "question": "健身时如何正确呼吸？", "answer": "一般原则：用力时呼气，还原时吸气。例如深蹲下蹲吸气，起身呼气。避免屏气过久，保持呼吸与动作节奏一致。", "category": "basics" },
                { "question": "健身需要请私教吗？", "answer": "新手建议请专业私教指导，帮助建立正确动作模式和训练习惯。进阶后可根据自身需求选择是否继续。", "category": "basics" },
                { "question": "健身多久能看到明显变化？", "answer": "一般坚持训练4-8周后，体型和力量会有初步变化。增肌和减脂效果因人而异，长期坚持才能获得理想身材。", "category": "basics" },
                { "question": "健身时如何选择合适的训练重量？", "answer": "选择能完成8-12次标准动作且最后2次略感吃力的重量。新手建议从空杆或轻重量开始，逐步增加。", "category": "basics" },
                { "question": "健身时如何避免动作变形？", "answer": "1. 保持核心收紧，动作缓慢控制；2. 选择合适重量，避免逞强；3. 训练时可用镜子自查动作；4. 必要时请教练或伙伴协助纠正。", "category": "basics" },
                { "question": "健身时如何安排组间休息？", "answer": "力量训练组间休息60-90秒，有氧训练30-60秒。大重量训练可适当延长休息，保证下组动作质量。", "category": "basics" },
                { "question": "健身时如何判断训练是否有效？", "answer": "1. 训练后目标肌群有酸胀感；2. 随着训练进展，重量和次数逐步提升；3. 体型、体重、围度等指标有变化；4. 日常精力和睡眠质量提升。", "category": "basics" },
                { "question": "健身时如何避免过度训练？", "answer": "1. 每周安排1-2天休息；2. 训练后如出现持续疲劳、睡眠变差、食欲下降等，需适当减少训练量；3. 保证营养和睡眠充足。", "category": "basics" },
                { "question": "健身时如何选择训练时间？", "answer": "建议选择自己精力最充沛的时段，如早晨或傍晚。保持固定训练时间有助于养成习惯。", "category": "basics" },
                { "question": "健身时如何避免分心？", "answer": "1. 训练前关闭手机通知；2. 制定详细训练计划，减少组间无效时间；3. 选择安静环境或佩戴耳机。", "category": "basics" },
                { "question": "健身时如何科学热身？", "answer": "热身包括5-10分钟有氧（如慢跑、跳绳）+动态拉伸（如高抬腿、开合跳），激活目标肌群，预防受伤。", "category": "basics" },
                { "question": "健身时如何科学拉伸？", "answer": "训练后进行静态拉伸，每个动作保持15-30秒，覆盖训练过的主要肌群，有助于缓解酸痛和促进恢复。", "category": "basics" },
                { "question": "健身时如何选择训练伙伴？", "answer": "选择有共同目标、作息规律、能互相激励和监督的伙伴，有助于提升训练动力和坚持度。", "category": "basics" },
                { "question": "健身时如何避免常见误区？", "answer": "1. 不盲目追求大重量，优先保证动作标准；2. 不迷信补剂，饮食为主；3. 不忽视恢复和休息；4. 不轻信网络谣言，优先参考权威资料。", "category": "basics" },
                { "question": "健身时如何科学补水？", "answer": "训练前2小时喝300-500ml水，训练中每15-20分钟补充100-150ml，训练后根据体重下降量补水。避免一次性大量饮水。", "category": "basics" },
                { "question": "健身时如何科学补充能量？", "answer": "训练前30-60分钟补充易消化碳水+少量蛋白质，训练后30分钟内补充蛋白质和碳水，有助于恢复和肌肉合成。", "category": "basics" },
                { "question": "健身时如何科学安排饮食？", "answer": "保证三大营养素均衡摄入（蛋白质、碳水、脂肪），多吃蔬菜水果，少吃高油高糖食品。根据训练目标调整热量摄入。", "category": "basics" },
                { "question": "健身时如何科学安排作息？", "answer": "保证每晚7-8小时高质量睡眠，避免熬夜。训练日和休息日合理安排，保证身体恢复。", "category": "basics" },
                { "question": "健身时如何科学记录训练？", "answer": "建议用训练日志或App记录每次训练内容、重量、次数、组数、体围变化等，有助于调整计划和提升动力。", "category": "basics" },
                { "question": "健身时如何科学选择装备？", "answer": "选择合适的运动鞋、吸湿排汗的运动服，必要时佩戴护腕、护膝等护具。装备应以舒适和安全为主。", "category": "basics" },
                { "question": "健身时如何科学安排周期？", "answer": "每4-6周调整一次训练计划，避免身体适应。可采用增肌期、减脂期交替安排，提升训练效果。", "category": "basics" },
                { "question": "残障人士如何定制健身计划？", "answer": "需根据身体状况调整：① 肢体障碍者：利用轮椅抗阻训练（如坐姿推胸）、弹力带训练；② 视力障碍者：选择固定轨迹器械（减少平衡要求），由教练口头指导动作；③ 听力障碍者：通过视觉信号（手势、动作图解）沟通训练细节。核心原则：在安全范围内提升肌肉力量和心肺功能，优先咨询康复治疗师。", "category": "special" }
            ]
        },
        {
            "id": "training",
            "name": "训练技巧",
            "icon": "mdi-arm-flex",
            "questions": [
                { "question": "深蹲膝盖会受伤吗？", "answer": "只要动作标准、负重合理，深蹲对膝盖无害，反而有助于下肢力量提升。", "category": "training" },
                { "question": "如何正确进行深蹲？", "answer": "深蹲标准动作：1. 站姿：双脚与肩同宽，脚尖略微外展；2. 起始姿势：挺胸收腹，核心收紧；3. 下蹲过程：髋关节先动，保持膝盖与脚尖方向一致；4. 深度：大腿与地面平行或略低；5. 起身：保持核心收紧，髋关节发力。常见错误：膝盖内扣、过度前倾、脚跟抬起。进阶技巧：可尝试不同站距（宽距、窄距）和负重方式（前蹲、后蹲）。", "category": "training" },
                { "question": "如何提高卧推重量？", "answer": "提高卧推重量的方法：1. 技术改进：保持肩胛骨收紧，腰部自然拱起；2. 辅助训练：加强三头肌和三角肌前束训练；3. 训练计划：采用5x5训练法，每周增加2.5-5kg；4. 恢复策略：确保充分休息，避免过度训练；5. 营养补充：保证蛋白质摄入，训练前补充肌酸。进阶技巧：可尝试暂停卧推、板式卧推等变式。", "category": "training" },
                { "question": "如何正确进行硬拉？", "answer": "硬拉标准动作：1. 站姿：双脚与肩同宽，杠铃贴近小腿；2. 握距：略宽于肩，保持手腕中立；3. 起始姿势：保持背部挺直，核心收紧；4. 拉起过程：保持杠铃贴近身体，髋关节发力；5. 锁定：肩胛骨后缩，挺胸。常见错误：圆背、过度后仰、杠铃远离身体。进阶技巧：可尝试相扑硬拉、罗马尼亚硬拉等变式。", "category": "training" },
                { "question": "如何提高引体向上次数？", "answer": "提高引体向上次数的方法：1. 辅助训练：使用弹力带、辅助器械；2. 训练计划：采用阶梯训练法，如5-4-3-2-1；3. 技术改进：保持核心收紧，避免摆动；4. 恢复策略：确保充分休息，避免过度训练；5. 营养补充：保证蛋白质摄入，训练前补充肌酸。进阶技巧：可尝试不同握距（宽距、窄距）和握法（正握、反握）。", "category": "training" },
                { "question": "如何正确进行肩推？", "answer": "肩推标准动作：1. 站姿：双脚与肩同宽，核心收紧；2. 握距：略宽于肩，保持手腕中立；3. 起始姿势：杠铃在锁骨位置；4. 推起过程：保持核心收紧，避免过度后仰；5. 锁定：手臂完全伸直，肩胛骨下沉。常见错误：过度后仰、手腕过度弯曲、动作不连贯。进阶技巧：可尝试坐姿肩推、阿诺德推举等变式。", "category": "training" },
                { "question": "如何正确进行划船？", "answer": "划船标准动作：1. 站姿：双脚与肩同宽，膝盖微屈；2. 握距：与肩同宽，保持手腕中立；3. 起始姿势：保持背部挺直，核心收紧；4. 拉起过程：保持杠铃贴近身体，肩胛骨后缩；5. 还原：控制速度，保持核心收紧。常见错误：圆背、过度后仰、借力。进阶技巧：可尝试不同握距（宽距、窄距）和握法（正握、反握）。", "category": "training" },
                { "question": "如何正确进行二头弯举？", "answer": "二头弯举标准动作：1. 站姿：双脚与肩同宽，核心收紧；2. 握距：与肩同宽，保持手腕中立；3. 起始姿势：手臂自然下垂；4. 弯举过程：保持肘部固定，避免借力；5. 还原：控制速度，保持核心收紧。常见错误：借力、肘部移动、动作不连贯。进阶技巧：可尝试不同握距（宽距、窄距）和握法（正握、反握）。", "category": "training" },
                { "question": "如何正确进行三头下压？", "answer": "三头下压标准动作：1. 站姿：双脚与肩同宽，核心收紧；2. 握距：与肩同宽，保持手腕中立；3. 起始姿势：手臂自然下垂；4. 下压过程：保持肘部固定，避免借力；5. 还原：控制速度，保持核心收紧。常见错误：借力、肘部移动、动作不连贯。进阶技巧：可尝试不同握距（宽距、窄距）和握法（正握、反握）。", "category": "training" },
                { "question": "如何正确进行侧平举？", "answer": "侧平举标准动作：1. 站姿：双脚与肩同宽，核心收紧；2. 握距：与肩同宽，保持手腕中立；3. 起始姿势：手臂自然下垂；4. 平举过程：保持肘部微屈，避免借力；5. 还原：控制速度，保持核心收紧。常见错误：借力、肘部过度弯曲、动作不连贯。进阶技巧：可尝试不同角度（前平举、后平举）和握法（正握、反握）。", "category": "training" },
                { "question": "如何正确进行腿举？", "answer": "腿举标准动作：1. 坐姿：背部完全贴合靠背，核心收紧；2. 脚位：与肩同宽，脚尖略微外展；3. 起始姿势：膝盖微屈；4. 推起过程：保持核心收紧，避免借力；5. 还原：控制速度，保持核心收紧。常见错误：借力、膝盖内扣、动作不连贯。进阶技巧：可尝试不同脚位（宽距、窄距）和角度（上斜、下斜）。", "category": "training" },
                { "question": "如何正确进行腿屈伸？", "answer": "腿屈伸标准动作：1. 坐姿：背部完全贴合靠背，核心收紧；2. 脚位：与肩同宽，脚尖略微外展；3. 起始姿势：膝盖微屈；4. 屈伸过程：保持核心收紧，避免借力；5. 还原：控制速度，保持核心收紧。常见错误：借力、膝盖内扣、动作不连贯。进阶技巧：可尝试不同脚位（宽距、窄距）和角度（上斜、下斜）。", "category": "training" },
                { "question": "如何正确进行腿弯举？", "answer": "腿弯举标准动作：1. 俯卧：胸部贴合靠垫，核心收紧；2. 脚位：与肩同宽，脚尖略微外展；3. 起始姿势：膝盖微屈；4. 弯举过程：保持核心收紧，避免借力；5. 还原：控制速度，保持核心收紧。常见错误：借力、臀部抬起、动作不连贯。进阶技巧：可尝试不同脚位（宽距、窄距）和角度（上斜、下斜）。", "category": "training" },
                { "question": "力量训练和有氧训练如何结合？", "answer": "最佳结合方法：1. 同一天训练：先力量后有氧，避免影响力量表现；2. 分开训练：如周一/三/五力量，周二/四/六有氧；3. 混合训练：如HIIT或循环训练；4. 根据目标调整比例：增肌侧重力量，减脂两者平衡，健康则有氧略多；5. 避免过量训练，保证充分恢复；6. 周期性调整训练重点，如8周力量周期后转向有氧周期。", "category": "training" }
            ]
        },
        {
            "id": "nutrition",
            "name": "营养饮食",
            "icon": "mdi-food-apple",
            "questions": [
                { "question": "增肌期间一定要吃蛋白粉吗？", "answer": "蛋白粉只是补充手段，优先保证日常饮食中的蛋白质摄入，实在不足时可适量补充。", "category": "nutrition" },
                { "question": "健身期间能吃碳水吗？", "answer": "碳水是重要能量来源，合理摄入有助于训练表现和恢复，不建议完全戒断。", "category": "nutrition" },
                { "question": "增肌期每天需要摄入多少蛋白质？", "answer": "一般建议每公斤体重摄入1.6-2.2克蛋白质。例如70kg的人每天需要112-154克蛋白质。建议分4-6餐摄入，每餐不超过40克，以利于吸收。", "category": "nutrition" },
                { "question": "训练前应该吃什么？", "answer": "训练前1-2小时建议摄入易消化的碳水化合物和少量蛋白质，如香蕉+鸡蛋、全麦面包+牛奶等。避免高脂肪食物，以免影响训练状态。", "category": "nutrition" },
                { "question": "训练后补充营养的最佳时间是什么？", "answer": "训练后30分钟内是补充营养的黄金时间，此时肌肉对营养的吸收效率最高。建议摄入快速吸收的蛋白质（如乳清蛋白）和简单碳水化合物（如香蕉）。", "category": "nutrition" },
                { "question": "减脂期如何安排饮食？", "answer": "减脂期建议：1. 控制总热量摄入，创造300-500卡路里的热量缺口；2. 保持高蛋白摄入（每公斤体重1.6-2克）；3. 选择低GI碳水，如燕麦、糙米；4. 增加膳食纤维摄入，如蔬菜、水果；5. 控制脂肪摄入，但不要完全戒断。", "category": "nutrition" },
                { "question": "健身期间需要补充哪些维生素？", "answer": "建议补充：1. 维生素D（促进钙吸收，增强免疫力）；2. 维生素B族（参与能量代谢）；3. 维生素C（抗氧化，促进胶原蛋白合成）；4. 维生素E（抗氧化，保护细胞膜）。优先从天然食物获取，必要时可适量补充。", "category": "nutrition" },
                { "question": "如何计算每日所需热量？", "answer": "基础代谢率(BMR)计算公式：男性=10×体重(kg)+6.25×身高(cm)-5×年龄+5；女性=10×体重(kg)+6.25×身高(cm)-5×年龄-161。然后根据活动系数（1.2-2.0）计算总热量需求。增肌期可增加300-500卡路里，减脂期减少300-500卡路里。", "category": "nutrition" },
                { "question": "健身期间可以喝酒吗？", "answer": "建议避免饮酒，因为：1. 酒精会抑制蛋白质合成；2. 影响睡眠质量，阻碍肌肉恢复；3. 增加脂肪储存；4. 降低训练表现。如果必须饮酒，建议选择低度酒，控制量，并避开训练日。", "category": "nutrition" },
                { "question": "如何选择适合自己的蛋白粉？", "answer": "1. 乳清蛋白：吸收快，适合训练后补充；2. 酪蛋白：吸收慢，适合睡前补充；3. 植物蛋白：适合素食者，但氨基酸谱可能不完整；4. 混合蛋白：综合多种蛋白优点。建议选择大品牌，注意查看成分表和认证。", "category": "nutrition" },
                { "question": "健身期间需要补充肌酸吗？", "answer": "肌酸是安全有效的补剂，可以：1. 提高训练强度；2. 增加肌肉力量；3. 促进肌肉恢复。建议每天补充3-5克，可以分次服用。初次使用建议先进行5-7天的负荷期（每天20克）。", "category": "nutrition" },
                { "question": "如何安排增肌期的饮食计划？", "answer": "增肌期饮食建议：1. 总热量比维持期增加300-500卡路里；2. 蛋白质每公斤体重1.6-2.2克；3. 碳水每公斤体重4-6克；4. 脂肪占总热量20-30%；5. 分5-6餐进食，训练前后重点补充；6. 保证充足水分摄入。", "category": "nutrition" },
                { "question": "健身期间可以吃零食吗？", "answer": "可以，但需要选择健康的零食：1. 蛋白质类：希腊酸奶、鸡胸肉、蛋白棒；2. 碳水类：水果、全麦饼干、燕麦片；3. 脂肪类：坚果、牛油果。注意控制总热量，避免高糖高脂零食。", "category": "nutrition" },
                { "question": "如何判断自己是否营养不足？", "answer": "营养不足的表现：1. 训练后恢复慢；2. 容易疲劳；3. 肌肉增长停滞；4. 免疫力下降；5. 睡眠质量差。建议记录饮食日记，定期进行体测，必要时咨询营养师。", "category": "nutrition" },
                { "question": "健身期间需要补充电解质吗？", "answer": "高强度训练或长时间训练时建议补充电解质，特别是：1. 钠：维持体液平衡；2. 钾：预防肌肉痉挛；3. 镁：参与能量代谢。可以通过运动饮料、电解质片或天然食物（如香蕉、椰子水）补充。", "category": "nutrition" }
            ]
        },
        {
            "id": "recovery",
            "name": "恢复与休息",
            "icon": "mdi-sleep",
            "questions": [
                { "question": "训练后需要拉伸吗？", "answer": "建议训练后进行拉伸，有助于缓解肌肉酸痛、促进恢复和提升柔韧性。", "category": "recovery" },
                { "question": "每天都可以锻炼吗？", "answer": "建议合理安排训练与休息，避免同一肌群连续高强度训练，保证身体有足够恢复时间。", "category": "recovery" },
                { "question": "训练后拉伸的最佳时机是什么？", "answer": "训练结束后5-10分钟内进行拉伸效果最佳，有助于缓解肌肉酸痛和促进血液循环。", "category": "recovery" },
                { "question": "拉伸应该持续多长时间？", "answer": "每个拉伸动作建议保持15-30秒，覆盖训练过的主要肌群。避免用力过猛，保持均匀呼吸。", "category": "recovery" },
                { "question": "训练后多久可以洗澡？", "answer": "建议训练后休息10-15分钟，待心率恢复正常后再洗澡。水温不宜过高，避免头晕。", "category": "recovery" },
                { "question": "如何判断身体是否恢复充分？", "answer": "1. 目标肌群无明显酸痛；2. 睡眠质量良好；3. 日常精力充沛；4. 训练表现未下降。若有持续疲劳或酸痛，建议延长恢复时间。", "category": "recovery" },
                { "question": "恢复期间可以做什么促进恢复？", "answer": "1. 进行低强度有氧（如散步、游泳）；2. 进行泡沫轴放松和拉伸；3. 保证充足睡眠和营养摄入；4. 可尝试冷热交替浴、按摩等手段。", "category": "recovery" },
                { "question": "训练后肌肉酸痛怎么办？", "answer": "轻微酸痛属于正常现象，可通过拉伸、泡沫轴放松、热敷等缓解。若剧烈疼痛或持续不退，需及时休息并寻求专业帮助。", "category": "recovery" },
                { "question": "每天都可以锻炼吗？", "answer": "建议合理安排训练与休息，避免同一肌群连续高强度训练，保证身体有足够恢复时间。", "category": "recovery" },
                { "question": "睡眠对恢复有多重要？", "answer": "高质量睡眠有助于激素分泌、肌肉修复和体能恢复。建议每晚保证7-8小时睡眠，避免熬夜。", "category": "recovery" },
                { "question": "训练后可以喝酒吗？", "answer": "不建议训练后饮酒，酒精会抑制蛋白质合成，影响肌肉恢复和睡眠质量。", "category": "recovery" },
                { "question": "恢复期间饮食需要注意什么？", "answer": "保证蛋白质、碳水和脂肪均衡摄入，多吃蔬菜水果，补充维生素和矿物质，有助于身体修复。", "category": "recovery" },
                { "question": "如何避免过度恢复？", "answer": "过度恢复表现为长时间不训练导致体能下降。建议每周至少安排2-3次训练，避免完全不动。", "category": "recovery" },
                { "question": "训练后泡沫轴放松有用吗？", "answer": "泡沫轴放松有助于缓解肌肉紧张、促进血液循环和加速恢复。建议训练后或休息日使用。", "category": "recovery" },
                { "question": "训练后可以做哪些主动恢复？", "answer": "如慢走、游泳、瑜伽、拉伸等低强度活动，有助于加快代谢废物清除和身体修复。", "category": "recovery" },
                { "question": "训练后多久可以进行下一次训练？", "answer": "同一肌群建议间隔48小时以上，具体根据个人恢复情况调整。", "category": "recovery" },
                { "question": "训练后按摩有用吗？", "answer": "适度按摩有助于缓解肌肉紧张、促进血液循环和加速恢复。建议选择专业按摩师。", "category": "recovery" },
                { "question": "训练后可以泡澡吗？", "answer": "适度泡澡有助于放松身心和缓解疲劳，但水温不宜过高，时间不宜过长。", "category": "recovery" },
                { "question": "恢复期间可以做有氧运动吗？", "answer": "可以，低强度有氧有助于促进血液循环和加快恢复，但不宜过度。", "category": "recovery" },
                { "question": "如何判断是否需要休息一天？", "answer": "如出现持续疲劳、肌肉酸痛、训练表现下降等，建议休息一天，避免过度训练。", "category": "recovery" },
                { "question": "恢复期间可以做哪些拉伸？", "answer": "可做全身静态拉伸，重点覆盖训练过的肌群，如大腿、背部、肩部等，每个动作保持15-30秒。", "category": "recovery" },
                { "question": "恢复期间如何保证心理健康？", "answer": "保持积极心态，适当与朋友交流，参加户外活动或冥想，有助于缓解压力和提升恢复质量。", "category": "recovery" }
            ]
        },
        {
            "id": "muscle",
            "name": "增肌减脂",
            "icon": "mdi-weight-lifter",
            "questions": [
                { "question": "健身后体重不降是没效果吗？", "answer": "体重受多种因素影响，围度、体脂率等更能反映健身效果。", "category": "muscle" },
                { "question": "增肌期如何科学增重？", "answer": "建议每周体重增加0.25-0.5kg，避免脂肪增长过快。通过增加主食、优质蛋白和健康脂肪摄入，结合力量训练实现肌肉增长。", "category": "muscle" },
                { "question": "减脂期如何科学减重？", "answer": "建议每周体重下降0.5-1kg，避免肌肉流失。通过控制热量摄入、增加蛋白质比例和适量有氧训练实现健康减脂。", "category": "muscle" },
                { "question": "增肌和减脂可以同时进行吗？", "answer": "新手或体脂较高者可实现'增肌减脂'同步，但大多数人需分阶段进行。建议先增肌后减脂，或采用周期性调整。", "category": "muscle" },
                { "question": "增肌期碳水摄入有讲究吗？", "answer": "碳水是增肌期重要能量来源。建议每公斤体重摄入4-6g碳水，优先选择全谷物、糙米、燕麦等低GI食物。", "category": "muscle" },
                { "question": "减脂期如何防止肌肉流失？", "answer": "1. 保持高蛋白饮食（每公斤体重1.6-2g）；2. 维持力量训练强度；3. 避免极端低热量饮食；4. 保证充足睡眠和恢复。", "category": "muscle" },
                { "question": "增肌期需要做有氧吗？", "answer": "适量有氧有助于心肺健康和脂肪控制。建议每周1-2次中低强度有氧，每次20-30分钟，避免影响力量训练恢复。", "category": "muscle" },
                { "question": "减脂期可以做力量训练吗？", "answer": "必须做！力量训练有助于保留肌肉，提高基础代谢率，提升减脂效率。建议与有氧训练结合进行。", "category": "muscle" },
                { "question": "增肌期如何安排训练计划？", "answer": "建议每周训练4-6次，采用分部位训练法（如胸、背、腿、肩、手臂分开），每个部位每周训练2次。", "category": "muscle" },
                { "question": "减脂期如何安排饮食？", "answer": "1. 控制总热量摄入，创造热量缺口；2. 保持高蛋白、适量碳水和健康脂肪；3. 多吃蔬菜水果，补充膳食纤维。", "category": "muscle" },
                { "question": "增肌期如何判断增肌效果？", "answer": "1. 体重和围度逐步增加；2. 力量提升；3. 体脂率变化不大或略有上升；4. 训练后肌肉有泵感。", "category": "muscle" },
                { "question": "减脂期如何判断减脂效果？", "answer": "1. 体重和体脂率下降；2. 围度变小；3. 肌肉线条更明显；4. 精力和睡眠质量提升。", "category": "muscle" },
                { "question": "增肌期可以吃零食吗？", "answer": "可以适量吃健康零食，如坚果、酸奶、蛋白棒等，但需控制总热量，避免高糖高脂零食。", "category": "muscle" },
                { "question": "减脂期可以吃主食吗？", "answer": "可以，主食是能量来源。建议选择全谷物、糙米、燕麦等低GI主食，控制总量即可。", "category": "muscle" },
                { "question": "增肌期需要补充蛋白粉吗？", "answer": "优先通过天然食物获取蛋白质，实在不足时可适量补充蛋白粉。", "category": "muscle" },
                { "question": "减脂期如何应对饥饿感？", "answer": "1. 增加膳食纤维摄入；2. 多喝水；3. 分多餐进食；4. 选择低热量高饱腹感食物，如蔬菜、蛋白质类。", "category": "muscle" },
                { "question": "增肌期如何避免脂肪增长过快？", "answer": "1. 控制每周体重增长速度；2. 选择健康碳水和脂肪来源；3. 保持有氧训练；4. 定期监测体脂率。", "category": "muscle" },
                { "question": "减脂期如何避免新陈代谢下降？", "answer": "1. 保持力量训练；2. 避免极端低热量饮食；3. 保证充足蛋白质和睡眠；4. 可采用周期性加餐。", "category": "muscle" },
                { "question": "增肌期如何科学补剂？", "answer": "可适量补充乳清蛋白、肌酸、鱼油、复合维生素等，但应以饮食为主，补剂为辅。", "category": "muscle" },
                { "question": "减脂期如何科学补剂？", "answer": "可适量补充蛋白粉、左旋肉碱、复合维生素等，但应以饮食为主，补剂为辅。", "category": "muscle" },
                { "question": "增肌和减脂哪个更难？", "answer": "因人而异。增肌需长期坚持和科学训练，减脂需自律和饮食控制。建议根据自身目标分阶段进行。", "category": "muscle" }
            ]
        },
        {
            "id": "equipment",
            "name": "器械使用",
            "icon": "mdi-cog",
            "questions": [
                { "question": "器械和自由重量哪个更好？", "answer": "各有优劣。新手建议先用器械学习动作，自由重量更能锻炼核心和协调性。", "category": "equipment" },
                { "question": "如何正确使用史密斯机？", "answer": "史密斯机使用要点：1. 调整安全锁位置（建议在胸部高度）；2. 站姿保持中立，双脚与肩同宽；3. 杠铃轨迹应垂直上下，避免前后摆动；4. 动作过程中保持核心收紧；5. 注意呼吸节奏，发力时呼气。常见错误：过度依赖器械固定轨迹，忽视核心控制。", "category": "equipment" },
                { "question": "龙门架的正确使用方法是什么？", "answer": "龙门架使用技巧：1. 高度调整：根据训练动作调整滑轮高度（如高位下拉时滑轮应在头顶上方）；2. 重量选择：新手从轻重量开始，每组12-15次；3. 动作控制：保持动作轨迹稳定，避免借力；4. 常见训练：高位下拉、绳索划船、三头下压、二头弯举等。注意事项：训练前检查绳索磨损情况，确保安全扣正常工作。", "category": "equipment" },
                { "question": "如何选择适合自己的哑铃重量？", "answer": "哑铃重量选择标准：1. 力量训练：选择能完成8-12次的重量；2. 耐力训练：选择能完成15-20次的重量；3. 爆发力训练：选择能完成6-8次的重量。具体建议：男性新手从5-10kg开始，女性从2-5kg开始。进阶训练者可根据RM（最大重复次数）选择，如8RM重量。", "category": "equipment" },
                { "question": "深蹲架的安全使用要点有哪些？", "answer": "深蹲架安全使用要点：1. 安全销设置：调整到略低于深蹲最低点；2. 杠铃高度：调整到肩部高度，便于取放；3. 站位：双脚与肩同宽，脚尖略微外展；4. 保护措施：使用安全销或请保护者协助；5. 重量选择：新手从空杠开始，逐步增加重量。注意事项：每次训练前检查安全销是否牢固，杠铃是否平衡。", "category": "equipment" },
                { "question": "如何正确使用划船机？", "answer": "划船机使用技巧：1. 姿势：坐姿保持挺直，核心收紧；2. 动作顺序：推腿→后仰→拉手→还原；3. 阻力设置：新手从3-4档开始，逐步增加；4. 训练计划：建议20-30分钟，心率保持在最大心率的60-80%；5. 常见错误：过度后仰、手臂发力过早、动作不连贯。进阶技巧：可进行间歇训练，如30秒高强度+30秒低强度。", "category": "equipment" },
                { "question": "椭圆机的正确使用姿势是什么？", "answer": "椭圆机使用要点：1. 站姿：保持挺胸收腹，重心居中；2. 步幅：根据身高调整，避免过度伸展；3. 阻力：新手从3-4档开始，逐步增加；4. 训练时间：建议20-40分钟，心率保持在最大心率的60-80%；5. 常见错误：身体左右摇摆、过度依赖扶手、步幅过大。进阶训练：可进行HIIT训练，如1分钟高强度+1分钟低强度。", "category": "equipment" },
                { "question": "如何正确使用卧推架？", "answer": "卧推架使用技巧：1. 姿势：平躺时肩胛骨收紧，腰部自然拱起；2. 握距：略宽于肩，保持手腕中立；3. 动作轨迹：杠铃垂直上下，避免前后摆动；4. 保护措施：使用安全销或请保护者协助；5. 重量选择：新手从空杠开始，逐步增加。注意事项：每次训练前检查安全销位置，确保杠铃平衡。", "category": "equipment" },
                { "question": "动感单车的正确使用方法是什么？", "answer": "动感单车使用要点：1. 座椅调整：高度与髋关节平齐，前后位置以膝盖微屈为准；2. 把手调整：高度略高于座椅，距离以舒适为准；3. 阻力设置：新手从2-3档开始，逐步增加；4. 训练计划：建议30-45分钟，心率保持在最大心率的60-80%；5. 常见错误：座椅过高/过低、阻力过大、姿势不正确。进阶训练：可进行爬坡训练、冲刺训练等。", "category": "equipment" },
                { "question": "如何正确使用引体向上器械？", "answer": "引体向上器械使用技巧：1. 握距：正握略宽于肩，反握与肩同宽；2. 起始姿势：完全放松，肩胛骨下沉；3. 动作过程：保持核心收紧，避免摆动；4. 辅助训练：可使用弹力带或辅助器械；5. 进阶方法：从3-5次开始，逐步增加次数。注意事项：训练前检查器械稳定性，确保安全。", "category": "equipment" },
                { "question": "如何正确使用倒蹬机？", "answer": "倒蹬机使用要点：1. 座椅调整：背部完全贴合靠背，膝盖微屈；2. 脚位：与肩同宽，脚尖略微外展；3. 动作范围：保持膝盖与脚尖方向一致；4. 重量选择：新手从轻重量开始，每组12-15次；5. 常见错误：膝盖内扣、动作幅度过大、借力。注意事项：训练前检查安全销位置，确保器械稳定性。", "category": "equipment" },
                { "question": "如何正确使用坐姿推胸机？", "answer": "坐姿推胸机使用技巧：1. 座椅调整：手柄与胸部平齐；2. 握距：略宽于肩，保持手腕中立；3. 动作过程：保持核心收紧，避免借力；4. 重量选择：新手从轻重量开始，每组12-15次；5. 常见错误：过度后仰、手臂发力过早、动作不连贯。注意事项：训练前检查器械稳定性，确保安全。", "category": "equipment" },
                { "question": "如何正确使用坐姿划船机？", "answer": "坐姿划船机使用要点：1. 座椅调整：胸部贴近靠垫；2. 握距：与肩同宽，保持手腕中立；3. 动作过程：保持核心收紧，避免借力；4. 重量选择：新手从轻重量开始，每组12-15次；5. 常见错误：过度后仰、手臂发力过早、动作不连贯。注意事项：训练前检查器械稳定性，确保安全。", "category": "equipment" },
                { "question": "如何正确使用坐姿腿屈伸机？", "answer": "坐姿腿屈伸机使用技巧：1. 座椅调整：膝盖与转轴对齐；2. 靠垫位置：调整到舒适位置；3. 动作过程：保持核心收紧，避免借力；4. 重量选择：新手从轻重量开始，每组12-15次；5. 常见错误：动作幅度过大、借力、膝盖内扣。注意事项：训练前检查器械稳定性，确保安全。", "category": "equipment" },
                { "question": "如何正确使用坐姿腿弯举机？", "answer": "坐姿腿弯举机使用要点：1. 座椅调整：膝盖与转轴对齐；2. 靠垫位置：调整到舒适位置；3. 动作过程：保持核心收紧，避免借力；4. 重量选择：新手从轻重量开始，每组12-15次；5. 常见错误：动作幅度过大、借力、膝盖内扣。注意事项：训练前检查器械稳定性，确保安全。", "category": "equipment" }
            ]
        },
        {
            "id": "mistakes",
            "name": "健身误区",
            "icon": "mdi-alert-circle",
            "questions": [
                { "question": "如何避免健身受伤？", "answer": "注意热身、动作标准、循序渐进增加强度，训练后拉伸，出现不适及时调整训练计划。", "category": "mistakes" },
                { "question": "女生练力量会变成金刚芭比吗？", "answer": "不会。女性体内睾酮水平较低，力量训练主要让身材更紧致有型，不会变成\"金刚芭比\"。", "category": "mistakes" },
                { "question": "只做有氧能减脂吗？", "answer": "只做有氧虽然能消耗热量，但容易导致肌肉流失，减脂效率下降。建议有氧与力量训练结合，提升基础代谢和减脂效果。", "category": "mistakes" },
                { "question": "健身一定要吃补剂吗？", "answer": "补剂只是辅助，优先保证饮食均衡。大部分营养可通过天然食物获得，补剂仅在饮食无法满足需求时考虑。", "category": "mistakes" },
                { "question": "出汗越多减脂越快吗？", "answer": "出汗多主要是水分流失，与脂肪消耗关系不大。减脂关键在于热量缺口和长期坚持。", "category": "mistakes" },
                { "question": "空腹有氧更减脂吗？", "answer": "空腹有氧对减脂帮助有限，长期坚持更重要。建议根据个人习惯选择锻炼时间。", "category": "mistakes" },
                { "question": "局部减脂有效吗？", "answer": "局部减脂是误区，脂肪减少是全身性的。通过全身训练和饮食控制实现整体减脂。", "category": "mistakes" },
                { "question": "练腹肌就能有马甲线吗？", "answer": "腹肌训练能增强腹部肌肉，但要显现马甲线需降低体脂率。建议结合全身训练和饮食管理。", "category": "mistakes" },
                { "question": "健身后体重不降就是没效果吗？", "answer": "体重受多种因素影响，围度、体脂率等更能反映健身效果。增肌期体重可能上升但体型更好。", "category": "mistakes" },
                { "question": "年纪大了不适合健身吗？", "answer": "任何年龄都可以健身。中老年人通过科学训练可提升体能、预防慢病、改善生活质量。", "category": "mistakes" },
                { "question": "健身一定要去健身房吗？", "answer": "不一定。家用哑铃、弹力带、自重训练同样有效，关键是坚持和科学训练。", "category": "mistakes" },
                { "question": "只做仰卧起坐能减肚子吗？", "answer": "仰卧起坐主要锻炼腹部肌肉，对局部减脂作用有限。建议全身训练和饮食控制相结合。", "category": "mistakes" },
                { "question": "健身后不能吃碳水吗？", "answer": "训练后适量补充碳水有助于恢复和肌肉合成。完全不吃碳水反而影响训练效果和健康。", "category": "mistakes" },
                { "question": "健身一定要每天练吗？", "answer": "不需要。合理安排训练与休息，保证身体恢复，反而能提升训练效果。", "category": "mistakes" },
                { "question": "健身后马上洗澡有害吗？", "answer": "训练后休息10-15分钟，待心率恢复正常再洗澡即可。没有科学证据表明马上洗澡有害。", "category": "mistakes" }
            ]
        },
        {
            "id": "special",
            "name": "特殊人群",
            "icon": "mdi-account-group",
            "questions": [
                { "question": "健身新手如何开始第一次训练？", "answer": "建议从全身性训练开始，每周2-3次，动作以基础复合动作为主（如深蹲、推胸、划船等），强度保持中等，每个动作做2-3组，每组12-15次。重点放在掌握正确动作形式上，可以考虑请教练指导或观看专业教学视频。", "category": "special" },
                { "question": "中老年人如何安全健身？", "answer": "中老年健身原则：1. 充分热身（10-15分钟）；2. 强度适中（心率控制在最大心率60-70%）；3. 以低冲击训练为主（游泳、快走、器械）；4. 重视肌肉维持（轻重量、高次数）；5. 平衡训练（太极、单腿站立）；6. 灵活性训练（每日拉伸）；7. 每周锻炼3-5天，每次30-60分钟；8. 有基础疾病需遵医嘱。", "category": "special" },
                { "question": "青少年健身有哪些注意事项？", "answer": "青少年健身指南：1. 以体能和技术为主，不追求大重量；2. 复合动作训练（深蹲、俯卧撑等）；3. 避免过度专项训练，保持多样性；4. 每周3-4次，每次45-60分钟；5. 注重技术而非重量；6. 确保充足休息和营养；7. 避免使用增肌补剂；8. 成年人陪同指导；9. 如感到疼痛立即停止。", "category": "special" },
                { "question": "孕期女性如何安全锻炼？", "answer": "孕期健身建议：1. 咨询医生获得锻炼许可；2. 低强度有氧（散步、游泳）；3. 孕期专属瑜伽；4. 避免俯卧、仰卧和高强度训练；5. 保持充分水分；6. 听从身体信号，感到不适立即停止；7. 穿着舒适支撑性好的运动装备；8. 每周3-5次，每次15-30分钟；9. 第三孕期需特别谨慎，减少锻炼时间和强度。", "category": "special" },
                { "question": "产后多久可以开始健身？", "answer": "顺产一般6周后，剖腹产8-10周后可在医生许可下逐步恢复锻炼。建议：1. 从盆底肌训练开始；2. 轻度核心训练（腹式呼吸、平板支撑）；3. 低强度有氧（散步）；4. 循序渐进增加强度；5. 避免高冲击和重力训练；6. 注意姿势，避免脊柱压力；7. 保持水分和营养；8. 如有不适立即停止并咨询医生。", "category": "special" },
                { "question": "初学者如何制定科学的训练计划？", "answer": "初学者训练计划原则：1. 全身性训练（周一/三/五）或上下分化（周一/二/四/五）；2. 每周训练3-4天；3. 主要动作：深蹲、卧推、划船、肩推、硬拉变种；4. 每个动作2-3组，12-15次；5. 重量以能完成规定组数且保持标准动作为宜；6. 保证48小时肌群恢复；7. 每4-6周调整计划；8. 记录训练数据评估进展；9. 训练前充分热身，训练后拉伸。", "category": "special" },
                { "question": "糖尿病患者如何安全健身？", "answer": "糖尿病健身指南：1. 必须获得医生许可；2. 混合训练模式（有氧+力量）；3. 中低强度（心率控制在最大心率60-70%）；4. 随身携带糖果或葡萄糖片；5. 训练前后检测血糖；6. 注意水分补充；7. 穿着合适的鞋袜，保护足部；8. 避免在用药高峰期锻炼；9. 每周锻炼3-5天，每次20-30分钟；10. 如有不适（头晕、心慌）立即停止。", "category": "special" },
                { "question": "高血压患者适合什么健身方式？", "answer": "高血压健身原则：1. 医生评估和许可；2. 以有氧为主（步行、游泳、骑车）；3. 低强度（心率不超过最大心率70%）；4. 避免屏气和高强度举重；5. 循序渐进增加时间和强度；6. 避免头部低于心脏的姿势；7. 随时监测感受和症状；8. 每周5天，每次30分钟；9. 训练后充分放松；10. 保持规律锻炼比单次长时间锻炼更有效。", "category": "special" },
                { "question": "久坐办公族如何科学健身？", "answer": "办公族健身策略：1. 工作中：每小时起身活动5分钟，伸展腰背和颈部；2. 利用午休：15-20分钟步行或简单力量训练；3. 工作后训练：侧重背部和核心（划船、反向飞鸟、平板支撑）；4. 改善姿势训练：肩膀后拉、胸部拉伸；5. 下肢训练：深蹲变化、臀桥；6. 有氧建议：HIIT高效燃脂（20分钟）；7. 周末增加户外活动；8. 工作中使用站立式办公桌；9. 通勤选择步行或骑行方式。", "category": "special" },
                { "question": "肥胖人群如何开始健身？", "answer": "肥胖人群健身建议：1. 低冲击训练（游泳、椭圆机、固定自行车）减少关节压力；2. 力量训练采用器械而非自由重量；3. 从每周2-3天开始，每次20-30分钟；4. 心率控制在最大心率50-65%；5. 结合饮食控制（创造合理热量缺口）；6. 穿着支撑性好的运动装备；7. 训练伙伴或教练监督；8. 设定合理短期目标；9. 采用分段训练（如10分钟训练，休息5分钟，再10分钟）；10. 记录训练日志跟踪进展。", "category": "special" },
                { "question": "脊柱侧弯患者可以健身吗？", "answer": "脊柱侧弯健身指南：1. 必须先咨询医师和理疗师；2. 对称性训练为主（双侧平衡发展）；3. 核心稳定训练（平板支撑、死虫式）；4. 游泳特别推荐（尤其是蛙泳）；5. 避免高冲击和旋转动作；6. 避免单侧负重训练；7. 重视姿势矫正训练；8. 瑜伽和普拉提可在专业指导下进行；9. 使用镜子监控姿势；10. 如训练中感到疼痛立即停止。", "category": "special" },
                { "question": "膝关节问题人群如何健身？", "answer": "膝关节问题健身策略：1. 低冲击训练（游泳、椭圆机）；2. 加强大腿肌群（股四头肌、腘绳肌）；3. 控制深蹲深度（不超过膝盖90度弯曲）；4. 使用护膝提供支撑；5. 加强髋部和核心训练（减轻膝盖负担）；6. 训练后冰敷减轻炎症；7. 避免负重登山和下坡跑；8. 调整步态和姿势减轻膝盖压力；9. 保持健康体重；10. 循序渐进增加训练量和强度。", "category": "special" },
                { "question": "青少年健身会影响身高发育吗？", "answer": "科学健身不会阻碍身高发育，关键点：1. 避免过重负荷（尤其脊柱垂直加压）；2. 不使用增肌补剂和蛋白粉；3. 充分热身和恢复；4. 多样化训练（不过度专项）；5. 保证充足睡眠（8-10小时）；6. 均衡营养（富含钙、蛋白质和维生素D）；7. 以技术和耐力为重点而非力量；8. 专业指导下进行训练；9. 如有发育问题立即咨询医生。", "category": "special" }
            ]
        }
    ]
}