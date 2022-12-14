import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Login } from "./pages/Login";
import { Member } from "./pages/Member";


import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import "./Style.scss"
import { Project } from "./pages/Project";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: < Home />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/projects/:id",
        element: <Projects />,
      },
      {
        path: "/addprojects",
        element: <Projects />,
      },
      {
        path: "/member",
        element: <Member />,
      },
    ],
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addprojects",
    element: <Projects />,
  },
  {
    path: "/project",
    element: <Project />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="bg">
      <div className="container">
      <RouterProvider router={router} />
      </div>
    </div>
    </div>
  );
}


export default App;
