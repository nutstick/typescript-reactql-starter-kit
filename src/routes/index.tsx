import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../routes/Home';
import { NotFound } from '../routes/NotFound';
import { Todos } from '../routes/Todos';

export default (props) => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/examples/todo" component={Todos} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);
