import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const UserForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status])

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

                <button type='submit'>Submit</button>
            </Form>

            {users.map(user => (
                <div className='user-list' key={Date.now()}>
                    <p>Name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>Terms of Service: {user.tos.toString()}</p>
                </div>
            ))}
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
            name: Yup.string().required("Please enter your name"),
            email: Yup.string().email().required("Please enter your email"),
            password: Yup.string().required("Plese enter a password"),
        }),

        handleSubmit(values, { setStatus, resetForm }) {
            axios.post('https://reqres.in/api/users', values)
                .then(response => {
                    setStatus(response.data);
                    console.log(response.data);
                    resetForm();
                })
                .catch(err => {
                    console.log("OOPS something went wrong", err);
                });
        }
    })(UserForm);
export default FormikUserForm;