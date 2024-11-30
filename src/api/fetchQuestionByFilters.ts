// src/api/fetchQuestionByFilters.ts

import apiClient from "./apiClient";

export const fetchQuestionByFilters = async (filters: string[]) => {
  const response = await apiClient.get("/questions", {
    params: {
      filters: filters.join(","),
    },
  });
  return response.data;
};
