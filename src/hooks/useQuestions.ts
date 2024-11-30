// src/hooks/useQuestions.ts

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchQuestionByFilters } from "@/api/fetchQuestionByFilters";

export const useQuestions = () => {
  const [answers, setAnswers] = useState<string[]>([]); // Список ключей фильтров
  const [offset, setOffset] = useState(0);

  const { data: currentQuestion, isLoading, isError } = useQuery({
    queryKey: ["question", answers],
    queryFn: () => fetchQuestionByFilters(answers.length ? answers : ["first_question"]),
  });

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

  const handleOptionSelect = (key: string) => {
    setAnswers((prev) => [...prev, key]);
    setOffset(0);
  };

  return {
    currentQuestion,
    visibleOptions,
    offset,
    handleNext,
    handlePrevious,
    handleOptionSelect,
    isLoading,
    isError,
  };
};
