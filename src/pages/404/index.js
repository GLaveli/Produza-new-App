import React, { Component } from 'react';
import { Link } from 'react-router-dom';

require('./style.css');

export default class ErrorNotFound extends Component {

    render() {
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>

                    <div className="typewriter">
                        <h2>Page not found</h2>
                        <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                        <Link to="/">Home</Link>
                    </div>

                </div>
            </div>
        );
    }
}