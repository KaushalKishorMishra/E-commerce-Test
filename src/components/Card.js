import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import blackTshirt from "../assets/images/blank-black-t-shirt-hanger-isolated-white-background.jpg"
import { ButtonGroup } from '@mui/material';

export default function MCard(props) {
    return (
        <>
            <Card sx={{
                minWidth: 300, backgroundColor: "black"
            }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={blackTshirt}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="white">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ButtonGroup>
                        <Button size="small" variant='contained' sx={{
                            backgroundColor: "white", color: "black", outline: "1px solid white", "&:hover": { backgroundColor: "black", color: "white" }
                        }}>Buy With Token</Button>
                        <Button size="small" sx={{ outline: "1px solid white", color: "white", "&:hover": { backgroundColor: "white", color: "black" } }}>Buy With Cash</Button>
                    </ButtonGroup>
                </CardActions>
            </Card>
        </>
    );
}
