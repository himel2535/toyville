import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const TryNowForm = () => {
  const { successAlert, errorAlert } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password)
    e.target.reset()
    if (!email) {
     return errorAlert("Please Provide Email");
    }
    if (!password) {
      return errorAlert("Please Provide Password");
    }
    return successAlert();
    
    
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-lg font-semibold">Try Now Yourself</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

              <button type="submit" className="btn-default mt-4">
                Try Now
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TryNowForm;
