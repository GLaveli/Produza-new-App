import React, { Component } from 'react';
//import DashFlex from '../../components/DashBoard/DashFlex';
//import DashGrid from '../../components/DashBoard/DashGrid';
import CircularProgressBar from '../../components/DashBoard/CircularProgress';
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

                <CircularProgressBar />
                <LinearProgressBar />

            </div>
        )
    }
}
