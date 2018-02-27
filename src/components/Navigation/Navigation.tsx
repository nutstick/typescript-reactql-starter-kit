import * as cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import * as l from '../Header/logo-small.png';
import { Link } from '../Link';
import * as s from './Navigation.css';

const messages = defineMessages({
  about: {
    id: 'navigation.about',
    defaultMessage: 'About',
    description: 'About link in header',
  },
  todos: {
    id: 'navigation.todos',
    defaultMessage: 'Todo',
    description: 'Todos link in header',
  },
});

@withStyles(s)
export class Navigation extends React.Component<{}> {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/todos">
          <FormattedMessage {...messages.todos} />
        </Link>
        <Link className={s.link} to="/about">
          <FormattedMessage {...messages.about} />
        </Link>
      </div>
    );
  }
}
