// src/hooks/useQuestions.ts

import { useState } from "react";
import questions from "../questions";

export const useQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [offset, setOffset] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [answers, setAnswers] = useState<{ key: string; value: string }[]>([]);

  const currentQuestion = questions[currentStep];
  const visibleOptions = currentQuestion?.options.slice(offset, offset + 4);

  const handleNext = () => {
    const nextOffset = offset + 4;
    if (currentQuestion && nextOffset < currentQuestion.options.length) {
      setOffset(nextOffset);
    }
  };

  const handlePrevious = () => {
    const prevOffset = offset - 4;
    if (prevOffset >= 0) {
      setOffset(prevOffset);
    }
  };

  const handleOptionSelect = (key: string, title: string) => {
    if (key === "other") {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      setCurrentStep((prev) => prev + 1);
      setAnswers((prev) => [...prev, { key, value: title }]);
      setOffset(0);
    }
  };

  return {
    currentQuestion,
    visibleOptions,
    offset,
    handleNext,
    handlePrevious,
    handleOptionSelect,
    showAlert,
    answers,
  };
};
