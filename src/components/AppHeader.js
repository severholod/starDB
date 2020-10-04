import React from 'react'
import {Link} from 'react-router-dom';

export class AppHeader extends React.Component {
    render() {
        return (
            <div className="header d-flex">
                <h3>
                    <Link to="/">
                        Star DB
                    </Link>
                </h3>
                <ul>
                    <li>
                        <Link to="/people/">People</Link>
                    </li>
                    <li>
                        <Link to="/planets/">Planets</Link>
                    </li>
                    <li>
                        <Link to="/starships/">Starships</Link>
                    </li>
                    <li>
                        <Link to="/secret-page">Secret Page</Link>
                    </li>
                    <li>
                        <Link to="/login">Log in</Link>
                    </li>
                </ul>
            </div>
        )
    }
}