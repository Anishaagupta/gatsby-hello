import { Link } from 'gatsby'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <h1>Opps! Page Not Found</h1>
            <Link to="/">Got Back To Home Page</Link>
        </div>
    )
}

export default NotFound
