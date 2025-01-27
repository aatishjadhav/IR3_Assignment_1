import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="bg-dark text-light py-4">
    <div className="container">
      <h1>Ecommerce Website</h1>
      <ul className="nav">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
