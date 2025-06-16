// src/components/ResultTable.tsx

import React from "react";
import { Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface ResultItem {
  name: string;
  language_name: string;
  smart_score?: number;
  ahp_score?: number;
  awm_score?: number;
}

interface ResultTableProps {
  title: string;
  results: ResultItem[];
}

export default function ResultTable({ title, results }: ResultTableProps) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        {title}:
      </Typography>
      <Grid container spacing={2}>
        {results.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.name}>
            <Paper style={{ padding: "12px" }}>
              <Typography variant="subtitle1">{item.name}</Typography>
              <Typography variant="body2">
                Язык: {item.language_name}
              </Typography>
              {item.smart_score !== undefined && (
                <Typography variant="body2">
                  SMART Score: {item.smart_score.toFixed(5)}
                </Typography>
              )}
              {item.ahp_score !== undefined && (
                <Typography variant="body2">
                  AHP Score: {item.ahp_score.toFixed(5)}
                </Typography>
              )}
              {item.awm_score !== undefined && (
                <Typography variant="body2">
                  AWM Score: {item.awm_score.toFixed(5)}
                </Typography>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
