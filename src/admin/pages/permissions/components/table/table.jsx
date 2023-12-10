import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Box,
  Grid,
  useTheme,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import userList from './userList';

const CustomTable = () => {
  //   const { getRolesData } = useRoleService();
  //   const { getUserData } = useUserService();
  const [roles, setRole] = React.useState([]);
  const [users, setUserList] = useState([]);
  const theme = useTheme();

  const getData = async () => {
    try {
      //const userList = await getRolesData();
      setRole(userList);
    } catch (error) {
      console.error(error);
    }
  };

  const getUsersData = async () => {
    try {
      //const userList = await getUserData();
      setUserList(userList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsersData();
    getData();
  }, []);

  const TableCheckBox = () => {
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = (userId, roleId) => {
      // setChecked((prevState) => ({
      //   ...prevState,
      //   [userId]: {
      //     ...prevState[userId],
      //     [roleId]: !prevState[userId][roleId],
      //   },
      // }));
      setChecked(!checked);
    };
    return (
      <Checkbox
        sx={{
          width: '16px',
          height: '16px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', // Add shadow
          border: '5px solid rgba(0, 0, 0, 0.1)',
        }}
        checked={checked}
        onChange={() => handleCheckboxChange()}
      />
    );
  };
  return (
    <Table>
      <TableHead>
        <TableRow
          sx={{
            backgroundColor: theme.palette.table.header,
            padding: '12px 8px 8px 16px',
            height: '60px',
            borderTopRadius: '15px',
          }}
        >
          <TableCell
            style={{
              width: '300px',
              padding: '12px 8px 8px 16px',
              fontSize: theme.typography.tableHeader.fontSize,
              fontFamily: theme.typography.tableHeader.fontFamily,
              fontWeight: theme.typography.tableHeader.fontWeight,
              color: theme.typography.tableHeader.color,
            }}
          >
            Tenant
          </TableCell>{' '}
          {roles.map((role) => (
            <TableCell key={role.id}>
              <Box
                style={{
                  width: 'auto',
                  backgroundColor: 'white',
                  padding: '12px 8px 8px 16px',
                  fontWeight: 'bold',
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid white',
                  borderRadius: '5px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {role.name}
                  <EditOutlinedIcon />
                </Grid>
              </Box>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody
        sx={{
          backgroundColor: '#FFFFFF',
        }}
      >
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            {roles.map((role) => (
              <TableCell
                key={role.id}
                style={{ textAlign: 'center', verticalAlign: 'middle' }}
              >
                <TableCheckBox />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
