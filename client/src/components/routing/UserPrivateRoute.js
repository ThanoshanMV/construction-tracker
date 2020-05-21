import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const UserPrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, isAdmin },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      // NOTE: !loading will always return true when loading has finished.
      // Authenticated and not an andmin (should be user) when loading has finished.
      if (isAuthenticated && !isAdmin && !loading) {
        return <Component {...props} />;
      } else {
        return <Redirect to='/' />;
      }
    }}

    /**
     * Default way of providing authenticatin when you have one role user only :
     * !isAuthenticated && !loading ?
     * ( <Redirect to='/' /> ) : ( <Component {...props} /> )
     */
  />
);

UserPrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(UserPrivateRoute);
