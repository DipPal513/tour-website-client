import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const {user,isLoading} = useAuth();
  if(isLoading){
    return <div className = "my-5 py-5 text-center"><Spinner animation="border"  variant='danger'/></div>
  }
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
