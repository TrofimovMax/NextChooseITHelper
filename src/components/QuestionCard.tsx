// src/components/QuestionCard.tsx

import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import React from "react";

interface QuestionCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, description, onClick }) => (
  <Card onClick={onClick} style={{ cursor: "pointer", margin: "10px" }}>
    <CardActionArea>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default QuestionCard;
