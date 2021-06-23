import React from "react";
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
} from "react-router-dom";

import Theme from "./theme/Theme";
import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Users from "./pages/Users";
import AsideBar from "./components/AsideBar";
import BannerTop from "./components/BannerTop";
import CardsContainer from "./components/CardsContainer";

function App() {
    return (
        <Theme>
            <Router>
                {/* <Hero>
                    <Header />
                </Hero> */}
                <BannerTop />
                <main role="main">
                    <CardsContainer />
                    {/* <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                    </Switch> */}
                </main>
            </Router>
            <AsideBar />
            <Footer />
        </Theme>
    );
}

export default App;
