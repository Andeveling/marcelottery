export const numberTicketFormatter = (n: number | undefined) => {
  if (typeof n === 'undefined') return
  if (n < 10) return `#0${n}`
  else return `#${n}`
}
