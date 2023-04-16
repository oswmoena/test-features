import { Button, Typography } from '@mui/material';
import React, { useEffect, useReducer, useState } from 'react'

const generateTestFromApi = async (): Promise<number> => {
    const res = await fetch("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new");
    const numberString = await res.text();
    // throw new Error('aaaaaaaaaaaaaaa');
    return +numberString;
}
export const OldForm = () => {
    const [number, setNumber] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();
    const [key, forceRefresh] = useReducer((x) => x + 1, 0)
    useEffect(() => {
        setIsLoading(true);
        generateTestFromApi()
            .then(num => setNumber(num))
            .catch((err) => setError(err.message));
    }, [key])

    useEffect(() => {
        if (number) setIsLoading(false)
    }, [number])

    return (
        <div>
            <Typography variant='h5'>
                Old Form
            </Typography>
            {isLoading
                ? (<Typography variant='body1'>
                    Cargando...
                </Typography>)
                : (<Typography variant='body1'>
                    Numero Aleatorio: {number}
                </Typography>)
            }
            {!isLoading && error && <Typography variant='body1'>
                {error}
            </Typography>}
            <Button variant='outlined' color='secondary' onClick={forceRefresh} disabled={isLoading}>
                {isLoading ? '... ' : 'Refreshh'}
            </Button>
        </div>
    )
}
