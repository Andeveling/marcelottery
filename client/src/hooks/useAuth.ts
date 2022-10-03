import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../features/auth/authSlice'

export const useAuth = () => {
  const { id, username, token, auth } = useSelector(selectCurrentUser)
  return useMemo(() => ({ id, username, token, auth }), [id, username, token, auth])
}
