import React from "react";
import Sidebar from "./sideBar";
import Header from "./header";
import Footer from "./footer";
import HomePage from "./homePage";
import LandingPage from './landingPage';
import { Switch, Route } from "react-router-dom";

const Dashboard = (props) => {
    const { match } = props;
    return (
        <div>
            <Header {...props} />
            <div className="dashboard-main">
                <Sidebar />
                <Switch>
                    <Route path={`${match.url}/home`} component={LandingPage} />
                    <Route path={`${match.url}/dashboard`} component={HomePage} />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;