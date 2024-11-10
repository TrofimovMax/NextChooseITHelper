// src/pages/index.ts

import { Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={8}>
        <Typography variant="h2" gutterBottom>
          Вас приветствует ваш личный помощник выбора  IT-технологий!
        </Typography>
        <Typography variant="body1" paragraph>
          Это приложение поможет вам выбрать наиболее подходящие ИТ-технологии для ваших нужд.
          Ответьте на несколько простых вопросов, и мы порекомендуем вам лучшие варианты.
        </Typography>
        <Typography variant="body1" paragraph>
          Независимо от того, являетесь ли вы разработчиком, ищущим новый фреймворк, или компанией,
          ищущей лучший технологический пакет, Choose IT Helper здесь, чтобы помочь вам.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          <Link href="/questions" style={{ color: 'white', textDecoration: 'none' }}>
            Начать выбор
          </Link>
        </Button>
      </Box>
    </Container>
  );
}
