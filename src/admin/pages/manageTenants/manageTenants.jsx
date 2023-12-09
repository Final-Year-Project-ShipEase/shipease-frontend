import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Button } from '@mui/material';


const ManageTenants = () => {
  return (
    <>
      <div style={{ margin: '30px', width: '1055px', height: '430px', display: 'flex', flexDirection: 'column' }}>
        <div sx={{ width: '1000px', height: '30', dispaly: 'flex', flexDirection: 'row', marginLeft: '5px', color: 'white' }}>
          <Button variant="text" sx={{ color: '#7E62D7', borderBottom: '2px solid #7E62D7' }}>Recent Booking</Button>
          <Button variant="text" sx={{ color: '#7E62D7' }}>Vehicle Details</Button>
          <Button variant="text" sx={{ color: '#7E62D7' }}>Driver Details</Button>
          <hr></hr>
        </div>

        <div>
          <Table sx={{ dispaly: 'flex', flexDirection: 'row', }}>
            <TableHead sx={{ backgroundColor: '#7E62D7'}}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>
                  User
                  <TableSortLabel
                    active={true}
                    direction="asc"
                  >
                  </TableSortLabel>
                </TableCell>
               
                <TableCell sx={{ color: 'white' }}>
                Date
                  <TableSortLabel
                    active={true}
                    direction="desc"
                  >
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  Payment
                  <TableSortLabel
                    active={true}
                    direction="asc"
                  >
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              <TableRow>
                <TableCell>Row 1</TableCell>
                <TableCell>Row 1</TableCell>
                <TableCell>Row 1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Row 2</TableCell>
                <TableCell>Row 2</TableCell>
                <TableCell>Row 2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

      </div>

    </>
  );
};

export default ManageTenants;
