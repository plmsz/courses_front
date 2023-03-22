import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Link,
  Box,
  Alert,
  Paper,
  TablePagination,
} from '@mui/material';
interface ContentProps {
  isSearchApplied: boolean;
}
const tableHeaders = [
  'Repository',
  'Stars',
  'Forks',
  'Open issues',
  'Updated at',
];
const Content = ({ isSearchApplied }: ContentProps) => {
  return (
    <Box
      display="flex"
      alignItems={'center'}
      justifyContent={'center'}
      minHeight="50vh"
    >
      {isSearchApplied ? (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {tableHeaders.map((name) => (
                    <TableCell key="name">{name}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Avatar alt="test" src="https://github.com/plmsz.png" />
                    <Link href="http://localhost:3000/test">Test</Link>
                  </TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>2020-01-01</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={1}
            rowsPerPage={10}
            page={0}
            onPageChange={() => {}}
            onRowsPerPageChange={() => {}}
          />
        </Paper>
      ) : (
        <Alert severity="info">
          Please provide a search option and click in the search button
        </Alert>
      )}
    </Box>
  );
};

export default Content;
