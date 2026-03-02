import { Link } from "react-router-dom";
import Logo_Sport_Zone from "./assets/img/Logo-Sport-Zone.png";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
    <img src={Logo_Sport_Zone} alt="Logo Sport Zone" style={ { width: "300px", height: "120px" }}/>
      <h1>Sport Zone</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/remeras">Remeras</Link>
          </li>
          <li>
            <Link to="/category/shorts">Shorts</Link>
          </li>
          <li>
            <Link to="/category/zapatillas">Zapatillas</Link>
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