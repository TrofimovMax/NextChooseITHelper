// src/pages/results/[result_id].tsx

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Typography, CircularProgress, Alert } from "@mui/material";
import ResultTable from "@/components/ResultTable";
import { fetchResult } from "@/api/fetchResult";

export default function ResultPage() {
  const router = useRouter();
  const { result_id } = router.query;

  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getResult = async () => {
      if (result_id) {
        try {
          const data = await fetchResult(result_id as string);
          setResult(data);
          setIsLoading(false);
        } catch (err: any) {
          setError(err.message);
          setIsLoading(false);
        }
      }
    };

    getResult();
  }, [result_id]);

  if (isLoading) {
    return (
      <Container style={{ textAlign: "center", marginTop: "50px" }}>
        <CircularProgress />
        <Typography variant="body1" mt={2}>
          Загрузка результатов...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={{ textAlign: "center", marginTop: "50px" }}>
        <Alert severity="error">{`Ошибка: ${error}`}</Alert>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Результаты анализа
      </Typography>
      {result?.alternatives && (
        <>
          <Typography variant="h6" gutterBottom>
            Выбранные категории:
          </Typography>
          <Typography variant="body1">
            {result.alternatives.join(", ")}
          </Typography>
        </>
      )}

      {result?.criteria && (
        <>
          <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
            Выбранные критерии:
          </Typography>
          <Typography variant="body1">
            {result.criteria.join(", ")}
          </Typography>
        </>
      )}

      {result?.smart_results && (
        <ResultTable title="SMART Результаты" results={result.smart_results} />
      )}

      {result?.ahp_results && (
        <ResultTable title="AHP Результаты" results={result.ahp_results} />
      )}

      {result?.adaptive_weighted_results && (
        <ResultTable
          title="Adaptive Weighted Результаты"
          results={result.adaptive_weighted_results}
        />
      )}
    </Container>
  );
}
