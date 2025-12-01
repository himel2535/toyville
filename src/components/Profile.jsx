import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userLogo from "../assets/user.png";
import Loading from "./Loading";
import { Helmet } from "react-helmet";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const { user, setUser, updateUser, successAlert, errorAlert } =
    useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUser({ displayName: name, photoURL: photoURL });
      const auth = getAuth();
      // setUser(auth.currentUser);
      await auth.currentUser.reload();
      setUser({ ...auth.currentUser });

      successAlert("Profile Updated", "Your profile info has been updated!");
    } catch (error) {
      console.log(error.message);
      errorAlert("Update Failed", error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col md:flex-row items-center justify-center  gap-10 px-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile-ToyVille</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* Profile Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md w-full text-center">
        <h2 className="text-xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">My Profile</h2>
        <div className="mb-4">
          <img
            src={user?.photoURL || userLogo}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-transparent bg-gradient-to-r from-amber-400 to-rose-400 bg-origin-border"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 ">
          {user?.displayName || "No Name"}
        </h2>
        <p className="text-gray-500 ">{user?.email}</p>
      </div>

      {/*--- Form ---*/}
      <form
        onSubmit={handleSave}
        className="card bg-base-100 p-6 w-full max-w-md shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">Edit Profile</h2>

        <label className="label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="input mb-4 w-full"
          required
        />

        <label className="label">Photo URL</label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Enter your photo URL"
          className="input mb-4 w-full"
          required
        />

        <button
          type="submit"
          className={` btn-default w-full ${loading ? "btn-disabled" : ""}`}
        >
          {loading ? <Loading></Loading> : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
