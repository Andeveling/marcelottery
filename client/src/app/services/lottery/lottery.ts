import { apiSlice } from '../api'

export interface LotteryRenderI {
  _id: string | number
  title: string
}

export const lotteryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllLotteries: builder.query<LotteryRenderI[], void>({
      query: () => ({
        url: '/lotteries',
      }),
      providesTags: ['Lottery'],
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
      invalidatesTags: ['Lottery'],
    }),
    deleteLottery: builder.mutation<LotteryRenderI, LotteryRenderI['_id']>({
      query: (id) => ({
        url: `/lottery/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Lottery'],
    }),
  }),
})

export const { useGetAllLotteriesQuery, useGetLotteryQuery, useCreateLotteryMutation, useDeleteLotteryMutation } =
  lotteryApiSlice
