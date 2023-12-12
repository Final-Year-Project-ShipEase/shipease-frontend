import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import {
  Grid,
  Paper,
  TablePagination,
  Typography,
  useTheme,
} from '@mui/material';
import RolesActionColumn from '../rolesActionColumn.jsx';
import ConfirmAdd from '../dialogues/ConfirmAdd.jsx';
import ConfirmDelete from '../dialogues/ConfirmDelete.jsx';
import { useNavigate } from 'react-router-dom';
import TenantDetailsModal from '../modal/tenantsDetails.jsx';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, columns } = props;
  const theme = useTheme();
  const createSortHandler = (property) => (event) => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow
        sx={{
          backgroundColor: theme.palette.table.header,
          padding: '12px 8px 8px 16px',
          fontSize: theme.typography.tableHeader.fontSize,
          fontWeight: theme.typography.tableHeader.fontWeight,
          color: theme.typography.tableHeader.color,
          fontFamily: theme.typography.tableHeader.fontFamily,
          height: '60px',
          borderTopRadius: '15px',
        }}
      >
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.numeric ? 'right' : 'left'}
            padding={column.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === column.id ? order : false}
            sx={{
              backgroundColor: theme.palette.table.header,
              padding: '12px 8px 8px 16px',
              fontSize: theme.typography.tableHeader.fontSize,
              fontWeight: theme.typography.tableHeader.fontWeight,
              color: theme.typography.tableHeader.color,
              fontFamily: theme.typography.tableHeader.fontFamily,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={createSortHandler(column.id)}
              >
                {column.label}
                {orderBy === column.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </Box>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      numeric: PropTypes.bool.isRequired,
      disablePadding: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function TableData({ columns, rows, setLoading }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [page, setPage] = useState(0);
  const [visibleRows, setVisibleRows] = useState([]);
  const theme = useTheme();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [boxType, setBoxType] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [tenantId, setTenantId] = useState('');

  const handleDialogClose = () => {
    setBoxType('');
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleNav = (row) => {
    navigate('/admin/managetenants/' + row.id);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setVisibleRows(
      stableSort(rows, getComparator(order, orderBy))?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      )
    );
  }, [order, orderBy, rows, rowsPerPage, page]);

  return (
    <Box sx={{ marginTop: '24px', overflowY: 'auto' }}>
      <TenantDetailsModal
        open={modalOpen}
        handleClose={handleModalClose}
        tenantId={tenantId}
      />
      <ConfirmAdd
        open={boxType === 'approved'}
        onClose={handleDialogClose}
        onConfirm={handleDialogClose}
      />
      <ConfirmDelete
        open={boxType === 'removed'}
        onClose={handleDialogClose}
        onConfirm={handleDialogClose}
      />
      <Grid justifyContent="center">
        <Grid item xs={12} md={12}>
          <Box sx={{ width: '100%', borderRadius: '20px 20px 20px 20px' }}>
            <Paper
              sx={{
                width: '100%',
                mb: 2,
                borderRadius: '5px',
                boxShadow:
                  '5px 7px 8px rgba(0, 0, 0, 0.1), 6px 8px 16px rgba(0, 0, 0, 0.1)',
              }}
            >
              <TableContainer
                component="div"
                sx={{
                  borderRadius: '5px',
                  backgroundColor: theme.palette.table.body,
                }}
              >
                <Table
                  sx={{
                    minWidth: 750,
                    '& th': {
                      ...(columns[0].disablePadding && {
                        paddingLeft: '16px',
                      }),
                    },
                  }}
                  aria-labelledby="tableTitle"
                  size="medium"
                >
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    columns={columns}
                  />
                  <TableBody>
                    {visibleRows?.length > 0 ? (
                      visibleRows.map((row, index) => (
                        <TableRow
                          hover
                          role="checkbox"
                          key={index}
                          sx={{
                            cursor: 'default',
                            borderBottom: '2px solid rgba(0, 0, 0, 1)',
                            '&:last-child td, &:last-child th': {
                              border: 0,
                            },
                            '&:hover': {
                              backgroundColor: theme.palette.table.hover,
                            },
                          }}
                        >
                          {columns.map((column, columnIndex) => (
                            <TableCell
                              key={column.id}
                              align={column.numeric ? 'right' : 'left'}
                              width={column.width}
                              sx={{
                                fontSize: theme.typography.tableRow.fontSize,
                                fontWeight:
                                  theme.typography.tableRow.fontWeight,
                                color: theme.typography.tableRow.color,
                                fontFamily:
                                  theme.typography.tableRow.fontFamily,
                                padding: '8px 11px 8px 16px',
                                ...(columnIndex === 0 && {
                                  paddingLeft: '16px',
                                }),
                              }}
                              onClick={() => {
                                if (column.id !== 'actions') {
                                  handleNav(row);
                                }
                              }}
                            >
                              {column.id === 'actions' ? (
                                <RolesActionColumn
                                  value={row.id}
                                  boxType={setBoxType}
                                  setModalOpen={setModalOpen}
                                  setLoading={setLoading}
                                  setTenantId={setTenantId}
                                />
                              ) : (
                                row[column.id]
                              )}
                            </TableCell>
                          ))}{' '}
                        </TableRow>
                      ))
                    ) : (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          height: '80px',
                          width: '100%',
                        }}
                      >
                        <Typography>TABLE IS EMPTY</Typography>
                      </Box>
                    )}
                  </TableBody>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{
                      fontSize: theme.typography.tableHeader.fontSize,
                      width: '100%',
                      borderBottomLeftRadius: '5px',
                      borderBottomRightRadius: '5px',
                      '& .MuiTablePagination-toolbar': {
                        height: '60px',
                        minHeight: '60px',
                        maxHeight: '60px',
                        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                        borderBottomLeftRadius: '5px',
                        borderBottomRightRadius: '5px',
                      },
                    }}
                  />
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
