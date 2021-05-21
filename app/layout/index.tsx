import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { IRouteConfig, routes as allRoutes } from 'app/routers/routes';
import './index.less';

function getRoutes(allRouters: IRouteConfig[]): IRouteConfig[] {
  const getFlattenRoutes = (routeItem: IRouteConfig[] = allRouters, result: IRouteConfig[] = []): IRouteConfig[] => {
    routeItem.forEach(item => {
      if (item.children) {
        result.concat(getFlattenRoutes(item.children, result));
      } else {
        result.push(item);
      }
    });
    return result;
  };

  return getFlattenRoutes();
}

export default function AppLayout(): JSX.Element {
  const routes = getRoutes(allRoutes);
  const spinner = (
    <div className="app-spinner">
      <Spinner
        size="md"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="cyan.500"
      />
    </div>
  );

  return (
    <Router basename="/music-player">
      <Suspense fallback={spinner}>
        <Switch>
          {routes.map(route => (route.component && route.link) ?
            <Route key={route.link} exact path={route.link} component={lazy(route.component)} /> :
            null
          )}
        </Switch>
      </Suspense>
    </Router>
  );
}