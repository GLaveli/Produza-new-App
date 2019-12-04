import React, { Component } from 'react';
//import CircularProgressBar from '../../components/DashBoard/CircularProgress';
import LinearProgressBar from '../../components/DashBoard/LinearProgress';


export default class DashPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (

            <div>
                <LinearProgressBar />
            </div>
        )
    }
}
