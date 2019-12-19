import React from 'react';
import {withFormik, Form, Field} from 'formik';

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
            name: '',
            email: '',
            password: '',
            tos: false
        }
    }
})(UserForm);
export default FormikUserForm;