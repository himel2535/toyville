import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

const ForgotPassword = () => {
  const { resetPassword, errorAlert } = useContext(AuthContext);

  const location = useLocation();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();

    resetPassword(email)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
        errorAlert("Something Wrong", error.message);
      });

    if (!email) {
      errorAlert("Please enter your email");
      return;
    }
    window.open(`https://mail.google.com/mail/u/0/#search/${email}`, "_blank");
  };

  return (
    <div className="hero min-h-screen  bg-base-200 -mt-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ForgetPassword</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero-content flex-col">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <form
          onSubmit={handleReset}
          className="card bg-base-100 p-6 w-full max-w-lg shadow-lg"
        >
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input mb-4"
            required
          />
          <button type="submit" className="btn-default w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
