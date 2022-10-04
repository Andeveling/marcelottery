import { apiSlice } from '../api'

export const lotteryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllLotteries: builder.query({
      query: () => '/lotteries',
    }),
    getLottery: builder.query({
      query: (id) => `/lottery/:${id}`,
    }),
    createLottery: builder.mutation({
      query: (lottery) => ({
        url: `/lottery`,
        method: 'POST',
        body: lottery,
      }),
    }),
    deleteLottery: builder.mutation({
      query: (id) => ({
        url: `/lottery/:${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const { useGetAllLotteriesQuery, useGetLotteryQuery, useCreateLotteryMutation, useDeleteLotteryMutation } =
  lotteryApiSlice
