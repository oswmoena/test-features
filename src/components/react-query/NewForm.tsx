import React from 'react'
import { Button, Typography } from '@mui/material';
import { useRandom } from '../../hooks/useRandom';


export const NewForm = () => {
  const query = useRandom();
  return (
    <div>
      <Typography variant='h5'>
        New Form
      </Typography>
      {query.isFetching
        ? (<Typography variant='body1'>
          Cargando...
        </Typography>)
        : (<Typography variant='body1'>
          Numero Aleatorio: {query.data}
        </Typography>)
      }
      {!query.isLoading && query.isError && (<h3> {`${query.error}`} </h3>)}

      <Button variant='outlined' color='secondary' onClick={() => query.refetch() } disabled={query.isFetching}>
        {query.isFetching ? '... ' : 'Refreshh'}
      </Button>
    </div>
  )
}
