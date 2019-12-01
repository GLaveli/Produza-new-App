import React, { Component } from 'react';

require('./style.css')

export default class Loading extends Component {
    render() {
        return (
            <div className="load-Container">
                <h3 className="load-label">Carregando</h3>
                <h3 className="load-label-name">{this.props.text}</h3>
                <div className="loader">
                </div>
            </div>
        );
    }
}
