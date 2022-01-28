import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComplainPage from "../Complain/ComplainPage.jsx";
import MyNavbar from "../Navbar/MyNavbar.jsx";

const Index = () => {

    return (
        <div>
            <Router>
                <MyNavbar />
                <Switch>
                    <Route exact path="/">
                    <ComplainPage />
                    </Route>
                    <Route exact path="/complain">
                        <ComplainPage />
                    </Route>
                    
                </Switch>
            </Router>
        </div>
    );
};

export default Index;
