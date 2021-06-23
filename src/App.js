import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";

import Theme from "./theme/Theme";
import Footer from "./components/Footer";
import AsideBar from "./components/AsideBar";
import BannerTop from "./components/BannerTop";
import CardsContainer from "./components/CardsContainer";

function App() {
    return (
        <Theme>
            <Router>
                <BannerTop />
                <CardsContainer />
            </Router>
            <AsideBar />
            <Footer />
        </Theme>
    );
}

export default App;
