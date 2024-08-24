import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./components/Body";
import Search from "./components/Search";


const Header = () => {
  return <h1>Swiggy</h1>;
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
