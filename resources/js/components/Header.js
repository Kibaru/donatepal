import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends Component {

    logout = (e) =>{
        e.preventDefault()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        localStorage.removeItem('admin')
        this.props.history.push('/admin')

        // let user=JSON.parse(localStorage.getItem('admin'));

        // console.log(user.admin.token);

        // let token = user.admin.token
        // console.log(token);
        // const headers = { 
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${token}`
        // }
        // if(user.admin.token){
        //     axios.post('/api/auth/logout', {
        //         headers:{ Authorization: `Bearer ${token}`}
        //     })
        //     .then(response => {
        //         localStorage.removeItem('admin')
        //         console.log(response.data);
        //         this.props.history.push('/admin')
        //     })
        //     .catch(error => {
        //         // localStorage.removeItem('admin')
        //         this.props.history.push('/admin')
        //     })
        // }
    }

    render(){

        const adminLink = (
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/consumer">Keys_Config</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                        <a href="#" onClick={this.logout} className="nav-link">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        )

        const donorLink = (
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">Login</Link>
                    </li>
                </ul>
            </div>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <div className="container">
                    <Link className="navbar-brand" to="/">Donatepal</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {localStorage.admin ? adminLink :  donorLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Header)