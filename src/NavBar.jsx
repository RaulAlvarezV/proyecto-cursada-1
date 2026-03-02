import Cart from "./CartWidget";
function Navbar() {
  return (
    <>
    <img src="./src/assets/img/Logo Sport Zone.png" alt="" />
    <h1>Sport Zone</h1>
    <h2>Tienda deportiva</h2>
    <nav>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Envios</li>
        <li>Quienes Somos?</li>
        <li>Contacto</li>
      </ul>
        <Cart />
    </nav>
    </>
    
  )
}

export default Navbar;