import * as yup from 'yup'
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {actions} from '../../redux/products-Reducer';
import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import style from './style.module.css'
import Button from "@mui/material/Button";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useTranslation} from "react-i18next";
import i18n from '../../i18n'

const SearchForm = ({setFilteredCategorySelector, query, changeUrl, filteredCategorySelector, categoriesData}) => {
    const dispatch = useDispatch()
    const [skipFirstRender, setSkipFirstRender] = useState(false)

    const validationSchema = yup.object().shape({
        search: yup.string().min(3, 'Write 3 characters')
    })

    const formik = useFormik({
        initialValues: {search: ''},
        onSubmit: (values) => {
            dispatch(actions.setSearch(values.search))
        },
        validationSchema
    })

    const {values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty} = formik


    useEffect(() => {
        if (skipFirstRender) {
            handleSubmit()
        } else {
            setSkipFirstRender(true)
        }
    }, [formik.values])
////////


    const handleCategory = (e) => {
        setFilteredCategorySelector(e.target.value)

    }
    const searchStyle = {
        display: 'flex',
        transitionDuration: '0.3s',
        justifyContent: 'space-between'
    }
    const selectStyle = {
        width: '200px',

    }
    const buttonStyle = {
        height: "100%",
        transitionDuration: '0.3s',
    }

    const {t} = useTranslation();
    return (
        <div className={style.searchStyle}>
            <div>
                <form onSubmit={formik.handleSubmit}>

                    <TextField type='text' label='Search product' name='search' onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.search}/>

                    {touched.search && errors.search && <p>{errors.search}</p>}

                    <Button
                        color={"primary"}
                        variant={"contained"}
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type='submit'
                    >
                        {t("Search_product")}
                    </Button>

                </form>
            </div>

            <div>
                <FormControl style={selectStyle} sx={''}>
                    <InputLabel id='categories'>All category </InputLabel>
                    <Select
                        labelId='categories'
                        id={filteredCategorySelector}
                        onChange={(e) => handleCategory(e)}
                    >
                        <MenuItem value={"All category"}>All category</MenuItem>
                        {categoriesData.map(category => <MenuItem key={category}
                                                                  value={category}> {category} </MenuItem>)}
                    </Select>
                </FormControl>
                {query && <Button style={buttonStyle} variant='contained' type="button" onClick={changeUrl}>Go to main
                    page</Button>}
            </div>

        </div>
    )
}
//   {
// <select onChange={(e) => handleCategory(e)} value={filteredCategorySelector}>
//       <option value="All category"> All category</option>
//    {categoriesData.map(category => <option key={category} value={category}> {category} </option>)}
// </ select>
//   }


export default SearchForm;


