import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Rooter
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Navbar} from 'react-materialize';

const Root = () => {
    return (
        <Router>
            <div>
                <Navbar brand='logo' right>
                    <NavLink to='/'>Présentation</NavLink>
                    <NavLink to='components.html'>Actualités</NavLink>
                    <NavLink to='get-started.html'>Entreprise 2016-2018</NavLink>
                    <NavLink to='components.html'>Outils en ligne</NavLink>
                    <NavLink to='components.html'>Contact</NavLink>
                </Navbar>
                <hr />
                <Switch>
                    <Route exact path='/' component={ App } />
                    {/*<Route exact path='/Pseudo' component={ qqch } />
                    <Route component={ Qqch } />*/}
                </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();

