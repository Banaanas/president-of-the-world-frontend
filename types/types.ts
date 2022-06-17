/* CANDIDATE */

export interface Candidate {
  lastName: string;
  firstName: string;
  country: string;
  politicalOrientation: string;
  votes?: number;
  id: string;
}

export type RequiredCandidate = Required<Candidate>;

export type CreatedCandidate = Omit<Candidate, "id">;

export type UpdatedCandidate = Omit<Candidate, "lastName" | "firstName">;

export interface AllCandidatesData {
  allCandidates: Array<RequiredCandidate>;
}

/* LOGGED IN USER */

export interface LoggedInUser {
  candidate: Candidate;
  id: string;
  username: string;
}

export interface LoggedInUserObject {
  token: string;
  user: LoggedInUser;
  candidate?: Candidate;
}

export interface LoggedInUserData {
  loggedInUser: LoggedInUserObject;
}

/* LOGIN */

export interface Login {
  token: string;
  user: LoggedInUser;
}

export interface LoginObject {
  login: Login;
}

/* POLITICAL ORIENTATION */

export type PoliticalOrientation = "Left" | "Center" | "Right";

/* NEW USER */
export interface NewUser {
  username: string;
  password: string;
  passwordConfirmation: string;
}
