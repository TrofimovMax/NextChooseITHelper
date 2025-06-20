// src/components/QuestionCard.tsx

import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from "@mui/material";

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
        width: 300,
        height: 250,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        '&:hover .hover-overlay': {
          opacity: 1,
        },
      }}
    >
      <CardActionArea sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ position: "relative", width: "100%", height: 140 }}>
          <CardMedia
            component="img"
            image={imgSrc}
            alt={title}
            onError={handleImageError}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Hover Overlay */}
          <Box
            className="hover-overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0, 0, 0, 0.7)",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              px: 1,
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <Typography variant="body2">{description}</Typography>
          </Box>
        </Box>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default QuestionCard;
