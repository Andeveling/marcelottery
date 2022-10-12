import CloseIcon from '@mui/icons-material/Close'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { modalStyle as style } from './modalStyle'

interface ModalProps {
  title: string
  description: string
  textButton: string
  icon: JSX.Element
  form: JSX.Element
}

export default function FormModal({ textButton, icon, form, title, description }: ModalProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Box>
      <Button onClick={handleOpen} startIcon={icon}>
        {textButton}
      </Button>
      <Modal
        closeAfterTransition
        sx={{ overflow: 'scroll' }}
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Grid display={'flex'} justifyContent={'end'} maxWidth={800} container>
            <Button endIcon={<CloseIcon />} color='error' onClick={handleClose} size='large'>
              close
            </Button>
          </Grid>
          <Grid>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              {title}
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              {description}
            </Typography>
            <Grid>{form}</Grid>
          </Grid>
          <Grid display={'flex'} justifyContent={'end'} maxWidth={800} container>
            <Button
              fullWidth
              endIcon={<CloseIcon />}
              variant='outlined'
              color='error'
              onClick={handleClose}
              size='large'>
              close
            </Button>
          </Grid>
        </Box>
      </Modal>
    </Box>
  )
}
