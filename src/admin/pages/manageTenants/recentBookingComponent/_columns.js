const generateDummyData = () => {
    const dummyData = [];
  
    for (let i = 1; i <= 15; i++) {
      dummyData.push({
        user: `User${i}`,
        date: `Date ${i}`,
        payment: `Payment ${i}`,
      });
    }
  
    return dummyData;
  };
  
  export const BookingColumns = [
    {
      id: 'user',
      label: 'User',
      width: '20%',
      numeric: false,
      disablePadding: false,
    },
    {
      id: 'date',
      label: 'Date',
      width: '25%',
      numeric: false,
      disablePadding: false,
    },
    {
      id: 'payment',
      label: 'Payment',
      width: '20%',
      numeric: false,
      disablePadding: false,
    },
  ];
  
  export const dummyBookingData = generateDummyData();
  