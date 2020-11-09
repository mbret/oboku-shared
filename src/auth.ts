import { User } from "./users"

export type AuthenticationResponse = {
  token?: string
  user?: User
}

export type MutationSignupVariables = {
  email: string
  password: string
}

export type MutationSigninVariables = {
  email: string
  password: string
}

export type MutationEditUserVariables = {
  id: string,
  contentPassword?: string | null,
}