
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Actualite from './component/Actualite/Actualite';
import Entreprise20162018 from './component/Entreprise20162018/Entreprise20162018';
import Outil from './component/Outil/Outil';
import Contact from './component/Contact/Contact';
import Header from './component/Header';
import Footer from './component/footer';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import './index.css';
import {Navbar} from 'react-materialize';



const Root = () => {
    return (
        <Router>
            <div id="test" >
                <Header/>
                <div className="bg" style={{position:'absolute', width:'20%',height:'100vh',  backgroundColor: 'rgb(38, 103, 189)'}}></div>
                <Navbar>
                    <NavLink to="/App">Présenation des minis entreprises</NavLink>
                    <NavLink to="/Actualite">Actualités des minis entreprises</NavLink>
                    <NavLink to="/entreprise20162018">Les minis Entreprise2016-2018</NavLink>
                    <NavLink to="/Outil">Outils en ligne</NavLink>
                    <NavLink to="/Contact">Contact Coordinateur</NavLink>
                </Navbar>
                <div className="content"  style={{marginTop:'100px'}}>
                    <Switch>
                        <Route exact path='/' component={App}/>
                        <Route exact path='/Actualite' component={Actualite}/>
                        <Route exact path='/Entreprise20162018' component={Entreprise20162018}/>
                        <Route exact path='/Outil' component={Outil}/>
                        <Route exact path='/Contact' component={Contact}/>
                        
                       
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
