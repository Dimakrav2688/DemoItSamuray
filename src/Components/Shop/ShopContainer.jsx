import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getArrayData} from '../../redux/products-Reducer';
import Product from './Product';
import style from './style.module.css'
import SearchForm from './SearchForm'
import {useLocation, useHistory, useParams} from "react-router-dom";


const Shop = () => {

    const productsData = useSelector(state => state.products.productsData)
    const searchData = useSelector(state => state.products.search)
    const categoriesData = useSelector(state => state.products.categories)

    const dispatch = useDispatch()
    //
    // const history = useHistory()
    const location = useLocation()

    const changeUrl = () => {
        debugger;
        window.location.search = '';
        // window.location.pathname = '/'
    }



    const query = location.search.split('=')[1]
    console.log(query)

    //


    const [filteredCategorySelector, setFilteredCategorySelector] = useState("All category")
    const handleCategory = (e) => {
        console.log(e.target.value)
        setFilteredCategorySelector(e.target.value)
    }


    const [filteredArr, setFilteredArr] = useState([])
    console.log(filteredArr, "filteredArr")

    useEffect(() => {
        dispatch(getArrayData())
    }, [])

    useEffect(() => {
        if (filteredCategorySelector && searchData) {
            const filteredByCategory = filteredCategorySelector === "All category" ? productsData : productsData.filter(product => product.bsr_category.includes(filteredCategorySelector))
            setFilteredArr(filteredByCategory.filter(product => product.name.includes(searchData)))
        }else if (query) {
            debugger
            setFilteredArr(productsData.filter(product => product.asin.includes(query)))


        }
        else if (filteredCategorySelector === "All category") {
            setFilteredArr(productsData)
        } else if (filteredCategorySelector && !searchData) {
            setFilteredArr(productsData.filter(product => product.bsr_category.includes(filteredCategorySelector)))
        } else if (searchData && filteredCategorySelector === "All category") {
            // debugger
            setFilteredArr(productsData.filter(product => product.name.includes(searchData)))


        }  else setFilteredArr(productsData.filter(product => product.name.includes(searchData)))
    }, [searchData, filteredCategorySelector, productsData, query])


    return (
        <div>
                < SearchForm/>

                <select onChange={(e) => handleCategory(e)} value={filteredCategorySelector}>
                    <option value="All category"> All category</option>
                    {categoriesData.map(category => <option key={category} value={category}> {category} </option>)}
                </ select>

            { query &&  <button type="button" onClick={changeUrl}  >Go to main page</button> }

                <div className={style.ShopContainer}>
                    {((filteredCategorySelector || searchData || query) ? filteredArr : productsData)
                        .map(product => <Product key={product.asin} product={product}/>)}
                </div>
        </div>
    )
}

export default Shop






