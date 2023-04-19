import React from 'react'
import { Stack, Typography } from '@mui/material'
import styles from './styles.module.scss';
import { CustomButton } from '../../components/Button/Button';
import { paths } from '../../components/Router/main.routes';

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
                {paths.map((item, index) =>
                    index !== 0 &&
                    (<CustomButton key={index} title={item.id || ""} linkTo={item.path || ""} />)
                )}
            </Stack>
        </div>
    )
}
