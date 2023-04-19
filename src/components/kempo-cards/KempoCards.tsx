import React, { useEffect, useReducer, useState } from 'react'
import styles from "./styles.module.scss";
import { Button, Typography } from '@mui/material';
import { ICards, cards } from './constants';
import { CustomButton } from '../Button/Button';
import { CustomCard } from './CustomCard';

export const KempoCards = () => {
    const [item, setItem] = useState<ICards | null>(null)
    const [key, forceRefresh] = useReducer((x) => x + 1, 0)
    const getRandomItem = (kempoCards: ICards[]) => {
        // get random index value
        const randomIndex = Math.floor(Math.random() * kempoCards.length);
        // get random item
        const item = kempoCards[randomIndex];
        return item;
    }
    // const item = getRandomItem(cards);

    useEffect(() => {
        setItem(getRandomItem(cards));
    }, [key])

    return (
        <div className={styles.container}>
            <Typography variant='h3'>
                Kempo Cards
            </Typography>
            <Typography variant='body2' className={styles.creed}>
                “Vengo hacia ti con las manos vacías, no tengo armas, pero si soy obligado a defenderme,
                a defender mis principios o mi honor, si es cuestión de vida o muerte, del derecho o la injusticia...
                entonces acá están mis armas, las manos vacías”
            </Typography>
            <div className={styles.cardContainer}>
                <Button data-testid="btn-refresh" variant='outlined' sx={{ width: '100%' }} onClick={forceRefresh}>Otro!</Button>
                <div>
                    {item && <CustomCard name={item.name} hidden={item.hidden} desc={item.desc} key={item.id} />}
                </div>
            </div>
            <CustomButton title="Volver al home" linkTo="/" />
        </div>
    )
}
