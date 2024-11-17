// src/questions/types/question.ts

import { Option } from "./option";

export interface Question {
  key: string[];
  question: string;
  options: Option[];
}
