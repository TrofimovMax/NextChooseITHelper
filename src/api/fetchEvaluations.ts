// src/api/fetchEvaluations.ts

import apiClient from "./apiClient";

export const fetchEvaluations = async (queryKeys: string[]) => {
  const response = await apiClient.post("/evaluations/calculate_evaluations", {
    query_keys: queryKeys,
  });
  return response.data;
};
