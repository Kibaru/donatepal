import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

// PESAPAL_CONSUMER_KEY=q8RuwryvDwDuBmRez3aOexJxI6QIEJg3
// PESAPAL_CONSUMER_SECRET=J+Oyes5PEqVTHXdSAJvVqgqjXsA=


// {email: "admin@gmail.com", password: "123456"}
// {email: "admin@gmail.com", password: "123456"}



// render={({
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     isSubmitting
// }) => (