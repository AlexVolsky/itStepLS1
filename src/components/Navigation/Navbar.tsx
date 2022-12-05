import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from '../Login/Login';

const Navbar = () => {

    const currenLocation = useLocation();
    console.log(currenLocation);

    const routes = [{
        path: '/users',
        name: 'Users'
    },
    {
        path: '/posts',
        name: 'Posts'
    },
    
/*     {
        path: '/albums',
        name: 'Albums'
    }, */
    {
        path: '/photos',
        name: 'Photos'
    },
/*     {
        path: '/todos',
        name: 'Todos'
    }, */
    {
        path: '/other',
        name: 'Other'
    },
    
    

    ]

    return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">Navbar</span>
                    <div>
                        <button className="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                       
                        {
                            routes.map(route =>  
                                <li className="nav-item" key={route.path}>
                                    <Link className={`nav-link ${route.path === currenLocation.pathname && 'active'}`} to={route.path}>{route.name}</Link>
                                </li>)
                        }

                        
                    </ul>
                    </div>
                    <Login/>
                    <button className='btn btn-outline-secondary' type="submit">LogOut</button>
                </div>
    </nav>
    );
};

export default Navbar;