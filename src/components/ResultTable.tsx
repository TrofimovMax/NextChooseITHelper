// src/components/ResultTable.tsx

import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface ResultTableProps {
  title: string;
  results: Array<{
    language: string;
    frameworks: Array<{
      score: number;
      title: string;
    }>;
  }>;
}

export default function ResultTable({ title, results }: ResultTableProps) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        {title}:
      </Typography>
      <Grid container spacing={2}>
        {results.map((item) => (
          <Grid item xs={12} key={item.language}>
            <Typography variant="subtitle1">{item.language}</Typography>
            <Grid container spacing={1}>
              {item.frameworks.map((framework) => (
                <Grid item xs={12} key={framework.title}>
                  <Typography variant="body2">
                    {framework.title}: {framework.score}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
