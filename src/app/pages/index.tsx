// src/app/pages/index.tsx

import { Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={8}>
                <Typography variant="h2" gutterBottom>
                    Welcome to ChooseITHelper!
                </Typography>
                <Typography variant="body1" paragraph>
                    This application helps you to select the most suitable IT technologies
                    for your needs. Answer a few simple questions, and we will recommend the best options for you.
                </Typography>
                <Typography variant="body1" paragraph>
                    Whether you are a developer looking for a new framework or a company
                    searching for the best technology stack, ChooseITHelper is here to assist you.
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    <Link href="/questions" passHref>
                        <a style={{ color: 'white', textDecoration: 'none' }}>Start Selection</a>
                    </Link>
                </Button>
            </Box>
        </Container>
    );
}

