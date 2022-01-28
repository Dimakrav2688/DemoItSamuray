import axios from 'axios'
const PRODUCTS = "/products"

const instance = axios.create({
    baseURL: 'https://61f10fa1072f86001749efdc.mockapi.io/api/products'
})


const productsAPI = {
    getProducts() {
        const result = instance.get(PRODUCTS).then(res=> res.data)
        return result
    }
    
}

export default productsAPI; 

