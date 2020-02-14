import React, { Component } from 'react';
import ImportBOM from '../../components/ImportBOM';
import GoTop from '../../components/GoTop';


export default class ImportBOMPage extends Component {

    render() {
        return (
            <div>
                <GoTop />
                <ImportBOM />
            </div>
        )
    }
}
