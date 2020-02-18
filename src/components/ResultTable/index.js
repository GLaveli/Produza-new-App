import React from 'react';

require('./styleTable.css');

let octoUrl = "https://octopart.com/search?q=";
let findChipsUrl = "https://www.findchips.com/search/";
let lcscUrl = "https://lcsc.com/search?q=";
let kynixUrl = "https://www.kynix.com/Search/";
let digikey = "https://www.digikey.com/products/en?keywords=";

const ResultTable = (props) => {

    const { resultSerach } = props;

    return (
        <>
            <div className="searchContainer">
                {resultSerach.length === 1 ?
                    <h3 className="result-count">Foi retornado: <span className="countNumberResult">{resultSerach.length} </span>Resultado</h3>
                    : resultSerach.length <= 0 ?
                        <h3 className="result-count">Nenhum Resultado Encontrado</h3>
                        :
                        <h3 className="result-count">Foi retornado: <span className="countNumberResult">{resultSerach.length} </span> Resultados</h3>
                }

                <table className="table">
                    <thead>
                        <tr>
                            <th><h1><i className="fas fa-info-circle"></i></h1></th>
                            <th><h1>ID</h1></th>
                            <th><h1>IPN Cadastro</h1></th>
                            <th><h1>IPN produção</h1></th>
                            <th><h1>MPN</h1></th>
                            <th><h1>Descrição</h1></th>
                            <th><h1>Total</h1></th>
                            <th><h1><i className="fas fa-coins"></i></h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            resultSerach.map((item, i) => (
                                <tr key={i}>
                                    <td className="centerItens">
                                        <div className="tooltip"><i className="far fa-eye"></i>
                                            <span className="tooltiptextLeft">
                                                <i className="fas fa-arrow-right"></i> LotNo: <span className="QuantityColorMarker"> {item.LotNo}</span><hr />
                                                <i className="fas fa-arrow-right"></i> McID: <span className="QuantityColorMarker"> {item.McID}</span><hr />
                                                <i className="far fa-clipboard"></i> Station: <span className="QuantityColorMarker"> {item.Station}</span><hr />
                                                <i className="fas fa-box"></i> Slot: <span className="QuantityColorMarker"> {item.Slot}</span><hr />
                                                <i className="fas fa-boxes"></i> SubSlot: <span className="QuantityColorMarker"> {item.SubSlot}</span><hr />
                                                <i className="fas fa-dolly"></i> Ultima Movimentação: <span className="QuantityColorMarker"> {item.UltimaMovimentacao}</span><hr />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="itemBom">
                                        <div className="tooltip">{item.CompID}
                                            <span className="tooltipTextLeftInfo">
                                                ID
                                            </span>
                                        </div>
                                    </td>
                                    <td className="itemBom">
                                        <div className="tooltip">{item.ipncadastro}
                                            <span className="tooltipTextLeftInfo">
                                                Ipn de cadastro
                                            </span>
                                        </div>
                                    </td>
                                    <td className="itemBom">
                                        <div className="tooltip">{item.CompName}
                                            <span className="tooltipTextLeftInfo">
                                                Ipn de cadastro
                                            </span>
                                        </div>
                                    </td>
                                    <td className="itemBom">
                                        <div className="tooltip">{item.mpn}
                                            <span className="tooltipTextLeftInfo">
                                                MPN
                                            </span>
                                        </div>
                                    </td>
                                    <td className="itemBom">
                                        <div className="tooltip">{item.Remark}
                                            <span className="tooltipTextLeftInfo">
                                                Descrição
                                            </span>
                                        </div>
                                    </td>
                                    <td className="centerItens">
                                        <div className="tooltip"><span className="QuantityColorMarker">{item.Amount} </span><i className="fas fa-microchip"></i>
                                            <span className="tooltiptextRight">Itens em Estoque</span>
                                        </div>
                                    </td>
                                    <td className="markBOM" >
                                        <div className="dropdown">
                                            <button className="dropbtn"><i className="fas fa-search"></i></button>
                                            <div className="dropdown-content">
                                                <a href={digikey + item.mpn} target="_blank" rel="noopener noreferrer">Digikey</a>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ResultTable;