import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getArrayData} from '../../redux/products-Reducer';
import Product from './Product';
import style from './style.module.css'
import SearchForm from './SearchForm'
import {useLocation} from "react-router-dom";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";


const Shop = () => {

    const productsData = useSelector(state => state.products.productsData)
    const searchData = useSelector(state => state.products.search)
    const categoriesData = useSelector(state => state.products.categories)

    const dispatch = useDispatch()


    const location = useLocation()

    const changeUrl = () => {
        window.location.search = '';
    }


    const query = location.search.split('=')[1]
    console.log(query)


    const [filteredCategorySelector, setFilteredCategorySelector] = useState("All category")
    // const handleCategory = (e) => {
    //
    //     setFilteredCategorySelector(e.target.value)
    // }
    const [filteredArr, setFilteredArr] = useState([])


    useEffect(() => {
        dispatch(getArrayData())
    }, [])

    useEffect(() => {
        if (filteredCategorySelector && searchData) {
            const filteredByCategory = filteredCategorySelector === "All category" ? productsData : productsData.filter(product => product.bsr_category.includes(filteredCategorySelector))
            setFilteredArr(filteredByCategory.filter(product => product.name.includes(searchData)))
        } else if (query) {
            setFilteredArr(productsData.filter(product => product.asin.includes(query)))
        } else if (filteredCategorySelector === "All category") {
            setFilteredArr(productsData)
        } else if (filteredCategorySelector && !searchData) {
            setFilteredArr(productsData.filter(product => product.bsr_category.includes(filteredCategorySelector)))
        } else if (searchData && filteredCategorySelector === "All category") {
            setFilteredArr(productsData.filter(product => product.name.includes(searchData)))
        } else setFilteredArr(productsData.filter(product => product.name.includes(searchData)))
    }, [searchData, filteredCategorySelector, productsData, query])


    return (
        <div className={style.mainStyleContainer}>
            <div className={style.searchInput}>
                < SearchForm query={query} changeUrl={changeUrl} setFilteredCategorySelector={setFilteredCategorySelector}
                             filteredCategorySelector={filteredCategorySelector}
                             value={filteredCategorySelector}
                             categoriesData={categoriesData}/>
            </div>
            <div className={style.product}>
                <Grid container spacing={3}>
                    {((filteredCategorySelector || searchData || query) ? filteredArr : productsData)
                        .map(product => <Product key={product.asin} product={product}/>)}
                </Grid>
            </div>
        </div>
    )
}

export default Shop






