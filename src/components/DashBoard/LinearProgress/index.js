import React, { Component } from 'react';
import styled from 'styled-components';


const Progressbar = styled.div`
position: absolute;
top: 0;
left: 0;
width: ${props => props.width}%;
height: 100%;
border-radius: 10px;
background: rgb(0, 148, 123);
box-shadow: inset 0 0 2px #000;
animation: progressAnimation 2.5s ease-in-out forwards;
`;

require('./style.css');

export default class LinearProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 95,
        }
    }


    render() {
        return (

            <div className="linearProgressBar">
                <div className="container">
                    <h2>% de itens no estoque</h2>
                    <div className="skills">

                        <span className="name">Teste</span>

                        <div className="percent">
                            <Progressbar width={this.state.width}></Progressbar>
                            <span className="value">95%</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>


        )
    }
}