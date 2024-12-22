// src/api/fetchQuestionByFilters.ts

import apiClient from "./apiClient";

export const fetchQuestionByFilters = async (filters: string[] = [], nextQuestionId: number = 1) => {
  const params: Record<string, string | number> = {
    next_question_id: nextQuestionId,
  };

  if (filters.length > 0) {
    params["filters"] = filters.join(",");
  }

  const response = await apiClient.get("/questions", { params });

  return response.data;
};
