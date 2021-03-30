import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';
import Menu from "./components/Menu"; 
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
