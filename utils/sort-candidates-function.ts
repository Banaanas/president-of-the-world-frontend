// Sort Candidates in function of Votes Number
import { Candidate } from "../types/types";

type RequiredCandidates = Required<Candidate>;

const sortCandidatesFunction = (
  arr: Array<RequiredCandidates>,
): Array<RequiredCandidates> => {
  const sortedArr = [...arr];

  // Reverse Array to first display
  sortedArr.reverse(); //
  sortedArr.sort((a, b) => (a.votes < b.votes ? 1 : -1));
  return sortedArr;
};

export default sortCandidatesFunction;
