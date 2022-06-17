// Set space each 3 number
const numberWithSpaces = (number: number): string | undefined => {
  if (number === undefined) return undefined;

  // eslint-disable-next-line consistent-return
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default numberWithSpaces;
