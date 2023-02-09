import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const GithubSearchPages: React.FC = () => {
  return (
    <Container>
      <Typography variant='h3' component='h1'>
        Github Repositories List page
      </Typography>
      <Grid container spacing={2} justifyContent='space-between'>
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            variant='standard'
            label='Filter by'
            id='filterBy'
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <Button fullWidth variant='contained'>
            Search
          </Button>
        </Grid>
      </Grid>
      <Box
        display='flex'
        alignItems={'center'}
        justifyContent={'center'}
        height='200px'
      >
        <Alert severity='info'>Please provide a search option</Alert>
      </Box>
    </Container>
  );
};

export default GithubSearchPages;
