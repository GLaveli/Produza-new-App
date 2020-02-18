import React, { Component } from 'react';
import ResultTable from '../ResultTable';
import DataApi from '../../services/DataApi';
import { notify } from '../../components/Notifications';
import Loading from '../../components/Loading';

require('./style.css');

let response = [];

class Search extends Component {
    constructor() {
        super();
        this.state = {
            mpn: '',
            ipnp: '',
            ipnc: '',
            desc: '',
            carac1: '',
            carac2: '',
            carac3: '',
            carac4: '',
            carac5: '',
            carac6: '',
            carac7: '',
            carac8: '',

            dataIni: '',
            dataFin: '',
            id: '',
            saldo: '',
            local: '',
            estante: '',
            prateleira: '',
            posicao: '',
            recebimento: '',
            estoque: '',
            fabrica: '',
            cliente: '',
            zerados: '',


            feed: [],
            isLoading: false,
            isError: null,
            message: null,
        }
        this.baseState = this.state;
        this.search = this.search.bind(this);
    }

    //Carrega informaçoes do banco de dados enquanto os componentes são montados
    async componentDidMount() {

        this.setState({ isLoading: true });
        //Define qual bloco deve aparecer primeiro
        document.getElementById('tab1').style.display = "block";
        document.getElementById('tab2').style.display = "none";

        //Requisição do tipo get para uma das rotas da API
        try {
            response = await DataApi.get('inicialsearch');
            //console.log(response.data);

        } catch (err) {
            this.setState({ isError: err });
            console.log(this.state.isError);
        }
        if (response)
            this.setState({ feed: response.data, isLoading: false });
    };

    //Interage com os formularios de pesquisa
    showForm(e) {

        if (e === "tab1") {

            document.getElementById('tab1').style.display = "block";
            document.getElementById('tab2').style.display = "none";
        } if (e === "tab2") {

            document.getElementById('tab1').style.display = "none";
            document.getElementById('tab2').style.display = "block";

        }
        if (e === "clear") {

            /* Section 1 inputs | Melhora este codigo, olha o tamnho disso... que vergonha, 24 linhas em 1 metodo */
            document.getElementById('mnp').value = '';
            document.getElementById('ipnp').value = '';
            document.getElementById('ipnc').value = '';
            document.getElementById('desc').value = '';
            document.getElementById('carac1').value = '';
            document.getElementById('carac2').value = '';
            document.getElementById('carac3').value = '';
            document.getElementById('carac4').value = '';
            document.getElementById('carac5').value = '';
            document.getElementById('carac6').value = '';
            document.getElementById('carac7').value = '';
            document.getElementById('carac8').value = '';
            /* Section 2 inputs*/
            document.getElementById('dataIni').value = '';
            document.getElementById('dataFin').value = '';
            document.getElementById('id').value = '';
            document.getElementById('saldo').value = '';
            /* Section 3 selection */
            document.getElementById("local").selectedIndex = 0;
            document.getElementById("estante").selectedIndex = 0;
            document.getElementById("prateleira").selectedIndex = 0;
            document.getElementById("posicao").selectedIndex = 0;
            /*Section 3 checkbox*/
            document.getElementById("recebimento").checked = false;
            document.getElementById("estoque").checked = false;
            document.getElementById("fabrica").checked = false;
            document.getElementById("cliente").checked = false;
            document.getElementById("zerados").checked = false;

        }

    }

    onInputChange = (event) => {
        /* Este codigo pega o evento (campo que esta sendo digitado) e joga direto para o state, assim econimizo 40 linhas de codigo! */
        this.setState({ [event.target.name]: event.target.value.trim() });
    }

    //Inicia a psquisa quando  obotão é pressionado
    async search(e) {
        e.preventDefault();
        this.clearTable();
        this.setState({ isLoading: true });


        if (!this.state.isError) {
            notify();
        }

        let { feed, ...searchEngine } = this.state;
        try {
            response = await DataApi.post('findbycarac', {
                searchEngine,
            });
        } catch (err) {
            this.setState({ isError: err });
            console.log(this.state.isError);
        }
        if (response) {
            if (!response.data.message) {
                this.setState({ feed: response.data, isLoading: false });
            } else {
                this.setState({ message: response.data.message, isLoading: false });
            }
        }
    }
    //Zera o conteudo do state, removendo a ultima pesquisa feita
    clearTable() {
        this.setState({ feed: [] });
        this.setState(this.baseState);
    }

    render() {
        return (
            <>
                <div className="container-btn-tab">
                    <button className="btn-tab btn1" onClick={(e) => this.showForm('tab1')}>Cadastro</button>
                    <button className="btn-tab btn2" onClick={(e) => this.showForm('tab2')}>Caracteristicas</button>
                    <button className="btn-tab btn3" onClick={(e) => this.showForm('clear')}>Limpar campos</button>
                </div>
                <form id="myform" className="form" >

                    <div id="tab1">
                        <div className="body" id="form-body">
                            <div className="cadastro">
                                <div className="form-row">

                                    <h3>Pesquisa de cadastro:</h3>

                                    <div className="label-float">
                                        <input id="mnp" placeholder=" " type="text" name="mpn" onChange={this.onInputChange} />
                                        <label>MPN</label>
                                    </div>

                                    <div className="label-float">
                                        <input id="ipnp" placeholder=" " type="text" name="ipnp" onChange={this.onInputChange} />
                                        <label>IPN Produção</label>
                                    </div>

                                    <div className="label-float">
                                        <input id="ipnc" placeholder=" " type="text" name="ipnc" onChange={this.onInputChange} />
                                        <label>IPN Cadastro</label>
                                    </div>

                                    <div className="label-float">
                                        <input id="desc" placeholder=" " type="text" name="desc" onChange={this.onInputChange} />
                                        <label>Descrição</label>
                                    </div>

                                </div>
                                <div className="form-row-caract">

                                    <h3>Caracteristicas:</h3>

                                    <div className="label-float">
                                        <input id="carac1" placeholder=" " type="text" name="carac1" onChange={this.onInputChange} />
                                        <label>ex: cap</label>
                                    </div>
                                    <div className="label-float">
                                        <input id="carac2" placeholder=" " type="text" name="carac2" onChange={this.onInputChange} />
                                        <label>ex: res</label>
                                    </div>
                                    <div className="label-float">
                                        <input id="carac3" placeholder=" " type="text" name="carac3" onChange={this.onInputChange} />
                                        <label>ex: 10v</label>
                                    </div>
                                    <div className="label-float">
                                        <input id="carac4" placeholder=" " type="text" name="carac4" onChange={this.onInputChange} />
                                        <label>ex: 20%</label>
                                    </div>
                                    <div className="label-float">
                                        <input id="carac5" placeholder=" " type="text" name="carac5" onChange={this.onInputChange} />
                                        <label>ex: smd</label>
                                    </div>
                                    <div className="label-float">
                                        <input id="carac6" placeholder=" " type="text" name="carac6" onChange={this.onInputChange} />
                                        <label>ex: cer</label>
                                    </div>
                                    <div className="label-float">
                                        <input id="carac7" placeholder=" " type="text" name="carac7" onChange={this.onInputChange} />
                                        <label>ex: ohm</label>
                                    </div>
                                    <div className="label-float">
                                        <input id="carac8" placeholder=" " type="text" name="carac8" onChange={this.onInputChange} />
                                        <label>ex: film</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="tab2">
                        <div className="body" id="form-body">
                            <div className="cadastro">
                                <div className="form-row">
                                    <h3>Pesquisa de estoque:</h3>

                                    <div className="label-float">
                                        <input id="dataIni" className="dataInputText" placeholder="dd/mm/AAAA" data-mask='dd/mm/yyyy' type="text" name="dataIni" onChange={this.onInputChange} />
                                        <label className="dataInput">Data Inicial </label>
                                    </div>

                                    <div className="label-float">
                                        <input id="dataFin" className="dataInputText" placeholder="dd/mm/AAAA" data-mask='dd/mm/yyyy' type="text" name="dataFin" onChange={this.onInputChange} />
                                        <label className="dataInput">Data Final </label>
                                    </div>

                                    <div className="label-float">
                                        <input id="id" placeholder=" " type="text" name="id" onChange={this.onInputChange} />
                                        <label>ID</label>
                                    </div>

                                    <div className="label-float">
                                        <input id="saldo" placeholder=" " type="text" name="saldo" onChange={this.onInputChange} />
                                        <label>Saldo</label>
                                    </div>

                                </div>
                                <div className="form-row-caract">
                                    <h3 className="h3location">Localização:</h3>

                                    <select id="local" className="dropbox" name="local" onChange={this.onInputChange}>
                                        <option value="">local</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                    <select id="estante" className="dropbox" name="estante" onChange={this.onInputChange}>
                                        <option value="">Estante</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                    <select id="prateleira" className="dropbox" name="prateleira" onChange={this.onInputChange}>
                                        <option value="">Prateleira</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                    <select id="posicao" className="dropbox" name="posicao" onChange={this.onInputChange}>
                                        <option value="">Posição</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                                <div className="form-row-caract">
                                    <h3 id="titulo-outros">Outros:</h3>
                                    <div id="checkboxStyle">
                                        <input className="checkbox" id="recebimento" type="checkbox" name="recebimento" value="true" onChange={this.onInputChange} />
                                        <label htmlFor="recebimento">Recebimento</label>
                                        <input className="checkbox" id="estoque" type="checkbox" name="estoque" value="true" onChange={this.onInputChange} />
                                        <label htmlFor="estoque">Estoque</label>
                                        <input className="checkbox" id="fabrica" type="checkbox" name="fabrica" value="true" onChange={this.onInputChange} />
                                        <label htmlFor="fabrica">Fabrica</label>
                                        <input className="checkbox" id="cliente" type="checkbox" name="cliente" value="true" onChange={this.onInputChange} />
                                        <label htmlFor="cliente">Cliente</label>
                                        <input className="checkbox" id="zerados" type="checkbox" name="zerados" value="true" onChange={this.onInputChange} />
                                        <label htmlFor="zerados">Zerados</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="btnSearch">
                        <button onClick={this.search}>Pesquisar</button>
                    </div>
                </form>

                {this.state.isError ?
                    <div className="err">
                        <p className="err-text">Houve um erro de conexão! Verifique o log</p>
                    </div>
                    : this.state.isLoading ?
                        <div className="loadingContainerSerach">
                            <Loading text="Protheus" />
                        </div>
                        :
                        <ResultTable resultSerach={this.state.feed} />
                }
            </>
        );
    }
}

export default Search;