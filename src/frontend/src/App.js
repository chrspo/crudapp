import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import ClientList from "./components/ClientList";
import ClientEdit from "./components/ClientEdit";

function App(){
    return (
        <Router>
            <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/clients' exact={true} component={ClientList}/>
                <Route path='/clients/:id' component={ClientEdit}/>
            </Switch>
        </Router>
    )
}

export default App;