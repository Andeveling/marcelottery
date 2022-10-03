import { Box } from '@mui/material'

interface PropsLayout {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: PropsLayout) {
  return (
    <Box component='main' sx={{ p: 3 }}>
      {children}
    </Box>
  )
}
