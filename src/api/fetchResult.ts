// src/api/fetchResult.ts

import apiClient from "./apiClient";

export const fetchResult = async (resultId: string) => {
  const response = await apiClient.get(`/results/${resultId}`);
  return response.data;
};
