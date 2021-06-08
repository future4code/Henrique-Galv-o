import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import HomePage from "../pages/HomePage/HomePage"
import ApplicationForm from "../pages/ApplicationForm/ApplicationForm"
import AuthenticationPage from "../pages/AuthenticationPage/AuthenticationPage"

const Router = () => {
    return (
        <BrowserRouter>
            {/* <Header/> */}
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/tripspage">
                    <ListTripsPage />
                </Route>

                <Route exact path="/appform/:id/:name">
                    <ApplicationForm />
                </Route>    

                <Route exact path="/login">
                    <AuthenticationPage />
                </Route>

                <Route>
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

    