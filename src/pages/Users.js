import React, { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../components/User";
import { Pagination } from "../components/Pagination";
import { Link, useNavigate } from "react-router-dom";
import "../styles/users.css";

// throw new Error('invalid page')

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 10;
  const totalUsersFetched = 50;

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await axios.get(`https://randomuser.me/api/?results=${totalUsersFetched}`);
      setUsers(res.data.results);
      // console.log(res.data.results);
      setLoading(false);
    };
    fetchUser();
  }, []);
  // console.log(users.length)
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  ///
  const navigate = useNavigate()
  ///
  const handleNext = (event) => {
    event.preventDefault();
    const length = users.length;
    const count = length - 1;
    if (currentPage < count) {
      setCurrentPage(currentPage + 1);
      navigate(`/users/${currentPage + 1}`)
    } else {
      setCurrentPage(1);
    }
  };

  const handlePrevious = (event) => {
    event.preventDefault();

    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      navigate(`/users/${currentPage - 1}`);
    } else {
      setCurrentPage(1);
    }
  };



  return (
    <div className="main">
      <div className="user-page">
        <header>
          <h1>Random Users</h1>
        </header>
        <content>
          <User className="user-info" users={currentUser} loading={loading} />
        </content>
        <nav>
          <ul className="navigate">
            <li>
              <button onClick={handlePrevious} disabled={currentPage === 1}>
                Prev
              </button>
            </li>
            <li>
              <Pagination
                usersPerPage={userPerPage}
                totalUsers={totalUsersFetched}
                paginate={paginate}
              />
            </li>
            <li>
              <button onClick={handleNext} disabled={currentPage === Math.ceil(totalUsersFetched / userPerPage)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
        <div className="button">
        <Link to="/" className="btn">
          Back to Home
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
