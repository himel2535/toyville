import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Profile from "../components/Profile";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ToyDetails from "../pages/ToyDetails";
import PrivateRoute from "../provider/PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound from "../pages/NotFound";
import Loading from "../components/Loading";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
import Quiz from "../components/Quiz";
import QuizResults from "../components/QuizResults";
import AllToys from "../pages/AllToys";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

    errorElement: <NotFound></NotFound>,

    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/toys.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/allToys",
        Component: AllToys,
        loader: () => fetch("/toys.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/about",
        loader: () => fetch("/toys.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <About></About>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/toyDetails/:toyId",
        element: <ToyDetails></ToyDetails>,
        loader: () => fetch("/toys.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/terms",
        Component: Terms,
      },
      {
        path: "/privacy",
        Component: Privacy,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/quiz-results",
        element: <QuizResults />,
      },
    ],
  },
]);
