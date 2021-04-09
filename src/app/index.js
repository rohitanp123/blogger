import React from "react";
import SignIn from './container/signIn';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import MainComponent from "./routes";

const MainApp = (props) => {
    const { location } = props;
    const data = localStorage.getItem('userData')
    if (location.pathname === "/" || location.pathname === "" || location.pathname === "/signin" || location.pathname === "/app") {
        if (data === null) {
            return <Redirect to={"/signIn"} />;
        } else {
            return <Redirect to={"/app/home"} />;
        }
    }
    return (
        <Router>
            {!data && <Redirect to={"/signin"} />}
            <Switch>
                <Route path="/app" component={MainComponent} />
                <Route path="/signIn" component={SignIn} />
            </Switch>
        </Router>
    );
};
const mapStateToProps = (state) => {
    return {
        userData: state.userData.user
    }
}
export default connect(mapStateToProps)(MainApp);
