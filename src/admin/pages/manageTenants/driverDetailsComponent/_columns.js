const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 15; i++) {
    dummyData.push({
      driverName: `driverName${i}`,
      cnic: `cnic${i}`,
      lastApproved: `lastApproved ${i}`,
      actions: `Action ${i}`,
    });
  }

  return dummyData;
};

export const DriverColumns = [
  {
    id: 'name',
    label: 'Driver Name',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'phoneNo',
    label: 'Phone No',
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'cnic',
    label: 'Owner CNIC',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'trackerNo',
    label: 'Tracker No',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'status',
    label: 'Status',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
];


export const dummyDriverData = generateDummyData();
