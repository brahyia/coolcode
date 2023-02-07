
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Register from "./Page-Components/Register/Register";
import Homepage from "./Page-Components/Homepage/Homepage";
import Login from "./Page-Components/Login/Login";
import Resource from "./Page-Components/Resource/Resource";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./Page-Components/Login/Login.scss";
import "./components/Navbar/Navbar.scss";
import "./styles.scss";


const Layout = ()=> {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
 }


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path : "/",
        element: <Homepage></Homepage>
      },
      {
        path : "/Resource",
        element: <Resource></Resource>
      },
      
      {
        path : "/other/id",
        element: <other></other>
      },

    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "resource",
    element: <Resource/>,
  },
]);


function App() {
  
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

 

export default App;
