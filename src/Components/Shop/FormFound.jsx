import * as yup from 'yup'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/products-Reducer';
import { useEffect, useState } from 'react';



const FormFound = () => {
  const dispatch = useDispatch()
  const [skipFirstRender, setSkipFirstRender] = useState(false)

  const validationSchema = yup.object().shape({
    search: yup.string().min(3, 'Write 3 characters')
  })

  const formik = useFormik({
    initialValues: { search: '' },
    onSubmit: (values) => {
      debugger
      dispatch(actions.setSearch(values.search))
    }, 
    validationSchema
  })

  const { values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty } = formik

  const onChange = (e) => {
    //  handleChange(e)
    // !e.target.value && formik.handleSubmit()
   
  }

  useEffect(() => {
    if (skipFirstRender) {
      debugger
      handleSubmit()
    } else {
      setSkipFirstRender(true)
    }
  }, [formik.values])
o
  return (
    <div>
        <input type='text' placeholder='Search' name='search' onChange={handleChange} onBlur={handleBlur}
          values={values.search} />
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


const Furdfd = (obj,str) => {
const {name} = obj
return ''
}
const obj = {name:'hjhj'}
const d = Furdfd(obj,'khgyf')

export default FormFound