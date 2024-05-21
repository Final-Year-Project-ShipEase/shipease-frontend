const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 15; i++) {
    dummyData.push({
      id: i + 1000000000,
      username: `username${i}`,
      name: `Tenant ${i}`,
      requests: i + 1,
    });
  }

  return dummyData;
};

export const TenantsColumns = [
  {
    id: 'name',
    label: 'Tenant Name',
    width: '15%',
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
    id: 'email',
    label: 'Email Address',
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'phoneNo',
    label: 'Contact',
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'status',
    label: 'Status',
    width: '15%',
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

export const dummyTenantData = generateDummyData();
