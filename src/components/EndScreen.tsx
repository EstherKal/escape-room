import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';

interface EndScreenProps {
  onRestart: () => void;
}

const EndScreen = ({ onRestart }:EndScreenProps) => {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h3" gutterBottom>
          כל הכבוד! יצאתם מהחדר!
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          הצלחתם לפתור את כל החידות.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onRestart}
        >
          התחילו מחדש
        </Button>
      </Box>
    </Container>
  );
};

export default EndScreen;
