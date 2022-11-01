import { useState } from 'react';
import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';

import Title from './Title'

export default function FavouriteBooks(props) {
  const [ search, setSearch]= useState("")
  const filterHandler =(event)=>{
    setSearch(event.target.value)

    if(search.trim() !== ""){

    }
  }

  return <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Title>Favourite Books</Title>
      <Grid item xs={12} sm={4}>
        <TextField
          id="search"
          name="search" 
          label="search title"
          variant="standard"
          margin='dense'
          onChange={filterHandler}
          value={search}
        />
        </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.books.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </Paper>
}

// 