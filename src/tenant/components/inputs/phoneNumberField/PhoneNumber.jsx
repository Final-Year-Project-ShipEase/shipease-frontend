import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import { useField } from 'formik';

import 'react-phone-input-2/lib/style.css';

const PhoneNumberInput = ({ label, ...rest }) => {
  const [field, meta, helpers] = useField(rest);

  return (
    <Box>
      <Typography
        sx={{
          color: '#454C52',
          fontSize: '14px',
          fontWeight: '500',
          mb: '8px',
        }}
      >
        {label}
      </Typography>
      <PhoneInput
        {...field}
        {...rest}
        country={'us'}
        onChange={(value) => {
          helpers.setValue(value);
        }}
        onBlur={() => {
          helpers.setTouched(true);
        }}
        inputProps={{
          id: field.name,
          placeholder: 'Enter Number',
        }}
        containerStyle={{
          width: '361px',
          height: '42px',
          borderRadius: '8px',
          boxShadow: '1',
          border: '1px solid #9EA5AD',
        }}
        inputStyle={{
          height: '100%',
          width: '100%',
        }}
        buttonStyle={{
          backgroundColor: 'white',
        }}
      />
    </Box>
  );
};

export default PhoneNumberInput;
