// src/pages/questions-test.tsx

import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { ArrowForward, ArrowBack, Mouse } from '@mui/icons-material';
import Image from 'next/image';

export default function QuestionsTestPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        position: 'relative',
        paddingTop: '20px',
      }}
    >
      {/* Вопрос в верхней части */}
      <Typography variant="h3" color="error" sx={{ marginBottom: '20px', zIndex: 2, position: 'relative' }}>
        Какая основная цель вашего проекта?
      </Typography>

      {/* Блок с картинкой на фоне */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        {/* Картинка (GIF) на заднем фоне */}
        <Image
          src="/images/revamp_website.gif"
          alt="Система выбора"
          layout="responsive"
          width={1000}
          height={500}
          objectFit="contain"
          priority
        />
      </Box>

      {/* Кнопки */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 20px',
          zIndex: 3,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          sx={{ padding: '10px 20px', fontSize: '18px' }}
        >
          Назад
        </Button>

        <Button
          variant="contained"
          color="success"
          sx={{
            padding: '10px 20px',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          startIcon={<Mouse />}
        >
          ВЫБРАТЬ
        </Button>

        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForward />}
          sx={{ padding: '10px 20px', fontSize: '18px' }}
        >
          Вперед
        </Button>
      </Box>
    </Box>
  );
}
