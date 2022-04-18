const $ = (selector) => document.querySelector(selector);

let currentStep = 0;

const quizList = [
  {
    src: "./assets/더키와버니.gif",
    answer: "Ducky & Bunny",
    modalContent: "❄️ There's so much fluff ❄️ ",
  },
  {
    src: "./assets/덤퍼정답.gif",
    answer: "Thumper",
    modalContent:
      "❄️ If you're not going to say nice things, don't say anything ❄️ ",
  },
  {
    src: "./assets/라푼젤.gif",
    answer: "Rapunzel",
    modalContent: "❄️ Do what you like love what you do ❄️",
  },
  {
    src: "./assets/바넬로피.gif",
    answer: "Vanellope",
    modalContent: "❄️ I like it the way it is ❄️ ",
  },
  {
    src: "./assets/브루니.gif",
    answer: "Bruni",
    modalContent: "❄️ You will always have me ❄️ ",
  },
];
// 게임 초기화
function initGame({ score, image }) {
  score.innerText = 0;
  currentStep = 0;
  image.src = quizList[currentStep].src;
  // 이미지 로딩중
  image.addEventListener("load", () => {
    showModal(quizList[currentStep].modalContent);
  });
}
// 정답 모달 보여주기
function showModal(modalContent) {
  const modal = $(".modal");
  const modalBody = $(".modal__body");
  modalBody.innerText = modalContent;
  modal.classList.remove("hide");

  $("body").addEventListener("click", (e) => {
    e.target.classList.add("hide");
  });

  setTimeout(() => {
    modal.classList.add("hide");
  }, 3000);
}
// 다음 단계 넘어가기
function goNextStep(score, image) {
  score.innerText = +score.innerText + 1;
  currentStep += 1;
  if (currentStep === 5) currentStep = 0;
  image.src = quizList[currentStep].src;

  const scoreBoard = $(".scoreBoard");
  scoreBoard.classList.add("getScore");
  setTimeout(() => {
    scoreBoard.classList.remove("getScore");
  }, 3000);
}
// 클릭 이벤트 함수
function clickEvent({ score, answer, image }) {
  answer.addEventListener("click", (e) => {
    if (e.target instanceof HTMLLIElement) {
      const clickAnswer = e.target.innerText;
      const currentAnswer = quizList[currentStep].answer;

      if (clickAnswer === currentAnswer) {
        goNextStep(score, image);
      } else {
        showModal(`🔥 I'm not a ${clickAnswer} 🔥 `);
      }
    }
  });
}
// 전체 게임 관리
function gameManger(gameInfo) {
  initGame(gameInfo);
  clickEvent(gameInfo);
  const resetButton = $(".buttonList__reset");
  resetButton.addEventListener("click", () => {
    initGame(gameInfo);
  });
}
window.onload = () => {
  gameManger({
    score: $(".scoreBoard__score"),
    answer: $(".answer__list"),
    image: $(".imageBoard > img"),
  });
};
