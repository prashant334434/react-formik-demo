import { Formik,Form,Field ,ErrorMessage} from 'formik'
import React from 'react'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments:'',
    address:'',
    social:{
        facebook:'',
        tweeter:''
    },
    phone:['','']
}
const onSubmit = values => {
    console.log('form data ', values);
}

const validationSchema =Yup.object({ 
    name:Yup.string().required('required'),
    email:Yup.string().email('Invalid email').required('required'),
    channel:Yup.string().required('required'),
    comments:Yup.string().required('required'),
})

function YoutubeForm() {
    
    
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' 
                    />
                    <ErrorMessage name='name'  component={TextError}/>
                </div>
                <br />
                <div className='form-control'>
                    <label htmlFor='email'>email</label>
                    <Field type='email' id='email' name='email'  />
                    <ErrorMessage name='email' component={TextError}/>
                </div>
                <br />
                <div className='form-control'>
                    <label htmlFor='channel'>channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name='channel' component={TextError}/>
                </div>
                <br />
                <div className='form-control'>
                    <label htmlFor='comments'>comments</label>
                    <Field as='textarea' id='comments' name='comments' />
                    <ErrorMessage name='comments'>
                        {errormsg => <div className='error'> {errormsg}</div>}
                    </ErrorMessage>
                </div>
                <div className='form-control'>
                    <label htmlFor='address'>
                        address
                    </label>
                    <Field name='address'>
                        {
                            props =>{
                                const {field,form,meta} = props;
                                console.log('render',props)
                                return(
                                    <div>
                                        <input type='text' id='address' name='address' {...field}/>
                                        {meta.touched && meta.error ? <div>{meta.error}</div>:null}
                                    </div>
                                )
                            }
                        }
                    </Field>
                </div>
                <div className='form-control'>
                    <label htmlFor='facebook'> Facebook</label>
                    <Field type='text' id='facebook' name='social.facebook'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='tweeter'> tweeter</label>
                    <Field type='text' id='tweeter' name='social.tweeter'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='parimary'> parimary no.</label>
                    <Field type='text' id='parimary' name='phone[0]'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='secondary'> secondary</label>
                    <Field type='text' id='secondary' name='phone[1]'/>
                </div>
                <button type='submit'> submit</button>

            </Form>
        </Formik>
    )
}

export default YoutubeForm