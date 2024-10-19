// pages/questions/index.tsx

import { Container, Typography } from "@mui/material";

export default function Question() {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" mt={4}>
                Let&#39;s start choosing your technology stack!
            </Typography>
            <Typography variant="body1">
                Answer the questions below to get the best recommendations.
            </Typography>
            {/* Here you can add questions and decision-making logic */}
        </Container>
    );
}
