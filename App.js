import React from "react";
import ReactDOM from "react-dom/client";
import "/App.css";
import Body from "./components/Body";
import Search from "./components/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

const Header = () => {
  return (
    <>
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Card</li>
      </ul>
    </div>
    </>
  );
};



const Footer = () => {
  return <h1>Footer baba</h1>;
};


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Search/>
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
  },
  {
    path:"/about",
    element: <About></About>,
  },
]) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
