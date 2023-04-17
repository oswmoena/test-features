import React from 'react'
import { Stack, Typography } from '@mui/material'
import styles from './styles.module.scss';
import { CustomButton } from '../../components/Button/Button';

export const Home = () => {
    return (
        <div className={styles.container}>
            <Typography variant='h2'>
                Home
            </Typography>
            <Typography variant='h4'>
                Choose your element to test:
            </Typography>
            <Stack spacing={3} direction="row">
                <CustomButton title='Calendar' linkTo="/calendar" />
                <CustomButton title='Debounce' linkTo="/debounce" />
                <CustomButton title='Notificación' linkTo="/notifications" />
                <CustomButton title='React Query' linkTo="/react-query" />
                <CustomButton title='Kempo Cards' linkTo="/kempo-cards" />
            </Stack>
        </div>
    )
}
