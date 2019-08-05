/**
 * Error boundary component to catch errors in descendant components:
 * https://reactjs.org/docs/error-boundaries.html
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // Change state to render fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, info) {
  //   // TODO: use createPortal to render error details in development environment.
  // }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // TODO: use createPortal to render error prompt in both environments.
      return (
        <div className={styles.fallback}>
          Oops, error occurs! Please contact administrator!
        </div>
      );
    }
    return children;
  }
}
