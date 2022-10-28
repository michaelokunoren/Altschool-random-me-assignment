import React from "react";
import {NavLink} from 'react-router-dom'
import '../styles/paginate.css'

export const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <NavLink
              onClick={() => paginate(number)}
              to={'/users/'+ number}
              className="page-link"
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
