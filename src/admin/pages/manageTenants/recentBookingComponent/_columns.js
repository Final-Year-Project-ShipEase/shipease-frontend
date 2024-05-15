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
    id: 'pickup',
    label: 'Pick Up',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'dropoff',
    label: 'Drop Off',
    width: '25%',
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
    id: 'status',
    label: 'Status',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'total_bill',
    label: 'Payment',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
];

export const dummyBookingData = generateDummyData();
