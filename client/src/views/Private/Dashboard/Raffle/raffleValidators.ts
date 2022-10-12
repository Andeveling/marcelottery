import * as yup from 'yup'

export const raffleValidator = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().min(10, 'Por favor agrege una descripción de al menos 10 caracteres').required(),
  cant: yup.number().min(100, 'Minimo se permiten 100 puestos').max(1000, 'Maximo se permiten 1000 puestos').required(),
  price: yup.number().min(1000, 'El precio minimo es $1.000').max(100000, 'Valor maximo del boleto $100.000'),
  datePlayLottery: yup
    .array()
    .min(1, 'Debes asignar un sorteo minimo')
    .of(
      yup.object().shape({
        lotteryId: yup.string().required('Este campo es obligatorio, seleccione por favor una loteria'),
        reward: yup.number().required('Este campo es obligatorio,'),
        date: yup.date().min(new Date(), 'La fecha debe der mayor').required('Este campo es obligatorio'),
      }),
    ),
})
