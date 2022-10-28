import { Link } from "react-router-dom";
import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="row">
          <h2>This generates random users</h2>
        </div>
        <div className="row">
          <Link to="/users/1" className="btn">
            Click to view
          </Link>
        </div>
       
      </div>
      <div className="container-2">
        <div className="row">
          <h2>Click Below to view errorBoundary</h2>
        </div>
        <div className="row">
          <Link to="/error" className="btn">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
