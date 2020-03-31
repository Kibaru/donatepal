import React, { Component } from 'react';
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

class Login extends Component {
    handleSubmit = (values) => {
        const { history } = this.props;

        axios.post('/api/auth/login', values)
            .then(response => {
                const token = response.data.access_token
                const user = response.data.user
                const admin = Object.assign({}, user, {token} );
                // console.log(admin );
                localStorage.setItem('admin', JSON.stringify({
                    admin:admin
                }))
                history.push("/dashboard");
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={{ email: "", password: ""}}
                    onSubmit={this.handleSubmit}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email("Provide a valid email address")
                            .required("Email address is required."),
                        password: Yup.string()
                                .required("Password Field is required.")
                                .min(6, "Password should be atleast be 6 characters.")
                    })} 
                    render={({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <div className="container pt-4">
                            <div className='row justify-content-center'>
                                <div className='col-md-6'>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3>Admin Login</h3>
                                        </div>
                                        <div className="card-body">
                                            <form className="form-horizontal" onSubmit={handleSubmit}>
                                                <div className='form-group'>
                                                    <label htmlFor='email'>Email Address</label>
                                                    <input
                                                    id='email'
                                                    type='email'
                                                    name='email'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                                                    />
                                                    {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
                                                </div>

                                                <div className='form-group'>
                                                    <label htmlFor='password'>Password</label>
                                                    <input
                                                    id='password'
                                                    type='password'
                                                    name='password'
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${errors.password && touched.password && 'is-invalid'}`}
                                                    />
                                                    {errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}
                                                </div>

                                                <button className='btn btn-bg btn-primary float-right' type="submit" disabled={isSubmitting}>Login</button>

                                                <div className="form-group">
                                                    <a className="btn btn-link form-control" href="#">
                                                        Forgot Your Password?
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>
        )
    }
}

export default Login