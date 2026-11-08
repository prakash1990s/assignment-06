import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>User not found</p>
            <a href={"/"} className="btn btn-primary">
                Go home
            </a>
        </div>
    );
};

export default NotFound;