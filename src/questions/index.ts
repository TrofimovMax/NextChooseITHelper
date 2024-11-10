// src/questions/index.ts

export interface Question {
  question: string;
  options: { title: string; description: string; key: string }[];
}

const questions: Question[] = [
  {
    question: "Какова основная цель вашего проекта?",
    options: [
      { title: "Веб-сайт", description: "Создание интерактивного веб-приложения для пользователей.", key: "web_site" },
      { title: "Мобильное приложение", description: "Разработка приложения для мобильных устройств.", key: "mobile_app" },
      { title: "Игра", description: "Создание увлекательной игры для различных платформ.", key: "game" },
      { title: "Другое", description: "Любой другой тип проекта, который вы хотите реализовать.", key: "other" },
    ],
  },
];

export default questions;
