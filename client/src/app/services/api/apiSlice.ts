import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@/app/store'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Lottery', 'Raffle'],
  endpoints: (builder) => ({}),
})
