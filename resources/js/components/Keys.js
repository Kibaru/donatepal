import React, { Component } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";

class Keys extends Component {
    handleSubmit = (values) => {
        const { history } = this.props;

        axios.post('/api/consumer', values)
        .then(response => {
            // redirect to donation page
            console.log(response.data);
            this.props.history.push('/')
        })
        .catch(error => {
            console.log(error);            
        })
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={{ key: '', secret:'',}}
                    onSubmit={this.handleSubmit}
                    validationSchema={Yup.object().shape({
                        key: Yup.string()
                            .required("Consumer key is required.")
                            .min(10, "Consumer key must be atleast be 10 characters."),
                        secret: Yup.string()
                                .required("Consumer secret is required.")
                                .min(10, "Consumer secret must be atleast be 10 characters.")
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
                        <div className="container mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-6">           
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="text-center">Change your pesapal consumer key and secret</h3>
                                        </div>
                                        <div className="card-body">
                                            <form className="form-horizontal" onSubmit={handleSubmit}>
                                                <div className='form-group'>
                                                    <label htmlFor='key'>Pesapal consumer key</label>
                                                    <input
                                                    id='key'
                                                    type='text'
                                                    name='key'
                                                    value={values.key}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${errors.key && touched.key && 'is-invalid'}`}
                                                    />
                                                    {errors.key && touched.key && <div className="invalid-feedback">{errors.key}</div>}
                                                </div>

                                                <div className='form-group'>
                                                    <label htmlFor='secret'>Pesapal consumer secret</label>
                                                    <input
                                                    id='secret'
                                                    type='text'
                                                    name='secret'
                                                    value={values.secret}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${errors.secret && touched.secret && 'is-invalid'}`}
                                                    />
                                                    {errors.secret && touched.secret && <div className="invalid-feedback">{errors.secret}</div>}
                                                </div>

                                                <button className='btn btn-bg btn-primary float-right' type="submit" disabled={isSubmitting}>Submit</button>
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

export default Keys