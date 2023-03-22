import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Content from './content/content';

const GithubSearchPages: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchApplied, setIsSearchApplied] = useState(false);

  const handleClick = async () => {
    setIsSearching(true);
    await Promise.resolve();
    setIsSearching(false);
    setIsSearchApplied(true);
  };

  return (
    <Container>
      <Typography variant="h3" component="h1">
        Github Repositories List page
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            variant="standard"
            label="Filter by"
            id="filterBy"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <Button
            fullWidth
            variant="contained"
            disabled={isSearching}
            onClick={handleClick}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Content isSearchApplied={isSearchApplied} />
    </Container>
  );
};

export default GithubSearchPages;
