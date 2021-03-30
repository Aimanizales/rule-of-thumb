import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
    return (
        <>    
            <Router>
                <Header>
                    <h1>Rule of Thumb</h1>
                </Header>
                <main>
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
                </main>
            </Router>
            <Footer />
        </>
    );
}

export default App;
