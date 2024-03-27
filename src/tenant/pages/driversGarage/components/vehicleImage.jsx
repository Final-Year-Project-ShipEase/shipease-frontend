import React from 'react';

const VehicleImage = ({ image }) => {
  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(image?.data))
  );
  const base64Image = `data:image/png;base64,${base64String}`;

  return (
    <div>
      <img
        style={{ borderRadius: '5px', height: '200px', width: '200px' }}
        src={base64Image}
        alt="Vehicle"
      />
    </div>
  );
};

export default VehicleImage;
