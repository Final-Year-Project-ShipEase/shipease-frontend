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
    id: 'vehicleNo',
    label: 'Vehicle No',
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'type',
    label: 'Type',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'lastApproved',
    label: 'Last Approved',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'actions',
    label: 'Action',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
];

export const dummyVehicleData = generateDummyData();
