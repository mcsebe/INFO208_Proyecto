import "./topbar.css";
import Logo from "../../img/logo_UACH.png";
import { Link } from "react-router-dom";

import Imag from "../../img/edificio_UACH.jpg";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.uach.cl/" target="_blank" className="topLogoLink">
          <img src={Logo} alt="UACH" className="topLogo" />
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <a
              className="link"
              href="http://www.biblioteca.uach.cl/"
              target="_blank"
            >
              LIBRARY
            </a>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              {user && "WRITE"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src={user.profilePic ? PF + user.profilePic : Imag}
              alt=""
            />
          </Link>
        ) : (
          <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
        )}
        <li className="topListItem" onClick={handleLogout}>
          {user && "LOGOUT"}
        </li>
      </div>
    </div>
  );
}
