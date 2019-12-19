import React from 'react';
import {withFormik} from 'formik';

const UserForm = ({
})

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