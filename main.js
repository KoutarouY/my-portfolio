const quizText = document.getElementById("quiz-text");
const quizImage = document.getElementById("quiz-image");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const choice4 = document.getElementById("choice-4");
const feedback = document.getElementById("feedback");
const epi = document.getElementById("epilogue");
const quiz = {
  text: "上の画像はどこの大学の寮でしょう？？？",

  choices: [
    {
      text: "青山学院大学",
      feedback: "そんなに都会じゃないよ.....",
    },
    {
      text: "明治大学",
      feedback: "都会じゃないって............",
    },
    {
      text: "中央大学",
      feedback:
        "正解!畑や森がたくさんあります。中大生は学校にすることを登山といいます★",
    },
    {
      text: "明星大学",
      feedback: "お隣同士仲良くしましょう！！",
    },
  ],
};

const Result = function () {
  quizText.textContent = quiz.text;

  choice1.textContent = quiz.choices[0].text;
  choice2.textContent = quiz.choices[1].text;
  choice3.textContent = quiz.choices[2].text;
  choice4.textContent = quiz.choices[3].text;
};

const choose = function (Number) {
  feedback.textContent = quiz.choices[Number].feedback;
};

choice1.onclick = function () {
  choose(0);
};
choice2.onclick = function () {
  choose(1);
};
choice3.onclick = function () {
  choose(2);
};
choice4.onclick = function () {
  choose(3);
};

Result();

const altmsg = function () {
  alert("日焼けマシンで皮がむけました。かゆいです...");
};
epi.onclick = altmsg;
