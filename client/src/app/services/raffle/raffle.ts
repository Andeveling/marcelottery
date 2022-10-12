import { apiSlice } from '@/app/'
import { RaffleI } from '@/types'

export const raffleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRaffles: builder.query<RaffleI[], void>({
      query: () => ({
        url: '/raffles',
      }),
      providesTags: ['Raffle'],
    }),
    createRaffle: builder.mutation({
      query: (body) => ({
        url: '/raffles',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Raffle'],
    }),
  }),
})

export const { useGetAllRafflesQuery, useCreateRaffleMutation } = raffleApiSlice
