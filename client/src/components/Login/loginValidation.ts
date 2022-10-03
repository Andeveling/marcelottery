import * as yup from 'yup'

export const loginValidations = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
})
