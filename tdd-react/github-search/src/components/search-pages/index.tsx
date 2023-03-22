import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const GithubSearchPages: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchApplied, setIsSearchApplied] = useState(false);

  const handleClick = async () => {
    setIsSearching(true);
    await Promise.resolve();
    setIsSearching(false);
    setIsSearchApplied(true);
  };
  const renderContent = (
    <>
      {isSearchApplied ? (
        <table>
          <thead>
            <tr>
              <th>Repository</th>
              <th>Stars</th>
              <th>Forks</th>
              <th>Open issues</th>
              <th>Updated at</th>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tbody>
        </table>
      ) : (
        <Box
          display="flex"
          alignItems={'center'}
          justifyContent={'center'}
          height="200px"
        >
          <Alert severity="info">
            Please provide a search option and click in the search button
          </Alert>
        </Box>
      )}
    </>
  );
  
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
      {renderContent}
    </Container>
  );
};

export default GithubSearchPages;
