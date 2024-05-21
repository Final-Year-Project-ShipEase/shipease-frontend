import React from 'react';
import { Typography, useTheme, Grid } from '@mui/material';
import AddModalButton from '../../../commons/buttons/addModal';
import AddPermissionModal from './components/modal/addPermission';

const PageHeader = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const onAddPermission = () => {
    setOpen(true);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <AddPermissionModal
        text={'Add Permission'}
        open={open}
        handleClose={handleClose}
      />
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
          }}
        >
          Permissions
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          flexShrink: 0,
          justifyContent: 'flex-end',
          gap: 2,
        }}
      >
        {/* <HeaderButton text={'Reset'} onClick={onClickPermit} /> */}
        <AddModalButton text={'Add Permission'} onClick={onAddPermission} />
      </Grid>
    </Grid>
  );
};

export default PageHeader;
