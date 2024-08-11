import { RegisterCredentials } from "./RegisterCredentials";

export interface ExtendedRegisterCredentials extends RegisterCredentials {
  fullName: string;
  username: string;
}