import React, { useState } from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material';

interface ICustomCard {
    name: string;
    hidden: string;
    desc: string;
}
export const CustomCard = ({ name, hidden, desc }: ICustomCard) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    return (
        <div >
            <Card variant="outlined" sx={{ backgroundColor: '#110B1A', color: 'white', height: '200px', mb: 4, textTransform: 'uppercase' }}>
                <CardContent sx={{ lineHeight: '70px' }}>
                    <Button data-testid="show-btn" variant='contained' onClick={() => setIsHidden(!isHidden)}>
                        SHOW
                    </Button>
                    <Typography variant='h4' gutterBottom>
                        {hidden}
                    </Typography>
                    {!isHidden &&
                        <Typography variant="body2">
                            {desc}
                        </Typography>
                    }
                </CardContent>
            </Card>
        </div>
    )
}
