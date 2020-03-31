import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            donors: [],
        }
    }

    componentDidMount(){
        let store=JSON.parse(localStorage.getItem('admin'));
        this.setState({
            name:store.admin.name,
            email:store.admin.email,
        })

        axios.get('/api/success')
            .then(response => { 
                this.setState({donors:response.data.donations})
                // console.log(response.data.donations);
            })
            .catch(error => {
                console.log(error);            
            })

    }

    render(){

        return(
            <div className="container">
                <div className="jumbotron mx-auto">
                    <div className="col-sm-5">
                        <h1 className="text-center">Admin Profile</h1>
                        <table className="table col-md-4 mx-auto">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{this.state.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Donors</h3>
                                <div className="pull-right">
                                    <span className="clickable filter" data-toggle="tooltip" title="" data-container="body" data-original-title="Toggle table filter">
                                        <i className="glyphicon glyphicon-filter"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="panel-body" style={{display: 'block'}}>
                                <input type="text" className="form-control" id="dev-table-filter" data-action="filter" data-filters="#dev-table" placeholder="Filter Donors"/>
                            </div>
                            <table className="table table-hover" id="dev-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.donors.map(donor =>(
                                <tr key={donor.id}>
                                    <td >{donor.id}</td>
                                    <td>{donor.name}</td>
                                    <td>{donor.email}</td>
                                    <td>{donor.phone}</td>
                                    <td>{donor.amount}</td> 
                                </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard