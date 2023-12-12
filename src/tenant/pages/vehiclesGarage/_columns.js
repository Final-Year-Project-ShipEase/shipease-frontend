const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 15; i++) {
    dummyData.push({
      id: i,
      type: `Trucker trailor ${i}`,
      city: `city ${i}`,
      Company: `T-313${i}`,
      report: `12-04-${i}`,
      actions: `Action ${i}`,
    });
  }

  return dummyData;
};

export const DriverColumns = [
  {
    id: 'type',
    label: 'Type',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'id',
    label: 'ID',
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'city',
    label: 'City',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'Company',
    label: 'Vehicle Company',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'report',
    label: 'Report Vendor',
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
