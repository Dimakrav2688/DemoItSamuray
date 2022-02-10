// @ts-ignore
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { actions, ProductsDataType } from '../../redux/products-Reducer.ts';
// @ts-ignore
import Product from './Product.tsx';
// @ts-ignore
import style from './style.module.css'
// @ts-ignore
import SearchForm from './SearchForm.tsx'
// @ts-ignore
import { Grid } from "@mui/material";
import { AppStateType } from "../../redux/redux-store";
// @ts-ignore
import { StringParam, useQueryParams } from "use-query-params";
import { useFormik } from "formik";
import * as yup from "yup";
import { getDataAction } from "../../redux/actionTypes";

interface MyFormValues {
    product: string;
    category: string;
}
const validationSchema = yup.object().shape({
    product: yup.string().min(3, 'Write 3 characters')
})


const Shop = () => {
    const [query, setQuery] = useQueryParams({
        product: StringParam,
        category: StringParam,
    });

    const productsData = useSelector((state: AppStateType) => state.products.productsData)
    const categoriesData = useSelector((state: AppStateType) => state.products.categories)
    const dispatch = useDispatch()

    const changeUrl = () => {
        window.location.search = '';
    }

    const formik = useFormik({
        initialValues: { product: query.product || '', category: query.category || 'All category' },
        onSubmit: (values: MyFormValues) => {
            dispatch(actions.setSearch(values.product))
        },
        validationSchema
    })

    const [filteredArr, setFilteredArr] = useState([])

    useEffect(() => {
        dispatch(getDataAction())
    }, [])

    useEffect(() => {
        const includeCategory: boolean = formik.values.category === "All category"
        const updatedProducts = productsData.filter((product: ProductsDataType) =>
            product.name.toLowerCase().includes(formik.values.product.toLowerCase()) && (includeCategory ? true : product.bsr_category.includes(formik.values.category)))

        setFilteredArr(updatedProducts)
    }, [ formik.values, productsData])
    // formik.values, productsData,
    return (
        <div className={style.mainStyleContainer}>
            <div className={style.searchInput}>
                <SearchForm  setQuery={setQuery} formik={formik} changeUrl={changeUrl}
                    categoriesData={categoriesData}  />
            </div>
            <div className={style.product}>
                <Grid data-testid="product-search" container spacing={3}>
                    {((formik.values.category || formik.values.product) ? filteredArr : productsData)
                        .map((product: ProductsDataType) =>
                            <Product key={product.asin} product={product} setQuery={setQuery}
                            />)}
                </Grid>
            </div>
        </div>
    )
}

export default Shop






