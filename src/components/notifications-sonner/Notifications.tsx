import React from 'react'
import { Button, Typography } from '@mui/material'
import { Toaster, toast } from 'sonner'
import styles from './styles.module.scss';
import { CustomButton } from '../Button/Button';

export const Notifications = () => {
    return (
        <div className={styles.container}>
            <Typography variant='h3'>
                Notifications
            </Typography>
            <div>
                <Toaster position="top-right" closeButton />
                <Button variant='outlined' color='secondary' onClick={() => toast('hey, llegué !')}>
                    Muestrame la notificación !
                </Button>
            </div>
            <CustomButton title="Volver al home" linkTo="/" />
        </div>
    )
}
