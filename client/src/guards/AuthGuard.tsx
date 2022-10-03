import { RootState } from '@/app/store'
import { AuthState } from '@/features/auth/authSlice'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../routes'

interface Props {
  privateValidation: boolean
}

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

export const AuthGuard = ({ privateValidation }: Props) => {
  const authState: AuthState = useSelector((store: RootState) => store.auth)
  return authState.username ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  )
}

export default AuthGuard
