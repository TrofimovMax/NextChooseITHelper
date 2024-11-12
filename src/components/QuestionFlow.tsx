// src/components/QuestionFlow.tsx

import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import QuestionCard from "./QuestionCard";
import questions, { Option } from "../questions";

export default function QuestionFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleOptions, setVisibleOptions] = useState<Option[]>(questions[currentStep].options.slice(0, 4));
  const [offset, setOffset] = useState(0);

  const handleOptionSelect = (key: string) => {
    if (key === "other") {
      const nextOffset = (offset + 4) % questions[currentStep].options.length;
      setOffset(nextOffset);
      setVisibleOptions(questions[currentStep].options.slice(nextOffset, nextOffset + 4));
    } else {
      setCurrentStep((prev) => prev + 1);
      setOffset(0);
      setVisibleOptions(questions[currentStep + 1]?.options.slice(0, 4) || []);
    }
  };

  const currentQuestion = questions[currentStep];

  return (
    <Container maxWidth="md">
      {currentQuestion ? (
        <>
          <Typography variant="h4" mt={4}>
            {currentQuestion.question}
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {visibleOptions.map((option) => (
              <QuestionCard
                key={option.key}
                title={option.title}
                description={option.description}
                image={option.image}
                onClick={() => handleOptionSelect(option.key)}
              />
            ))}
          </Box>
          <Button onClick={() => handleOptionSelect("other")} variant="outlined" style={{ marginTop: "20px" }}>
            Показать другие варианты
          </Button>
        </>
      ) : (
        <Typography variant="body1" mt={2}>
          Спасибо за ваши ответы! Мы обработаем их и предоставим рекомендации.
        </Typography>
      )}
    </Container>
  );
}
