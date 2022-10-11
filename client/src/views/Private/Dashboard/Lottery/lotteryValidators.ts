import * as yup from 'yup'

export const lotteryValidator = yup.object().shape({
  title: yup.string().required(),
})
