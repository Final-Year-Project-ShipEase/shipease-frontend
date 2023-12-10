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
    id: 'type',
    label: 'Type',
    width: '20%',
    numeric: false,
  },
  {
    id: 'id',
    label: 'Reg No',
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'city',
    label: 'city',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'tenant',
    label: 'Tenant',
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
