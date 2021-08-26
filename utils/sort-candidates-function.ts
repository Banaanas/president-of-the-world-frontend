// Sort Candidates in function of Votes Number
const sortCandidatesFunction = (arr) => {
  const sortedArr = [...arr];

  // Reverse Array to first display
  sortedArr.reverse(); //
  sortedArr.sort((a, b) => (a.votes < b.votes ? 1 : -1));
  return sortedArr;
};

export default sortCandidatesFunction;
