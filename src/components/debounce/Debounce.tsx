import React from 'react'
import styles from './styles.module.scss';
import { Typography } from '@mui/material';
import { CustomButton } from '../Button/Button';
export const Debounce = () => {
  return (
    <div className={styles.container}>
      <Typography variant='h3'>
        Debounce
      </Typography>
      <div>

      </div>
      <CustomButton title="Volver al home" linkTo="/" />
    </div>
  )
}
