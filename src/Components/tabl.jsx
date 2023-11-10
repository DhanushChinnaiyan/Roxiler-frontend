// TableComponent.js
import React, { useContext, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { context } from '../contextAPI';

const TableComponent = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    // Sample data
    const {data,productFetching} = useContext(context)
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
      productFetching(newPage+1,data.searchItem,data.selectedMonth)
    };
  

  return (
    <div className='table'>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Sold</TableCell>
            <TableCell>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.products.map((product) => (
            <TableRow key={product.id} sx={{height:"calc(10px + 5vw)",overflow:"auto"}}>
              <TableCell >{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell >{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.sold?"true" : "false"}</TableCell>
              <TableCell><img src={product.image} alt={product.title}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={10}
        component="div"
        count={data.noOfProducts}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        
      />
    </div>
  );
};

export default TableComponent;
