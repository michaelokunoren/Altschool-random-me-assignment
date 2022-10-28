import React from "react";
import "../styles/user.css";

export const User = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading Users...</h2>;
  }
  return (
    <div className='user-box' >
      {users.map((user, index) => {
        return (
          <div className="user-group">
            <div className="user-group-item" key={index}>
              <img src={user.picture.medium} alt={user.name.first} />
              <h4>
                Name: {user.name.title} {user.name.first} {user.name.last}
              </h4>
              <p>Email: {user.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
