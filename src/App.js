import React, { Suspense, useEffect } from "react";
import "components/FontawsomeIcons";

import "./App.css";
import "./dark.css";

import Layout from "pages/_layouts/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "routes";
import PageNotFound from "pages/PageNotFound";
import Home from "pages/Home";
import ReactGA from "react-ga";
import AppConfig from "App.config";

const history = createBrowserHistory();

ReactGA.initialize(AppConfig.GOOGLE.GA_TRACKING_CODE);

function App() {
    return (
        <Router history={history}>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        ))}

                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route>
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
