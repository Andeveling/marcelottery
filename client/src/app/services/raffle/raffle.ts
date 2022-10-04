import { apiSlice } from '../api/apiSlice'

export const raffleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRaffles: builder.query({
      query: () => ({
        url: 'login',
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useGetAllRafflesQuery } = raffleApiSlice
