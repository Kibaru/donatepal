import React, { Component } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";

class Donate extends Component {
    handleSubmit = (values) => {
      const { history } = this.props;

      axios.post('/api/donate', values)
      .then(response => {
        // redirect to the homepage
        console.log(response.data);
        
        history.push('/')
      })
      .catch(error => {
        console.log(error); 
      })
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={{ 
                    name: '',
                    phone: '',
                    email: '',
                    amount: '',
                    period: '',
                    }}
                    onSubmit={this.handleSubmit}
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required("Your name is required.")
                            .min(2, "Name must be atleast be 2 characters."),
                        phone: Yup.string()
                            .required("Phone number is required.")
                            .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'Must be a valid phone number'),
                        email: Yup.string()
                            .required("Email address is required.")
                            .email("Provide a valid email address"),
                        amount: Yup.string()
                            .required("Donatiion amount is required.")
                            .matches(/^[0-9]*$/, 'Must be a number'),
                        period: Yup.string()
                            .required("Please a duration to make your donation.")
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
                        <div className='container py-4'>
                            <div className='row justify-content-center'>
                                <div className='col-md-6'>
                                    <div className='card'>
                                    <h4 className='card-header'>I will appreciate your donations.</h4>
                                    <div className='card-body'>
                                        <form onSubmit={handleSubmit}>
                                                <div className='form-group'>
                                                    <label htmlFor='name'>Name</label>
                                                    <input
                                                    id='name'
                                                    type='text'
                                                    name='name'
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${errors.name && touched.name && 'is-invalid'}`}
                                                    />
                                                    {errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
                                                </div>
                            
                                                <div className='form-group'>
                                                    <label htmlFor='phone'>Phone Number</label>
                                                    <input
                                                    id='phone'
                                                    type='text'
                                                    name='phone'
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${errors.phone && touched.phone && 'is-invalid'}`}
                                                    />
                                                    {errors.phone && touched.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                                </div>
                            
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
                                                    <label htmlFor='amount'>Amount</label>
                                                    <input
                                                    id='amount'
                                                    name='amount'
                                                    value={values.amount}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${errors.amount && touched.amount && 'is-invalid'}`}
                                                    />
                                                    {errors.amount && touched.amount && <div className="invalid-feedback">{errors.amount}</div>}
                                                </div>
                            
                                                <div className='form-group'>
                                                    <label htmlFor='period'>Duration to pay</label>
                                                    <select id='period'
                                                     name="period" 
                                                     value={values.period}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${errors.period && touched.period && 'is-invalid'}`}
                                                     >
                                                        <option>Select your payment duration</option>
                                                        <option value="One-off">One-off</option>
                                                        <option value="Monthly">Monthly</option>
                                                        <option value="Yearly">Yearly</option> 
                                                    </select>
                                                    {errors.period && touched.period && <div className="invalid-feedback">{errors.period}</div>}
                                                </div>

                                                <button className='btn btn-bg btn-primary float-right' type="submit" disabled={isSubmitting}>Donate</button>
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

export default Donate