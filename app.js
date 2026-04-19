/**
 * XHSTI — 计分与结果（题目文案与规则来自产品说明）
 */

/** 结果页人格配图目录与扩展名：文件命名为 xhr-1.jpg～xhr-8.jpg，对应 XHR-1～XHR-8 */
const RESULT_IMAGE_EXT = "jpg";

const DIM_KEYS = ["G", "M", "J", "F", "L", "C", "R", "X"];

const DIM_LABELS = {
  G: "种草力",
  M: "摸鱼度",
  J: "卷王力",
  F: "佛系度",
  L: "恋爱脑",
  C: "吃瓜魂",
  R: "焦虑度",
  X: "反种草",
};

const DIMENSION_GROUPS = [
  { label: "维度一 · 浏览内容偏好", start: 1, end: 5 },
  { label: "维度二 · 互动行为偏好", start: 6, end: 10 },
  { label: "维度三 · 情感与内容态度", start: 11, end: 15 },
];

const QUESTIONS = [
  {
    id: 1,
    text: "打开小红书看到以下四个标题，你最可能点开哪个？",
    options: [
      { key: "A", text: "谁懂啊家人们！这个真的太好看了吧！！！" },
      { key: "B", text: "沉浸式做饭：未婚未育的第 3 年 vlog" },
      { key: "C", text: "早 C 晚 A 翻车了？我烂脸了，求求你们别乱跟风！" },
      { key: "D", text: "月薪 3k 到 3w，我只做了这一件事" },
    ],
  },
  {
    id: 2,
    text: "哪种笔记标题会让你觉得「这不就是我吗」？",
    options: [
      { key: "A", text: "拼夕夕挖到的宝，只要 9.9" },
      { key: "B", text: "30 岁以后才懂的 5 件事" },
      { key: "C", text: "挑战全网最低价，不服来战" },
      { key: "D", text: "坚持 100 天，从吗喽变成人" },
    ],
  },
  {
    id: 3,
    text: "凌晨 1 点，你还在刷小红书，你觉得是什么把你留住的？",
    options: [
      { key: "A", text: "分手后我明白了……" },
      { key: "B", text: "修勾猫猫治愈视频" },
      { key: "C", text: "一个月瘦了 20 斤，不反弹" },
      { key: "D", text: "老板又在群里发疯" },
    ],
  },
  {
    id: 4,
    text: "哪种标题你一看到就会秒点？",
    options: [
      { key: "A", text: "「抄作业！懒人版 XXX」" },
      { key: "B", text: "「建议所有 XX 都去 XXX」" },
      { key: "C", text: "「避雷！千万别买！」" },
      { key: "D", text: "「笑死，绷不住了」" },
    ],
  },
  {
    id: 5,
    text: "哪种内容会让你光速划走，甚至想拉黑？",
    options: [
      { key: "A", text: "太长不看版干货" },
      { key: "B", text: "一眼就能看出的广告" },
      { key: "C", text: "正能量鸡汤口号" },
      { key: "D", text: "标题党" },
    ],
  },
  {
    id: 6,
    text: "刷到一篇超级喜欢的笔记，你会？",
    options: [
      { key: "A", text: "点赞 + 收藏 + 截图 + 转发" },
      { key: "B", text: "默默看完，不留痕迹，深藏功与名" },
      { key: "C", text: "只点赞，不收藏，以后刷到再说" },
      { key: "D", text: "收藏到「以后再看」专辑，然后永远不看" },
    ],
  },
  {
    id: 7,
    text: "你在小红书评论区一般是哪种人？",
    options: [
      { key: "A", text: "话痨本痨 —— 「姐妹你说得对！」" },
      { key: "B", text: "偶尔冒泡 —— 「有槽必吐，有共鸣必回」" },
      { key: "C", text: "潜水冠军 —— 「已阅」" },
      { key: "D", text: "只会在「求助贴」里出现 —— 「我来当菩萨了」" },
    ],
  },
  {
    id: 8,
    text: "看到博主推荐一个东西，你的内心戏是？",
    options: [
      { key: "A", text: "链接呢链接呢" },
      { key: "B", text: "先码住，以后再看看" },
      { key: "C", text: "这肯定是广告，我去看看评论区" },
      { key: "D", text: "小红书人均富婆，买不起告辞" },
    ],
  },
  {
    id: 9,
    text: "刷到「姐妹们帮我看看该怎么办」的帖子，你会？",
    options: [
      { key: "A", text: "认真打字，当免费情感顾问" },
      { key: "B", text: "看到热评和我想的一样，点个赞就走了" },
      { key: "C", text: "刷过去，不关我事" },
      { key: "D", text: "先看评论区有没有人骂，再决定站队" },
    ],
  },
  {
    id: 10,
    text: "你的收藏夹现在是什么状态？",
    options: [
      { key: "A", text: "全是「待买清单」，购物车已经 99+" },
      { key: "B", text: "分了 N 个专辑：「变美」「搞钱」「变强」" },
      { key: "C", text: "收藏从未停止，学习从未开始" },
      { key: "D", text: "基本不收藏，刷完就忘" },
    ],
  },
  {
    id: 11,
    text: "刷到「一个月瘦了 20 斤」的帖子，你第一反应？",
    options: [
      { key: "A", text: "「我也要！」" },
      { key: "B", text: "「假的吧，P 图怪」" },
      { key: "C", text: "「先收藏，万一呢」" },
      { key: "D", text: "「好累，不想努力了」" },
    ],
  },
  {
    id: 12,
    text: "看到「男朋友送的礼物好丑怎么办」，你怎么想？",
    options: [
      { key: "A", text: "「有男朋友就不错了，别挑」" },
      { key: "B", text: "「换一个会送礼物的」" },
      { key: "C", text: "「没对象的我哭了」" },
      { key: "D", text: "认真建议：「委婉地说，别伤他心」" },
    ],
  },
  {
    id: 13,
    text: "小红书上的热门挑战 / 话题，你一般？",
    options: [
      { key: "A", text: "必须第一时间跟上，否则没社交谈资" },
      { key: "B", text: "随缘刷到就看看" },
      { key: "C", text: "等热度过了才发现：「啊？还有这事？」" },
      { key: "D", text: "热不热关我什么事" },
    ],
  },
  {
    id: 14,
    text: "你一般什么时候打开小红书？",
    options: [
      { key: "A", text: "上班摸鱼的时候" },
      { key: "B", text: "睡前，本来只想看 5 分钟，结果天亮了" },
      { key: "C", text: "专门找攻略" },
      { key: "D", text: "蹲坑、通勤路上" },
    ],
  },
  {
    id: 15,
    text: "用一句话形容你和小红书的关系？",
    options: [
      { key: "A", text: "姐妹们太会了，我天天被种草" },
      { key: "B", text: "刷完觉得自己啥也不是，emo 了" },
      { key: "C", text: "快乐老家，每天都得来一趟" },
      { key: "D", text: "知道是时间黑洞，但就是停不下来" },
    ],
  },
];

/** 每题选项对各维度的加分（与说明中的题号、选项对应） */
const SCORE_DELTA = [
  // Q1
  { A: { G: 1 }, B: { F: 1 }, C: { R: 1 }, D: { J: 1 } },
  // Q2
  { A: { G: 1 }, B: { F: 1 }, C: {}, D: { J: 1 } },
  // Q3
  { A: { L: 1 }, B: { C: 1 }, C: { R: 1 }, D: { M: 1 } },
  // Q4
  { A: {}, B: { F: 1 }, C: { X: 1 }, D: { C: 0.5 } },
  // Q5
  { A: { R: 0.5 }, B: {}, C: { X: 1 }, D: { J: 1 } },
  // Q6
  { A: { G: 1 }, B: {}, C: {}, D: {} },
  // Q7
  { A: {}, B: {}, C: { M: 1 }, D: { C: 1 } },
  // Q8
  { A: { G: 1 }, B: {}, C: { X: 1 }, D: {} },
  // Q9
  { A: { L: 1 }, B: { G: 0.5 }, C: { C: 1 }, D: {} },
  // Q10
  { A: {}, B: {}, C: {}, D: { X: 1 } },
  // Q11
  { A: { J: 1 }, B: { R: 1 }, C: { F: 0.5 }, D: { M: 1 } },
  // Q12
  { A: { C: 1 }, B: { X: 0.5 }, C: { R: 1 }, D: { L: 1 } },
  // Q13
  { A: {}, B: { F: 1 }, C: { C: 1 }, D: {} },
  // Q14
  { A: { M: 1 }, B: { L: 1 }, C: { J: 0.5 }, D: {} },
  // Q15
  { A: { L: 1 }, B: { R: 1 }, C: { M: 1 }, D: {} },
];

const ARCHETYPES = {
  G: { code: "XHR-1", name: "种草机", tags: "买买买 · 行走的购物车", badges: "「已下单」「求链接」" },
  F: { code: "XHR-2", name: "佛系养生人", tags: "泡脚 · 早睡 · 养生茶", badges: "「年纪大了」「别熬了」" },
  M: { code: "XHR-3", name: "社畜摸鱼家", tags: "上班看 · 厕所刷 · 下班忘", badges: "「明天再说」「好累啊」" },
  L: { code: "XHR-4", name: "恋爱脑专家", tags: "嗑 CP · 情感贴 · 男友审判", badges: "「他到底爱不爱我」" },
  J: { code: "XHR-5", name: "自律卷王", tags: "5 点起 · 练背 · 学习打卡", badges: "「又是被自己卷醒的一天」" },
  C: { code: "XHR-6", name: "吃瓜路人", tags: "看看不说话 · 点赞走人", badges: "「我不到啊」「路过」" },
  R: { code: "XHR-7", name: "容貌焦虑患者", tags: "看穿搭 · 看化妆 · 不敢出门", badges: "「我素颜很丑吧」" },
  X: { code: "XHR-8", name: "反向种草人", tags: "骂贵 · 劝退 · 避雷", badges: "「别买！快逃！」" },
};

const QUOTES = {
  G: "你的购物车比你的余额更精彩。姐妹，你不是在花钱，你是在投资幸福！别人问「有用吗」，你说「好看就值了」。全网最后一个没被你种草的人，大概还在用 2G 网。",
  F: "刷到啥随缘，买到啥随缘，生活就是一场大型佛系实验。你的笔记收藏夹里全是「明天再做」，而明天永远不会来。但没关系，你是养生人，你心态好。",
  M: "上班 8 小时，小红书打开 6 小时。你在厕所刷、在地铁刷、在老板讲话的时候刷。你的人生哲学：能躺着绝不坐着，能明天交绝不今天交。群里 @全体成员？你假装没看到。",
  L: "你嗑的 CP 比你自己的恋爱还甜。你从情感贴里学到的理论，比情感博主还多。但建议：别再用小红书的标准审判你男朋友了，小红书人均年入百万。",
  J: "你 5 点起床练背，别人还在做梦。你的小红书是第二战场——学习打卡、运动打卡、搞钱打卡。你的人生格言：「今天不卷自己，明天就被别人卷」。但注意，小红书练背真的有用吗？",
  C: "你在小红书上没有立场，只有「路过」。你点赞但不发表意见，你收藏但不回头看。你是互联网上最无害的存在，也是算法最头疼的用户——你到底喜欢什么？「我不到啊」。",
  R: "你刷完一篇变美教程，焦虑值 +10；刷完三篇，直接想注销账号。你觉得小红书上每个人都比你好看、比你瘦、比你会穿搭。真相是：别人的修图时间比你刷手机时间还长。",
  X: "你的小红书签名：别买！快逃！你的使命是拯救每一个冲动消费的姐妹。你看到种草贴的反应是「这是广告吧」，看到避雷贴的反应是「我就知道」。恭喜你，你是互联网上最后一个清醒的人。",
};

/** 辅维度在组合名里的前缀（偏口语，贴近示例「佛系种草机」「吃瓜摸鱼家」） */
const FLAVOR = {
  G: "种草型",
  M: "摸鱼型",
  J: "自律型",
  F: "佛系",
  L: "恋爱脑型",
  C: "吃瓜",
  R: "焦虑型",
  X: "避雷型",
};

const NOUN = {
  G: "种草机",
  M: "摸鱼家",
  J: "卷王",
  F: "养生人",
  L: "恋爱脑",
  C: "路人",
  R: "焦虑患者",
  X: "清醒派",
};

/** 主类型判定：主维度最高分 → 标准土著类型；辅维度用于组合昵称 */
const PRIMARY_RULES = {
  G: { code: "XHR-1", archetype: "G", allowedSecondary: null },
  F: { code: "XHR-2", archetype: "F", allowedSecondary: ["G", "X"] },
  M: { code: "XHR-3", archetype: "M", allowedSecondary: ["L", "C"] },
  L: { code: "XHR-4", archetype: "L", allowedSecondary: ["G", "F"] },
  J: { code: "XHR-5", archetype: "J", allowedSecondary: ["G", "R"] },
  C: { code: "XHR-6", archetype: "C", allowedSecondary: ["M", "F"] },
  R: { code: "XHR-7", archetype: "R", allowedSecondary: ["J", "L"] },
  X: { code: "XHR-8", archetype: "X", allowedSecondary: ["C", "M"] },
};

function emptyScores() {
  return { G: 0, M: 0, J: 0, F: 0, L: 0, C: 0, R: 0, X: 0 };
}

function computeScores(answers) {
  const scores = emptyScores();
  for (let i = 0; i < QUESTIONS.length; i++) {
    const letter = answers[i];
    if (!letter) continue;
    const row = SCORE_DELTA[i][letter];
    if (!row) continue;
    for (const k of Object.keys(row)) {
      scores[k] += row[k];
    }
  }
  return scores;
}

function rankDimensions(scores) {
  const entries = DIM_KEYS.map((k) => ({ key: k, value: scores[k] }));
  entries.sort((a, b) => {
      if (b.value !== a.value) return b.value - a.value;
      return DIM_KEYS.indexOf(a.key) - DIM_KEYS.indexOf(b.key);
    });
  return entries;
}

/** 最高分主维度 + 次高分辅维度 → 组合昵称（与说明示例一致时可特判） */
function buildComboTitle(primary, secondary) {
  if (secondary === "F" && primary === "G") return `佛系${NOUN.G}`;
  if (secondary === "C" && primary === "M") return `吃瓜${NOUN.M}`;
  return `${FLAVOR[secondary]}${NOUN[primary]}`;
}

function resolveResult(scores) {
  const ranked = rankDimensions(scores);
  const primary = ranked[0].key;
  const secondary = ranked[1].key;
  const rule = PRIMARY_RULES[primary];
  const archetypeKey = rule.archetype;
  const archetype = ARCHETYPES[archetypeKey];
  const combo = buildComboTitle(primary, secondary);
  const secondaryOk = !rule.allowedSecondary || rule.allowedSecondary.includes(secondary);
  const displayTitle = combo;

  return {
    scores,
    ranked,
    primary,
    secondary,
    xhrCode: archetype.code,
    xhrName: archetype.name,
    displayTitle,
    tags: archetype.tags,
    badges: archetype.badges,
    quote: QUOTES[archetypeKey],
    combo,
    secondaryOk,
  };
}

function encodeAnswers(answers) {
  const s = answers.join("");
  return btoa(unescape(encodeURIComponent(s)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function decodeAnswers(token) {
  if (!token) return null;
  let b64 = token.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4) b64 += "=";
  try {
    const str = decodeURIComponent(escape(atob(b64)));
    if (str.length !== 15) return null;
    if (!/^[ABCD]{15}$/.test(str)) return null;
    return str.split("");
  } catch {
    return null;
  }
}

function dimGroupLabel(qIndex) {
  const n = qIndex + 1;
  for (const g of DIMENSION_GROUPS) {
    if (n >= g.start && n <= g.end) return g.label;
  }
  return "";
}

function $(id) {
  return document.getElementById(id);
}

function resultImageUrl(xhrCode) {
  const m = /^XHR-([1-8])$/.exec(xhrCode);
  if (!m) return null;
  return `results/xhr-${m[1]}.${RESULT_IMAGE_EXT}`;
}

/** 按主类型 xhrCode 加载 results/ 下对应图片；缺失时显示占位与说明 */
function bindResultImage(xhrCode, xhrName) {
  const wrap = $("result-image-wrap");
  const img = $("result-image");
  const hint = $("result-image-hint");
  if (!wrap || !img || !hint) return;

  const url = resultImageUrl(xhrCode);
  img.onload = null;
  img.onerror = null;

  const showMissing = (filename) => {
    wrap.classList.add("is-placeholder");
    img.removeAttribute("src");
    hint.hidden = false;
    hint.textContent = filename
      ? `将配图保存为 ${filename} 后即可显示。`
      : "当前结果类型暂无对应配图文件名。";
  };

  const hideMissing = () => {
    wrap.classList.remove("is-placeholder");
    hint.hidden = true;
    hint.textContent = "";
  };

  if (!url) {
    showMissing(null);
    img.alt = "";
    return;
  }

  const filename = url;
  img.alt = `${xhrName}（${xhrCode}）`;

  img.onload = () => hideMissing();
  img.onerror = () => showMissing(filename);

  hideMissing();
  img.src = url;
}

const state = {
  step: 0,
  answers: [],
};

function showPanel(name) {
  $("panel-intro").hidden = name !== "intro";
  $("panel-quiz").hidden = name !== "quiz";
  $("panel-result").hidden = name !== "result";
  const shell = $("app");
  if (shell) {
    shell.classList.toggle("shell--hide-brand-extras", name === "quiz" || name === "result");
  }
}

function renderQuiz() {
  const q = QUESTIONS[state.step];
  const pct = Math.round(((state.step + 1) / QUESTIONS.length) * 100);
  $("progress-bar").style.width = `${pct}%`;
  const bar = $("panel-quiz").querySelector(".progress");
  bar.setAttribute("aria-valuenow", String(pct));
  $("dim-label").textContent = dimGroupLabel(state.step);
  $("q-count").textContent = `第 ${state.step + 1} / ${QUESTIONS.length} 题`;
  $("q-title").textContent = q.text;
  const ul = $("q-options");
  ul.innerHTML = "";
  for (const opt of q.options) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-key">${opt.key}</span>${opt.text}`;
    btn.addEventListener("click", () => pick(opt.key));
    li.appendChild(btn);
    ul.appendChild(li);
  }
}

function pick(letter) {
  state.answers[state.step] = letter;
  if (state.step < QUESTIONS.length - 1) {
    state.step += 1;
    renderQuiz();
  } else {
    finish();
  }
}

function renderResult(result) {
  const { scores, ranked, primary, secondary, xhrCode, xhrName, displayTitle, tags, badges, quote, secondaryOk } =
    result;
  $("result-kicker").textContent = "你的 XHSTI 结果";
  $("result-title").textContent = displayTitle;
  bindResultImage(xhrCode, xhrName);
  $("result-code").textContent = `${xhrCode} · ${xhrName}`;
  $("result-dims").textContent = `主维 ${DIM_LABELS[primary]} · 辅维 ${DIM_LABELS[secondary]}${
    secondaryOk ? "" : "（与典型辅维组合略有偏差）"
  }`;
  $("result-tags").textContent = `${tags}　${badges}`;

  const board = $("score-board");
  board.innerHTML = "";
  for (const { key: k } of ranked) {
    const row = document.createElement("div");
    row.className = "score-row";
    if (k === primary) row.classList.add("is-top");
    else if (k === secondary) row.classList.add("is-second");
    row.innerHTML = `<span>${DIM_LABELS[k]}</span><strong>${scores[k].toFixed(1)}</strong>`;
    board.appendChild(row);
  }

  $("result-quote").textContent = quote;
}

function finish() {
  const scores = computeScores(state.answers);
  const result = resolveResult(scores);
  renderResult(result);
  const hash = `#r=${encodeAnswers(state.answers)}`;
  if (history.replaceState) {
    history.replaceState(null, "", hash);
  } else {
    location.hash = hash;
  }
  showPanel("result");
}

function startQuiz() {
  state.step = 0;
  state.answers = [];
  showPanel("quiz");
  renderQuiz();
}

function retake() {
  $("share-hint").textContent = "";
  if (history.replaceState) {
    history.replaceState(null, "", location.pathname + location.search);
  } else {
    location.hash = "";
  }
  showPanel("intro");
}

function copyShareLink() {
  const hash = `#r=${encodeAnswers(state.answers)}`;
  const base = location.href.replace(/#.*$/, "");
  const url = `${base}${hash}`;
  const hint = $("share-hint");
  const write = () => {
    hint.textContent = "链接已复制到剪贴板，发给好友即可打开同一结果。";
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(write).catch(() => {
      hint.textContent = url;
    });
  } else {
    hint.textContent = url;
  }
}

function tryOpenFromHash() {
  const m = location.hash.match(/^#r=([^&]+)/);
  if (!m) return false;
  const arr = decodeAnswers(m[1]);
  if (!arr) return false;
  state.answers = arr;
  state.step = QUESTIONS.length;
  const scores = computeScores(arr);
  const result = resolveResult(scores);
  renderResult(result);
  showPanel("result");
  return true;
}

function init() {
  $("btn-start").addEventListener("click", startQuiz);
  $("btn-retake").addEventListener("click", retake);
  $("btn-share").addEventListener("click", copyShareLink);

  window.addEventListener("hashchange", () => {
    if (tryOpenFromHash()) return;
    if (!location.hash) showPanel("intro");
  });

  if (!tryOpenFromHash()) {
    showPanel("intro");
  }
}

init();
