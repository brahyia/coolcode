
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from "./Page-Components/Register/Register"
import Homepage from "./Page-Components/Homepage/Homepage"
import Login from "./Page-Components/Login/Login"
import Resource from "./Page-Components/Resource/Resource"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>,
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
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
