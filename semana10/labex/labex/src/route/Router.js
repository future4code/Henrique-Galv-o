import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import HomePage from "../pages/HomePage/HomePage"
import ApplicationForm from "../pages/ApplicationForm/ApplicationForm"
import AuthenticationPage from "../pages/AuthenticationPage/AuthenticationPage"
import AdminPage from '../pages/AdminPage/AdminPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'

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

                <Route exact path="/admin">
                    <AdminPage />
                </Route>

                <Route exact path="/admin/trip/create">
                    <CreateTripPage />
                </Route>

                <Route exact path="/admin/trip/id">
                    <TripDetailsPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

    