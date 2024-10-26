// src/pages/questions/index.tsx

import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";

const questions = [
  {
    question: "Какова основная цель вашего проекта?",
    options: ["Веб-сайт", "Мобильное приложение", "Игра", "Другое"],
  },
  {
    question: "Какую функциональность вы хотите реализовать?",
    options: ["Чат", "Галерея", "Форма обратной связи", "Другое"],
  },
  // Need add more
];

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => [...prev, answer]);
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" mt={4}>
        Давайте начнем выбирать ваш технологический стек!
      </Typography>
      {currentQuestion < questions.length ? (
        <>
          <Typography variant="body1" mt={2}>
            {questions[currentQuestion].question}
          </Typography>
          {questions[currentQuestion].options.map((option) => (
            <Button
              key={option}
              variant="outlined"
              onClick={() => handleAnswer(option)}
              style={{ margin: "5px" }}
            >
              {option}
            </Button>
          ))}
        </>
      ) : (
        // At the end there will be a request to the server
        <Typography variant="body1" mt={2}>
          Спасибо за ваши ответы! Мы обработаем их и предоставим рекомендации.
        </Typography>
      )}
    </Container>
  );
}
