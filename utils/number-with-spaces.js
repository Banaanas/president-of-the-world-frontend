// Set space each 3 number
const numberWithSpaces = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export default numberWithSpaces;
