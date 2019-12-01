import React, { Component } from 'react';
require('./style.css');

export default class GoTop extends Component {
    render() {
        return (
            <div id="arow-topo">
                <a className="go-top" href="#top"><p className="arrow-top ">↑</p></a>
            </div>
        );
    }
}