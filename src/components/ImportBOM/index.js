import React, { Component } from 'react';
import ResultTableBOM from '../ResultTableBOM';
import readXlsxFile from 'read-excel-file';
import { notify } from '../../components/Notifications';
import Loading from '../../components/Loading';
import GoTop from '../GoTop';

require('./style.css');


export default class importBOM extends Component {
    constructor() {
        super()
        this.state = {
            arrayResultado: [],
            isLoadin: false,
        }

    }

    atualizaTabela = (resultadoBusca) => {
        this.setState({ arrayResultado: resultadoBusca });
    }

    clearTable() {
        this.setState({ arrayResultado: [], isLoadin: false });
    }

    componentDidMount() {
        let listaBom = [];
        //importação lista BOM
        const btnImportarBom = document.getElementById('btn-importar-bom');

        btnImportarBom.addEventListener('change', () => {
            notify();
            this.clearTable();
            this.setState({ isLoading: true });

            readXlsxFile(btnImportarBom.files[0], { sheet: "BOM_Completa" }).then(async (rows) => {
                // `rows` is an array of rows. Each row being an array of cells.
                rows.forEach((row, i) => { // varre a planilha

                    if (i >= 12 && i < 500 && row[9]) { // seleciona apenas as linhas da planilha que contém os itens da lista BOM
                        listaBom[i - 12] = { item: row[0], mpn: row[6], ipnProd: row[2], ipnCad: row[18], descricao: row[17], quantidadeDeItens: row[20], referencia: true }; // cria array com a lista BOM importada
                        //console.log("linha 0: " + row[0], "linha 1: " + row[1], "linha 2: " + row[2], "linha 3: " + row[3], "linha 4: " + row[4], "linha 5: " + row[5], "linha 6: " + row[6], "linha 7: " + row[7], "linha 8: " + row[8], "linha 9: " + row[9], "linha 10: " + row[10], "linha 11: " + row[11], "linha 12: " + row[12], "linha 13: " + row[13], "linha 14: " + row[14], "linha 15: " + row[15], "linha 16: " + row[16], "linha 17: " + row[17], "linha 18: " + row[18], "linha 19: " + row[19], "linha 20: " + row[20]);
                    }
                });

                await fetch('http://172.16.8.39:3333/importbom', {

                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        listaBom: listaBom
                    })
                })
                    .then(res => res.json())
                    .then(res => this.setState({ arrayResultado: res, isLoading: false }));
            })

        })
    };

    render() {

        return (

            <div className="generalContainer">
                <div className="inportContainer">
                    <label name="importBom" htmlFor="btn-importar-bom" className="btn-importar-bom">Importar BOM <i className="fas fa-file-contract"></i></label>
                    <input type="file" id="btn-importar-bom" accept=".xlsx" />
                </div>

                <GoTop />
                {this.state.isLoading ?
                    <div className="loadingBomImport">
                        <Loading text="BOM" />
                    </div>
                    :
                    <div className="searchRevealModule">
                        <ResultTableBOM resultSearch={this.state.arrayResultado} />
                    </div>
                }
            </div>
        )
    }
}
