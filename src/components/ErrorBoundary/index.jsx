/**
 * Error boundary component to catch errors in descendant components:
 * https://reactjs.org/docs/error-boundaries.html
 */

import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './index.scss';

export default class ErrorBoundary extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  state = {
    hasError: false,
    errorStack: '',
    componentStack: '',
  };

  // Modal container dom to render error details in development environment.
  errorContainerEl = document.createElement('div');

  static getDerivedStateFromError() {
    // Change state to render fallback UI.
    return { hasError: true };
  }

  componentDidMount() {
    // Attach to body on mounted.
    document.body.appendChild(this.errorContainerEl);
  }

  componentDidCatch(error, info) {
    if (process.env.NODE_ENV === 'development') {
      // Only render error details in development environment.
      this.setState({
        errorStack: error.stack || '',
        componentStack: info.componentStack || '',
      });
    } else {
      // TODO: log error stack & component stack to error tracking services.
    }
  }

  componentWillUnmount() {
    // Detach from body on unmount.
    document.body.removeChild(this.errorContainerEl);
  }

  renderErrorDetails() {
    const { errorStack, componentStack } = this.state;
    if (errorStack || componentStack) {
      return createPortal(
        <div className={styles.errorContainer}>
          <span className={styles.errorTitle}>Oops, error occurs!</span>
          {!!errorStack && (
            <>
              <br />
              <br />
              {errorStack}
            </>
          )}
          {!!componentStack && (
            <>
              <br />
              <br />
              <span className={styles.errorTitle}>Component stack:</span>
              <br />
              {componentStack}
            </>
          )}
        </div>,
        this.errorContainerEl,
      );
    }
    return null;
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <>
          <div className={styles.fallback}>
            Oops, error occurs! Please contact administrator!
          </div>
          {this.renderErrorDetails()}
        </>
      );
    }
    return children;
  }
}
