// src/components/QuestionCard.tsx

import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import React from "react";

interface QuestionCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, description, image, onClick }) => (
  <Card onClick={onClick} style={{ cursor: "pointer", margin: "10px", maxWidth: "220px" }}>
    <CardActionArea>
      <CardMedia component="img" height="140" image={image} alt={title} />
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
