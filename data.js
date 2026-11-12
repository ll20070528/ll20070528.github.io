// 论文数据（蔺庆海 · Qinghai Lin）
// isPreprint: true  → 会议论文；false → 期刊论文（复用模板的 preprint/paper 分区，仅作分类用）
// isSelected: true  → 同时显示在主页"精选论文"
// 作者列表中用 <b>姓名</b> 高亮本人；* 表示通讯作者
const publications = [
  // ---------- 期刊论文 ----------
  {
    title: "Real-World Autonomous Driving: Exploring Energy Dynamics in Gradually Evolving Traffic Flows",
    authors: "Jianchang Huang, Hongliang Liu, Xin Wang*, <b>Qinghai Lin*</b>, Guohua Song, Pengfei Fan, Lei Yu",
    venue: "IEEE Transactions on Intelligent Transportation Systems, 2026 · 通讯作者 · SCI JCR Q1 · TOP",
    links: [{ text: "链接", url: "https://ieeexplore.ieee.org/document/11397282" }],
    isNew: false, isPreprint: false, isSelected: true
  },
  {
    title: "Unraveling Inter-Driver and Intra-Driver Uncertainty: An Eco-Driving Evaluation and Optimization Method",
    authors: "Jianchang Huang, Xin Wang, <b>Qinghai Lin</b>, Guohua Song, Lei Yu",
    venue: "Energy, 2025 · SCI JCR Q1 · TOP",
    links: [{ text: "链接", url: "https://doi.org/10.1016/j.energy.2025.135501" }],
    isNew: false, isPreprint: false, isSelected: true
  },
  {
    title: "Multi-Agent Game Theory-Based Coordinated Ramp Metering Method for Urban Expressways With Multi-Bottleneck",
    authors: "<b>Qinghai Lin</b>, Wei Huang, Zhigang Wu, Mengmeng Zhang, Zhaocheng He*",
    venue: "IEEE Transactions on Intelligent Transportation Systems, 2025 · 第一作者 · SCI JCR Q1 · TOP",
    links: [{ text: "链接", url: "https://doi.org/10.1109/TITS.2024.3521460" }],
    isNew: false, isPreprint: false, isSelected: true
  },
  {
    title: "基于 AVI 数据与深度强化学习的城市快速路匝道协调控制方法",
    authors: "<b>蔺庆海</b>, 何兆成, 谢俊, 武智刚, 黄玮*",
    venue: "中国公路学报, 2023 · 第一作者 · EI · 中文顶刊",
    links: [{ text: "链接", url: "https://doi.org/10.19721/j.cnki.1001-7372.2023.10.018" }],
    isNew: false, isPreprint: false, isSelected: true
  },
  {
    title: "A Deep Generative Approach for Crash Frequency Model with Heterogeneous Imbalanced Data",
    authors: "Hongliang Ding, Yuhuan Lu, Tony Sze, Tiantian Chen, Yanyong Guo, <b>Qinghai Lin</b>",
    venue: "Analytic Methods in Accident Research, 2022 · SSCI JCR Q1 · TOP",
    links: [{ text: "链接", url: "https://doi.org/10.1016/j.amar.2022.100212" }],
    isNew: false, isPreprint: false, isSelected: true
  },
  {
    title: "Signal Timing Parameters Inference Method at Intersections Using License Plate Recognition Data",
    authors: "<b>Qinghai Lin</b>, Jinyong Chen, Guilong Li, Zhaocheng He*",
    venue: "IET Intelligent Transport Systems, 2022 · SCI JCR Q3",
    links: [{ text: "链接", url: "https://doi.org/10.1049/itr2.12198" }],
    isNew: false, isPreprint: false, isSelected: false
  },
  {
    title: "Identifying the contributory chains and patterns of road facilities in bus-involved crashes using latent class clustering and association rules",
    authors: "Chunting Nie, Shunchao Wang, <b>Qinghai Lin*</b>",
    venue: "Traffic Injury Prevention, 2026 · 通讯作者 · SCI JCR Q3",
    links: [{ text: "链接", url: "https://doi.org/10.1080/15389588.2025.2595681" }],
    isNew: false, isPreprint: false, isSelected: false
  },
  {
    title: "Drivers' Eye Movement Behaviour in a Bridge and Tunnel Combination Scenario of a Mountainous Urban Expressway: A Naturalistic Driving Study",
    authors: "Jingrong Bai, <b>Qinghai Lin*</b>, Huiyun Bi, Boming Tang",
    venue: "Journal of Advanced Transportation, 2022 · 通讯作者 · SCI JCR Q3",
    links: [{ text: "链接", url: "https://doi.org/10.1155/2022/6403277" }],
    isNew: false, isPreprint: false, isSelected: false
  },
  {
    title: "基于生存决策法的公交系统调度",
    authors: "<b>蔺庆海</b>, 刘伟*, 王立超",
    venue: "科学技术与工程, 2019 · 北大中文核心",
    links: [],
    isNew: false, isPreprint: false, isSelected: false
  },
  {
    title: "Exploring the Role of Attitudinal Factors in Electric Vehicle Timeshare Rentals Adoption",
    authors: "Shunchao Wang<sup>1</sup>, <b>Qinghai Lin</b><sup>1</sup>, Ziyi Zhou, Chunting Nie",
    venue: "Applied Sciences, 2023 · 共一 · SCI JCR Q2",
    links: [{ text: "链接", url: "https://doi.org/10.3390/app13010012" }],
    isNew: false, isPreprint: false, isSelected: false
  },
  {
    title: "Automatic Incident Detection Using Edge-Cloud Collaboration Based Deep Learning Scheme for Intelligent Transportation Systems",
    authors: "Yuhuan Lu, <b>Qinghai Lin</b>, Haiyang Chi, Jinyong Chen",
    venue: "Applied Intelligence, 2023 · SCI JCR Q2",
    links: [{ text: "链接", url: "https://doi.org/10.1007/s10489-023-04673-7" }],
    isNew: false, isPreprint: false, isSelected: false
  },
  {
    title: "Examining Individuals' Preferences towards Flex Route Transit",
    authors: "Jingcai Yu, <b>Qinghai Lin</b>, Hongliang Ding, Tao Feng, Wenquan Li",
    venue: "Transportation Planning and Technology, 2024 · SCI JCR Q4",
    links: [{ text: "链接", url: "https://doi.org/10.1080/03081060.2024.2320317" }],
    isNew: false, isPreprint: false, isSelected: false
  },
  {
    title: "Vehicular Ad Hoc Networks Topology Optimization for Autonomous Intersection Management System: A Periodic Intervention-Based Approach",
    authors: "Zhigang Wu, Zhaocheng He, <b>Qinghai Lin</b>, Jiyu Wang, Guilong Li",
    venue: "IEEE Transactions on Intelligent Transportation Systems, 2024 · SCI JCR Q1 · TOP",
    links: [{ text: "链接", url: "https://doi.org/10.1109/TITS.2024.3412771" }],
    isNew: false, isPreprint: false, isSelected: false
  },

  // ---------- 会议论文 ----------
  {
    title: "CRM-DSTGC: A Coordinated Ramp Metering Method Integrated with Dynamic Spatial-temporal Graph Convolutional Model",
    authors: "<b>Qinghai Lin</b>, Guilong Li, Mengmeng Zhang, Jianchang Huang, Chunting Nie",
    venue: "Transportation Research Board 104th Annual Meeting, Washington D.C., USA, 2025 · TRB 会议",
    links: [],
    isNew: false, isPreprint: true, isSelected: true
  },
  {
    title: "Identifying the Contributory Patterns of Road-Facility Factors on Bus-Involved Crashes by Using Latent Class Clustering and Association Rules Mining Approaches",
    authors: "<b>Qinghai Lin</b>, Shunchao Wang, Chunting Nie",
    venue: "Transportation Research Board 103rd Annual Meeting, Washington D.C., USA, 2024 · TRB 会议",
    links: [],
    isNew: false, isPreprint: true, isSelected: false
  },
  {
    title: "A Sequential Signal Timing Schemes Inference Framework Using Automatic Vehicle Identification Data",
    authors: "<b>Qinghai Lin</b>, Qiyuan Fu, Changle Dong, Xujiayin Zhao, Ruihan Wu, Mengmeng Zhang*",
    venue: "2025 CICTP Conference, Guangzhou, China · COTA 会议 · EI 检索",
    links: [],
    isNew: false, isPreprint: true, isSelected: false
  },
  {
    title: "Multi-agent Reinforcement Learning based Coordinated Ramp Metering for Urban Expressways with Multi-bottleneck",
    authors: "<b>Qinghai Lin</b>, Zhaocheng He, Zhigang Wu, Wei Huang*",
    venue: "2023 HKSTS Conference, Hong Kong · Oral",
    links: [],
    isNew: false, isPreprint: true, isSelected: false
  },
  {
    title: "基于动态时空图卷积模型的城市快速路交通状态预测",
    authors: "<b>蔺庆海</b>, 李贵龙, 黄玮, 王纪禹, 何兆成*",
    venue: "2023 中国智能交通年会, 厦门 · Oral · 会议优秀论文",
    links: [],
    isNew: false, isPreprint: true, isSelected: false
  },
  {
    title: "Coordinated Control Methods of Artery for Oversaturated Primary Direction in the Critical Intersection with Bidirectional Green Waves",
    authors: "<b>Qinghai Lin</b>, Wei Liu, Zhaocheng He*",
    venue: "2020 CICTP Conference, Xi'an, China · COTA 会议 · EI 检索",
    links: [],
    isNew: false, isPreprint: true, isSelected: false
  },
  {
    title: "CMATP: Risk-Aware Continual Learning for Multi-Agent Trajectory Prediction",
    authors: "Yuhuan Lu, Chunting Nie, Binbin Song, Sunyan Hong, <b>Qinghai Lin*</b>",
    venue: "2026 CICTP Conference, Jinan, China · COTA 会议 · EI 检索",
    links: [],
    isNew: false, isPreprint: true, isSelected: false
  },
  {
    title: "A Game-Theoretic Passing Strategy for Connected Autonomous Vehicles at Unsignalized Intersections",
    authors: "Qingyou Wang, Borui Xu, Chenyu Zhang, Haowen Dong, <b>Qinghai Lin*</b>",
    venue: "2026 CICTP Conference, Jinan, China · COTA 会议 · EI 检索",
    links: [],
    isNew: false, isPreprint: true, isSelected: false
  },
  {
    title: "Traffic Conflict Characteristics Analysis in the Exit Ramp Connecting Areas of Urban Expressways",
    authors: "Zhi Jiao, Chenyu Zhang, Zhenchen Sun, Yaoyang Wang, <b>Qinghai Lin*</b>",
    venue: "2026 CICTP Conference, Jinan, China · COTA 会议 · EI 检索",
    links: [],
    isNew: false, isPreprint: true, isSelected: false
  }
];

// Helper functions to filter publications
const getPreprints = () => publications.filter(pub => pub.isPreprint);
const getSelectedPreprints = () => publications.filter(pub => pub.isPreprint && pub.isSelected);
const getPublications = () => publications.filter(pub => !pub.isPreprint);
const getSelectedPublications = () => publications.filter(pub => !pub.isPreprint && pub.isSelected);
const getAllPublications = () => publications.filter(pub => !pub.isPreprint);

// Legacy variables for backward compatibility
const preprints = getSelectedPreprints();
const selectedPublications = getSelectedPublications();
const fullPublications = getAllPublications();

// 科研项目数据
const projects = [
  { title: "国家自然科学基金-青年科学基金项目：低渗透网联环境快速路出口匝道衔接区车辆轨迹与信号控制协同优化", description: "2026.01-2028.12 · 主持 · 30万", isSelected: false },
  { title: "山东省自然科学基金-青年项目：多源异构数据融合下的城市快速路匝道协调控制优化", description: "2025.01-2027.12 · 主持 · 12万（本批次最高资助额级）", isSelected: false },
  { title: "山东省自然科学基金-创新发展联合基金：多特征融合的空地协同高速公路多目标感知与追踪", description: "2026.01-2028.12 · 子课题负责", isSelected: false },
  { title: "国家自然科学基金-联合基金：面向新一代车路协同的交通信号智能控制理论与方法研究", description: "2022.01-2025.12 · 主研", isSelected: false },
  { title: "国家自然科学基金-重点课题：基于大数据的智慧交通基础理论与关键技术", description: "2019.01-2022.12 · 主研", isSelected: false },
  { title: "教育部产学合作协同育人项目：面向智慧交通的大数据导论课程改革研究", description: "2024.11-2025.11 · 主持", isSelected: false },
  { title: "横向项目：某公路工程可行性研究报告", description: "2025.07-2025.08 · 主持", isSelected: false },
  { title: "横向项目：国道某公路新建工程投资可行性分析及评估", description: "2024.09-2024.12 · 主持", isSelected: false },
  { title: "青岛海信网络科技股份有限公司：天津市交警总队交通信号优化项目勤务保障技术应用", description: "2025.06-2025.09 · 主持", isSelected: false },
  { title: "交通部交通强国建设试点任务：智慧公路空地一体运营管理关键技术", description: "2024.06-2026.06 · 主研", isSelected: false },
  { title: "山东高速股份有限公司：全路网视角下基于多维用户需求动态数字孪生的高速精准化运营关键技术研究", description: "2022.08-2024.08 · 主研", isSelected: false },
  { title: "山东高速股份有限公司：空地一体智慧高速综合立体运营服务平台关键技术研发及示范应用", description: "2023.11-2025.11 · 主研", isSelected: false },
  { title: "华为技术有限公司：个性化诱导应用研究", description: "2020.07-2021.11 · 主研（博士期间，学生负责人）", isSelected: false },
  { title: "重庆市公安局交巡警总队：重庆市主城区指路系统优化改造", description: "2016.09-2017.05 · 主研（硕士期间，学生负责人）", isSelected: false },
  { title: "山东省广饶县城市管理局：山东省广饶县城区交通组织深化设计", description: "2013.11-2014.06 · 主研（本科期间，学生负责人）", isSelected: false }
];

const getSelectedProjects = () => projects.filter(project => project.isSelected);
const getAllProjects = () => projects;

// 工作经历（供参考；主页中为静态展示）
const researchExperience = [];

// 主讲课程
const teaching = [
  "本科生课程：交通工程学、交通大数据导论、数据分析理论与实践",
  "研究生课程：交通流理论"
];

// 学术兼职与社会服务
const academicServices = [
  "第26届海外华人交通协会国际交通科技年会，领域编辑（Area Editor）",
  "山东公路学会交通工程专业委员会，副秘书长",
  "人工智能与自主式交通国际学术会议（AIAT 2026），领域联合主席",
  "山东正衢交通工程研究院智能交通研究所，副所长",
  "世界交通运输大会（WTC）技术委员会，青年委员",
  "《Digital Transportation and Safety》，青年编委",
  "《山东交通学院学报》，青年编委",
  "审稿人：IEEE Transactions on Intelligent Transportation Systems、Transportation Research Part A: Policy and Practice、Transportmetrica A: Transport Science、IET Intelligent Transport Systems、Journal of Advanced Transportation、Journal of Transportation Safety & Security、吉林大学学报（工学版）、山东大学学报（工学版）、IEEE ITSC、CICTP、WTC 等交通类期刊和会议"
];

// 报告/学术报告
const talks = [];

// 荣誉奖励
const honors = [
  "2026年度山东省青年科技人才托举工程人选（1/1），山东省科学技术协会，2026",
  "第26届海外华人交通协会国际交通科技年会最佳编辑奖，海外华人交通协会，2026",
  "第十八届中国智能交通年会「十佳科技论文」奖（1/5），中国智能交通协会，2023",
  "第二十二届中国研究生数学建模竞赛三等奖（指导老师），中国学位与研究生教育学会、中国科协青少年科技中心，2025",
  "大学生创新创业大赛国家级项目立项（指导老师），2025",
  "第十二届全国大学生统计建模大赛山东赛区二等奖（指导老师），中国统计教育协会，2026"
];

// 团队成员（硕士生 / 合作者等）。
// 后续添加成员：复制下面注释里的一个 { ... } 块，粘贴到数组内，改掉字段即可。
//   name     必填，中文姓名
//   nameEn   可选，英文名/拼音
//   role     必填，如 "硕士研究生"、"博士研究生"、"本科生"
//   grade    可选，如 "2025级"
//   research 可选，研究方向
//   email    可选，邮箱（会生成 Email 链接）
//   homepage 可选，个人主页链接
//   photo    可选，头像图片路径，留空 "" 则显示姓名首字占位
const teamMembers = [
  {
    name: "刘璐",
    nameEn: "Lu Liu",
    role: "本科生",
    grade: "2025级",
    research: "网约车",
    email: "2454491196@qq.com",
    homepage: "",
    photo: ""
  }
];
