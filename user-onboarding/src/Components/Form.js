import React from 'react';
import {withFormik, Form, Field, yupToFormErrors} from 'formik';
import * as Yup from 'yup';

const UserForm = ({values, handleChange}) =>
{
    return(
        <div className='User-Form'>
            <Form>
                <label htmlFor='name'>Name</label>
                <Field id='name' type='text' name='name'/>

                <label htmlFor='email'>Email</label>
                <Field id='email' type='email' name='email'/>

                <label htmlFor='password'>Password</label>
                <Field id='password' type='password' name='password'/>

                <label htmlFor='tos'>Check to accept the Terms of Service</label>
                <Field id='tos' type='checkbox' name='tos' checked={values.tos}/>

                <button type='submit'>Submit</button>
            </Form>
        </div>
    );
}

const FormikUserForm = withFormik
({
    mapPropsToValues({name, email, password, tos})
    {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string.email().required(),
        password: Yup.string.required(),
        tos: Yup.boolean()
    })
})(UserForm);
export default FormikUserForm;