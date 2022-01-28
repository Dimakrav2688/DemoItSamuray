


let Product = ({ product }) => {
    return (

        <div >
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

        </ div>
    )


}

export default Product;

