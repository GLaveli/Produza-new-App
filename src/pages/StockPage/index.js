import React, { Component } from 'react';
import GoTop from '../../components/GoTop';
import Search from '../../components/Search';


export default class Stock extends Component {
    render() {
        return (
            <div>
                <GoTop />
                <Search />
            </div>
        )
    }
}
