import React from 'react'
import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';


let Product = ({ product }) => {
    return (

        <div >
            <Link  to={{search: `?search=${product.asin}`}}>
            <div>
                <img src={product?.img} alt={'pic'} />
            </div>
            <div>
                {product.asin}
            </div>
            <div>
                {product.price}
            </div>
            <div>
                {product.bsr_category}
            </div>
            <div>
                {product.link}
            </div>
            <div>
                {product.name}
            </div>
        </Link>
        </ div>
    )


}

export default Product;

