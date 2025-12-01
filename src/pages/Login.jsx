import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login, setUser, errorAlert, successAlert, signInWithGoogle } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const [emailInput, setEmailInput] = useState("");

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ email, password });

    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        successAlert("Login Successful", "Welcome to ToyVille!");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        errorAlert(`Login Failed`, error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        successAlert(
          "Successfully Login with google ",
          "Welcome to ToyVille!",
          user.photoURL
        );
        navigate(location?.state || "/");
        // navigate(location.state?.from?.pathname || "/");
        // console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        errorAlert(error.message);
      });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero w-full bg-base-200 -mt-10 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login-ToyVille</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero-content flex-col w-full md:w-xs">
        <div className="text-center">
          <h1 className="text-lg font-semibold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-2xl  shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              {/* ---Email--- */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                // ref={emailRef}
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="input"
                placeholder="Email"
                required
              />
              {/* ---Password--- */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  // className="input"
                  className="input pr-12"
                  placeholder="Password"
                  required
                />
                {/* ---Eye Btn */}
                <span
                  type="button"
                  onClick={handleShowPassword}
                  className="absolute inset-y-0 right-0
                  px-3 flex items-center
                  cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div>
                <Link
                  to="/forgotPassword"
                  // state={{ email: emailRef.current?.value || "" }}
                  state={{ email: emailInput }}
                  className="link link-hover"
                >
                  Forgot password?
                </Link>
              </div>
              <button type="submit" className="btn-default  mt-2">
                Login
              </button>

              <p className="text-center">Or</p>

              {/* ---sign in with google--- */}
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p>
                Don't have any account?{""}{" "}
                <span className="font-bold underline text-blue-500">
                  <Link to="/register">Register</Link>
                </span>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
