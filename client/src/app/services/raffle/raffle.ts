import { apiSlice } from '@/app/'

export const raffleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRaffles: builder.query({
      query: () => ({
        url: '/raffles',
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useGetAllRafflesQuery } = raffleApiSlice
