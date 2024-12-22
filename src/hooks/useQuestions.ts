// src/hooks/useQuestions.ts

import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchQuestionByFilters } from "@/api/fetchQuestionByFilters";

export const useQuestions = () => {
  const queryClient = useQueryClient();

  const [filters, setFilters] = useState<string[]>([]);
  const [answers, setAnswers] = useState<{ key: string; value: string }[]>([]);
  const [offset, setOffset] = useState(0);
  const [nextQuestionId, setNextQuestionId] = useState<number>(1);

  const queryKey = ["question", ...filters.filter(Boolean), nextQuestionId];

  const {
    data: currentQuestion,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey,
    queryFn: () => fetchQuestionByFilters(filters, nextQuestionId),
    enabled: true,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const handleOptionSelect = (key: string, value: string, newNextQuestionId: number | null = null) => {
    if (!key || key.trim() === "") return;

    const updatedFilters = [...filters, key];
    setFilters(updatedFilters.filter(Boolean));
    setAnswers([...answers, { key, value }]);
    setOffset(0);

    setNextQuestionId(newNextQuestionId);

    queryClient.prefetchQuery({
      queryKey: ["question", ...updatedFilters, newNextQuestionId ?? nextQuestionId],
      queryFn: () => fetchQuestionByFilters(updatedFilters, newNextQuestionId ?? nextQuestionId),
    });
  };

  const handleNext = () => {
    const nextOffset = offset + 4;
    if (currentQuestion?.options && nextOffset < currentQuestion.options.length) {
      setOffset(nextOffset);
    }
  };

  const handlePrevious = () => {
    const prevOffset = offset - 4;
    if (prevOffset >= 0) {
      setOffset(prevOffset);
    }
  };

  const visibleOptions = currentQuestion?.options
    ? currentQuestion.options.slice(offset, offset + 4)
    : [];

  return {
    currentQuestion,
    visibleOptions,
    offset,
    answers,
    handleNext,
    handlePrevious,
    handleOptionSelect,
    isLoading,
    isError,
    error,
  };
};
