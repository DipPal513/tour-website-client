import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {setIsloading} = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { setUser, signInUsingGoogle, error } = useAuth();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleSignIn = async () => {
    await signInUsingGoogle()
      .then((res) => res.user)
      .then((data) => {
        setUser(data);
      })
      .finally(() => {
        history.push(redirect_uri);
        setIsloading(false)
      });
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  placeholder="Not Available"
                  readOnly
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  placeholder="Not Available"
                  readOnly
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign in
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">
                  Only Available
                </p>

                <button onClick={handleGoogleSignIn}>
                  <FcGoogle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
