import * as yup from 'yup'
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {actions} from '../../redux/products-Reducer';
import React, {useEffect, useState} from 'react';


const SearchForm = () => {
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

    return (
        <div>

            <input type='text' placeholder='Search' name='search' onChange={handleChange} onBlur={handleBlur}
                   values={values.search}/>
            {touched.search && errors.search && <p>{errors.search}</p>}

            <button
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type='submit'
            >
                search
            </button>

        </div>
    )
}




export default SearchForm;