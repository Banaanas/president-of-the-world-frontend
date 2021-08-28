// Sort Candidates in function of Votes Number

import { RequiredCandidate } from "../types/types";

const sortCandidatesFunction = (
  arr: Array<RequiredCandidate>,
): Array<RequiredCandidate> => {
  const sortedArr = [...arr];

  // Reverse Array to first display
  sortedArr.reverse(); //
  sortedArr.sort((a, b) => (a.votes < b.votes ? 1 : -1));
  return sortedArr;
};

export default sortCandidatesFunction;
