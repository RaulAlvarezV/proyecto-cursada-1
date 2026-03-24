import { NavLink } from "react-router-dom";
import Logo_Sport_Zone from "./assets/img/Logo-Sport-Zone.png";
import CartWidget from "./CartWidget";

function NavBar() {
  const estiloLink = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
  });

  return (
    <>
    <img src={Logo_Sport_Zone} alt="Logo Sport Zone" style={ { width: "300px", height: "120px" }}/>
      <h1>Sport Zone</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/" style={estiloLink}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/category/remeras" style={estiloLink}>Remeras</NavLink>
          </li>
          <li>
            <NavLink to="/category/shorts" style={estiloLink}>Shorts</NavLink>
          </li>
          <li>
            <NavLink to="/category/zapatillas" style={estiloLink}>Zapatillas</NavLink>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;