// src/components/StepTwo.tsx

import { Button, Typography } from "@mui/material";
import React from "react";

interface StepTwoProps {
  previousAnswer: string;
  onNext: (answer: string) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ previousAnswer, onNext }) => {
  const handleAnswer = (answer: string) => {
    onNext(answer); // Pass the answer back to the parent
  };

  return (
    <>
      <Typography variant="body1" mt={2}>
        Какую функциональность вы хотите реализовать?
      </Typography>
      {["Чат", "Галерея", "Форма обратной связи", "Другое"].map((option) => (
        <Button
          key={option}
          variant="outlined"
          onClick={() => handleAnswer(option)}
          style={{ margin: "5px" }}
        >
          {option}
        </Button>
      ))}
      {/* You can add conditional rendering based on the previousAnswer if needed */}
    </>
  );
};

export default StepTwo;
