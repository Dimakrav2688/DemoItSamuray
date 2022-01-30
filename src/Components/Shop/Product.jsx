import React from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';


let Product = ({ product }) => {
    return (

        <div>
            <Link to={{ search: `?search=${product.asin}` }}>
                <div>
                    <img src={product?.img} alt={'pic'} />
                </div>
                <div>
                    {product.name}
                </div>
                <div>
                   Prise: {product.price}
                </div>
                <div>
                    {product.asin}
                </div>
               
                <div>
                    {product.bsr_category}
                </div>
                <div>
                    {product.link}
                </div>
                
            </Link>
        </ div>
    )


}

export default Product;


{/* <Grid container spacing={3}>

<Grid item xs={12} md={4}>

            <Card sx= {{height: '100'}}>

                <CardMedia
                    image={product.img}
                    component='img'
                    alt={product.name}
                    title={'pic'}
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Link to={{ search: `?search=${product.asin}` }}>
                        <Typography variant='h6' component='h3'>
                            {product.name}
                        </Typography>
                    </Link>
                    <Typography variant='body1'>
                        Prise: {product.price}
                    </Typography >
                    {/* <div>
                            {product.asin}
                        </div>
                        
                        <div>
                            {product.bsr_category}
                        </div>
                        <div>
                            {product.link}
                        </div> 

                </CardContent>
                <CardActions>
                    <Button variant='contained'>
                        Buy
                    </Button>
                </CardActions>
            </Card>


        </ Grid>  
    */}