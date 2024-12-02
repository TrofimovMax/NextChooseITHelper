// src/components/QuestionCard.tsx

import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";

interface QuestionCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, description, image, onClick }) => {
  const [imgSrc, setImgSrc] = useState(image || "/images/default.png");

  const handleImageError = () => {
    setImgSrc("/images/default.png");
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image={imgSrc}
          alt={title}
          onError={handleImageError}
          sx={{
            width: "100%",
            maxHeight: "150px",
            objectFit: "cover",
          }}
        />
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
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
