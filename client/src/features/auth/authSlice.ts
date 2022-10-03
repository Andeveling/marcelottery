import type { UserResponseI } from '@/app/services/auth/auth'
import type { RootState } from '@/app/store'
import { clearLocalStorage, persistLocalStorage } from '@/utilities/PersistLocalStorage'
import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  id: string | number | null
  username: UserResponseI['username'] | null
  auth: boolean | null
  token: string | null
}

const EmptyAuthState: AuthState = {
  id: null,
  username: null,
  auth: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth') as string) : EmptyAuthState,
  reducers: {
    setCredentials: (_state, action) => {
      persistLocalStorage<AuthState>(Key, action.payload)
      return action.payload
    },
    updateCredentials: (state, action) => {
      const result = { ...state, ...action.payload }
      persistLocalStorage<AuthState>(Key, result)
      return result
    },
    resetCredentials: () => {
      clearLocalStorage(Key)
      return EmptyAuthState
    },
  },
})

export const { setCredentials, updateCredentials, resetCredentials } = authSlice.actions
const Key = 'auth'

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth
