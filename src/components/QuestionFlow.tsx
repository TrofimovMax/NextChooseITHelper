// src/components/QuestionFlow.tsx

import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import QuestionCard from "./QuestionCard";
import questions, { Question } from "../questions";

export default function QuestionFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [otherCycle, setOtherCycle] = useState(false);

  const handleOptionSelect = (key: string) => {
    if (key === "other") {
      setOtherCycle(true);
    } else {
      setOtherCycle(false);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const currentQuestion: Question | null = !otherCycle
    ? questions[currentStep] || null
    : {
      question: "Выберите, что больше подходит вашему проекту:",
      options: [
        { title: "Вариант A", description: "Описание A", key: "a" },
        { title: "Вариант B", description: "Описание B", key: "b" },
      ],
    };

  return (
    <Container maxWidth="md">
      {currentQuestion ? (
        <>
          <Typography variant="h4" mt={4}>
            {currentQuestion.question}
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {currentQuestion.options.map((option: { title: string; description: string; key: string }) => (
              <QuestionCard
                key={option.key}
                title={option.title}
                description={option.description}
                onClick={() => handleOptionSelect(option.key)}
              />
            ))}
          </div>
        </>
      ) : (
        <Typography variant="body1" mt={2}>
          Спасибо за ваши ответы! Мы обработаем их и предоставим рекомендации.
        </Typography>
      )}
    </Container>
  );
}
