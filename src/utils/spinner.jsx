import { useTheme } from '@emotion/react';
import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

function Spinner() {
  const theme = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ScaleLoader
          className="justify-content-center"
          color={theme.palette.spinner.main}
          height={40}
          width={6}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <div style={{ margin: '2rem', textAlign: 'center' }}>
          <h4>Please wait...</h4>
          <p>This usually takes just a few seconds.</p>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
