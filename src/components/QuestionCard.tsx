// src/components/QuestionCard.tsx

import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";

interface QuestionCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, description, image, onClick }) => {
  return (
    <Card
      onClick={onClick}
      style={{
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          style={{
            maxWidth: "95%",
            maxHeight: "60%",
            objectFit: "contain",
            margin: "10px auto",
          }}
        />
        <CardContent style={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default QuestionCard;
