import React from 'react'
import styles from './styles.module.scss';
import { CustomButton } from '../Button/Button';
import { Typography } from '@mui/material';
import { OldForm } from './OldForm';
import { NewForm } from './NewForm';


export const ReactQueryComponent = () => {



    return (
        <div className={styles.container}>
            <Typography variant='h3'>
                React Query
            </Typography>
            <OldForm />
            <NewForm />
            <CustomButton title="Volver al home" linkTo="/" />
        </div>
    )
}
