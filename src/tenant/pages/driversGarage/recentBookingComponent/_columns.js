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
    id: 'NAME',
    label: 'Driver Name',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'CNIC',
    label: 'Cnic',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'LICENSE',
    label: 'License',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'TRACKER',
    label: 'Tracker No',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
];

export const dummyBookingData = generateDummyData();
