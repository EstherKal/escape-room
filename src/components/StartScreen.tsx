import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }:StartScreenProps) => {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h3" gutterBottom>
          ברוכים הבאים לחדר הבריחה
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          נסו לפתור את החידות בכל חדר כדי להצליח לצאת.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onStart}
        >
          התחילו את המשחק
        </Button>
      </Box>
    </Container>
  );
};

export default StartScreen;
