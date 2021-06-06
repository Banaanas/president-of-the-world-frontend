// Set space each 3 number
const numberWithSpaces = (number) => {
  if (number === undefined) return;

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default numberWithSpaces;
