import React, { Component } from 'react';
//import DashFlex from '../../components/DashBoard/DashFlex';
//import DashGrid from '../../components/DashBoard/DashGrid';
import CircularProgressBar from '../../components/DashBoard/CircularProgress';

export default class DashPage extends Component {
    constructor() {
        super();
        this.state = {
            nomeItem1: 'Capacitores',
            valorItem1: 15000,

            nomeItem2: 'Resistores',
            valorItem2: 5000,

            nomeItem3: 'Quantidade Itens',
            valorItem3: 20000,
            /*-----------------------------------------------------*/
            nomeItem4: 'SMD',
            valorItem4: 20000,

            nomeItem5: 'CER',
            valorItem5: 0,

            nomeItem6: 'Espaço total',
            valorItem6: 20000,
            /*-----------------------------------------------------*/
            nomeItem7: 'Capacitores',
            valorItem7: 10000,

            nomeItem8: 'Resistores',
            valorItem8: 10000,

            nomeItem9: 'Espaço total',
            valorItem9: 20000,

        }
    }
    render() {
        return (
            <div>
                <CircularProgressBar
                    name1={this.state.nomeItem1}
                    valor1={this.state.valorItem1}
                    name2={this.state.nomeItem2}
                    valor2={this.state.valorItem2}
                    name3={this.state.nomeItem3}
                    valor3={this.state.valorItem3}
                />


                <CircularProgressBar
                    name1={this.state.nomeItem4}
                    valor1={this.state.valorItem4}
                    name2={this.state.nomeItem5}
                    valor2={this.state.valorItem5}
                    name3={this.state.nomeItem6}
                    valor3={this.state.valorItem6}
                />

                <CircularProgressBar
                    name1={this.state.nomeItem7}
                    valor1={this.state.valorItem7}
                    name2={this.state.nomeItem8}
                    valor2={this.state.valorItem8}
                    name3={this.state.nomeItem9}
                    valor3={this.state.valorItem9}
                />

                <CircularProgressBar />
            </div>
        )
    }
}
