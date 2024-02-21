import React from 'react';
import { Box } from '@mui/material';
import PageHeader from './pageHeader';
import PoolRequestInformation from './poolRequestCard/poolrequestInformation';

const poolRequest = () => {
    return (
        <>
            <PageHeader></PageHeader>
            <PoolRequestInformation></PoolRequestInformation>
        </>
    )
};

export default poolRequest;