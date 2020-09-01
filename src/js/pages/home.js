import React from "react";
import { useSelector } from "react-redux";
import Books from "../../js/component/books";

const Home = () => {
  return (
    <div>
      <h1>Welcome to library</h1>
      <Books />
    </div>
  );
};

export default Home;
