import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}
const onSubmit = values => {
    console.log('form data ', values);
}
const validate = values => {
    let errors = {}
    if (!values.name) {
        errors.name = 'this field is required'
    }
    if (!errors.email) {
        errors.email = 'this field is required'
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if (!errors.channel) {
        errors.channel = 'required'
    }
    return errors
}
const validationSchema =Yup.object({ 
    name:Yup.string().required('required'),
    email:Yup.string().email('Invalid email').required('required'),
    channel:Yup.string().required('required'),

})

function OldYoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })
    // console.log('form errors', formik.errors);
    // console.log('formik values', formik.values);
    console.log('visited field', formik.touched);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>
                <br />
                <div className='form-control'>
                    <label htmlFor='email'>email</label>
                    <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}  onBlur={formik.handleBlur}/>
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>
                <br />
                <div className='form-control'>
                    <label htmlFor='channel'>channel</label>
                    <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}  onBlur={formik.handleBlur}/>
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>
                <br />
                <button type='submit'> submit</button>

            </form>
        </div>
    )
}

export default  OldYoutubeForm()
