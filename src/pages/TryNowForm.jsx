import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const TryNowForm = () => {
  const { successAlert, errorAlert } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();

    if (!email) return errorAlert("Please Provide Email");
    if (!password) return errorAlert("Please Provide Password");
    return successAlert();
  };

  return (
    <div className="hero bg-base-200 h-full">
      <div className="hero-content flex-col w-full">
        <div className="text-center mb-4">
          <h1 className="text-xl md:text-2xl font-bold">Try Now Yourself</h1>
        </div>
        <div className="card bg-base-100 w-full md:w-96 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset space-y-4">
              <div>
                <label className="label font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="label font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="btn-default w-full mt-4 text-lg"
              >
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
