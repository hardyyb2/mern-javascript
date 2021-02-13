import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Spinner } from "../common";

const Home = lazy(() => import("../pages/home"));

const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route key="home" path="/" component={Home} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
