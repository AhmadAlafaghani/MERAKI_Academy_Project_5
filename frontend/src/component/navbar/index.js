import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/auth";
import { useNavigate } from "react-router-dom";
//===============================================================

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, isLoggedIn } = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      token: state.auth.token,
      isLoggedIn: state.auth.isLoggedIn,
    };
  });
  //===============================================================

  return (
    <div className="NavBar">
      {isLoggedIn ? (
        <>
          <Link className="Link" to="/">
            Home
          </Link>
          <Link className="Link" to="/register">
            Register
          </Link>
          <button
            className="logout"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="Link" to="/">
            Home
          </Link>
          <Link className="Link" to="/register">
            Register
          </Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default NavBar;

// {state.isloggedIn ? (
//   <>
//     <Link className="Link" to="/tasks">
//       Tasks
//     </Link>
//     <Link className="Link" to="/complete tasks">
//       copmlete task
//     </Link>
//     <button
//       className="logout"
//       onClick={() => {
//         dispatch(logout());
//         navigate("/");
//       }}
//     >
//       Logout
//     </button>
//   </>
// ) : (
//   <>
//     <Link className="Link" to="/">
//       Register
//     </Link>
//     <Link to="/login">Login</Link>
//   </>
// )}
