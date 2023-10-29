import React from 'react';
import { Container, Paper, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

const GenerateQuote = () => {
  const dispatch = useDispatch();
  const [quoteText, setQuoteText] = React.useState('');

  const handleCreateQuote = () => {
    dispatch({ type: 'CREATE_QUOTE', payload: quoteText });
    setQuoteText('');
  };

  return (
    <>
      <Container>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <h2>Create Quote</h2>
          <TextField
            label="Quote Text"
            variant="outlined"
            fullWidth
            value={quoteText}
            onChange={(e) => setQuoteText(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleCreateQuote}>
            Create Quote
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default GenerateQuote;