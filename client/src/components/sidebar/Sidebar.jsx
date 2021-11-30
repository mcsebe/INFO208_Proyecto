import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");

  const searchWord = () => {
    window.location.href = `/?postName=${search}`;
  };

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">SEARCH</span>
        <div class="field" id="searchform">
          <input
            type="text"
            id="searchterm"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="what are you searching for?"
          />
          <button type="button" onClick={searchWord}>
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
