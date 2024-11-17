// src/components/QuestionFlow.tsx

import React from "react";
import { Container, Typography, Box, IconButton, Alert } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuestionCard from "./QuestionCard";
import { useQuestions } from "@/hooks/useQuestions";

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
      <Box sx={{ paddingBottom: "2rem" }}>
        <Typography variant="h4" mt={4} align="center">
          {currentQuestion.question}
        </Typography>
      </Box>
      {showAlert && (
        <Box mt={2}>
          <Alert severity="info">Пока эта опция в разработке</Alert>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          height: "calc(100% - 100px)",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            maxWidth: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
            cursor: offset === 0 ? "not-allowed" : "pointer",
          }}
          onClick={handlePrevious}
        >
          <IconButton disabled={offset === 0}>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: 3,
            width: "80vw",
            height: "100%",
          }}
        >
          {visibleOptions.map((option) => (
            <Box
              key={option.key}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <QuestionCard
                title={option.title}
                description={option.description}
                image={option.image}
                onClick={() => handleOptionSelect(option.key, option.title)}
              />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            height: "100%",
            maxWidth: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
            cursor:
              offset + 4 >= currentQuestion.options.length
                ? "not-allowed"
                : "pointer",
          }}
          onClick={handleNext}
        >
          <IconButton
            disabled={offset + 4 >= currentQuestion.options.length}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}
