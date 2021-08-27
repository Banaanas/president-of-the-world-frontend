/* CANDIDATE */

export interface Candidate {
  lastName: string;
  firstName: string;
  country: string;
  politicalOrientation: string;
  votes?: number;
  id: string;
}

export type CreatedCandidate = Omit<Candidate, "id">;

export interface AllCandidatesData {
  allCandidates: Array<Candidate>;
}

/* USER */

export interface User {
  candidate: Candidate;
  id: string;
  username: string;
}

export interface LoggedInUserObject {
  token: string;
  user: User;
  candidate?: Candidate;
}

export interface LoggedInUserData {
  loggedInUser: LoggedInUserObject;
}

/* LOGIN */

export interface Login {
  token: string;
  user: User;
}
export interface LoginObject {
  login: Login;
}
