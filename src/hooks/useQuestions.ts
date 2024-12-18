// src/hooks/useQuestions.ts

import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchQuestionByFilters } from "@/api/fetchQuestionByFilters";

export const useQuestions = () => {
  const queryClient = useQueryClient();
  const [filters, setFilters] = useState<string[]>(["initial_key"]);
  const [answers, setAnswers] = useState<{ key: string; value: string }[]>([]);
  const [offset, setOffset] = useState(0);

  const queryKey = ["question", ...filters.filter(Boolean)];

  const {
    data: currentQuestion,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey,
    queryFn: () => fetchQuestionByFilters(filters.filter(Boolean)),
    enabled: filters.length > 0,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const handleOptionSelect = (key: string, value: string) => {
    if (!key || key.trim() === "") return;

    let updatedFilters;
    if (filters.length === 1 && filters[0] === "initial_key") {
      updatedFilters = [key];
    } else {
      updatedFilters = [...filters, key];
    }

    setFilters(updatedFilters.filter(Boolean));
    setAnswers([...answers, { key, value }]);
    setOffset(0);

    queryClient.prefetchQuery({
      queryKey: ["question", ...updatedFilters],
      queryFn: () => fetchQuestionByFilters(updatedFilters),
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
