import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Spinner } from "../common";

const Home = lazy(() => import("../pages/home"));

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route key="home" path="/" component={Home} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
