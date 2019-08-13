import React, { Suspense, lazy, memo } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Panel from '@/layouts/Panel';
import ErrorBoundary from '@/components/ErrorBoundary';
import ImportSpin from '@/components/ImportSpin';
import NotFound from '@/pages/NotFound';
import './index.scss';

/**
 * Use Suspense & lazy to do code splitting,
 * if you want ssr, library splitting & full dynamic import, please use @loadable/component instead:
 * for reference: https://reactjs.org/docs/code-splitting.html#reactlazy,
 * https://www.smooth-code.com/open-source/loadable-components/docs/loadable-vs-react-lazy/
 *
 * Use webpackChunkName to persist splitted (non-entry) chunk file name.
 */
const Dashboard = lazy(() => import(/* webpackChunkName: "dashboard" */ '@/pages/Dashboard'));
const Profile = lazy(() => import(/* webpackChunkName: "profile" */ '@/pages/Profile'));
const Settings = lazy(() => import(/* webpackChunkName: "settings" */ '@/pages/Settings'));

function App() {
  return (
    <Panel>
      <ErrorBoundary>
        <Suspense fallback={<ImportSpin />}>
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/settings" component={Settings} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Panel>
  );
}

// Use memo to optimize performance of function components.
export default memo(App);
