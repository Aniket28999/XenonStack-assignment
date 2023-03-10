import React from "react";
import HeaderReg from "./register/headerreg";
import BoxReg from "./register/boxreg";
import Header from "./start/header";
import Box from "./start/box";
import Boxlogin from "./login/boxlogin";
import Headerlogin from "./login/headerlogin";
import Boxdash from "./dashboard/boxdash";
import Headerdash from "./dashboard/headerdash";
import Error from "./error";
import Headerforget from "./forgetPassword/headerforget";
import Boxforget from "./forgetPassword/boxforget";
import Headerreset from "./reset/headerreset";
import Boxreset from "./reset/boxreset";

import Navbar from "./dashboard/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Headercontact from "./contactus/headercontact";
import Boxcontact from "./contactus/boxcontact";
// root routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Box />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Error />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <HeaderReg />
        <BoxReg />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Headerlogin />
        <Boxlogin />
      </div>
    ),
  },
  {
    path: "/dash",
    element: (
      <div class="dashboard">
        <Navbar />
        {/* <Headerdash /> */}
        <Boxdash />
      </div>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <div>
        <Headerforget />
        <Boxforget />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Headercontact />
        <Boxcontact />
      </div>
    ),
  },
  {
    path: "/forgetpassword/:id/:token",
    element: (
      <div>
        <Headerreset />
        <Boxreset />
      </div>
    ),
  },
], {basename:"https://xenonstackfe.onrender.com"});

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
