// src/components/ResultTable.tsx

import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

interface ResultItem {
  name?: string;
  language_name: string;
  framework_title: string;
  smart_score?: number;
  ahp_score?: number;
  awm_score?: number;
}

interface ResultTableProps {
  title: string;
  results: ResultItem[];
}

export default function ResultTable({ title, results }: ResultTableProps) {
  const isSmart = title.toLowerCase().includes("smart");
  const isAHP = title.toLowerCase().includes("ahp");
  const isAWM = title.toLowerCase().includes("adaptive");

  const maxScore = Math.max(
    ...results.map((item) =>
      isSmart
        ? item.smart_score ?? 0
        : isAHP
          ? item.ahp_score ?? 0
          : item.awm_score ?? 0
    )
  );

  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        {title}:
      </Typography>
      <Grid container spacing={2}>
        {results.map((item, index) => {
          const score = isSmart
            ? item.smart_score
            : isAHP
              ? item.ahp_score
              : item.awm_score;

          const isWinner = score === maxScore;

          return (
            <Grid item xs={12} sm={6} md={4} key={`${item.language_name}-${item.framework_title}-${index}`}>
              <Paper
                elevation={isWinner ? 6 : 1}
                sx={{
                  padding: 2,
                  border: isWinner ? "2px solid #4caf50" : "1px solid #ccc",
                  backgroundColor: isWinner ? "rgba(76, 175, 80, 0.05)" : "white",
                  position: "relative",
                }}
              >
                {isWinner && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      display: "flex",
                      alignItems: "center",
                      color: "success.main",
                    }}
                  >
                    <EmojiEventsIcon fontSize="small" />
                  </Box>
                )}
                <Typography variant="subtitle1" fontWeight={isWinner ? "bold" : "normal"}>
                  {item.name || `${item.language_name} / ${item.framework_title}`}
                </Typography>
                <Typography variant="body2">
                  Язык: {item.language_name}
                </Typography>
                <Typography variant="body2">
                  Фреймворк: {item.framework_title}
                </Typography>
                {item.smart_score !== undefined && (
                  <Typography variant="body2">
                    SMART Score: {(item.smart_score * 100).toFixed(2)}%
                  </Typography>
                )}
                {item.ahp_score !== undefined && (
                  <Typography variant="body2">
                    AHP Score: {(item.ahp_score * 100).toFixed(2)}%
                  </Typography>
                )}
                {item.awm_score !== undefined && (
                  <Typography variant="body2">
                    AWM Score: {(item.awm_score * 100).toFixed(2)}%
                  </Typography>
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
