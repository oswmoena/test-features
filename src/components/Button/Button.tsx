import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface IButton {
    title: string;
    linkTo: string; 
}
export const CustomButton = ({ title, linkTo }: IButton) => {
    return (

        <Link to={linkTo} children={
            <Button variant='contained'>
                {title}
            </Button>
        } />
    )
}
