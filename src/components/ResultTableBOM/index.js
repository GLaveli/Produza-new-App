import React from 'react';

require('./styleBOMTable.css');

let octoUrl = "https://octopart.com/search?q=";
let findChipsUrl = "https://www.findchips.com/search/";
let lcscUrl = "https://lcsc.com/search?q=";
let kynixUrl = "https://www.kynix.com/Search/";


const ResultTableBOM = (props) => {



    const { resultSearch } = props;

    console.log(resultSearch);

    return (
        <>
            <div className="searchContainerBom">
                <table className="container">
                    <thead>
                        <tr>
                            <th><h1>Nº</h1></th>
                            <th><h1>ipnCad</h1></th>
                            <th><h1>ipnProd.</h1></th>
                            <th><h1>mpn</h1></th>
                            <th><h1>descricao</h1></th>
                            <th><h1>Estoque</h1></th>
                            <th><h1><i className="fas fa-coins"></i></h1></th>
                        </tr>
                    </thead>

                    <tbody className="tbodyBOM">
                        {
                            resultSearch.map((item, i) => (
                                <>
                                    {!item.referencia ? (
                                        <tr>
                                            <td className="centerItens">
                                                <div className="tooltip"><i class="fas fa-angle-double-right"></i>
                                                    <span className="tooltiptextLeft">
                                                        <i class="fas fa-arrow-right"></i> LotNo: <span className="QuantityColorMarker"> {item.LotNo}</span><hr />
                                                        <i class="fas fa-arrow-right"></i> McID: <span className="QuantityColorMarker"> {item.McID}</span><hr />
                                                        <i class="far fa-clipboard"></i> Station: <span className="QuantityColorMarker"> {item.Station}</span><hr />
                                                        <i class="fas fa-box"></i> Slot: <span className="QuantityColorMarker"> {item.Slot}</span><hr />
                                                        <i class="fas fa-boxes"></i> SubSlot: <span className="QuantityColorMarker"> {item.SubSlot}</span><hr />
                                                        <i class="fas fa-dolly"></i> Ultima Movimentação: <span className="QuantityColorMarker"> {item.UltimaMovimentacao}</span><hr />
                                                    </span>
                                                </div>
                                            </td>
                                            <td >{item.ipncadastro}</td>
                                            <td >{item.CompName}</td>
                                            <td >{item.mpn}</td>
                                            <td >{item.Remark}</td>
                                            <td className="centerItens">
                                                <div className="tooltip"><span className="QuantityColorMarker">{item.Amount} </span><i className="fas fa-microchip"></i>
                                                    <span className="tooltiptextRight">Itens em Estoque</span>
                                                </div>
                                            </td>
                                            <td className="markBOM">
                                                <div className="dropdown">
                                                    <button className="dropbtn"><i className="far fa-arrow-alt-circle-left"></i></button>
                                                    <div className="dropdown-content">
                                                        <a href={octoUrl + item.mpn} target="_blank" rel="noopener noreferrer">Octopart</a>
                                                        <a href={findChipsUrl + item.mpn} target="_blank" rel="noopener noreferrer">FindChips</a>
                                                        <a href={lcscUrl + item.mpn} target="_blank" rel="noopener noreferrer">Lcsc</a>
                                                        <a href={kynixUrl + item.mpn + ".html"} target="_blank" rel="noopener noreferrer">Kynix</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                            <tr>
                                                <td className="markBOM">{item.item}</td>
                                                <td className="markBOM" >{item.ipnCad}</td>
                                                <td className="markBOM" >{item.ipnProd}</td>
                                                <td className="markBOM" >{item.mpn}</td>
                                                <td className="markBOM" >{item.descricao}</td>
                                                <td className="markBOM">
                                                    <div className="tooltip">BOM:  <span className="color">{item.quantidadeDeItens}</span>
                                                        <span className="tooltiptextRight">Quantidade por PCB! </span>
                                                    </div>
                                                </td>

                                                <td className="markBOM" >
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><i className="far fa-arrow-alt-circle-left"></i></button>
                                                        <div className="dropdown-content">
                                                            <a href={octoUrl + item.mpn} target="_blank" rel="noopener noreferrer">Octopart</a>
                                                            <a href={findChipsUrl + item.mpn} target="_blank" rel="noopener noreferrer">FindChips</a>
                                                            <a href={lcscUrl + item.mpn} target="_blank" rel="noopener noreferrer">Lcsc</a>
                                                            <a href={kynixUrl + item.mpn + ".html"} target="_blank" rel="noopener noreferrer">Kynix</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    );
}

export default ResultTableBOM;