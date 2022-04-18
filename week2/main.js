const $ = (selector) => document.querySelector(selector);
const answerList = $(".answer__list");
console.log(answerList);
// console.log("gg");
let currentStep = 0;

const quizList = [
  {
    src: "./assets/더키버니.jpeg",
    answer: "Ducky & Bunny",
  },
  {
    src: "./assets/덤퍼.jpeg",
    answer: "Thumper",
  },
  {
    src: "./assets/라푼젤.jpeg",
    answer: "Rapunzel",
  },
  {
    src: "./assets/바넬로피.jpeg",
    answer: "Vanellope",
  },
  {
    src: "./assets/브루니.jpeg",
    answer: "Bruni",
  },
];
