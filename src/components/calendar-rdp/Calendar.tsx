import React from 'react'
import styles from './styles.module.scss';
import { Typography } from '@mui/material';
import { CustomButton } from '../Button/Button';

import { DayPicker, useInput } from 'react-day-picker';

export const Calendar = () => {
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    fromYear: 2021,
    toYear: 2023,
    format: 'PP',
    required: true
  });

  const footer = (
    <form>
      <label>
        <input
          {...inputProps}
          className="input-reset pa2 ma2 bg-white black ba"
        />
      </label>
    </form>
  );
  return (
    <div className={styles.container}>
      <Typography variant='h3'>
        Calendar
      </Typography>
      <div style={{ backgroundColor: 'white', color: 'black' }}>
      <DayPicker {...dayPickerProps} footer={footer} />
      </div>
      <CustomButton title="Volver al home" linkTo="/" />
    </div>
  )
}
