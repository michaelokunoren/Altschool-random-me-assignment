import React from "react";
import { Link } from "react-router-dom";
import "../styles/pagenotfound.css";

function PageNotFound() {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="row-2">
          <h1>404 Page</h1>
        </div>
        <div className="row-2">
          <p>page not found.</p>
        </div>
        <div className="row-2">
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
