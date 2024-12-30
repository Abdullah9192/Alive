import React from 'react';

export const Navabr = (props) => (
    <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a href="" className="navbar-brand">
                <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white" style={{color:"#000"}}>Alive</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto p-4 bg-secondary">
                    <a href="/" className="nav-item nav-link active">Home</a>
                    <a href="/aboutus" className="nav-item nav-link">About Us</a>
                    <a href="/features" className="nav-item nav-link">Our Features</a>
                    <a href="/class" className="nav-item nav-link">Classes</a>
                    <a href="/products" className="nav-link" >Products</a>
                    <a href="/contact" className="nav-item nav-link">Contact</a>
                    <div className='d-flex'>
                    <button type="button" class="btn btn-danger">Log in</button>
                    <button type="button" class="btn btn-success">Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);

