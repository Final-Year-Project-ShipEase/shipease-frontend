export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short',
  };

  const formattedDate = date.toLocaleString('en-US', options);
  return formattedDate.replace(',', ''); 
}
