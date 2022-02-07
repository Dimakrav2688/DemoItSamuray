// @ts-ignore t
import React from 'react'
// @ts-ignore
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "@mui/material/Button";


type IProps = {
    product: any
    }

let Product: React.FC<IProps> = ({ product }: IProps) => {

    const cardStyle = {
        display: 'flex',
        width: '30vw',
        transitionDuration: '0.3s',
        height: '35vw',
        objectFit: "contain"
    }

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: '500px', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                    <CardMedia
                        image={product.img}
                        component='img'
                        alt={product.name}
                        title={'pic'}
                        sx={{ height: "194px", objectFit: "contain" }}
                    />
                    <CardContent>
                        <Link to={'/' + product.name}>
                            <Typography component='h6'>
                                {product.name}
                            </Typography>
                        </Link>
                        <Typography variant='body1'>
                            Prise: {product.price}$
                        </Typography>
                        <div>
                            {product.asin}
                        </div>

                        <div>
                            {product.bsr_category}
                        </div>


                    </CardContent>
                </div>

                <CardActions>
                    <Button variant='contained'>
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </ Grid>
    )


}
export default Product;


// <div>
//     <Link to={{ search: `?search=${product.asin}` }}>
//         <div>
//             <img src={product?.img} alt={'pic'} />
//         </div>
//         <div>
//             {product.name}
//         </div>
//         <div>
//            Prise: {product.price}
//         </div>
//         <div>
//             {product.asin}
//         </div>
//
//         <div>
//             {product.bsr_category}
//         </div>
//         <div>
//             {product.link}
//         </div>
//
//     </Link>
// </ div>