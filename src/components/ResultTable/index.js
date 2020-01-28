import React from 'react';

require('./styleTable.css');

let octoUrl = "https://octopart.com/search?q=";
let findChipsUrl = "https://www.findchips.com/search/";
let lcscUrl = "https://lcsc.com/search?q=";
let kynixUrl = "https://www.kynix.com/Search/";

const ResultTable = (props) => {

    const { resultSerach } = props;
    return (
        <>
            <div className="searchContainer">
                <h3 className="result-count">Foram retornados: {resultSerach.length} Resultados</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th><h1>Nº</h1></th>
                            <th><h1>ID</h1></th>
                            <th><h1>IPN Cadastro</h1></th>
                            <th><h1>IPN produção</h1></th>
                            <th><h1>MPN</h1></th>
                            <th><h1>Descrição</h1></th>
                            <th><h1>Amount</h1></th>
                            <th><h1>Used</h1></th>
                            <th><h1>Errors</h1></th>
                            <th><h1>Total</h1></th>
                            <th><h1><i className="fas fa-coins"></i></h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            resultSerach.map((item, i) => (
                                <tr key={i}>
                                    <td className="itemBom">{i + 1}</td>
                                    <td >{item.CompID}</td>
                                    <td className="itemBom">{item.ipncadastro}</td>
                                    <td className="itemBom">{item.CompName}</td>
                                    <td className="itemBom">{item.mpn}</td>
                                    <td className="itemBom">{item.Remark}</td>
                                    <td className="itemBom">{item.Amount}</td>
                                    <td className="itemBom">{item.Used}</td>
                                    <td className="itemBom">{item.Errors}</td>
                                    <td className="itemBom">{item.Amount - item.Used - item.Errors}</td>
                                    <td className="markBOM" >
                                        <div className="dropdown">
                                            <button className="dropbtn"><i className="far fa-arrow-alt-circle-down"></i></button>
                                            <div className="dropdown-content">
                                                <a href={octoUrl + item.mpn} target="_blank" rel="noopener noreferrer">Octopart</a>
                                                <a href={findChipsUrl + item.mpn} target="_blank" rel="noopener noreferrer">FindChips</a>
                                                <a href={lcscUrl + item.mpn} target="_blank" rel="noopener noreferrer">Lcsc</a>
                                                <a href={kynixUrl + item.mpn + ".html"} target="_blank" rel="noopener noreferrer">Kynix</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                        <tr className="fake-colunm">
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                    </tbody>


                </table>
            </div>
        </>

    );
}

export default ResultTable;