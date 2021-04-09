import React from "react";
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./container/dashboard";

const MainComponent = (props) => {
    const { match } = props;
    return (
        <Switch>
            <Route path={`${match.url}`} component={Dashboard} />
        </Switch>
    )
}
export default MainComponent;