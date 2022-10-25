import { apiSlice } from '@/app/'
import { RaffleI } from '@/types'
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'

const emptyRaffles: RaffleI[] = []
const raffleAdapter = createEntityAdapter()
const initial = raffleAdapter.getInitialState()

export const raffleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRaffles: builder.query<RaffleI[], void>({
      query: () => ({
        url: '/raffles',
      }),
      providesTags: ['Raffle'],
    }),
    getRafflesById: builder.query<RaffleI, RaffleI['_id']>({
      query: (id) => ({
        url: `/raffle/${id}`,
      }),
      providesTags: ['Raffle'],
    }),
    createRaffle: builder.mutation({
      query: (body) => ({
        url: '/raffle',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Raffle'],
    }),
    deleteRaffle: builder.mutation<void, RaffleI['_id']>({
      query: (id) => ({
        url: `/raffle/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Raffle'],
    }),
  }),
})

export const { useGetAllRafflesQuery, useGetRafflesByIdQuery, useCreateRaffleMutation, useDeleteRaffleMutation } =
  raffleApiSlice

export const selectRafflesResults = raffleApiSlice.endpoints.getAllRaffles.select()
export const selectAllRaffles = createSelector(selectRafflesResults, (result) => result?.data ?? emptyRaffles)
