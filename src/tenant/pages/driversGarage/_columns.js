const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 15; i++) {
    dummyData.push({
      CNIC: i,
      Drivername: `drivername${i}`,
      LICENSEE: `B-213 ${i}`,
      TrackerNo: `T-313${i}`,
      last: `12-04-${i}`,
      actions: `Action ${i}`,
    });
  }

  return dummyData;
};

export const DriverColumns = [
  {
    id: 'Drivername',
    label: 'Driver Name',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'CNIC',
    label: 'CNIC',  
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'LICENSEE',
    label: 'License No',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'TrackerNo',
    label: 'Tracker No',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'last',
    label: 'Last Approval',
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
