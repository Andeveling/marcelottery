export interface UserI {
  first_name: string
  last_name: string
}

export interface UserResponseI {
  user: UserI
  token: string
}

export interface LoginRequestI {
  username: string
  password: string
}
