import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Layout from "../components/layout";
import Chatroom from "../views/Chatroom";
import Einrichtungen from "../views/Einrichtungen";
import Fachgebiete from "../views/Fachgebiete";
import Home from "../views/Home";
import Ifa_Home from "../views/Ifa_Home";
import Initiativen from "../views/Initiativen";
import Kontakt from "../views/Kontakt";
import News from "../views/News";
import Studiengang from "../views/Studiengang";
import Tu_Home from "../views/Tu_Home";
const AppRouter = () => {
    return (
        <Router>
            <Layout />
            <Switch>
                <Route exact path="/" component={() => (<Redirect to={"/Home"} />)} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/News" component={News} />
                <Route exact path="/Chatroom" component={Chatroom} />
                <Route exact path="/Fachgebiete" component={Fachgebiete} />
                <Route exact path="/Studiengang" component={Studiengang} />
                <Route exact path="/Initiativen" component={Initiativen} />
                <Route exact path="/Einrichtungen" component={Einrichtungen} />
                <Route exact path="/Kontakt" component={Kontakt} />
                <Route exact path="/Ifa_Home" component={Ifa_Home} />
                <Route exact path="/Tu_Home" component={Tu_Home} />
            </Switch>
        </Router>
    );
};

export default AppRouter;