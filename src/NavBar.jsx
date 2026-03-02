import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
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
        </ul>
      </nav>
    </>
  );
}

export default NavBar;