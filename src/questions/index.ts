// src/questions/index.ts

import { Question } from "./types/question";
import mainOptions from "./options/main_options";
import webSiteOptions from "./options/web_site";
import chatOptions from "./options/chat";

const questions: Question[] = [
  {
    key: [],
    question: "Какова основная цель вашего проекта?",
    options: mainOptions,
  },
  {
    key: ["web_site"],
    question: "Какие ключевые функции должны быть в этом приложении?",
    options: webSiteOptions,
  },
  {
    key: ["web_site", "chat"],
    question: "Какие дополнительные функции вы хотите в чате?",
    options: chatOptions,
  },
];

export default questions;
