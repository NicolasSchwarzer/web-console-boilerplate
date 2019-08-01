import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Panel from '@/layouts/Panel';
import NotFound from '@/pages/NotFound';
import './index.scss';

export default function App() {
  return (
    <Panel>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route component={NotFound} />
      </Switch>
    </Panel>
  );
}
