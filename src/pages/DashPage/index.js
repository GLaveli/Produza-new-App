import React, { Component } from 'react';
//import CircularProgressBar from '../../components/DashBoard/CircularProgress';
import LinearProgressBar from '../../components/DashBoard/LinearProgress';
import DataApi from '../../services/DataApi';

export default class DashPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    async componentDidMount() {
        let response = await DataApi.get('/dashboards');
        console.log(response);


    }

    render() {
        return (
            <div>

                <LinearProgressBar />

            </div>
        )
    }
}
