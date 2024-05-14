export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const formattedDay = getFormattedDay(day);

  const formattedDate = `${formattedDay} ${month} ${year}, ${hour}:${
    minute < 10 ? '0' + minute : minute
  }`;
  return formattedDate;
}

export function formatTimestampWithoutTime(timestamp) {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  const formattedDay = getFormattedDay(day);

  const formattedDate = `${formattedDay} ${month} ${year}`;
  return formattedDate;
}

function getFormattedDay(day) {
  if (day > 3 && day < 21) return day + 'th';
  switch (day % 10) {
    case 1:
      return day + 'st';
    case 2:
      return day + 'nd';
    case 3:
      return day + 'rd';
    default:
      return day + 'th';
  }
}
