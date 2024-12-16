import React, { useEffect, useState } from 'react';
import { Button, Typography, TextField, Box, Container } from '@mui/material';

interface RoomProps {
  roomId: number;
  puzzle: string;
  solution: string;
  onNextRoom: () => void;
}

const Room = ({ roomId, puzzle, solution, onNextRoom }:RoomProps) => {
  const [answer, setAnswer] = useState('');
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    setAnswer('');
    setIsSolved(false);
  }, [roomId]);
  
  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === solution.toLowerCase()) {
      setIsSolved(true);
    } else {
      alert('תשובה שגויה, נסו שוב!');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4">חדר {roomId}</Typography>
        <Typography variant="h6" paragraph>
          {puzzle}
        </Typography>
        <TextField
          label="הכנס תשובה"
          variant="outlined"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          fullWidth
          margin="normal"
        />
        {!isSolved ? (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            שלח תשובה
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={onNextRoom}
          >
            עבור לחדר הבא
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Room;
