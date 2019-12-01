import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '../../components/Notifications';

require('./style.css');

export default function Header() {
    return (
        <>
            <Notifications />
            <div className="header">
                <h2 className="logo">Produza warehouse</h2>
                <input type="checkbox" id="chk" />
                <label htmlFor="chk" className="show-menu-btn">
                    <i className="fas fa-ellipsis-h"></i>
                </label>

                <ul className="menu">
                    <Link to="/"> <i class="fas fa-home"></i> Home</Link> |
                    <Link to="/stock"><i class="fas fa-search"></i> Pesquisar estoque</Link> |
                    <Link to="/bom"><i class="fas fa-file-upload"></i> Importar BOM</Link> |
                    <Link to="/dash"><i class="fas fa-chart-line"></i> Dash Board</Link> |
                    <Link to="/about"><i class="fas fa-question"></i> Sobre</Link>

                    <label htmlFor="chk" className="hide-menu-btn">
                        <i className="fas fa-times"></i>
                    </label>
                </ul>
            </div>
        </>
    );
}