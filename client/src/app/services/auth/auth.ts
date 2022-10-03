import { apiSlice } from '../api/apiSlice'

export interface UserI {
  id: string
  username: string
}

export interface UserResponseI extends UserI {
  auth: boolean
  token: string
}

export interface LoginRequestI {
  username: string
  password: string
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponseI, LoginRequestI>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useLoginMutation, useProtectedMutation } = authApi
