import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ values, errors, touched }) => {
    return (
        <div className='User-Form'>
            <Form>
                <label htmlFor='name'>Name</label>
                <Field id='name' type='text' name='name' />
                {touched.name && errors.name && (<p className='errors'>{errors.name}</p>)}
                
                <label htmlFor='email'>Email</label>
                <Field id='email' type='email' name='email' />
                {touched.email && errors.email && (<p className='errors'>{errors.email}</p>)}
                
                <label htmlFor='password'>Password</label>
                <Field id='password' type='password' name='password' />
                {touched.password && errors.password && (<p className='errors'>{errors.password}</p>)}
                
                <label htmlFor='tos'>Check to accept the Terms of Service</label>
                <Field id='tos' type='checkbox' name='tos' checked={values.tos} />
                {touched.tos && errors.tos && (<p className='errors'>{errors.tos}</p>)}
                
                <button type='submit'>Submit</button>
            </Form>
        </div>
    );
}

const FormikUserForm = withFormik
    ({
        mapPropsToValues({ name, email, password, tos }) {
            return {
                name: name || '',
                email: email || '',
                password: password || '',
                tos: tos || false
            };
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            tos: Yup.boolean()
        })
    })(UserForm);
export default FormikUserForm;