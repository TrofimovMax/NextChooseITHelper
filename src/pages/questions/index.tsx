// src/pages/questions/index.tsx

import { useState } from "react";
import { Container, Typography } from "@mui/material";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";

export default function Question() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleNextStep = (answer: string) => {
    setAnswers((prev) => [...prev, answer]);
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" mt={4}>
        Давайте начнем выбирать ваш технологический стек!
      </Typography>
      {currentStep === 1 && <StepOne onNext={handleNextStep} />}
      {currentStep === 2 && (
        <StepTwo previousAnswer={answers[0]} onNext={handleNextStep} />
      )}
      {
        // At the end there will be a request to the server
        currentStep > 2 && (
        <Typography variant="body1" mt={2}>
          Спасибо за ваши ответы! Мы обработаем их и предоставим рекомендации.
        </Typography>
      )}
    </Container>
  );
}
