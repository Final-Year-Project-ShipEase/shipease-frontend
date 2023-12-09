
import { Grid } from '@mui/material';
import Navbar from '../../../admin/components/navbar/navbar';
import Sidebar from '../../../admin/components/sidebar/sidebar';
import React, { useEffect, useRef } from 'react';

const ManageTenants = () => {
  const leftSpan = 1.5;
  const sidebarButtonRef = useRef(null);

  useEffect(() => {
    sidebarButtonRef.current.focus();
  }, []);

  return (
    <box>
      <Navbar />
      <Grid container>
        <Grid
          item
          md={leftSpan}
          xs={leftSpan}
          lg={leftSpan}
          sx={{ backgroundColor: '#FAFAFA' }}
        >
          <Sidebar leftSpan={leftSpan} />
          <button ref={sidebarButtonRef}>Sidebar Button</button>
        </Grid>
      </Grid>
    </box>
  );
};

export default ManageTenants;
