// src/components/StepOne.tsx

import { Typography } from "@mui/material";
import ChooseCard from "@/components/ChoseCard";
import React from "react";

interface StepOneProps {
  onNext: (answer: { title: string; key: string }) => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
  const options = [
    {
      title: "Веб-сайт",
      key: "web_site",
      description: "Создание интерактивного веб-приложения для пользователей.",
      image: "/images/web.png",
    },
    {
      title: "Мобильное приложение",
      key: "mobile_app",
      description: "Разработка приложения для мобильных устройств.",
      image: "/images/mobile.png",
    },
    {
      title: "Игра",
      key: "game",
      description: "Создание увлекательной игры для различных платформ.",
      image: "/images/game.png",
    },
    {
      title: "Другое",
      key: "other",
      description: "Любой другой тип проекта, который вы хотите реализовать.",
      image: "/images/other.png",
    },
  ];

  const handleOptionClick = (option: { title: string; key: string }) => {
    onNext(option); // Pass the selected option back to the parent
  };

  return (
    <>
      <Typography variant="body1" mt={2}>
        Какова основная цель вашего проекта?
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {options.map((option) => (
          <ChooseCard
            key={option.key}
            title={option.title}
            description={option.description}
            image={option.image}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </div>
    </>
  );
};

export default StepOne;
