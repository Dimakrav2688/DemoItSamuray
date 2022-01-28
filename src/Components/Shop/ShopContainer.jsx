import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArrayData } from '../../redux/products-Reducer';
import Product from './Product';
import style from './style.module.css'
import FormFound from './FormFound'



const Shop = () => {

    const productsData = useSelector(state => state.products.productsData)
    const searchData = useSelector(state => state.products.search)
    const dispatch = useDispatch()
    const [filteredArr, setFilteredArr] = useState([])
    const [filteredSelector, setFilteredSelector] = useState("All category")
    const category = productsData.map(product => product.bsr_category)
    const filteredCategory = [... new Set(category)]
    const handleCategory = (e) => {
        setFilteredSelector(e.target.value)
    }

    useEffect(() => {
        dispatch(getArrayData())
    }, [])

    useEffect(() => {
        if (filteredSelector && searchData) {
            const filteredByCategory = filteredSelector === "All category" ? productsData : productsData.filter(product => product.bsr_category.includes(filteredSelector))
            setFilteredArr(filteredByCategory.filter(product => product.name.includes(searchData)))
        } else if (filteredSelector === "All category") {
            setFilteredArr(productsData)
        } else if (filteredSelector && !searchData) {
            debugger
            setFilteredArr(productsData.filter(product => product.bsr_category.includes(filteredSelector)))
        } else if (searchData && filteredSelector === "All category") {
            // debugger
            setFilteredArr(productsData.filter(product => product.name.includes(searchData)))
        }
        setFilteredArr(productsData.filter(product => product.name.includes(searchData)))
    }, [searchData, filteredSelector, productsData])



    return (
        <div>
            < FormFound />

            <select onChange={(e) => handleCategory(e)} value={filteredSelector} >
                <option value="All category"> All category</option>
                {filteredCategory.map(category => <option key={category} value={category}> {category} </option>)}
            </ select>



            <div className={style.ShopContainer}>
                {((filteredSelector || searchData) ? filteredArr : productsData)
                    .map(product => <Product key={product.asin} product={product} />)}
            </div>
        </div>

    )
}

export default Shop;






