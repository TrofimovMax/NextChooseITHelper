// src/components/QuestionFlow.tsx

import React from "react";
import { Container, Typography, IconButton, Alert } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuestionCard from "./QuestionCard";
import { useQuestions } from "@/hooks/useQuestions";
import Grid from "@mui/material/Grid2";

export default function QuestionFlow() {
  const {
    currentQuestion,
    visibleOptions,
    offset,
    handleNext,
    handlePrevious,
    handleOptionSelect,
    showAlert,
    answers,
  } = useQuestions();

  if (!currentQuestion) {
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
      {/* Заголовок */}
      <Grid item xs={12}>
        <Typography variant="h4" align="center" mt={4}>
          {currentQuestion.question}
        </Typography>
      </Grid>

      {/* Alert сообщение */}
      {showAlert && (
        <Grid item xs={12}>
          <Alert severity="info" sx={{ textAlign: "center" }}>
            Пока эта опция в разработке
          </Alert>
        </Grid>
      )}
      {/* Основной контейнер */}
      <Grid
        container
        alignItems="center"
        sx={{
          height: "90vh",
        }}
      >
        {/* Стрелка "Назад" */}
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
        {/* Карточки по центру */}
        <Grid
          item
          xs={10}
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {visibleOptions.map((option) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={option.key}
            >
              <QuestionCard
                title={option.title}
                description={option.description}
                image={option.image}
                onClick={() => handleOptionSelect(option.key, option.title)}
              />
            </Grid>
          ))}
        </Grid>
        {/* Стрелка "Вперед" */}
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
            disabled={offset + visibleOptions.length >= currentQuestion.options.length}
            size="large"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}
