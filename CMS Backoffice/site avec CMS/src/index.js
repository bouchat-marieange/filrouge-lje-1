
import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Presentation from './component/Presentation/Presentation';
import Actualite from './component/Actualite/Actualite';
import Agenda from './component/Agenda/Agenda';
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
                <Navbar>
                    <NavLink to="/Presentation">Présentation des minis entreprises</NavLink>
                    <NavLink to="/Actualite">Actualités des minis entreprises</NavLink>
                    <NavLink to="/Agenda">Agenda</NavLink>
                    <NavLink to="/entreprise20162018">Les minis Entreprise2016-2018</NavLink>
                    <NavLink to="/Outil">Outils en ligne</NavLink>
                    <NavLink to="/Contact">Contact Coordinateur</NavLink>
                </Navbar>

                <div className="bg" style={{position:'absolute', zIndex:'-3', width:'20%', height:'100vh', minHeight: '100%', margin:'0', padding: '0',backgroundColor:'rgb(38, 103, 189)'}}></div>

                <div className="content"  style={{marginTop:'100px'}}>
                    <Switch>
                        <Route exact path='/' component={App}/>
                        <Route exact path='/Presentation' component={Presentation}/>
                        <Route exact path='/Actualite' component={Actualite}/>
                        <Route exact path='/Agenda' component={Agenda}/>
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
