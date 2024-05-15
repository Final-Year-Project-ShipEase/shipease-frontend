const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 15; i++) {
    dummyData.push({
      type: `type${i}`,
      id: i,
      city: `city${i}`,
      tenant: `Tenant ${i}`,
      actions: `Action ${i}`,
    });
  }

  return dummyData;
};

export const VehicleColumns = [
  {
    id: 'regNo',
    label: 'Reg No',
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'type',
    label: 'Vehicle Type',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'location',
    label: 'Location',
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
