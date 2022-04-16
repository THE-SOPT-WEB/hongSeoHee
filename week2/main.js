import pic1 from "./assets/더키버니.jpeg";
import pic2 from "./assets/덤퍼.jpeg";
import pic3 from "./assets/라푼젤.jpeg";
import pic4 from "./assets/바넬로피.jpeg";
import pic5 from "./assets/브루니.jpeg";

const $ = (selector) => document.querySelector(selector);

let currentStep = 0;

const quizList = [
  {
    src: pic1,
    answer: "Ducky & Bunny",
  },
  {
    src: pic2,
    answer: "Thumper",
  },
  {
    src: pic3,
    answer: "Rapunzel",
  },
  {
    src: pic4,
    answer: "Vanellope",
  },
  {
    src: pic5,
    answer: "Bruni",
  },
];
