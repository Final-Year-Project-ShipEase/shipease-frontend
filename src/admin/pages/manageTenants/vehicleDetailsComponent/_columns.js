const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 15; i++) {
    dummyData.push({
      vehicleNo: `vehicleNo${i}`,
      type: `type${i}`,
      lastApproved: `lastApproved${i}`,
      actions: `Action ${i}`,
    });
  }

  return dummyData;
};

export const VehicleColumns = [
  {
    id: 'id',
    label: 'Vehicle ID',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'regNo',
    label: 'Reg No',
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'location',
    label: 'City',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'status',
    label: 'Status',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
];

export const dummyVehicleData = generateDummyData();
