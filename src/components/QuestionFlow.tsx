// src/components/QuestionFlow.tsx

import React from "react";
import { Container, Typography, IconButton, Alert } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuestionCard from "./QuestionCard";
import Grid from "@mui/material/Grid2";
import { useQuestions } from "@/hooks/useQuestions";

export default function QuestionFlow() {
  const {
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
  } = useQuestions();

  if (isLoading) {
    return (
      <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="body1" mt={2}>
          Загрузка вопросов...
        </Typography>
      </Container>
    );
  }

  if (isError || error) {
    return (
      <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="body1" mt={2} color="error">
          Ошибка при загрузке данных.
        </Typography>
      </Container>
    );
  }

  const questionData = Array.isArray(currentQuestion) ? currentQuestion[0] : null;
  const statusCode = Array.isArray(currentQuestion) ? currentQuestion[1] : null;

  if (questionData?.message === "No questions found" && statusCode === 404) {
    return (
      <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="body1" mt={2}>
          Спасибо за ваши ответы:{" "}
          {answers.map((answer) => answer.value).join(", ")}! Мы обработаем их и
          предоставим рекомендации.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} style={{ height: "100vh", padding: "0" }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" mt={4}>
          {currentQuestion.text}
        </Typography>
      </Grid>

      {currentQuestion?.options?.length === 0 && (
        <Grid item xs={12}>
          <Alert severity="info" sx={{ textAlign: "center" }}>
            Вопросов больше нет.
          </Alert>
        </Grid>
      )}

      {currentQuestion?.options?.length > 0 && (
        <Grid container alignItems="center" sx={{ height: "90vh" }}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 2,
            }}
          >
            <IconButton
              onClick={handlePrevious}
              disabled={offset === 0}
              size="large"
            >
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={10}
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {visibleOptions.map((option: any) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={option.option_id}>
                <QuestionCard
                  title={option.text}
                  description=""
                  image={option.image_url}
                  onClick={() => {
                    handleOptionSelect(option.key, option.text);
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 2,
            }}
          >
            <IconButton
              onClick={handleNext}
              disabled={
                currentQuestion.options &&
                offset + 4 >= currentQuestion.options.length
              }
              size="large"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
