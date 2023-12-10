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
      id: 'driverName',
      label: 'Driver Name',
      width: '30%',
      numeric: false,
      disablePadding: false,
    },
    {
      id: 'cnic',
      label: 'CNIC',
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
  
  export const dummyDriverData = generateDummyData();
  