import React, { Component } from 'react';


require('./style.css');

export default class CircularProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItenns: 0,
        }
    }



    render() {
        return (

            <div className="body-progress">

                <div className="progress-container">
                    <div className="card">
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle
                                        cx="70" cy="70" r="70"
                                        strokeWidth={440}
                                        strokeDasharray={440}
                                        strokeDashoffset={440 * (1 - this.props.valor1 / this.props.valor3)}
                                    />
                                    <circle cx="70" cy="70" r="70"></circle>

                                </svg>
                                <div className="number">
                                    {
                                        this.props.valor1 ?
                                            <h2>{(this.props.valor1 / this.props.valor3 * 100).toFixed(2)}<span>%</span></h2>
                                            :
                                            <h2>0<span></span></h2>
                                    }
                                </div>
                                <div>
                                    {
                                        this.props.name1 ?
                                            <h2 className="text">{this.props.name1}</h2>
                                            :
                                            <h2 className="text">no data to show</h2>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle
                                        cx="70" cy="70" r="70"
                                        strokeDasharray={440}
                                        strokeDashoffset={440 * (1 - this.props.valor2 / this.props.valor3)}
                                    />
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className="number">
                                    {
                                        this.props.valor2 ?
                                            <h2>{(this.props.valor2 / this.props.valor3 * 100).toFixed(2)}<span>%</span></h2>

                                            :
                                            <h2>0<span></span></h2>
                                    }
                                </div>
                                <div>
                                    {
                                        this.props.name2 ?
                                            <h2 className="text">{this.props.name2}</h2>
                                            :
                                            <h2 className="text">no data to show</h2>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle
                                        cx="70" cy="70" r="70"
                                        strokeDasharray={440}
                                        strokeDashoffset={440 * (1 - this.props.valor3 / 20000)}
                                    />
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className="number">
                                    {
                                        this.props.valor3 ?
                                            <h2>{this.props.valor3}<span></span></h2>
                                            :
                                            <h2>0<span></span></h2>
                                    }
                                </div>
                                <div>
                                    {
                                        this.props.name3 ?
                                            <h2 className="text">{this.props.name3}</h2>
                                            :
                                            <h2 className="text">no data to show</h2>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}