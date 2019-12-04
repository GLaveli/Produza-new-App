import React, { Component } from 'react';
import styled from 'styled-components';
import DataApi from '../../../services/DataApi';

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
    constructor() {
        super();
        this.state = {
            totaoItens: 0,
            dataResponse: [],
            width: 100,
        }


    }


    async componentDidMount() {
        const dataVar = await DataApi.get('dashboards');
        this.setState({ dataResponse: dataVar.data.recordset, totaoItens: dataVar.data.recordset[0].total })

    }

    render() {
        console.log(this.state.dataResponse);

        return (

            <div className="linearProgressBar">
                <div className="container">
                    {
                        this.state.dataResponse.map((item, i) => (
                            <div className="skills" key={i}>
                                <span className="name">{item.dataName}</span>
                                <div className="percent">
                                    <Progressbar width={(item.total * 100) / this.state.totaoItens}></Progressbar>
                                    <span className="value">{(item.total * 100) / this.state.totaoItens}%</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        )
    }
}