const ThrowError = (error, show) => {
  if (error.response.data.message.id)
    show(error.response.data.message.id, 'error');
  if (error.response.data.message.email)
    show(error.response.data.message.email, 'error');
  if (error.response.data.message.contact_number)
    show(error.response.data.message.contact_number, 'error');
  if (error.response.data.message.date)
    show(error.response.data.message.date, 'error');
  if (error.response.data.message.password)
    show(error.response.data.message.password, 'error');
  if (error.response.data.message.pan_card_number)
    show(error.response.data.message.pan_card_number, 'error');
  return null;
};

export default ThrowError;
