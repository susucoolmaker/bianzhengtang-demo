const DATA = {
  brand: "辨证堂",
  clinic: {
    name: "小满医馆",
    level: "初入杏林",
    slogan: "不是刷题，而是坐诊",
    skill: "失眠辨证入门",
    scene: "今日有 3 位虚拟病人候诊，1 位病人正在模拟服药，1 位病人需要复诊调方",
    stats: [
      ["今日候诊", 3],
      ["正在服药", 1],
      ["待复诊", 1],
      ["累计病案", 5]
    ],
    reminder: {
      patient: "陈女士",
      status: "服药第2天",
      feedback: "腹胀加重，睡眠略有改善。",
      suggestion: "请判断是否需要调整方药。"
    }
  },
  patients: [
    {
      id: "lin",
      icon: "眠",
      name: "林女士",
      age: "32岁",
      identity: "设计师",
      complaint: "失眠半年，入睡困难",
      status: "最近压力大，经前烦躁明显，想知道为什么总睡不好。",
      focus: "情志失眠 / 肝郁与心神关系 / 方药加减",
      difficulty: "入门",
      tags: ["情志", "睡眠", "肝郁"],
      description: "最近半年一直睡不好，躺下很久才能睡着，心里烦，容易叹气，月经前乳房胀痛。",
      patientProfile: {
        name: "林女士",
        age: "32岁",
        identity: "设计师",
        avatar: "./assets/patients/lin-avatar.png",
        icon: "🌙",
        images: {
          initial: "./assets/patients/lin-insomnia-initial.png",
          day2: "./assets/patients/lin-insomnia-day2.png",
          recovered: "./assets/patients/lin-insomnia-recovered.png"
        },
        visualState: {
          initial: "坐在电脑前，黑眼圈明显，手扶额头，神情烦闷。",
          day1: "表情稍缓和，但仍有疲惫感。",
          day2: "坐在桌前喝热茶，眉头舒展一些。",
          recovered: "神情平和，准备合上电脑休息。"
        },
        today: "压力大，入睡困难，多梦，情绪烦闷，经前乳房胀痛。",
        result: "入睡明显改善，多梦减少，情绪较平稳。",
        badge: "情志初辨"
      },
      basics: {
        职业: "设计师",
        情绪: "压力大，容易急躁",
        饮食: "食欲一般",
        睡眠: "入睡困难，多梦",
        二便: "大便基本正常",
        舌象: "舌淡红，苔薄白",
        脉象: "脉弦"
      }
    },
    {
      id: "zhou",
      icon: "寒",
      name: "周同学",
      age: "21岁",
      identity: "大学生",
      complaint: "鼻塞、喷嚏、怕冷、咳嗽 1 天",
      status: "明天有考试，昨晚空调开得低又吹了风。今天一直打喷嚏、流清鼻涕，头痛身痛，怕冷得想裹着被子。",
      focus: "风寒 / 风热 / 暑湿感冒鉴别，方药与中成药选择",
      difficulty: "入门",
      tags: ["风寒", "感冒", "方药"],
      description: "我明天还有考试，结果今天一直打喷嚏、流清鼻涕，头也痛，身上酸，特别怕冷。昨天晚上空调开得有点低，还吹了风。体温量了一下 37.5℃，嗓子有点不舒服，但不是特别疼。",
      patientProfile: {
        name: "周同学",
        age: "21岁",
        identity: "大学生",
        avatar: "./assets/patients/zhou-avatar.png",
        icon: "🤧",
        images: {
          initial: "./assets/patients/zhou-cold-initial.png",
          day2: "./assets/patients/zhou-cold-day2.png",
          recovered: "./assets/patients/zhou-cold-recovered.png"
        },
        visualState: {
          initial: "裹着外套，拿着纸巾，鼻尖微红，表情有点焦急。",
          day1: "裹着外套，手里还拿着纸巾，表情稍缓和。",
          day2: "外套稍微敞开，纸巾减少，表情比初诊轻松。",
          recovered: "精神恢复，坐在书桌前，状态轻松。"
        },
        today: "怕冷明显，流清涕，头痛身痛，明天有考试有点着急。",
        result: "鼻塞基本缓解，身痛明显减轻，低热消退。",
        badge: "风寒初辨"
      },
      basics: {
        "职业/身份": "大学生",
        起病诱因: "空调低温、吹风后发作",
        寒热: "怕冷明显，发热轻",
        汗出: "无明显出汗",
        鼻涕: "清稀",
        咳痰: "少量白稀痰",
        咽喉: "轻微不适，不明显红肿疼痛",
        舌象: "舌淡红，苔薄白",
        脉象: "脉浮紧"
      },
      masteredInfo: ["起病诱因", "怕冷", "鼻涕", "咳嗽", "舌象", "脉象"],
      pendingInfo: ["汗出", "咽痛", "痰色", "胃肠症状", "口渴"],
      questions: [
        { key: "汗", question: "有没有出汗？" },
        { key: "鼻涕", question: "鼻涕是清稀还是黄稠？" },
        { key: "咽痛", question: "咽喉是否红肿疼痛？" },
        { key: "痰", question: "痰是白稀还是黄稠？" },
        { key: "怕冷", question: "怕冷明显还是发热明显？" },
        { key: "口渴", question: "是否口渴想喝冷水？" },
        { key: "胃肠", question: "是否有腹胀、恶心、腹泻？" }
      ],
      knowledgeBase: [
        { key: "怕冷", aliases: ["怕冷", "恶寒", "发热明显", "怕冷明显"], answer: "怕冷比较明显，比发热更明显，盖上被子会舒服些。", relevance: "high" },
        { key: "发热", aliases: ["发热", "体温", "高热", "低热"], answer: "体温 37.5℃，有点低热，但没有明显高热。", relevance: "medium" },
        { key: "汗", aliases: ["汗", "出汗", "汗出", "无汗", "发汗", "有汗"], answer: "没有明显出汗。", relevance: "high" },
        { key: "鼻涕", aliases: ["鼻涕", "流涕", "黄稠", "清稀"], answer: "鼻涕是清稀的，不黄不稠。", relevance: "high" },
        { key: "清涕", aliases: ["清涕", "清鼻涕"], answer: "鼻涕清稀，像水一样。", relevance: "high" },
        { key: "咽喉", aliases: ["咽喉", "嗓子", "发痒", "红肿"], answer: "嗓子有点不舒服，更像发痒，不是明显红肿疼痛。", relevance: "medium" },
        { key: "咽痛", aliases: ["咽痛", "喉咙痛", "疼痛"], answer: "不明显咽痛，也没有明显红肿。", relevance: "medium" },
        { key: "痰", aliases: ["痰", "痰色", "咳痰", "白痰", "黄痰"], answer: "痰不多，是白色偏稀的痰。", relevance: "high" },
        { key: "头痛", aliases: ["头痛", "后脑", "项背"], answer: "头有点痛，后脑和项背部有点紧。", relevance: "medium" },
        { key: "身痛", aliases: ["身痛", "酸痛", "身上酸", "头痛身痛"], answer: "身上酸痛明显，像受凉后那种酸痛。", relevance: "medium" },
        { key: "口渴", aliases: ["口渴", "冷水", "想喝水"], answer: "不怎么口渴，也不特别想喝冷水。", relevance: "medium" },
        { key: "胃肠", aliases: ["胃肠", "腹胀", "恶心", "腹泻"], answer: "没有明显腹胀、恶心、腹泻。", relevance: "medium" },
        { key: "腹泻", aliases: ["腹泻", "拉肚子"], answer: "没有腹泻。", relevance: "medium" },
        { key: "空调", aliases: ["空调", "低温"], answer: "昨晚空调开得比较低，还吹了风，之后开始不舒服。", relevance: "high" },
        { key: "吹风", aliases: ["吹风", "受风"], answer: "昨晚吹风后开始鼻塞、喷嚏、怕冷。", relevance: "high" }
      ]
    },
    {
      id: "wang",
      icon: "胃",
      name: "王先生",
      age: "45岁",
      identity: "销售经理",
      complaint: "胃胀反酸，饭后明显",
      status: "工作应酬多，饮食不规律，最近饭后胃胀、反酸明显，常觉得胸脘堵闷。",
      focus: "脾胃气机 / 饮食内伤 / 胃脘不适辨证",
      difficulty: "进阶",
      tags: ["脾胃", "气机", "痰湿"]
      ,
      patientProfile: {
        name: "王先生",
        age: "45岁",
        identity: "销售经理",
        avatar: "./assets/patients/wang-avatar.png",
        icon: "🍵",
        images: {
          initial: "./assets/patients/wang-stomach-initial.png",
          day2: "./assets/patients/wang-stomach-day2.png",
          recovered: "./assets/patients/wang-stomach-recovered.png"
        },
        visualState: {
          initial: "饭后轻捂上腹，表情胀闷，有反酸不适感。",
          day2: "坐姿放松一些，饭后胀感减轻，但仍有轻微不适。",
          recovered: "面色平和，饮食清淡，状态稳定。"
        },
        today: "工作应酬多，饮食不规律，饭后胃胀反酸，胸脘堵闷。",
        result: "胃胀反酸减轻，饮食状态较稳定。",
        badge: "脾胃观察"
      }
    }
  ],
  masteredInfo: ["主诉", "情绪", "睡眠", "舌象", "脉象"],
  pendingInfo: ["病程", "寒热", "胸胁", "月经", "心悸", "饮食二便", "潮热盗汗", "痰多胸闷"],
  questions: [
    { key: "口苦咽干", question: "是否口苦咽干？" },
    { key: "胸胁胀满", question: "是否胸胁胀满？" },
    { key: "心悸健忘", question: "是否心悸健忘？" },
    { key: "月经", question: "月经情况如何？" },
    { key: "纳差便溏", question: "是否纳差便溏？" },
    { key: "潮热盗汗", question: "是否潮热盗汗？" },
    { key: "痰多胸闷", question: "是否痰多胸闷？" }
  ],
  patientKnowledgeBase: [
    { key: "病程", aliases: ["病程", "多久", "多长时间", "几天", "几个月", "几年", "什么时候开始", "持续多久", "这种情况多久"], answer: "这种情况大概有半年了，最近压力大的时候更明显。", relevance: "high" },
    { key: "口苦咽干", aliases: ["口苦咽干", "口苦", "咽干", "口干"], answer: "偶尔口干，不明显口苦。", relevance: "medium" },
    { key: "胸胁胀满", aliases: ["胸胁胀满", "胸胁", "胁胀", "胀满"], answer: "经前胸胁胀满明显，乳房胀痛也会加重。", relevance: "high" },
    { key: "心悸健忘", aliases: ["心悸健忘", "心悸", "心慌", "健忘"], answer: "偶尔心慌，但不明显健忘。", relevance: "medium" },
    { key: "月经", aliases: ["月经", "经前", "经量", "经期"], answer: "经前情绪波动大，乳房胀痛，经量基本正常。", relevance: "high" },
    { key: "纳差便溏", aliases: ["纳差便溏", "纳差", "便溏"], answer: "食欲一般，大便不稀。", relevance: "medium" },
    { key: "饮食", aliases: ["饮食", "食欲", "胃口", "吃饭"], answer: "食欲一般，最近没有明显变化。", relevance: "medium" },
    { key: "大便", aliases: ["大便", "便秘", "腹泻"], answer: "大便基本正常，不稀，也不明显便秘。", relevance: "medium" },
    { key: "潮热盗汗", aliases: ["潮热盗汗", "潮热", "盗汗", "出汗"], answer: "没有明显潮热盗汗。", relevance: "medium" },
    { key: "痰多胸闷", aliases: ["痰多胸闷", "痰多", "胸闷", "痰"], answer: "没有明显痰多，偶尔胸闷，更多是在情绪紧张时出现。", relevance: "medium" },
    { key: "怕冷怕热", aliases: ["怕冷怕热", "怕冷", "怕热", "寒热"], answer: "没有明显怕冷，也没有明显怕热。", relevance: "low-medium" },
    { key: "小便", aliases: ["小便", "尿"], answer: "小便基本正常。", relevance: "low" },
    { key: "睡眠", aliases: ["睡眠", "失眠", "入睡", "多梦", "夜醒"], answer: "主要是入睡困难，多梦，夜间容易醒。", relevance: "medium" },
    { key: "情绪", aliases: ["情绪", "压力", "急躁", "叹气", "烦躁"], answer: "最近压力比较大，容易急躁，也容易叹气。", relevance: "medium" },
    { key: "乳房胀痛", aliases: ["乳房胀痛", "乳胀", "乳房"], answer: "月经前乳房胀痛比较明显。", relevance: "high" }
  ],
  diagnosis: {
    八纲判断: { multi: true, options: ["寒", "热", "虚", "实", "表", "里"], selected: ["里", "实"] },
    病位判断: { multi: true, options: ["肝", "心", "脾", "肾", "胆"], selected: ["肝", "心"] },
    主证判断: { options: ["肝郁气滞", "心脾两虚", "阴虚火旺", "痰热扰心", "心胆气虚"], selected: ["肝郁气滞"] },
    治法选择: { options: ["疏肝解郁，养血安神", "补益心脾，养血安神", "滋阴降火，清心安神", "清热化痰，和中安神", "益气镇惊，安神定志"], selected: ["疏肝解郁，养血安神"] },
    参考方选择: { options: ["逍遥散合酸枣仁汤加减", "归脾汤加减", "黄连阿胶汤加减", "温胆汤加减", "安神定志丸加减"], selected: ["逍遥散合酸枣仁汤加减"] }
  },
  coldDiagnosis: {
    证型判断: { options: ["风寒感冒", "风热感冒", "暑湿感冒", "气虚感冒", "阴虚感冒"], selected: ["风寒感冒"] },
    治法选择: { options: ["辛温解表，宣肺散寒", "辛凉解表，疏风清热", "清暑祛湿，解表和中", "益气解表", "滋阴解表"], selected: ["辛温解表，宣肺散寒"] },
    方剂选择: { options: ["荆防败毒散加减", "麻黄汤加减", "桂枝汤加减", "银翘散加减", "桑菊饮加减", "新加香薷饮加减", "白虎加人参汤"], selected: ["荆防败毒散加减"] },
    中药配方选择: {
      multi: true,
      options: ["荆芥", "金银花", "防风", "连翘", "羌活", "薄荷", "独活", "牛蒡子", "柴胡", "黄芩", "前胡", "石膏", "桔梗", "香薷", "枳壳", "藿香", "茯苓", "佩兰", "川芎", "麦冬", "甘草", "沙参", "生姜"],
      selected: []
    },
    中成药选择: {
      multi: true,
      options: ["风寒感冒颗粒", "荆防颗粒", "感冒清热颗粒", "银翘解毒丸", "桑菊感冒片", "藿香正气水", "双黄连口服液", "连花清瘟胶囊"],
      selected: []
    }
  },
  coldAnswer: {
    syndrome: "风寒感冒",
    method: "辛温解表，宣肺散寒",
    formula: "荆防败毒散加减",
    formulaGraph: {
      "荆防败毒散加减": { syndrome: "风寒", relation: "本案首选", score: 92, note: "图谱中由风寒节点强连接到荆防败毒散。本案恶寒重、无汗、清涕、身痛、苔薄白、脉浮紧，方向最匹配。" },
      "麻黄汤加减": { syndrome: "风寒", relation: "相关但需辨别", score: 78, note: "麻黄汤也属于风寒表实方向，和无汗、恶寒、身痛有关；但本案是普通感冒训练，鼻塞喷嚏、咳嗽清涕更适合先用荆防败毒散方向。" },
      "桂枝汤加减": { syndrome: "风寒", relation: "相关但证据不足", score: 66, note: "桂枝汤偏风寒表虚、有汗、营卫不和。本案明确无汗，因此与图谱风寒节点有关，但不是本案主线。" },
      "银翘散加减": { syndrome: "风热", relation: "证型偏离", score: 58, note: "银翘散经风热节点连接，需发热重、咽痛、口渴、黄涕黄痰等证据。本案这些证据不足。" },
      "桑菊饮加减": { syndrome: "风热", relation: "证型偏离", score: 56, note: "桑菊饮偏风热咳嗽方向。本案痰白清稀、恶寒明显，更支持风寒。" },
      "新加香薷饮加减": { syndrome: "暑湿", relation: "证型偏离", score: 60, note: "新加香薷饮经暑湿节点连接，需暑湿环境、身热不扬、胃肠湿阻等证据。本案胃肠症状不突出。" },
      "白虎加人参汤": { syndrome: "热盛/气津两伤", relation: "不匹配", score: 45, note: "白虎加人参汤偏气分热盛、气津两伤方向，需高热、汗出、口渴、脉洪大等证据。本案不符合。" }
    },
    herbs: ["荆芥", "防风", "羌活", "独活", "柴胡", "前胡", "桔梗", "枳壳", "茯苓", "川芎", "甘草", "生姜"],
    herbFunctions: {
      荆芥: "疏风解表",
      防风: "祛风解表",
      羌活: "散寒止痛",
      独活: "祛风除湿",
      柴胡: "疏散退热",
      前胡: "宣肺化痰",
      桔梗: "宣肺利咽",
      枳壳: "理气宽中",
      茯苓: "健脾渗湿",
      川芎: "行气止痛",
      甘草: "调和诸药",
      生姜: "散寒和胃",
      金银花: "清热解毒",
      连翘: "清热散结",
      薄荷: "疏散风热",
      牛蒡子: "利咽透疹",
      黄芩: "清热燥湿",
      石膏: "清气分热",
      香薷: "解表化湿",
      藿香: "化湿和中",
      佩兰: "芳香化湿",
      麦冬: "养阴润肺",
      沙参: "养阴清肺"
    },
    herbDosage: {
      荆芥: "9g",
      防风: "9g",
      羌活: "6g",
      独活: "6g",
      柴胡: "9g",
      前胡: "9g",
      桔梗: "6g",
      枳壳: "6g",
      茯苓: "12g",
      川芎: "6g",
      甘草: "3g",
      生姜: "3片",
      金银花: "12g",
      连翘: "12g",
      薄荷: "6g",
      牛蒡子: "9g",
      黄芩: "9g",
      石膏: "15g",
      香薷: "9g",
      藿香: "9g",
      佩兰: "9g",
      麦冬: "12g",
      沙参: "12g"
    },
    coldHerbs: ["金银花", "连翘", "石膏", "黄芩"],
    patent: ["风寒感冒颗粒", "荆防颗粒", "感冒清热颗粒"],
    inquiryTips: {
      汗: "无汗 → 支持风寒束表判断。",
      鼻涕: "清涕 → 更偏寒象，可用于鉴别风热感冒。",
      清涕: "清涕 → 更偏寒象，可用于鉴别风热感冒。",
      咽喉: "明显咽痛、红肿不突出 → 暂不支持典型风热咽痛。",
      咽痛: "明显咽痛、红肿不突出 → 暂不支持典型风热咽痛。",
      胃肠: "胃肠症状不明显 → 暑湿感冒证据不足。",
      怕冷: "恶寒较重 → 更支持风寒外束。",
      痰: "痰白清稀 → 更偏寒象，不支持痰热主线。",
      口渴: "不明显口渴 → 热象证据不足。",
      舌象: "苔薄白 → 更支持表寒或寒热不重。",
      脉象: "脉浮紧 → 风寒束表的重要证据。"
    },
    choiceTips: {
      风寒感冒: "当前证据中“恶寒明显、无汗、清涕、痰白、苔薄白、脉浮紧”与风寒感冒较吻合。",
      风热感冒: "请注意：本案虽有低热和咽部不适，但缺少明显咽痛、口渴、黄涕、黄痰、苔黄、脉浮数等风热证据。",
      暑湿感冒: "请注意：本案胃肠症状不明显，暑湿证据不足。需要关注是否有腹胀、恶心、腹泻、身重困倦等表现。",
      气虚感冒: "请注意：本案起病较急，外感风寒证据更明显，暂未见反复感冒、自汗、乏力气短等气虚主线。",
      阴虚感冒: "请注意：本案暂未见明显口干咽燥、潮热盗汗、舌红少苔等阴虚证据。",
      "辛温解表，宣肺散寒": "治法方向与风寒束表较匹配。",
      "辛凉解表，疏风清热": "该治法更偏风热证，本案热象不突出，需谨慎。",
      "荆防败毒散加减": "该方方向偏疏风散寒，适合外感风寒、头痛身痛、无汗等表现。",
      "麻黄汤加减": "麻黄汤也在风寒节点下，偏风寒表实、无汗身痛；但本案普通感冒训练中，荆防败毒散方向更贴合。",
      "桂枝汤加减": "桂枝汤也可连到风寒节点，但偏表虚有汗、营卫不和。本案无汗，匹配度不如荆防败毒散。",
      "银翘散加减": "银翘散经风热节点连接，多用于风热表证。本案风寒证据更明显。",
      "桑菊饮加减": "桑菊饮偏风热咳嗽方向，本案痰白清稀、恶寒明显，不是主线。",
      "新加香薷饮加减": "新加香薷饮经暑湿节点连接，本案胃肠湿阻证据不足。",
      "白虎加人参汤": "白虎加人参汤偏气分热盛、气津两伤，本案无高热汗出、口渴、脉洪大等证据。"
    },
    herbTips: {
      荆芥: "荆芥：疏风解表，适合外感风寒初起。",
      防风: "防风：祛风解表，可帮助解除表邪。",
      羌活: "羌活：散寒止痛，适合头痛、项背酸痛较明显。",
      前胡: "前胡：宣肺化痰，适合外感兼咳痰。",
      甘草: "甘草：调和诸药，常用于方中协调药性。",
      金银花: "金银花偏清热解毒，多用于风热或热毒，本案热象不明显，不宜作为主线。",
      连翘: "连翘偏清热散结，多用于风热方向，本案风寒证据更强。",
      石膏: "石膏偏清气分实热，本案无高热、口渴、苔黄等明显实热证据。",
      藿香: "藿香偏化湿和中，本案胃肠湿困表现不突出。",
      麦冬: "麦冬偏养阴润肺，本案暂未见明显阴虚燥热证据。"
    },
    patentTips: {
      风寒感冒颗粒: "更符合风寒外束、恶寒重、清涕、无汗等方向。",
      荆防颗粒: "偏疏风散寒，适合本案风寒表证方向。",
      感冒清热颗粒: "常用于风寒感冒兼头痛发热、恶寒身痛等表现，方向较匹配。",
      银翘解毒丸: "偏风热表证，适用于发热重、咽痛、口渴、黄涕等情况。本案不是首选。",
      桑菊感冒片: "偏风热咳嗽方向，本案痰白清稀、寒象更明显。",
      藿香正气水: "偏暑湿或外感夹湿，适用于胃肠症状明显者。本案胃肠症状不突出。",
      双黄连口服液: "偏风热或热毒方向，本案风寒证据更强。",
      连花清瘟胶囊: "偏热毒、风热夹毒等方向，本案不是首选。"
    }
  },
  prescriptions: {
    "逍遥散合酸枣仁汤加减": ["柴胡", "白芍", "当归", "茯苓", "白术", "酸枣仁", "夜交藤", "合欢皮", "炙甘草"],
    "归脾汤加减": ["党参", "黄芪", "白术", "茯神", "酸枣仁", "龙眼肉", "当归", "远志", "炙甘草"],
    "黄连阿胶汤加减": ["黄连", "黄芩", "阿胶", "白芍", "鸡子黄", "麦冬", "生地"],
    "温胆汤加减": ["半夏", "竹茹", "陈皮", "枳实", "茯苓", "酸枣仁", "远志", "炙甘草"],
    "安神定志丸加减": ["党参", "茯苓", "茯神", "远志", "石菖蒲", "龙齿", "酸枣仁"]
  },
  prescription: {
    settings: ["模拟服药：3天", "每日反馈：开启", "风险观察：脾胃反应、睡眠变化、情绪变化"]
  },
  feedbackMap: {
    liver: {
      label: "肝郁气滞 + 逍遥散合酸枣仁汤：逐步好转",
      days: [
        { day: "第1天反馈", items: ["入睡时间略缩短", "胸闷叹息减少", "仍有多梦", "食欲无明显变化"], tip: "方向基本正确，需继续观察心神不宁与血虚因素" },
        { day: "第2天反馈", items: ["入睡继续改善", "经前烦躁减轻", "但晨起乏力略明显", "舌苔仍薄白"], tip: "疏肝方向有效，但需注意养血安神力量是否充足" },
        { day: "第3天反馈", items: ["入睡明显改善", "多梦减少", "情绪较平稳", "乳房胀痛减轻"], tip: "治疗方向较匹配，可进入复盘" }
      ]
    },
    spleen: {
      label: "心脾两虚 + 归脾汤：乏力略改善，肝郁相关症状改善有限",
      days: [
        { day: "第1天反馈", items: ["晨起乏力略减", "入睡仍慢", "胸闷叹息变化不明显", "经前烦躁仍在"], tip: "补益心脾对乏力有帮助，但情志郁结证据仍需处理" },
        { day: "第2天反馈", items: ["精神稍稳", "多梦略减", "经前乳胀仍明显", "脉弦仍较突出"], tip: "当前选方对心脾不足有照顾，但与主导病机匹配度不足" },
        { day: "第3天反馈", items: ["乏力继续略改善", "胸胁不舒仍反复", "入睡改善有限", "情绪波动仍明显"], tip: "建议复盘：本案不宜只按心脾两虚处理，应补充疏肝解郁思路" }
      ]
    },
    yinFire: {
      label: "阴虚火旺 + 黄连阿胶汤：清热滋阴方向可能偏重",
      days: [
        { day: "第1天反馈", items: ["口干略减", "入睡改善不明显", "胃口下降", "大便较前偏稀"], tip: "清热滋阴后津液感略有改善，但热象证据不足，需留意脾胃反应" },
        { day: "第2天反馈", items: ["晨起乏力增加", "胃纳一般", "经前烦躁仍有", "舌苔仍薄白"], tip: "方药方向可能偏寒偏重，未抓住情志郁结主线" },
        { day: "第3天反馈", items: ["多梦仍在", "腹部不适感增加", "口干不明显", "情绪压力未明显缓解"], tip: "建议复盘：不能仅凭烦躁判断阴虚火旺，应回看舌脉与胸胁证据" }
      ]
    },
    phlegm: {
      label: "痰热扰心 + 温胆汤：胸闷略缓，失眠改善有限",
      days: [
        { day: "第1天反馈", items: ["胸闷略缓", "入睡仍慢", "多梦无明显变化", "口苦痰多不明显"], tip: "化痰理气带来轻微胸闷改善，但痰热证据不足" },
        { day: "第2天反馈", items: ["胃脘较舒", "经前乳胀仍明显", "烦躁仍与压力相关", "舌苔未见黄腻"], tip: "当前反馈提示中焦气机可兼顾，但不是本案主轴" },
        { day: "第3天反馈", items: ["失眠改善有限", "叹息仍反复", "情绪波动仍在", "食欲尚可"], tip: "建议复盘：温胆汤思路可作鉴别，但本案更需辨清肝郁扰神" }
      ]
    },
    default: {
      label: "当前组合未形成稳定方证匹配，系统生成观察型反馈",
      days: [
        { day: "第1天反馈", items: ["主要症状波动不大", "入睡仍慢", "情绪压力仍明显", "食欲无明显变化"], tip: "请回看问诊证据，确认主证与参考方是否互相支持" },
        { day: "第2天反馈", items: ["睡眠改善有限", "胸胁不舒仍有", "舌脉变化不明显", "患者对方向仍有疑问"], tip: "当前辨证与选方匹配度一般，建议申请数字名医会诊" },
        { day: "第3天反馈", items: ["整体改善不稳定", "关键症状仍反复", "未见明确不良趋势", "需要复盘证据链"], tip: "建议从情志、月经前乳胀、脉弦三个证据重新梳理" }
      ]
    }
  },
  coldFeedbackMap: {
    correct: {
      label: "风寒感冒 + 荆防败毒散 + 风寒类中成药：方向匹配",
      days: [
        { day: "第1天反馈", items: ["怕冷减轻", "鼻塞和清涕减少", "头痛身痛稍缓", "咳嗽仍有少量白稀痰"], tip: "辛温解表方向基本匹配，外寒逐渐松解，继续观察汗出与咳痰变化。" },
        { day: "第2天反馈", items: ["恶寒明显减轻", "清涕减少", "头痛身痛继续缓解", "精神较前好转"], tip: "风寒表证较前缓解，方证方向较合适。" },
        { day: "第3天反馈", items: ["鼻塞基本缓解", "身痛明显减轻", "低热消退", "睡眠恢复"], tip: "本案模拟恢复较好，可进入复盘。" }
      ]
    },
    mahuang: {
      label: "风寒感冒 + 麻黄汤加减：同属风寒网络，但方证偏峻",
      days: [
        { day: "第1天反馈", items: ["怕冷略减", "头痛身痛稍缓", "鼻塞清涕仍有", "患者感觉发散力量偏强"], tip: "麻黄汤与无汗、恶寒、身痛相关，但本案普通感冒更适合先考虑荆防败毒散方向。" },
        { day: "第2天反馈", items: ["身痛继续减轻", "咳嗽和清涕改善一般", "精神略恢复"], tip: "图谱路径同属风寒，但方剂颗粒度需要进一步区分：表实无汗与普通风寒感冒不完全等同。" }
      ]
    },
    guizhi: {
      label: "风寒感冒 + 桂枝汤加减：风寒相关，但有汗/无汗证据不合",
      days: [
        { day: "第1天反馈", items: ["怕冷改善有限", "仍无明显出汗", "鼻涕仍清稀", "身痛仍在"], tip: "桂枝汤偏表虚有汗、营卫不和；本案无汗更明显，方证匹配不足。" },
        { day: "第2天反馈", items: ["鼻塞仍有", "身痛略缓", "恶寒仍反复"], tip: "需回到症候节点：无汗、恶寒重、脉浮紧，更支持荆防败毒散或风寒表实相关路径。" }
      ]
    },
    windHeat: {
      label: "风热感冒 + 银翘散 / 银翘解毒丸：辛凉清解方向偏离",
      days: [
        { day: "第1天反馈", items: ["咽部不适略减", "怕冷、清涕、身痛没有明显改善", "胃口略下降"], tip: "辛凉清解方向可能偏离。本案风寒证据更明显，如恶寒重、无汗、清涕、苔薄白、脉浮紧。" },
        { day: "第2天反馈", items: ["仍怕冷", "鼻涕仍清稀", "腹部发凉", "精神一般"], tip: "需重新回到风寒与风热证据鉴别。" }
      ]
    },
    dampSummer: {
      label: "暑湿感冒方向：胃肠症状不突出，暑湿证据不足",
      days: [
        { day: "第1天反馈", items: ["胃口略好", "怕冷、清涕、头痛身痛改善有限"], tip: "本案胃肠症状不突出，暑湿证据不足。应重新关注起病诱因、汗出、鼻涕和脉象。" },
        { day: "第2天反馈", items: ["鼻塞仍在", "清涕仍明显", "身痛改善有限"], tip: "暑湿方向不是本案主线，建议回看风寒表证。" }
      ]
    },
    coldHerbs: {
      label: "寒凉清热药物选择偏多：可能影响辛温解表方向",
      days: [
        { day: "第1天反馈", items: ["咽部不适略缓", "怕冷仍明显", "清涕和身痛改善有限", "胃口略受影响"], tip: "你选择了较多偏寒凉清热药物，但本案热象不明显，可能影响辛温解表方向。建议回到症候证据重新判断。" },
        { day: "第2天反馈", items: ["仍有畏寒", "鼻涕仍清稀", "腹部偏凉", "精神一般"], tip: "寒凉药物不宜作为本案主线。" }
      ]
    }
  },
  assessmentMap: {
    liver: {
      score: 82,
      tag: "方向基本正确",
      dimensions: [["辨证方向", 85], ["关键证据抓取", 78], ["方证匹配", 82], ["用药安全性", 88]],
      comment: "你抓住了肝郁气滞的核心证据：压力大、叹气、经前乳胀、脉弦。但本案失眠已持续半年，后续还需要观察心神不宁与血虚因素。",
      risks: ["入睡时间是否缩短", "多梦是否减少", "晨起乏力是否出现", "胸胁胀满是否缓解"]
    },
    spleen: {
      score: 72,
      tag: "证型部分匹配",
      dimensions: [["辨证方向", 70], ["关键证据抓取", 68], ["方证匹配", 72], ["用药安全性", 84]],
      comment: "你关注到了失眠日久可能存在心脾不足，这是有价值的。但本案叹气、经前乳胀、脉弦更支持肝郁气滞，若只从心脾两虚入手，可能遗漏情志郁结主线。",
      risks: ["乏力是否改善", "胸闷叹息是否仍明显", "经前乳胀是否缓解", "入睡时间是否真正缩短"]
    },
    yinFire: {
      score: 63,
      tag: "方向可能偏重",
      dimensions: [["辨证方向", 58], ["关键证据抓取", 62], ["方证匹配", 60], ["用药安全性", 72]],
      comment: "你捕捉到了烦躁与口干，但本案口苦、舌红、苔黄等热象并不突出。黄连阿胶汤方向偏清热滋阴，入门训练中需要特别留意胃口下降、大便偏稀等模拟风险。",
      risks: ["胃口是否下降", "大便是否偏稀", "口干是否真正明显", "晨起乏力是否加重"]
    },
    phlegm: {
      score: 68,
      tag: "鉴别思路可保留",
      dimensions: [["辨证方向", 66], ["关键证据抓取", 65], ["方证匹配", 68], ["用药安全性", 78]],
      comment: "你考虑到胸闷与气机不畅，但痰热扰心需要更多痰多、口苦、苔黄腻等证据支持。本案温胆汤可作为鉴别思路，但主线仍应回到肝郁扰神。",
      risks: ["胸闷是否缓解", "失眠改善是否有限", "苔象是否出现黄腻", "情绪压力是否仍是主因"]
    },
    default: {
      score: 60,
      tag: "需要回看证据",
      dimensions: [["辨证方向", 58], ["关键证据抓取", 62], ["方证匹配", 56], ["用药安全性", 70]],
      comment: "当前证型与选方尚未形成清晰匹配。建议回到问诊证据，优先确认情志、经前乳胀、脉弦、舌苔与二便信息之间的关系，再决定治法与参考方。",
      risks: ["核心症状是否改善", "是否出现新的不适", "方证是否互相支持", "是否需要申请数字名医会诊"]
    }
  },
  experts: [
    {
      id: "jingfang",
      title: "经方派数字名医",
      focus: "方证对应、少阳枢机、经方加减",
      opinion: ["本案可借鉴少阳枢机思路，但目前少阳证据不足。", "问诊中未见明显口苦、咽干、寒热往来，不宜机械套用经方。", "方证对应应先服务于核心证据：叹气、经前乳胀、情绪波动、脉弦。", "后续若出现口苦、胸胁苦满加重、苔黄等，再重新评估少阳与郁热。"]
    },
    {
      id: "emotion",
      title: "情志病数字名医",
      focus: "肝郁、心神、睡眠与情绪关系",
      opinion: ["本案肝郁扰神特征较明显：叹气、经前乳胀、情绪波动、脉弦。", "失眠并非单纯心神失养，而是情志郁结影响心神。", "疏肝解郁与养血安神应并行，既处理气机，也照顾多梦与心神不宁。", "若后续乏力、心悸明显，应考虑肝郁兼血虚或心脾不足。"]
    },
    {
      id: "spleen",
      title: "脾胃派数字名医",
      focus: "中焦运化、药后反应、虚实夹杂",
      opinion: ["本案食欲一般、大便不稀，脾胃并非当前最突出矛盾，但用药后仍需观察中焦。", "若模拟服药中出现乏力、腹胀加重、胃口下降，应注意方药对脾胃的影响。", "酸枣仁、夜交藤等安神药可帮助睡眠，但配伍中仍需兼顾运化。", "复诊时建议同时追问腹胀、纳食、大便和晨起精神。"]
    }
  ],
  review: {
    judgment: ["主证：肝郁气滞", "治法：疏肝解郁，养血安神", "参考方：逍遥散合酸枣仁汤加减"],
    evidence: [
      "入睡困难、多梦：心神不宁",
      "情绪压力大、容易叹气：肝气郁结",
      "经前乳房胀痛：肝郁气滞",
      "脉弦：肝郁证据",
      "苔薄白、大便不稀：热象与痰热证据不足"
    ],
    mistakes: [
      "不能一看到失眠就直接判断为心脾两虚",
      "不能只看烦躁就判断为阴虚火旺",
      "本案热象不明显，暂不宜过度清热",
      "需要区分“肝郁扰神”和“心血不足”"
    ],
    comment: "你的辨证方向基本正确，能够抓住情志、月经前乳胀、脉弦等关键证据。但需要进一步关注失眠背后的兼证，比如血虚、心神不宁，以及后续是否出现化火趋势。",
    growth: [["肝郁辨证", "+10"], ["失眠专病", "+8"], ["问诊完整度", "+6"], ["方证匹配", "+7"]]
  },
  tabs: [
    ["home", "医馆", "🏠"],
    ["training", "训练", "🩺"],
    ["cases", "病案", "📚"],
    ["growth", "成长", "🌱"]
  ],
  growthProfile: {
    identity: "见习医者",
    receivedPatients: "2 位",
    savedRecords: "2 份",
    nextLevel: "独立坐诊",
    upgradeNeed: "还需完成 3 个复诊病例",
    weeklyGoal: "完成 3 个感冒辨证病例",
    badges: ["风寒初辨", "问诊入门"],
    nextChallenge: "风热感冒对照案"
  },
  disclaimer: "本系统仅用于中医教学训练，所有病例均为虚拟模拟，不用于真实患者诊疗或用药建议。"
};

const state = {
  page: "home",
  activeTab: "home",
  activeCaseId: "lin",
  selections: JSON.parse(JSON.stringify(DATA.diagnosis)),
  coldSelections: JSON.parse(JSON.stringify(DATA.coldDiagnosis)),
  activeExpert: null,
  savedCase: false,
  savedCases: { lin: false, zhou: false, wang: false },
  showCaseSummary: false,
  showAiPrompts: false,
  showInfoPanel: false,
  showPendingInfo: false,
  coldDoseConfirmed: false,
  coldChoiceTip: "",
  coldHerbTip: "",
  coldPatentTip: "",
  pendingUnlockCue: null,
  caseStates: {
    lin: { inquiryRecords: [], unlockedInfo: [] },
    zhou: { inquiryRecords: [], unlockedInfo: [] },
    wang: { inquiryRecords: [], unlockedInfo: [] }
  }
};

const app = document.querySelector("#app");
const tabBar = document.querySelector("#tabBar");
const toast = document.querySelector("#toast");

function render(page = state.page, options = {}) {
  const scrollY = window.scrollY;
  state.page = page;
  state.activeTab = tabForPage(page);
  app.classList.toggle("no-page-motion", Boolean(options.preserveScroll || options.scrollInquiryBottom || options.noPageMotion));
  app.innerHTML = views[page] ? views[page]() : views.home();
  app.classList.toggle("inquiry-mode", page === "inquiry");
  renderTabs();
  bindPageActions();
  if (page === "inquiry" && state.pendingUnlockCue) {
    playInfoUnlockEffect(state.pendingUnlockCue);
    state.pendingUnlockCue = null;
  }
  if (options.scrollInquiryBottom) {
    scrollInquiryToBottom();
  } else if (options.preserveScroll) {
    window.scrollTo({ top: scrollY });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function tabForPage(page) {
  if (["home"].includes(page)) return "home";
  if (["training", "waiting", "patient", "inquiry", "diagnosis", "coldDosage", "prescription", "assessment", "observation", "consult"].includes(page)) return "training";
  if (["cases", "review"].includes(page)) return "cases";
  return "growth";
}

function renderTabs() {
  tabBar.classList.toggle("hidden", state.page === "inquiry");
  tabBar.innerHTML = DATA.tabs.map(([id, label, icon]) => `
    <button class="tab-button ${state.activeTab === id ? "active" : ""}" data-route="${id}">
      <span class="icon">${icon}</span>
      <span>${label}</span>
    </button>
  `).join("");
  tabBar.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => render(button.dataset.route));
  });
}

const views = {
  home() {
    const c = DATA.clinic;
    const recommended = DATA.patients.find(patient => patient.id === "zhou");
    return `
      <article class="page">
        <section class="hero">
          <p class="eyebrow">今日开诊</p>
          <h1>${DATA.brand}</h1>
          <p class="hero-copy">我的${c.name} · 今日开诊</p>
          <p class="hero-copy">${c.slogan}</p>
          <span class="level-pill">医馆等级：${c.level}</span>
        </section>
        <section class="card">
          <div class="section-head tight"><h2>今日任务</h2><span class="tiny-pill">开诊中</span></div>
          <div class="summary-list">
            <div>完成 1 次问诊取证</div>
            <div>复盘 1 份已完成病案</div>
            <div>解锁风寒 / 风热鉴别能力</div>
          </div>
        </section>
        <section class="card risk-card">
          <div class="patient-top">
            <div>
              <h3>复诊风险提醒</h3>
              <p class="muted">${c.reminder.patient}｜服药第2天</p>
            </div>
            <span class="badge warn">需复诊判断</span>
          </div>
          <p class="complaint">反馈：${c.reminder.feedback}</p>
          <div class="system-tip">系统建议：请判断是否需要调整方药</div>
          <button class="soft-btn" data-toast="已打开陈女士服药后教学反馈">查看反馈</button>
        </section>
        <div class="section-head"><h2>今日推荐病例</h2><span class="tiny-pill">风寒鉴别</span></div>
        ${patientCard(recommended)}
        <section class="card">
          <h3>医馆成长</h3>
          <div class="summary-list">
            <div>医馆声望：128</div>
            <div>已收入病案：2 份</div>
            <div>已获得徽章：风寒初辨、情志初辨</div>
            <div>当前身份：见习医者</div>
          </div>
        </section>
        <p class="notice">${DATA.disclaimer}</p>
      </article>
    `;
  },
  training() {
    return `
      <article class="page">
        <section class="hero">
          <p class="eyebrow">${DATA.brand}</p>
          <h1>训练</h1>
          <p class="hero-copy">选择一位虚拟患者，完成一次模拟坐诊。</p>
          <span class="level-pill">今日候诊 3 人</span>
        </section>
        <h2>虚拟患者列表</h2>
        ${DATA.patients.map(patientCard).join("")}
        <p class="notice">${DATA.disclaimer}</p>
      </article>
    `;
  },
  waiting() {
    return views.training();
  },
  patient() {
    const p = getActivePatient();
    return `
      <article class="page">
        ${isColdCase() ? renderColdStageProgress("问诊取证") : ""}
        ${pageTitle(`${p.name}，${p.age}`, `身份：${p.identity}｜主诉：${p.complaint}`)}
        ${patientProfileCard(p)}
        <section class="card">
          <span class="badge green">虚拟病人描述</span>
          <p class="quote">“${p.description}”</p>
        </section>
        <h2>基础信息</h2>
        <section class="card">
          <div class="info-grid">${Object.entries(p.basics || {}).map(([k, v]) => `<div class="info-cell"><span>${k}</span><strong>${v}</strong></div>`).join("")}</div>
        </section>
        <div class="button-row">
          <button class="ghost-btn" data-route="inquiry">继续问诊</button>
          <button class="primary-btn" data-route="diagnosis">开始辨证</button>
        </div>
      </article>
    `;
  },
  inquiry() {
    const p = getActivePatient();
    const inquiry = getInquiryAnalysis();
    const topic = isColdCase() ? "感冒初诊" : "失眠初诊";
    const masteredInfo = getMasteredInfoItems();
    return `
      <article class="page inquiry-page">
        <section class="inquiry-topbar">
          <div>
            <h1>${p.name}｜${topic}</h1>
            <p>已追问 ${inquiry.total} 个问题｜命中关键证据 ${inquiry.keyHitCount} 个</p>
          </div>
          <div class="inquiry-top-actions">
            <button class="ghost-btn" data-route="patient">返回</button>
            <button class="soft-btn" data-toggle-ai-prompts>AI建议补漏</button>
            <button class="ghost-btn info-entry-btn" data-toggle-info-panel>已掌握信息 <span class="tiny-count">${masteredInfo.length}</span></button>
          </div>
        </section>
        <section class="inquiry-thread" id="inquiryThread">
          ${renderInquiryConversation()}
          ${renderDiagnosisReadyCard(inquiry)}
          <div id="inquiryEnd"></div>
        </section>
        <section class="inquiry-composer" aria-label="模拟问诊输入">
          <input id="freeInquiryInput" class="inquiry-input" placeholder="${isColdCase() ? "向虚拟病人追问..." : "向虚拟病人追问..."}">
          <button class="ghost-btn voice-btn" data-voice-inquiry>语音</button>
          <button class="primary-btn send-btn" data-send-inquiry>发送</button>
        </section>
        ${state.showAiPrompts ? renderAiPromptDrawer() : ""}
        ${state.showInfoPanel ? renderInquiryInfoPanel() : ""}
      </article>
    `;
  },
  diagnosis() {
    if (isColdCase()) return renderColdDiagnosis();
    return `
      <article class="page">
        ${pageTitle("请完成你的辨证判断", "卡片式选择会保留你的当前判断")}
        <div class="diagnosis-toolbar">
          <button class="ghost-btn" data-route="inquiry">返回问诊</button>
          <button class="soft-btn" data-toggle-case-summary>${state.showCaseSummary ? "收起病案" : "查看病案"}</button>
        </div>
        ${state.showCaseSummary ? renderCaseSummary() : ""}
        <section class="card">
          ${Object.entries(state.selections).map(([group, config]) => `
            <div class="form-group">
              <div class="form-title"><span>${group}</span><span class="muted">${config.multi ? "可多选" : "单选"}</span></div>
              <div class="chip-grid">
                ${config.options.map(option => `<button class="chip ${config.selected.includes(option) ? "selected" : ""}" data-group="${group}" data-option="${option}">${option}</button>`).join("")}
              </div>
            </div>
          `).join("")}
          <button class="primary-btn" data-route="assessment">提交处方</button>
        </section>
      </article>
    `;
  },
  coldDosage() {
    return renderColdDosage();
  },
  assessment() {
    if (isColdCase()) return renderColdAssessment();
    const assessment = getAssessmentResult();
    const inquiry = getInquiryAnalysis();
    return `
      <article class="page">
        ${pageTitle("AI带教评估", "入门级病例 · 模拟服药前评估")}
        <section class="card assessment-hero">
          <div>
            <span class="badge green">${assessment.tag}</span>
            <h2>综合评分</h2>
          </div>
          <strong>${assessment.score}<span>分</span></strong>
        </section>
        <section class="card">
          <h3>评分维度</h3>
          <div class="score-list">
            ${assessment.dimensions.map(([name, value]) => `
              <div class="score-row">
                <div>
                  <span>${name}</span>
                  <strong>${value}</strong>
                </div>
                <div class="bar"><span style="width:${value}%"></span></div>
              </div>
            `).join("")}
          </div>
        </section>
        <section class="card">
          <h3>AI带教点评</h3>
          <p class="complaint">${assessment.comment}</p>
        </section>
        <section class="card">
          <h3>问诊表现点评</h3>
          <div class="summary-list">
            <div>${inquiry.pointComment}</div>
            <div>${inquiry.missingComment}</div>
            <div>${inquiry.weakComment}</div>
          </div>
        </section>
        <section class="card">
          <h3>风险观察点</h3>
          <div class="summary-list">${assessment.risks.map(item => `<div>${item}</div>`).join("")}</div>
        </section>
        <div class="button-row">
          <button class="ghost-btn" data-route="diagnosis">返回调整</button>
          <button class="primary-btn" data-route="observation">开始模拟服药</button>
        </div>
      </article>
    `;
  },
  prescription() {
    const prescriptionName = getSelected("参考方选择");
    const medicines = DATA.prescriptions[prescriptionName] || DATA.prescriptions["逍遥散合酸枣仁汤加减"];
    return `
      <article class="page">
        ${pageTitle("处方确认", "本页为虚拟教学开方，不用于真实用药")}
        <section class="card">
          <span class="badge green">参考方</span>
          <h2>${prescriptionName}</h2>
          <div class="medicine-list">${medicines.map(m => `<div class="medicine">${m}</div>`).join("")}</div>
        </section>
        <section class="card">
          <h3>服药设置</h3>
          <div class="summary-list">${DATA.prescription.settings.map(item => `<div>${item}</div>`).join("")}</div>
        </section>
        <button class="primary-btn" data-route="observation">开始模拟服药</button>
        <p class="notice">${DATA.disclaimer}</p>
      </article>
    `;
  },
  observation() {
    if (isColdCase()) return renderColdObservation();
    const feedback = getFeedbackScenario();
    const inquiry = getInquiryAnalysis();
    const p = getActivePatient();
    return `
      <article class="page">
        ${pageTitle("林女士 · 服药观察", "模拟服药后的每日教学反馈")}
        ${patientStateCard(p, "day1", "恢复中", "入睡略有改善，但仍多梦。")}
        <section class="card simulation-card">
          <span class="badge green">模拟生成</span>
          <h3>本次模拟反馈由你的辨证与选方生成</h3>
          <p class="complaint">${feedback.label}</p>
          <div class="system-tip">本次模拟依据：已纳入 ${inquiry.total} 条模拟问诊记录，命中 ${inquiry.keyHitCount} 个关键辨证问题；问诊完整度 ${inquiry.completenessScore} 分。</div>
        </section>
        <section class="timeline">
          ${feedback.days.map(day => `
            <div class="timeline-item">
              <section class="card">
                <h3>${day.day}</h3>
                <ul class="feedback-list">${day.items.map(item => `<li>${item}</li>`).join("")}</ul>
                <div class="system-tip">系统提示：${day.tip}</div>
              </section>
            </div>
          `).join("")}
        </section>
        <div class="button-row">
          <button class="ghost-btn" data-route="consult">申请数字名医会诊</button>
          <button class="primary-btn" data-route="review">查看复盘</button>
        </div>
      </article>
    `;
  },
  consult() {
    const activeExpert = DATA.experts.find(expert => expert.id === state.activeExpert);
    return `
      <article class="page">
        ${pageTitle("数字名医会诊", "选择不同学派视角，获得教学型会诊意见")}
        ${DATA.experts.map(expert => `
          <section class="card expert-card ${state.activeExpert === expert.id ? "selected-expert" : ""}">
            <div class="patient-top">
              <div>
                <h3>${expert.title}</h3>
                <p class="complaint">关注：${expert.focus}</p>
              </div>
              <span class="avatar">会</span>
            </div>
            <button class="${state.activeExpert === expert.id ? "primary-btn" : "soft-btn"}" data-expert="${expert.id}">请他会诊</button>
          </section>
        `).join("")}
        <section class="card consult-opinion ${activeExpert ? "show" : ""}" id="consultOpinion">
          <span class="badge green">会诊意见</span>
          <h3>${activeExpert ? activeExpert.title : "请选择数字名医"}</h3>
          <div class="summary-list">${activeExpert ? activeExpert.opinion.map(item => `<div>${item}</div>`).join("") : ""}</div>
          <div class="button-row">
            <button class="ghost-btn" data-route="observation">返回服药观察</button>
            <button class="primary-btn" data-route="review">进入复盘</button>
          </div>
        </section>
      </article>
    `;
  },
  review() {
    if (isColdCase()) return renderColdReview();
    const inquiry = getInquiryAnalysis();
    const p = getActivePatient();
    return `
      <article class="page">
        ${pageTitle("林女士病案复盘", "从证据、易错点和能力成长完成闭环")}
        ${patientResultCard(p, "入睡明显改善，多梦减少，情绪较平稳。", "情志初辨")}
        ${reviewBlock("你的判断", DATA.review.judgment)}
        ${reviewBlock("关键证据", DATA.review.evidence)}
        <section class="card">
          <h3>问诊复盘</h3>
          <div class="summary-list">
            <div>本次你共追问了 ${inquiry.total} 个问题，其中 ${inquiry.keyHitCount} 个属于关键辨证问题。</div>
            <div>问诊完整度：${inquiry.completenessScore} 分。</div>
            <div>${inquiry.pointComment}</div>
            <div>${inquiry.missingComment}</div>
            <div>${inquiry.nextAdvice}</div>
          </div>
        </section>
        ${reviewBlock("易错点", DATA.review.mistakes)}
        <section class="card">
          <h3>AI带教点评</h3>
          <p class="complaint">${DATA.review.comment}</p>
        </section>
        <section class="card">
          <h3>能力成长</h3>
          <div class="growth-grid">${DATA.review.growth.map(([name, score]) => `<div class="growth-card"><span>${name}</span><strong>${score}</strong></div>`).join("")}</div>
        </section>
        <div class="button-row">
          <button class="ghost-btn" data-save-case>收入病案</button>
          <button class="primary-btn" data-route="training">继续接诊</button>
        </div>
      </article>
    `;
  },
  cases() {
    const lin = DATA.patients.find(p => p.id === "lin");
    const zhou = DATA.patients.find(p => p.id === "zhou");
    return `
      <article class="page">
        ${pageTitle("病案架", "已完成病案会沉淀为你的训练资产")}
        <section class="card case-card">
          ${patientVisual(lin, "recovered", "small")}
          <div class="patient-top">
            <div>
              <h3>林女士｜肝郁失眠案</h3>
              <p class="muted">${state.savedCases.lin ? "已收入小满医馆病案架" : "待收入病案"}</p>
            </div>
            <span class="badge green">情志初辨</span>
          </div>
          <div class="summary-list"><div>最终判断：肝郁气滞</div><div>模拟结果：入睡改善，多梦减少，情绪较平稳</div><div>获得徽章：情志初辨</div></div>
          <button class="soft-btn" data-case="lin" data-route="review">查看复盘</button>
        </section>
        <section class="card case-card">
          ${patientVisual(zhou, "recovered", "small")}
          <div class="patient-top">
            <div>
              <h3>周同学｜风寒感冒案</h3>
              <p class="muted">${state.savedCases.zhou ? "已收入小满医馆病案架" : "待收入病案"}</p>
            </div>
            <span class="badge green">风寒初辨</span>
          </div>
          <div class="summary-list"><div>最终判断：风寒感冒</div><div>模拟结果：第3天鼻塞缓解，身痛减轻，低热消退</div><div>获得徽章：风寒初辨</div></div>
          <button class="soft-btn" data-case="zhou" data-route="review">查看复盘</button>
        </section>
        <section class="card">
          <h3>累计病案</h3>
          <div class="stats-grid">${DATA.clinic.stats.map(([label, value]) => `<div class="stat"><strong style="color:#183e34">${value}</strong><span style="color:#637469">${label}</span></div>`).join("")}</div>
        </section>
      </article>
    `;
  },
  growth() {
    const skills = [["风寒辨证", 74], ["风寒/风热鉴别", 70], ["问诊完整度", 78], ["方药匹配", 72]];
    const profile = DATA.growthProfile;
    return `
      <article class="page">
        ${pageTitle("成长", "你的中医临床思维能力卡")}
        <section class="card growth-profile">
          <div class="patient-top">
            <div>
              <span class="badge green">当前身份</span>
              <h2>${profile.identity}</h2>
            </div>
            <span class="avatar">阶</span>
          </div>
          <div class="summary-list">
            <div>下一等级：${profile.nextLevel}</div>
            <div>已接诊虚拟患者：${profile.receivedPatients}</div>
            <div>已收入病案：${profile.savedRecords}</div>
            <div>距离升级：${profile.upgradeNeed}</div>
            <div>本周目标：${profile.weeklyGoal}</div>
            <div>下一挑战：${profile.nextChallenge}</div>
          </div>
        </section>
        <section class="card">
          <h3>已获得徽章</h3>
          <div class="badge-row">${profile.badges.map(badge => `<span class="badge medal">${badge}</span>`).join("")}</div>
        </section>
        <section class="card">
          <h3>能力雷达</h3>
          <div class="growth-grid">${skills.map(([name, value]) => `
            <div class="growth-card">
              <span>${name}</span>
              <strong>${value}</strong>
              <div class="bar"><span style="width:${value}%"></span></div>
            </div>
          `).join("")}</div>
        </section>
        <section class="card">
          <h3>今日训练建议</h3>
          <p class="complaint">继续练习风寒、风热、暑湿感冒的证据区分，重点关注寒热轻重、汗出、鼻涕、痰色和胃肠症状。</p>
        </section>
      </article>
    `;
  }
};

function renderColdAssessment() {
  const result = getColdAssessmentResult();
  const inquiry = getInquiryAnalysis();
  return `
    <article class="page">
      ${renderColdStageProgress("方药匹配")}
      ${pageTitle("AI带教评估", "周同学感冒案 · 症候到方药完整判断")}
      <section class="card assessment-hero">
        <div>
          <span class="badge green">${result.tag}</span>
          <h2>综合评分</h2>
        </div>
        <strong>${result.score}<span>分</span></strong>
      </section>
      <section class="card">
        <h3>评分维度</h3>
        <div class="score-list">
          ${result.dimensions.map(([name, value]) => `
            <div class="score-row"><div><span>${name}</span><strong>${value}</strong></div><div class="bar"><span style="width:${value}%"></span></div></div>
          `).join("")}
        </div>
      </section>
      ${renderColdReasoningChain()}
      ${renderColdPathCompare()}
      ${reviewBlock("容易误判的干扰", ["体温 37.5℃：低热不等于风热，风寒感冒也可有轻度发热。", "咽部不适：不等于咽红肿痛，需要结合口渴、苔黄、脉浮数判断。", "咳嗽：不等于肺热，痰白清稀更支持寒象。"])}
      <section class="card"><h3>AI带教点评</h3><p class="complaint">${result.comment}</p></section>
      <section class="card"><h3>剂量教学说明</h3><p class="complaint">入门级病例重点考察方药组成匹配，剂量为系统教学参考。</p></section>
      <section class="card"><h3>问诊表现点评</h3><div class="summary-list"><div>${inquiry.pointComment}</div><div>${inquiry.missingComment}</div></div></section>
      <section class="card"><h3>中药配方点评</h3><p class="complaint">${result.herbComment}</p></section>
      <section class="card"><h3>中成药点评</h3><p class="complaint">${result.patentComment}</p></section>
      <section class="card"><h3>模拟观察预告</h3><div class="summary-list"><div>接下来，周同学将进入 3 天模拟服药观察。系统会根据你的证型、方剂、中药和中成药选择，生成不同的病情变化。</div><div>${getColdObservationPreview()}</div></div></section>
      <button class="soft-btn full" data-route="consult">申请数字名医会诊</button>
      <div class="button-row">
        <button class="ghost-btn" data-route="diagnosis">返回调整</button>
        <button class="primary-btn" data-route="observation">开始模拟服药</button>
      </div>
    </article>
  `;
}

function renderColdObservation() {
  const feedback = getColdFeedbackScenario();
  const inquiry = getInquiryAnalysis();
  const p = getActivePatient();
  return `
    <article class="page">
      ${renderColdStageProgress("模拟服药")}
      ${pageTitle("周同学 · 模拟服药观察", "根据证型、方剂、中药配方和中成药选择生成教学反馈")}
      ${patientStateCard(p, "day2", "好转", "怕冷减轻，清涕减少，头痛身痛缓解。")}
      <section class="card simulation-card">
        <span class="badge green">模拟生成</span>
        <h3>本次模拟反馈由你的辨证与方药选择生成</h3>
        <p class="complaint">${feedback.label}</p>
        <div class="system-tip">本次模拟依据：已纳入 ${inquiry.total} 条模拟问诊记录，命中 ${inquiry.keyHitCount} 个感冒辨证关键点；问诊完整度 ${inquiry.completenessScore} 分。</div>
      </section>
      <section class="timeline">
        ${feedback.days.map(day => `
          <div class="timeline-item"><section class="card"><h3>${day.day}</h3><ul class="feedback-list">${day.items.map(item => `<li>${item}</li>`).join("")}</ul><div class="system-tip">系统提示：${day.tip}</div></section></div>
        `).join("")}
      </section>
      <div class="button-row">
        <button class="ghost-btn" data-route="consult">申请数字名医会诊</button>
        <button class="primary-btn" data-route="review">查看复盘</button>
      </div>
    </article>
  `;
}

function renderColdReview() {
  const result = getColdAssessmentResult();
  const inquiry = getInquiryAnalysis();
  const selections = getColdStudentSelections();
  return `
    <article class="page">
      ${renderColdStageProgress("病案复盘")}
      ${pageTitle("周同学感冒案复盘", "症候 → 证型 → 方剂 → 中药配方 / 中成药")}
      ${patientResultCard(getActivePatient(), "鼻塞基本缓解，身痛明显减轻，低热消退。", "风寒初辨")}
      <section class="card"><h3>你的判断</h3><div class="summary-list">
        <div>证型：${selections.syndrome}</div><div>治法：${selections.method}</div><div>方剂：${selections.formula}</div>
        <div>中药配方：${formatHerbsWithDosage(selections.herbs) || "未选择"}</div><div>中成药：${selections.patent.join("、") || "未选择"}</div>
      </div></section>
      <section class="card"><h3>标准思路</h3><div class="summary-list"><div>证型节点：风寒</div><div>治法：辛温解表，宣肺散寒</div><div>本案首选方剂节点：荆防败毒散加减</div><div>图谱相关方剂：麻黄汤加减、桂枝汤加减也连向风寒，但需进一步根据无汗/有汗、表实/表虚区分。</div><div>中成药参考：风寒感冒颗粒 / 荆防颗粒 / 感冒清热颗粒</div></div></section>
      ${reviewBlock("关键证据", ["空调低温、吹风后发作：外感风寒诱因", "恶寒明显、发热轻：风寒特征", "无汗：表寒束表", "鼻流清涕：寒象", "痰白清稀：寒痰或肺气不宣", "舌淡红、苔薄白：寒热不重，偏表寒", "脉浮紧：风寒束表"])}
      ${reviewBlock("辨证路径复盘", ["第一步：从症候取证。恶寒明显、发热轻、流清涕、无汗、痰白清稀、苔薄白、脉浮紧。", "第二步：症候汇聚为证。这些症候在图谱中共同指向“风寒”节点。", "第三步：由证型节点进入方剂节点。风寒节点可连接荆防败毒散、麻黄汤、桂枝汤等多个方剂。", "第四步：本案进一步区分方剂。无汗、清涕、鼻塞喷嚏、头痛身痛支持荆防败毒散加减作为教学首选；麻黄汤偏表实发散，桂枝汤偏表虚有汗，本案匹配度较低。", "第五步：由方及药。荆芥、防风、羌活、独活负责疏风散寒；前胡、桔梗负责宣肺化痰；枳壳、茯苓、甘草、生姜辅助理气和中、调和药性。", "第六步：中成药匹配。风寒感冒颗粒、荆防颗粒、感冒清热颗粒更符合本案方向。"])}
      ${reviewBlock("干扰信息拆解", ["体温 37.5℃不等于风热，风寒感冒也可有轻度发热", "咽部不适不等于咽喉红肿热痛，需要继续追问疼痛程度、口渴、舌苔", "咳嗽不等于肺热，痰白清稀更支持寒象", "最近天气热不代表暑湿，本案没有明显腹胀、恶心、腹泻等湿阻中焦表现"])}
      <section class="card"><h3>问诊复盘</h3><div class="summary-list"><div>本次你共追问了 ${inquiry.total} 个问题，命中 ${inquiry.keyHitCount} 个感冒辨证关键点。</div><div>问诊完整度：${inquiry.completenessScore} 分。</div><div>${inquiry.pointComment}</div><div>${inquiry.missingComment}</div></div></section>
      <section class="card"><h3>方剂图谱复盘</h3><p class="complaint">按照辨证堂感冒图谱，本案先由“恶寒重、流清涕、无汗、痰白清稀、苔薄白、脉浮紧”等症候聚合到风寒节点，再从风寒节点比较荆防败毒散、麻黄汤、桂枝汤。荆防败毒散更适合本案普通风寒感冒的教学主线；麻黄汤虽同属风寒相关，但偏表实发散；桂枝汤偏表虚有汗，与本案无汗不合。银翘散、桑菊饮属于风热路径，新加香薷饮属于暑湿路径，白虎加人参汤偏热盛气津两伤，均不是本案主线。</p></section>
      <section class="card"><h3>中成药复盘</h3><p class="complaint">风寒感冒颗粒、荆防颗粒、感冒清热颗粒更符合本案方向。银翘解毒丸、桑菊感冒片、双黄连口服液偏风热或热毒方向，不作为本案首选。</p></section>
      ${reviewBlock("你本案最关键的进步", ["能够区分“低热”和“风热”的关系", "抓住了恶寒、无汗、清涕、痰白、脉浮紧等关键证据", "能够排除银翘散、桑菊感冒片等风热方向", "初步完成了从证型到方剂、药味、中成药的完整匹配"])}
      ${reviewBlock("下次遇到感冒，先问这 6 个问题", ["怕冷明显还是发热明显？", "有没有汗？", "鼻涕清还是黄？", "咽痛口渴明显吗？", "痰白还是痰黄？", "基础信息中的舌苔和脉象支持哪类证据？"])}
      <section class="card"><h3>能力成长</h3><div class="growth-grid">${[["风寒感冒辨证", "+10"], ["风寒 / 风热鉴别", "+8"], ["方药匹配", "+8"], ["中成药选择", "+6"], ["问诊完整度", "+6"]].map(([name, score]) => `<div class="growth-card"><span>${name}</span><strong>${score}</strong></div>`).join("")}</div></section>
      <button class="soft-btn full" data-route="consult">申请数字名医会诊</button>
      <div class="button-row"><button class="ghost-btn" data-toast="下一版将开放风热感冒对照训练。">挑战风热感冒案</button><button class="primary-btn" data-route="training">继续接诊</button></div>
    </article>
  `;
}

function renderColdReasoningChain() {
  const selections = getColdStudentSelections();
  const formulaMeta = DATA.coldAnswer.formulaGraph[selections.formula] || {};
  const evidence = "恶寒明显 / 无汗 / 鼻流清涕 / 痰白清稀 / 苔薄白 / 脉浮紧";
  if (selections.syndrome === "风热感冒") {
    return reasoningSection("症候—证—方—药推理链", [
      ["症候证据", evidence],
      ["你的证型判断", selections.syndrome || "未选择"],
      ["系统提示", "证据链断裂：当前症候更支持风寒，缺少明显咽痛、口渴、黄涕、黄痰、苔黄、脉浮数等风热证据。", "warn"]
    ]);
  }
  if (selections.syndrome === "暑湿感冒") {
    return reasoningSection("症候—证—方—药推理链", [
      ["症候证据", "恶寒明显 / 无汗 / 鼻流清涕 / 痰白清稀 / 脉浮紧"],
      ["你的证型判断", selections.syndrome || "未选择"],
      ["系统提示", "证据链偏离：本案胃肠症状不突出，缺少腹胀、恶心、腹泻、身重困倦等暑湿证据。", "warn"]
    ]);
  }
  const herbText = selections.herbs.length ? selections.herbs.slice(0, 8).join("、") + (selections.herbs.length > 8 ? "……" : "") : "未选择中药组成";
  const patentText = selections.patent.length ? selections.patent.join(" / ") : "未选择中成药";
  return reasoningSection("症候—证—方—药推理链", [
    ["症候证据", evidence],
    ["证型节点", `${selections.syndrome || "未选择"}（图谱对应：${formulaMeta.syndrome || "待判断"}）`],
    ["方剂节点", `${selections.formula || "未选择"}｜${formulaMeta.relation || "待判断"}`],
    ["中药与中成药", `${herbText}<br>${patentText}`]
  ], formulaMeta.note || "请根据图谱关系继续判断方剂与症候证据是否一致。");
}

function reasoningSection(title, nodes, comment = "") {
  return `
    <section class="card">
      <h3>${title}</h3>
      <div class="reasoning-chain">
        ${nodes.map((node, index) => `
          <div class="reasoning-node ${node[2] || ""}">
            <span>${node[0]}</span>
            <strong>${node[1]}</strong>
          </div>
          ${index < nodes.length - 1 ? `<div class="reasoning-arrow">↓</div>` : ""}
        `).join("")}
      </div>
      ${comment ? `<div class="coach-tip standalone">${comment}</div>` : ""}
    </section>
  `;
}

function renderColdPathCompare() {
  const answer = DATA.coldAnswer;
  const selections = getColdStudentSelections();
  const formulaMeta = answer.formulaGraph[selections.formula] || { relation: "需调整" };
  const herbHits = selections.herbs.filter(item => answer.herbs.includes(item)).length;
  const herbWrong = selections.herbs.filter(item => !answer.herbs.includes(item)).length;
  const patentHits = selections.patent.filter(item => answer.patent.includes(item)).length;
  const rows = [
    ["证型", selections.syndrome || "未选择", answer.syndrome, selections.syndrome === answer.syndrome ? "正确" : "偏离"],
    ["治法", selections.method || "未选择", answer.method, selections.method === answer.method ? "正确" : "偏离"],
    ["方剂", selections.formula || "未选择", "风寒节点下首选：荆防败毒散加减", selections.formula === answer.formula ? "正确" : formulaMeta.relation || "偏离"],
    ["中药", `选对 ${herbHits} 味${herbWrong ? `，混入 ${herbWrong} 味干扰药` : ""}`, "疏风散寒、宣肺解表为主", herbHits >= 8 && herbWrong <= 1 ? "较好" : "需调整"],
    ["中成药", selections.patent.join(" / ") || "未选择", "风寒类中成药", patentHits ? "正确" : "需调整"]
  ];
  return `
    <section class="card">
      <h3>你的路径 vs 标准路径</h3>
      <div class="path-compare">
        ${rows.map(row => `
          <div class="compare-item ${row[3] === "正确" || row[3] === "较好" ? "ok" : "warn"}">
            <div><span>${row[0]}</span><strong>${row[3]}</strong></div>
            <p>你的判断：${row[1]}</p>
            <p>标准路径：${row[2]}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function patientCard(patient) {
  const disabled = patient.id === "wang";
  return `
    <section class="card patient-card">
      <div class="patient-top">
        <div class="name-row">
          ${patientVisual(patient, "initial", "small")}
          <div>
            <h3>${patient.name}｜${patient.age}｜${patient.identity}</h3>
            <p class="complaint">主诉：${patient.complaint}</p>
          </div>
        </div>
        <span class="badge ${patient.difficulty === "入门" ? "green" : "apricot"}">${patient.difficulty}</span>
      </div>
      <div class="patient-meta">
        <div><span>患者状态</span><strong>${patient.status}</strong></div>
        <div><span>训练重点</span><strong>${patient.focus}</strong></div>
      </div>
      <div class="tag-row">${patient.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      <button class="primary-btn" ${disabled ? `data-toast="王先生胃脘案将在下一版开放。"` : `data-case="${patient.id}" data-route="patient"`}>进入诊室</button>
    </section>
  `;
}

function pageTitle(title, subtitle) {
  return `
    <section class="hero">
      <p class="eyebrow">${DATA.brand} · ${DATA.clinic.name}</p>
      <h1>${title}</h1>
      <p class="hero-copy">${subtitle}</p>
      <span class="level-pill">教学训练 · 虚拟模拟</span>
    </section>
  `;
}

function reviewBlock(title, items) {
  return `
    <section class="card">
      <h3>${title}</h3>
      <div class="summary-list">${items.map(item => `<div>${item}</div>`).join("")}</div>
    </section>
  `;
}

function patientVisual(patient, stage = "initial", size = "normal") {
  const profile = patient.patientProfile || {};
  const image = profile.images?.[stage] || profile.avatar || "";
  const icon = profile.icon || patient.icon || "人";
  return `
    <div class="patient-visual ${size}" style="--patient-img:url('${image}')">
      <div class="patient-visual-fallback">${icon}</div>
    </div>
  `;
}

function patientProfileCard(patient, stateText = "") {
  const profile = patient.patientProfile || {};
  return `
    <section class="card patient-profile-card">
      ${patientVisual(patient, "initial", "large")}
      <div>
        <h3>${patient.name}</h3>
        <p class="muted">${patient.age}｜${patient.identity}｜初诊</p>
        <span class="badge green">虚拟患者</span>
        <p class="complaint">今日状态：${stateText || profile.today || patient.status}</p>
      </div>
    </section>
  `;
}

function patientStateCard(patient, stage, label, statusText) {
  const profile = patient.patientProfile || {};
  const visualText = profile.visualState?.[stage] || profile.visualState?.initial || "";
  return `
    <section class="card patient-state-card">
      ${patientVisual(patient, stage, "large")}
      <div>
        <span class="badge green">${label}</span>
        <h3>${patient.name}状态变化</h3>
        <p class="complaint">状态：${statusText}</p>
        <p class="muted">形象提示：${visualText}</p>
      </div>
    </section>
  `;
}

function patientResultCard(patient, text, badge) {
  return `
    <section class="card result-card patient-result-card">
      ${patientVisual(patient, "recovered", "large")}
      <div>
        <span class="badge green">获得徽章：${badge}</span>
        <h3>${patient.name}第3天反馈</h3>
        <p class="complaint">${text}本案已收入你的小满医馆病案架。</p>
      </div>
    </section>
  `;
}

function renderColdStageProgress(current) {
  const stages = ["问诊取证", "辨证选方", "方药匹配", "模拟服药", "病案复盘"];
  const currentIndex = stages.indexOf(current);
  return `
    <section class="stage-strip">
      ${stages.map((stage, index) => `<span class="${index < currentIndex ? "done" : index === currentIndex ? "active" : ""}">${stage}</span>${index < stages.length - 1 ? "<b>→</b>" : ""}`).join("")}
    </section>
  `;
}

function renderColdDiagnosis() {
  const entries = Object.entries(state.coldSelections);
  const firstGroups = entries.filter(([group]) => group !== "中药配方选择" && group !== "中成药选择");
  const herbConfig = state.coldSelections["中药配方选择"];
  const patentConfig = state.coldSelections["中成药选择"];
  return `
    <article class="page">
      ${renderColdStageProgress(state.coldDoseConfirmed ? "方药匹配" : "辨证选方")}
      ${pageTitle("请完成周同学的感冒辨证判断", "请根据症候信息，完成“证型 → 治法 → 方剂 → 中药配方 → 中成药”的完整判断。")}
      <div class="diagnosis-toolbar">
        <button class="ghost-btn" data-route="inquiry">返回问诊</button>
        <button class="soft-btn" data-toggle-case-summary>${state.showCaseSummary ? "收起病案" : "查看病案"}</button>
      </div>
      ${state.showCaseSummary ? renderCaseSummary() : ""}
      <section class="card">
        ${firstGroups.map(([group, config]) => `
          <div class="form-group">
            <div class="form-title"><span>${group}</span><span class="muted">${config.multi ? "可多选" : "单选"}</span></div>
            ${group === "方剂选择" ? `<p class="muted">请按感冒神经网络图，在方剂节点中选择与本案症候证据最匹配的方向。</p>` : ""}
            <div class="chip-grid">
              ${config.options.map(option => `<button class="chip ${config.selected.includes(option) ? "selected" : ""}" data-group="${group}" data-option="${option}">${renderColdOptionLabel(group, option)}</button>`).join("")}
            </div>
          </div>
        `).join("")}
        ${state.coldChoiceTip ? `<div class="coach-tip standalone">${state.coldChoiceTip}</div>` : ""}
      </section>
      <section class="card">
        <div class="form-group">
          <div class="form-title"><span>中药组成选择</span><span class="muted">可多选</span></div>
          <p class="muted">请根据证型和方剂方向，选择适合本案的药物组成。入门级重点考察药味方向，剂量由系统提供教学参考。</p>
          ${renderHerbGroups(herbConfig)}
        </div>
        ${state.coldHerbTip ? `<div class="coach-tip standalone">${state.coldHerbTip}</div>` : ""}
        <button class="primary-btn" data-route="coldDosage">查看参考剂量</button>
      </section>
      ${state.coldDoseConfirmed ? `
        <section class="card">
          <div class="form-group">
            <div class="form-title"><span>中成药选择</span><span class="muted">可多选</span></div>
            <div class="chip-grid">
              ${patentConfig.options.map(option => `<button class="chip ${patentConfig.selected.includes(option) ? "selected" : ""}" data-group="中成药选择" data-option="${option}">${option}</button>`).join("")}
            </div>
          </div>
          ${state.coldPatentTip ? `<div class="coach-tip standalone">${state.coldPatentTip}</div>` : ""}
          <button class="primary-btn" data-route="assessment">提交辨证方案</button>
        </section>
      ` : ""}
      <p class="notice">${DATA.disclaimer}</p>
    </article>
  `;
}

function renderColdOptionLabel(group, option) {
  if (group !== "中药配方选择") return option;
  const fn = DATA.coldAnswer.herbFunctions[option] || "";
  return `<span class="herb-name">${option}</span>${fn ? `<small>${fn}</small>` : ""}`;
}

function renderHerbGroups(herbConfig) {
  const groups = [
    ["风寒解表组", ["荆芥", "防风", "羌活", "独活"]],
    ["宣肺化痰组", ["柴胡", "前胡", "桔梗", "枳壳"]],
    ["和中辅助组", ["茯苓", "川芎", "甘草", "生姜"]],
    ["风热干扰组", ["金银花", "连翘", "薄荷", "牛蒡子", "黄芩", "石膏"]],
    ["暑湿/阴虚干扰组", ["香薷", "藿香", "佩兰", "麦冬", "沙参"]]
  ];
  return groups.map(([title, herbs]) => `
    <div class="herb-group">
      <h4>${title}</h4>
      <div class="chip-grid medicine-pool">
        ${herbs.map(option => `<button class="chip ${herbConfig.selected.includes(option) ? "selected" : ""}" data-group="中药配方选择" data-option="${option}">${renderColdOptionLabel("中药配方选择", option)}</button>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderColdDosage() {
  const herbs = state.coldSelections["中药配方选择"].selected;
  return `
    <article class="page">
      ${renderColdStageProgress("方药匹配")}
      ${pageTitle("参考剂量确认", "展示你已选药物及系统教学参考剂量。")}
      <section class="card"><p class="complaint">入门级病例重点考察方药组成匹配，剂量为系统教学参考。</p></section>
      <section class="card">
        <h3>已选中药组成</h3>
        ${herbs.length ? `
          <div class="dosage-list">
            ${herbs.map(herb => {
              const warning = getHerbWarning(herb);
              return `
                <div class="dosage-item ${warning ? "warn" : ""}">
                  <div><strong>${herb}</strong><span>${DATA.coldAnswer.herbDosage[herb] || "教学参考"}</span></div>
                  ${warning ? `<p>${warning}</p>` : `<p>与本案方药方向较匹配。</p>`}
                </div>
              `;
            }).join("")}
          </div>
        ` : `<div class="empty-record">你还没有选择药物，请返回调整药味。</div>`}
      </section>
      <p class="notice">本页面剂量仅用于中医教学训练和方药组成理解，不作为真实患者用药建议。</p>
      <div class="button-row">
        <button class="ghost-btn" data-route="diagnosis">返回调整药味</button>
        <button class="primary-btn" data-confirm-dosage ${herbs.length ? "" : "disabled"}>确认配方，继续选择中成药</button>
      </div>
    </article>
  `;
}

function getHerbWarning(herb) {
  const windHeat = ["金银花", "连翘", "薄荷", "牛蒡子", "黄芩"];
  const realHeat = ["石膏"];
  const yin = ["麦冬", "沙参"];
  const damp = ["香薷", "藿香", "佩兰"];
  if (windHeat.includes(herb)) return "此药更偏风热/清热方向，本案不是首选。";
  if (realHeat.includes(herb)) return "此药更偏实热方向，本案不是首选。";
  if (yin.includes(herb)) return "此药更偏阴虚燥热方向，本案证据不足。";
  if (damp.includes(herb)) return "此药更偏暑湿/化湿方向，本案证据不足。";
  return "";
}

function formatHerbsWithDosage(herbs) {
  return herbs.map(herb => `${herb}${DATA.coldAnswer.herbDosage[herb] ? ` ${DATA.coldAnswer.herbDosage[herb]}` : ""}`).join("、");
}

function setActiveCase(caseId) {
  state.activeCaseId = caseId;
  if (!state.caseStates[caseId]) state.caseStates[caseId] = { inquiryRecords: [] };
  if (state.savedCases[caseId] === undefined) state.savedCases[caseId] = false;
  state.showCaseSummary = false;
  state.showAiPrompts = false;
  state.showInfoPanel = false;
}

function isColdCase() {
  return state.activeCaseId === "zhou";
}

function getActivePatient() {
  return DATA.patients.find(patient => patient.id === state.activeCaseId) || DATA.patients[0];
}

function getCaseState() {
  if (!state.caseStates[state.activeCaseId]) state.caseStates[state.activeCaseId] = { inquiryRecords: [], unlockedInfo: [] };
  return state.caseStates[state.activeCaseId];
}

function getActiveQuestions() {
  return getActivePatient().questions || DATA.questions;
}

function getActiveKnowledgeBase() {
  return getActivePatient().knowledgeBase || DATA.patientKnowledgeBase;
}

function getInfoUnlockMap() {
  if (isColdCase()) {
    return {
      汗: "汗出",
      咽喉: "咽痛",
      咽痛: "咽痛",
      痰: "痰色",
      胃肠: "胃肠症状",
      口渴: "口渴"
    };
  }
  return {
    病程: "病程",
    怕冷怕热: "寒热",
    胸胁胀满: "胸胁",
    月经: "月经",
    心悸健忘: "心悸",
    纳差便溏: "饮食二便",
    饮食: "饮食二便",
    大便: "饮食二便",
    潮热盗汗: "潮热盗汗",
    痰多胸闷: "痰多胸闷"
  };
}

function getMasteredInfoItems() {
  const patient = getActivePatient();
  const base = patient.masteredInfo || DATA.masteredInfo;
  const unlocked = getCaseState().unlockedInfo || [];
  return [...base, ...unlocked.filter(item => !base.includes(item))];
}

function getPendingInfoItems() {
  const patient = getActivePatient();
  const base = patient.pendingInfo || DATA.pendingInfo;
  const unlocked = getCaseState().unlockedInfo || [];
  return base.filter(item => !unlocked.includes(item));
}

function getColdInquiryAnalysis() {
  const records = getCaseState().inquiryRecords;
  const reviewKeys = ["怕冷", "发热", "汗", "鼻涕", "咽喉", "咽痛", "痰", "头痛", "身痛", "口渴", "胃肠", "舌象", "脉象"];
  const hitKeys = [...new Set(records
    .map(record => record.matchedKey === "清涕" ? "鼻涕" : record.matchedKey)
    .filter(key => reviewKeys.includes(key)))];
  const weakCount = records.filter(record => record.relevance === "low" || record.matchedKey === "未匹配").length;
  const keyHitCount = hitKeys.length;
  let completenessScore = keyHitCount <= 1 ? 52 : keyHitCount <= 3 ? 68 + keyHitCount * 2 : Math.min(92, 78 + (keyHitCount - 4) * 3);
  if (hitKeys.includes("汗") && hitKeys.includes("鼻涕")) completenessScore += 3;
  completenessScore = clamp(completenessScore - weakCount * 4, 45, 94);
  const evidenceBonus = (hitKeys.includes("汗") ? 4 : 0) + (hitKeys.includes("鼻涕") ? 4 : 0) + (hitKeys.includes("怕冷") ? 3 : 0) + Math.min(8, keyHitCount) - weakCount * 3;
  const missingKeys = reviewKeys.filter(key => !hitKeys.includes(key));
  const usefulText = hitKeys.length ? `你追问了“${hitKeys.join("、")}”，有助于区分风寒、风热和暑湿感冒。` : "你还没有命中感冒辨证的关键追问，建议先围绕怕冷发热、汗出、鼻涕、咽喉和痰色展开。";
  const missingText = missingKeys.length ? `本案还建议追问“${missingKeys.slice(0, 4).join("、")}”，以便确认风寒证据并排除风热、暑湿。` : "本案感冒鉴别追问覆盖较完整，可以进入证型与方药判断。";
  const weakText = weakCount ? "你追问的部分问题与本案外感感冒鉴别关系较弱。建议优先围绕寒热、汗出、鼻涕、咽痛、痰色和胃肠症状展开。" : "本轮追问基本围绕外感感冒辨证展开，问题方向较集中。";
  return {
    total: records.length,
    hitKeys,
    keyHitCount,
    weakCount,
    completenessScore,
    evidenceBonus,
    pointComment: usefulText,
    missingComment: missingText,
    weakComment: weakText,
    nextAdvice: missingKeys.length ? `下次建议补充追问${missingKeys.slice(0, 3).join("、")}，帮助完成风寒、风热、暑湿鉴别。` : "下次可继续追问症状变化与服药后反馈，形成完整感冒病案。"
  };
}

function renderInquiryConversation() {
  const p = getActivePatient();
  const opener = isColdCase()
    ? "我明天还有考试，结果今天一直打喷嚏、流清鼻涕，头也痛，身上酸，特别怕冷。昨天晚上空调开得有点低，还吹了风。"
    : p.description;
  return `
    <div class="conversation-flow">
      <div class="bubble-row patient">
        <div class="bubble light"><span>${p.name}</span>${escapeHTML(opener)}</div>
      </div>
      ${renderInquiryRecords()}
      ${getCaseState().inquiryRecords.length ? "" : `<div class="empty-record chat-empty">你可以先自己追问。想不起来时，再点顶部“AI建议补漏”。</div>`}
    </div>
  `;
}

function renderInquiryRecords() {
  const records = getCaseState().inquiryRecords;
  const patientName = getActivePatient().name;
  if (!records.length) {
    return "";
  }
  return `
    <div class="chat-records">
      ${records.map(record => `
        <div class="chat-pair">
          <div class="bubble-row student">
            <div class="bubble dark"><span>你</span>${escapeHTML(record.question)}</div>
          </div>
          <div class="bubble-row patient">
            <div class="bubble light"><span>${patientName}</span>${escapeHTML(record.answer)}</div>
          </div>
          ${record.coachTip ? `<div class="coach-tip">${escapeHTML(record.coachTip)}</div>` : ""}
        </div>
      `).join("")}
    </div>
  `;
}

function renderDiagnosisReadyCard(inquiry) {
  if (inquiry.keyHitCount < 3) return "";
  return `
    <section class="ready-card">
      <span class="badge green">证据已形成</span>
      <h3>已获得 ${inquiry.keyHitCount} 条关键证据，可以开始辨证。</h3>
      <p>系统会把本轮模拟问诊记录带入 AI 带教评估和病案复盘。</p>
      <button class="primary-btn" data-route="diagnosis">开始辨证</button>
    </section>
  `;
}

function renderAiPromptDrawer() {
  const questions = getActiveQuestions();
  return `
    <div class="sheet-mask" data-close-sheet>
      <section class="bottom-sheet" aria-label="AI建议优先追问">
        <div class="sheet-handle"></div>
        <div class="sheet-head">
          <div>
            <h2>AI建议优先追问</h2>
            <p class="muted">想不起来怎么问时，可以从这些关键问题里选择。</p>
          </div>
          <button class="ghost-btn" data-toggle-ai-prompts>关闭</button>
        </div>
        <div class="recommend-list">
          ${questions.map(item => {
            const asked = hasAskedQuestion(item.question, item.key);
            return `
              <div class="recommend-item ${asked ? "asked" : ""}">
                <span>${item.question}</span>
                <button class="${asked ? "soft-btn" : "ghost-btn"}" data-recommend-key="${item.key}">${asked ? "已问" : "直接追问"}</button>
              </div>
            `;
          }).join("")}
        </div>
        <div class="sheet-actions">
          <button class="ghost-btn full" data-toggle-ai-prompts>收起建议</button>
        </div>
      </section>
    </div>
  `;
}

function renderInquiryInfoPanel() {
  const masteredInfo = getMasteredInfoItems();
  const pendingInfo = getPendingInfoItems();
  return `
    <div class="sheet-mask info-mask" data-close-info>
      <section class="info-panel" aria-label="已掌握信息">
        <div class="section-head compact">
          <h2>已掌握信息</h2>
          <button class="ghost-btn" data-toggle-info-panel>关闭</button>
        </div>
        <div class="info-panel-block">
          <h3>已掌握信息</h3>
          <div class="tag-row">${masteredInfo.map(item => `<span class="tag soft-green">${item}</span>`).join("")}</div>
        </div>
        <div class="info-panel-toggle">
          <button class="ghost-btn full" data-toggle-pending-info>${state.showPendingInfo ? "收起待完善信息" : "查看待完善信息"}</button>
        </div>
        ${state.showPendingInfo ? `
          <div class="info-panel-block">
            <h3>待完善信息</h3>
            <div class="tag-row">${pendingInfo.map(item => `<span class="tag soft-rice">${item}</span>`).join("")}</div>
          </div>
        ` : ""}
      </section>
    </div>
  `;
}

function renderCaseSummary() {
  const p = getActivePatient();
  return `
    <section class="card case-summary">
      <div class="section-head compact">
        <h2>本次病案摘要</h2>
        <span class="tiny-pill">虚拟病人</span>
      </div>
      <div class="summary-list">
        <div>${p.name}｜${p.age}｜${p.identity}</div>
        <div>主诉：${p.complaint}</div>
        <div>患者描述：${p.description}</div>
        <div>舌脉：${p.basics?.舌象 || ""}；${p.basics?.脉象 || ""}</div>
      </div>
      <h3>已纳入问诊记录</h3>
      ${renderInquiryRecords()}
    </section>
  `;
}

function bindPageActions() {
  app.querySelectorAll("[data-route]").forEach(el => {
    el.addEventListener("click", () => {
      if (el.dataset.case) setActiveCase(el.dataset.case);
      showStageToast(el.dataset.route);
      render(el.dataset.route);
    });
  });

  app.querySelectorAll("[data-toast]").forEach(el => {
    el.addEventListener("click", () => showToast(el.dataset.toast));
  });

  app.querySelectorAll("[data-recommend-key]").forEach(button => {
    button.addEventListener("click", () => {
      const item = getActiveQuestions().find(q => q.key === button.dataset.recommendKey);
      if (!item) return;
      if (hasAskedQuestion(item.question, item.key)) {
        showToast("这个问题已经问过了。");
        return;
      }
      addInquiryRecord(item.question, matchPatientAnswer(item.question, item.key), "recommended");
      state.showAiPrompts = false;
      render("inquiry", { scrollInquiryBottom: true });
    });
  });

  app.querySelectorAll("[data-send-inquiry]").forEach(button => {
    button.addEventListener("click", () => {
      const input = document.querySelector("#freeInquiryInput");
      const question = input?.value.trim() || "";
      if (!question) {
        showToast("请先输入你想追问的问题。");
        return;
      }
      const unlockedInfo = addInquiryRecord(question, matchPatientAnswer(question), "free");
      if (unlockedInfo) state.pendingUnlockCue = { label: unlockedInfo };
      render("inquiry", { scrollInquiryBottom: true });
    });
  });

  app.querySelectorAll("#freeInquiryInput").forEach(input => {
    input.addEventListener("keydown", event => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      app.querySelector("[data-send-inquiry]")?.click();
    });
  });

  app.querySelectorAll("[data-voice-inquiry]").forEach(button => {
    button.addEventListener("click", () => {
      showToast("Demo版本暂用文字追问，正式版支持语音问诊训练。");
    });
  });

  app.querySelectorAll("[data-toggle-ai-prompts]").forEach(button => {
    button.addEventListener("click", () => {
      state.showAiPrompts = !state.showAiPrompts;
      if (state.showAiPrompts) state.showInfoPanel = false;
      render("inquiry", { preserveScroll: true });
    });
  });

  app.querySelectorAll("[data-toggle-info-panel]").forEach(button => {
    button.addEventListener("click", () => {
      state.showInfoPanel = !state.showInfoPanel;
      if (state.showInfoPanel) state.showAiPrompts = false;
      if (!state.showInfoPanel) state.showPendingInfo = false;
      render("inquiry", { preserveScroll: true });
    });
  });

  app.querySelectorAll("[data-toggle-pending-info]").forEach(button => {
    button.addEventListener("click", () => {
      state.showPendingInfo = !state.showPendingInfo;
      render("inquiry", { preserveScroll: true });
    });
  });

  app.querySelectorAll("[data-close-sheet]").forEach(mask => {
    mask.addEventListener("click", event => {
      if (event.target !== mask) return;
      state.showAiPrompts = false;
      render("inquiry", { preserveScroll: true });
    });
  });

  app.querySelectorAll("[data-close-info]").forEach(mask => {
    mask.addEventListener("click", event => {
      if (event.target !== mask) return;
      state.showInfoPanel = false;
      state.showPendingInfo = false;
      render("inquiry", { preserveScroll: true });
    });
  });

  app.querySelectorAll("[data-toggle-case-summary]").forEach(button => {
    button.addEventListener("click", () => {
      state.showCaseSummary = !state.showCaseSummary;
      render("diagnosis", { preserveScroll: true });
    });
  });

  app.querySelectorAll("[data-confirm-dosage]").forEach(button => {
    button.addEventListener("click", () => {
      if (!state.coldSelections["中药配方选择"].selected.length) {
        showToast("请先选择中药组成。");
        return;
      }
      state.coldDoseConfirmed = true;
      render("diagnosis");
    });
  });

  app.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const selectionSet = isColdCase() ? state.coldSelections : state.selections;
      const group = selectionSet[chip.dataset.group];
      const option = chip.dataset.option;
      if (isColdCase() && chip.dataset.group === "中药配方选择") state.coldDoseConfirmed = false;
      if (isColdCase() && ["证型判断", "治法选择", "方剂选择"].includes(chip.dataset.group)) {
        state.coldChoiceTip = DATA.coldAnswer.choiceTips[option] || "";
      }
      if (isColdCase() && chip.dataset.group === "中药配方选择") {
        state.coldHerbTip = DATA.coldAnswer.herbTips[option] || `${option}：请结合本案风寒证据判断是否适合。`;
      }
      if (isColdCase() && chip.dataset.group === "中成药选择") {
        state.coldPatentTip = DATA.coldAnswer.patentTips[option] || "";
      }
      if (group.multi) {
        group.selected = group.selected.includes(option)
          ? group.selected.filter(item => item !== option)
          : [...group.selected, option];
      } else {
        group.selected = [option];
      }
      render("diagnosis", { preserveScroll: true });
    });
  });

  app.querySelectorAll("[data-expert]").forEach(button => {
    button.addEventListener("click", () => {
      state.activeExpert = button.dataset.expert;
      render("consult");
      setTimeout(() => document.querySelector("#consultOpinion")?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    });
  });

  app.querySelectorAll("[data-save-case]").forEach(button => {
    button.addEventListener("click", () => {
      state.savedCase = true;
      state.savedCases[state.activeCaseId] = true;
      showToast("已收入小满医馆病案架");
    });
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function playInfoUnlockEffect(cue) {
  if (!cue?.label) return;
  const target = app.querySelector("[data-toggle-info-panel]");
  if (!target) return;
  const pairs = app.querySelectorAll(".chat-pair");
  const lastPair = pairs[pairs.length - 1];
  const source = lastPair?.querySelector(".coach-tip") || lastPair?.querySelector(".bubble.light") || app.querySelector("#freeInquiryInput");
  if (!source) return;
  const startRect = source.getBoundingClientRect();
  const endRect = target.getBoundingClientRect();
  const chip = document.createElement("div");
  chip.className = "info-fly-chip";
  chip.textContent = cue.label;
  const startX = startRect.left + Math.min(startRect.width - 24, 40);
  const startY = startRect.top + Math.max(18, Math.min(startRect.height / 2, 42));
  const endX = endRect.left + endRect.width / 2;
  const endY = endRect.top + endRect.height / 2;
  chip.style.left = `${startX}px`;
  chip.style.top = `${startY}px`;
  chip.style.setProperty("--fly-x", `${endX - startX}px`);
  chip.style.setProperty("--fly-y", `${endY - startY}px`);
  document.body.appendChild(chip);
  requestAnimationFrame(() => {
    chip.classList.add("animate");
    target.classList.add("info-entry-pulse");
  });
  playInfoUnlockTone();
  chip.addEventListener("animationend", () => {
    chip.remove();
    target.classList.remove("info-entry-pulse");
  }, { once: true });
}

function playInfoUnlockTone() {
  try {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;
    playInfoUnlockTone.ctx = playInfoUnlockTone.ctx || new AudioCtor();
    const ctx = playInfoUnlockTone.ctx;
    if (ctx.state === "suspended") ctx.resume();
    const now = ctx.currentTime;
    const gain = ctx.createGain();
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

    const oscA = ctx.createOscillator();
    oscA.type = "sine";
    oscA.frequency.setValueAtTime(740, now);
    oscA.frequency.linearRampToValueAtTime(880, now + 0.16);
    oscA.connect(gain);
    oscA.start(now);
    oscA.stop(now + 0.28);

    const oscB = ctx.createOscillator();
    oscB.type = "triangle";
    oscB.frequency.setValueAtTime(988, now + 0.04);
    oscB.connect(gain);
    oscB.start(now + 0.04);
    oscB.stop(now + 0.18);
  } catch (error) {
    // Ignore audio failures; the visual cue is still enough.
  }
}

function scrollInquiryToBottom() {
  setTimeout(() => {
    const thread = document.querySelector("#inquiryThread");
    if (thread) {
      thread.scrollTo({ top: thread.scrollHeight, behavior: "smooth" });
      return;
    }
    document.querySelector("#inquiryEnd")?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 60);
}

function showStageToast(route) {
  if (!isColdCase()) return;
  const inquiry = getInquiryAnalysis();
  const messages = {
    diagnosis: `已完成问诊取证，获得 ${inquiry.keyHitCount} 条关键证据`,
    assessment: "已完成辨证选方，证型方向待带教评估",
    observation: "已完成方药匹配，进入模拟服药",
    review: "已完成模拟服药，进入病案复盘"
  };
  if (messages[route]) showToast(messages[route]);
}

function getSelected(group) {
  const selections = isColdCase() ? state.coldSelections : state.selections;
  return selections[group]?.selected[0] || "";
}

function hasAskedQuestion(question, key = "") {
  const normalized = normalizeQuestion(question);
  return getCaseState().inquiryRecords.some(record => {
    if (key && record.matchedKey === key) return true;
    return normalizeQuestion(record.question) === normalized;
  });
}

function addInquiryRecord(question, result, source) {
  const unlockedInfo = unlockInfoByKey(result.key);
  getCaseState().inquiryRecords.push({
    question,
    answer: result.answer,
    matchedKey: result.key,
    relevance: result.relevance,
    source,
    coachTip: getInquiryCoachTip(result),
    unlockedInfo
  });
  return unlockedInfo;
}

function unlockInfoByKey(key) {
  const label = getInfoUnlockMap()[key];
  if (!label) return "";
  const caseState = getCaseState();
  caseState.unlockedInfo = caseState.unlockedInfo || [];
  if (caseState.unlockedInfo.includes(label)) return "";
  caseState.unlockedInfo.push(label);
  return label;
}

function getInquiryCoachTip(result) {
  if (isColdCase()) {
    if (result.relevance === "low" || result.key === "未匹配") return "这个问题与本案辨证关系较弱，建议优先围绕寒热、汗出、鼻涕、痰色、咽痛和胃肠症状追问。";
    return DATA.coldAnswer.inquiryTips[result.key] || "";
  }
  return "";
}

function normalizeQuestion(question) {
  return String(question).replace(/[\\s？?。！!，,、：:；;]/g, "");
}

function matchPatientAnswer(question, preferredKey = "") {
  const normalized = question.replace(/\s/g, "");
  if (/舌象|舌苔/.test(normalized) || preferredKey === "舌象") {
    return {
      key: "舌象",
      answer: `系统基础观察：${getActivePatient().basics?.舌象 || "舌象信息见基础信息卡。"}。`,
      relevance: "medium"
    };
  }
  if (/脉象|浮紧|浮数/.test(normalized) || preferredKey === "脉象") {
    return {
      key: "脉象",
      answer: `系统基础观察：${getActivePatient().basics?.脉象 || "脉象信息见基础信息卡。"}。`,
      relevance: "medium"
    };
  }
  const knowledgeBase = getActiveKnowledgeBase();
  if (isColdCase()) {
    const priorityKey = /痰色|咳痰|白痰|黄痰|痰/.test(normalized)
      ? "痰"
      : /鼻涕|流涕|清涕|黄涕|清鼻涕/.test(normalized)
        ? "鼻涕"
        : /咽喉|咽痛|喉咙|嗓子|红肿/.test(normalized)
          ? "咽痛"
          : "";
    const priority = knowledgeBase.find(item => item.key === priorityKey);
    if (priority) return priority;
  }
  const preferred = knowledgeBase.find(item => item.key === preferredKey);
  if (preferred) return preferred;

  const matches = knowledgeBase
    .map(item => {
      const alias = item.aliases.find(aliasText => normalized.includes(aliasText));
      return alias ? { item, length: alias.length } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  if (matches.length) return matches[0].item;

  return {
    key: "未匹配",
    answer: isColdCase()
      ? "这个情况我没有特别明显。"
      : (question.length % 2 === 0
        ? "这个情况我没有特别明显。"
        : "这个问题我不太确定，平时没有特别明显的感觉。"),
    relevance: "low"
  };
}

function getInquiryAnalysis() {
  if (isColdCase()) return getColdInquiryAnalysis();
  const records = getCaseState().inquiryRecords;
  const keyIssueMap = {
    病程: "high",
    胸胁胀满: "high",
    月经: "high",
    口苦咽干: "medium",
    心悸健忘: "medium",
    纳差便溏: "medium",
    饮食: "medium",
    大便: "medium",
    潮热盗汗: "medium",
    痰多胸闷: "medium",
    怕冷怕热: "low-medium",
    小便: "low"
  };
  const reviewKeys = ["病程", "胸胁胀满", "月经", "口苦咽干", "心悸健忘", "纳差便溏", "潮热盗汗", "痰多胸闷"];
  const hitKeys = [...new Set(records.map(record => record.matchedKey).filter(key => keyIssueMap[key]))];
  const keyHitCount = hitKeys.filter(key => reviewKeys.includes(key)).length;
  const weakCount = records.filter(record => record.relevance === "low" || record.matchedKey === "未匹配").length;
  let completenessScore = 48;
  if (keyHitCount <= 1) completenessScore = 48 + keyHitCount * 7;
  if (keyHitCount === 2) completenessScore = 68;
  if (keyHitCount === 3) completenessScore = 74;
  if (keyHitCount >= 4) completenessScore = Math.min(90, 78 + (keyHitCount - 4) * 4);
  if (hitKeys.includes("胸胁胀满") && hitKeys.includes("月经")) completenessScore += 4;
  completenessScore = clamp(completenessScore - weakCount * 4, 45, 92);

  const evidenceBonus = (hitKeys.includes("胸胁胀满") ? 5 : 0) + (hitKeys.includes("月经") ? 5 : 0) + Math.min(6, keyHitCount * 2) - weakCount * 3;
  const missingKeys = reviewKeys.filter(key => !hitKeys.includes(key));
  const usefulKeys = hitKeys.filter(key => reviewKeys.includes(key));
  const usefulText = usefulKeys.length ? `你追问了“${usefulKeys.join("、")}”，这些问题能够帮助判断病程、肝郁、化火及妇科相关证据，属于有效追问。` : "你还没有命中关键辨证追问，建议先围绕病程、胸胁、月经、寒热、心悸、饮食二便继续追问。";
  const missingText = missingKeys.length ? `本案还建议追问“${missingKeys.slice(0, 4).join("、")}”，以便排除阴虚火旺、心脾两虚和痰热扰心等可能。` : "本案核心鉴别问题覆盖较完整，后续可继续细化睡眠节律与服药后反应。";
  const weakText = weakCount ? "你追问的部分问题与本案失眠、情志、月经前症状关系较弱。建议优先围绕睡眠特点、情绪、胸胁、寒热、二便和月经展开。" : "本轮追问基本围绕失眠、情志和辨证鉴别展开，问题方向较集中。";
  const nextAdvice = missingKeys.length
    ? `下次建议补充追问${missingKeys.slice(0, 3).join("、")}，让虚拟病人的证据链更完整。`
    : "下次可以继续追问症状变化的时间、诱因和复诊反馈，让模拟问诊更接近完整病案采集。";

  return {
    total: records.length,
    hitKeys,
    keyHitCount,
    weakCount,
    completenessScore,
    evidenceBonus,
    pointComment: usefulText,
    missingComment: missingText,
    weakComment: weakText,
    nextAdvice
  };
}

function getFeedbackScenario() {
  if (isColdCase()) return getColdFeedbackScenario();
  const syndrome = getSelected("主证判断");
  const formula = getSelected("参考方选择");
  if (syndrome === "肝郁气滞" && formula === "逍遥散合酸枣仁汤加减") return DATA.feedbackMap.liver;
  if (syndrome === "心脾两虚" && formula === "归脾汤加减") return DATA.feedbackMap.spleen;
  if (syndrome === "阴虚火旺" && formula === "黄连阿胶汤加减") return DATA.feedbackMap.yinFire;
  if (syndrome === "痰热扰心" && formula === "温胆汤加减") return DATA.feedbackMap.phlegm;
  return DATA.feedbackMap.default;
}

function getColdStudentSelections() {
  return {
    syndrome: state.coldSelections["证型判断"].selected[0] || "",
    method: state.coldSelections["治法选择"].selected[0] || "",
    formula: state.coldSelections["方剂选择"].selected[0] || "",
    herbs: state.coldSelections["中药配方选择"].selected,
    patent: state.coldSelections["中成药选择"].selected
  };
}

function getColdAssessmentResult() {
  const answer = DATA.coldAnswer;
  const selections = getColdStudentSelections();
  const inquiry = getInquiryAnalysis();
  const herbHits = selections.herbs.filter(item => answer.herbs.includes(item)).length;
  const herbWrong = selections.herbs.filter(item => !answer.herbs.includes(item)).length;
  const coldHerbWrong = selections.herbs.filter(item => answer.coldHerbs.includes(item)).length;
  const patentHits = selections.patent.filter(item => answer.patent.includes(item)).length;
  const patentWrong = selections.patent.filter(item => !answer.patent.includes(item)).length;
  const formulaMeta = answer.formulaGraph[selections.formula] || { score: 50, note: "该方不在本案感冒图谱的主要路径中。", relation: "需调整" };
  const syndromeScore = selections.syndrome === answer.syndrome ? 90 : selections.syndrome === "风热感冒" ? 62 : 58;
  const formulaScore = formulaMeta.score;
  const herbScore = clamp(Math.round((herbHits / answer.herbs.length) * 92) - herbWrong * 5 - coldHerbWrong * 6, 35, 95);
  const patentScore = clamp(62 + patentHits * 11 - patentWrong * 8, 35, 95);
  const safetyScore = clamp(88 - coldHerbWrong * 8 - patentWrong * 4, 45, 92);
  const dimensions = [
    ["问诊完整度", inquiry.completenessScore],
    ["证型判断", syndromeScore],
    ["方证匹配", formulaScore],
    ["中药配方", herbScore],
    ["中成药选择", patentScore],
    ["用药安全性", safetyScore]
  ];
  const score = Math.round(dimensions.reduce((sum, item) => sum + item[1], 0) / dimensions.length);
  const tag = score >= 82 ? "方向较准确" : score >= 68 ? "部分方向正确" : "需要回看证据";
  return {
    score,
    tag,
    dimensions,
    comment: selections.syndrome === "风寒感冒"
      ? `你抓住了“恶寒重、发热轻、无汗、鼻流清涕、痰白清稀、苔薄白、脉浮紧”等关键证据，能够判断为风寒感冒。方剂图谱判断：${formulaMeta.note}`
      : "当前证型判断与本案关键证据仍有偏差。请回看恶寒明显、无汗、清涕、痰白清稀、苔薄白、脉浮紧等风寒表证证据。",
    herbComment: coldHerbWrong
      ? "你选择了较多偏寒凉清热药物，如金银花、连翘、石膏、黄芩等。本案热象不明显，这类药物更偏风热或实热方向，不宜作为主线。"
      : "荆芥、防风、羌活、独活等药物与风寒束表方向匹配。中药配方应围绕辛温解表、宣肺散寒展开。",
    patentComment: patentWrong
      ? "风寒感冒颗粒、荆防颗粒、感冒清热颗粒更符合本案风寒外束方向。银翘解毒丸、桑菊感冒片、双黄连口服液更偏风热或热毒，不是本案首选。"
      : "风寒感冒颗粒、荆防颗粒、感冒清热颗粒更符合本案风寒外束的方向。"
  };
}

function getColdFeedbackScenario() {
  const selections = getColdStudentSelections();
  const answer = DATA.coldAnswer;
  const coldHerbWrong = selections.herbs.filter(item => answer.coldHerbs.includes(item)).length;
  if (coldHerbWrong >= 2) return DATA.coldFeedbackMap.coldHerbs;
  if (selections.syndrome === "风寒感冒" && selections.formula === "荆防败毒散加减" && selections.patent.some(item => answer.patent.includes(item))) return DATA.coldFeedbackMap.correct;
  if (selections.formula === "麻黄汤加减") return DATA.coldFeedbackMap.mahuang;
  if (selections.formula === "桂枝汤加减") return DATA.coldFeedbackMap.guizhi;
  if (selections.syndrome === "风热感冒" || ["银翘散加减", "桑菊饮加减"].includes(selections.formula) || selections.patent.includes("银翘解毒丸")) return DATA.coldFeedbackMap.windHeat;
  if (selections.syndrome === "暑湿感冒" || selections.formula === "新加香薷饮加减" || selections.patent.includes("藿香正气水")) return DATA.coldFeedbackMap.dampSummer;
  if (selections.formula === "白虎加人参汤") return DATA.coldFeedbackMap.windHeat;
  return DATA.coldFeedbackMap.windHeat;
}

function getColdObservationPreview() {
  const selections = getColdStudentSelections();
  if (selections.formula === "麻黄汤加减") return "风险观察：同属风寒网络，但发散力量偏强，需要观察鼻塞清涕与体力反应。";
  if (selections.formula === "桂枝汤加减") return "风险观察：桂枝汤偏表虚有汗，本案无汗证据明显，可能改善有限。";
  if (selections.syndrome === "风热感冒" || ["银翘散加减", "桑菊饮加减", "白虎加人参汤"].includes(selections.formula)) return "风险观察：风热或热盛方向可能无法改善怕冷、清涕和身痛。";
  if (selections.syndrome === "暑湿感冒" || selections.formula === "新加香薷饮加减") return "风险观察：若胃肠症状不突出，化湿方向可能无法切中主证。";
  return "预计观察重点：怕冷、鼻涕、头痛身痛、咳痰变化。";
}

function getAssessmentResult() {
  if (isColdCase()) return getColdAssessmentResult();
  const syndrome = getSelected("主证判断");
  const formula = getSelected("参考方选择");
  let base = DATA.assessmentMap.default;
  if (syndrome === "肝郁气滞" && formula === "逍遥散合酸枣仁汤加减") base = DATA.assessmentMap.liver;
  if (syndrome === "心脾两虚" && formula === "归脾汤加减") base = DATA.assessmentMap.spleen;
  if (syndrome === "阴虚火旺" && formula === "黄连阿胶汤加减") base = DATA.assessmentMap.yinFire;
  if (syndrome === "痰热扰心" && formula === "温胆汤加减") base = DATA.assessmentMap.phlegm;

  const inquiry = getInquiryAnalysis();
  const baseScore = Object.fromEntries(base.dimensions);
  const keyEvidence = clamp((baseScore["关键证据抓取"] || 70) + inquiry.evidenceBonus, 45, 94);
  const dimensions = [
    ["问诊完整度", inquiry.completenessScore],
    ["关键证据抓取", keyEvidence],
    ["辨证方向", baseScore["辨证方向"] || 70],
    ["方证匹配", baseScore["方证匹配"] || 70],
    ["用药安全性", baseScore["用药安全性"] || 75]
  ];
  const score = Math.round(dimensions.reduce((sum, item) => sum + item[1], 0) / dimensions.length);
  return { ...base, score, dimensions };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

render("home");
