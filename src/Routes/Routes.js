import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header'
import Home from '../pages/Home';
import DashPage from '../pages/DashPage';
import Stock from '../pages/StockPage';
import ImportBOMPage from '../pages/ImportBOMPage';
import About from '../pages/About';
import P404 from '../pages/404';



const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/stock" component={Stock} />
                <Route path="/Dash" component={DashPage} />
                <Route path="/bom" component={ImportBOMPage} />
                <Route path="/about" component={About} />
                <Route path="*" component={P404} />
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;