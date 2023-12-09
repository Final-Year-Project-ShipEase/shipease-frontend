const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 15; i++) {
    dummyData.push({
      id: i,
      username: `username${i}`,
      tenant: `Tenant ${i}`,
      actions: `Action ${i}`,
    });
  }

  return dummyData;
};

export const DriverColumns = [
  {
    id: 'id',
    label: 'Driver ID',
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'username',
    label: 'Username',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'tenant',
    label: 'Tenant Name',
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

export const dummyDriverData = generateDummyData();
