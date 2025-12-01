import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Register = () => {
  const {
    createUser,
    setUser,
    errorAlert,
    successAlert,
    updateUser,
    signInWithGoogle,
  } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ name, photo, email, password });

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase) {
      return errorAlert(
        "Password Error",
        "Password must contain at least one uppercase letter."
      );
    }
    if (!hasLowercase) {
      return errorAlert(
        "Password Error",
        "Password must contain at least one lowercase letter."
      );
    }
    if (!hasMinLength) {
      return errorAlert(
        "Password Error",
        "Password must be at least 6 characters long."
      );
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            successAlert(
              "Registration Successful!",
              `Welcome Mr. ${name}!`,
              photo
            );
            e.target.reset();
          })
          .catch((error) => {
            setUser(user);
            errorAlert(` Sorry ${name} Update Failed`, error.message);
          });
      })
      .catch((error) => {
        errorAlert(` Sorry ${name} Registration Failed`, error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        successAlert(
          "Successfully Login with google ",
          "Welcome to ToyVille!",
          user.photoURL
        );
        navigate(location?.state || "/");
        // console.log(user);
        // navigate(location.state?.from?.pathname || "/");
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
    <div className="hero  bg-base-200 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register-ToyVille</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero-content flex-col w-full md:w-xs">
        <div className="text-center">
          <h1 className="text-lg font-semibold">Register now</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* ---Name--- */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* ---Photo URL--- */}
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />
              {/* ---Email--- */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
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
              <button type="submit" className="btn-default mt-2">
                Register
              </button>
              <p>
                Already have an account?{" "}
                <span className="font-bold underline text-blue-500">
                  <Link to="/login">Login</Link>
                </span>{" "}
              </p>

              {/*--- Google ---*/}
              <button
                onClick={handleSignInWithGoogle}
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
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
