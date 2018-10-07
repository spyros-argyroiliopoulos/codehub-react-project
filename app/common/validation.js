export const validateForm = ({title, imagePath, price, dates, duration, description}) => {
  if (title && imagePath && price.early_bird && price.normal &&
    dates.start_date && dates.end_date && duration && description) {
    return false;
  }
  return true;
};
