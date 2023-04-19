import React from 'react'
import { CustomButton } from '../Button/Button'
import { Typography } from '@mui/material'
import styles from './styles.module.scss';

export const Pokemon = () => {
  return (
    <div className={styles.container}>
      <Typography variant='h3'>
        Pokemon API
      </Typography>
      
      <CustomButton title="Volver al home" linkTo="/" />
    </div>
  )
}
