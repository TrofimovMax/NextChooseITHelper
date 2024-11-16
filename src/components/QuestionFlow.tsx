// src/components/QuestionFlow.tsx

import React, { useState } from "react";
import { Container, Typography, Box, IconButton, Alert } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuestionCard from "./QuestionCard";
import questions from "../questions";

export default function QuestionFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [offset, setOffset] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const visibleOptions = questions[currentStep].options.slice(offset, offset + 4);

  const handleNext = () => {
    const nextOffset = offset + 4;
    if (nextOffset < questions[currentStep].options.length) {
      setOffset(nextOffset);
    }
  };

  const handlePrevious = () => {
    const prevOffset = offset - 4;
    if (prevOffset >= 0) {
      setOffset(prevOffset);
    }
  };

  const handleOptionSelect = (key: string) => {
    if (key === "other") {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      setCurrentStep((prev) => prev + 1);
      setOffset(0);
    }
  };

  const currentQuestion = questions[currentStep];

  return (
    <Container maxWidth={false} style={{ height: "100vh", padding: "0" }}>
      {currentQuestion ? (
        <>
          {/* Вопрос */}
          <Box sx={{paddingBottom: "2rem",}}>
            <Typography variant="h4" mt={4} align="center">
              {currentQuestion.question}
            </Typography>
          </Box>
          {showAlert && (
            <Box mt={2}>
              <Alert severity="info">Пока эта опция в разработке</Alert>
            </Box>
          )}
          {/* Основной контейнер */}
          <Box
            sx={{
              display: "flex",
              height: "calc(100% - 100px)",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            {/* Бокс "Назад" */}
            <Box
              sx={{
                height: "100%",
                maxWidth: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
              }}
              onClick={handlePrevious}
            >
              <IconButton
                disabled={offset === 0}
                style={{ visibility: offset === 0 ? "hidden" : "visible" }}
              >
                <ArrowBackIosIcon />
              </IconButton>
            </Box>
            {/* Карточки по центру */}
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
                    onClick={() => handleOptionSelect(option.key)}
                  />
                </Box>
              ))}
            </Box>
            {/* Бокс "Вперед" */}
            <Box
              sx={{
                height: "100%",
                maxWidth: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
              }}
              onClick={handleNext}
            >
              <IconButton
                disabled={offset + 4 >= questions[currentStep].options.length}
                style={{
                  visibility:
                    offset + 4 >= questions[currentStep].options.length
                      ? "hidden"
                      : "visible",
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
        </>
      ) : (
        <Typography variant="body1" mt={2}>
          Спасибо за ваши ответы! Мы обработаем их и предоставим рекомендации.
        </Typography>
      )}
    </Container>
  );
}
