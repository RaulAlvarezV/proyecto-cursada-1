import { Link } from "react-router-dom";
import { useCart } from "./useCart";

function Cart() {
  const { carrito, eliminarItem, vaciarCarrito, precioTotal } = useCart();

  if (carrito.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", padding: "0 15px" }}>
      <h2>Carrito de compras</h2>

      {carrito.map((producto) => (
        <div
          key={producto.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "12px",
          }}
        >
          <h3>{producto.name}</h3>
          <p>Precio unitario: ${producto.price}</p>
          <p>Cantidad: {producto.cantidad}</p>
          <p>Subtotal: ${producto.price * producto.cantidad}</p>
          <button onClick={() => eliminarItem(producto.id)}>Eliminar</button>
        </div>
      ))}

      <h3>Total: ${precioTotal}</h3>

      <button onClick={vaciarCarrito} style={{ marginRight: "10px" }}>
        Vaciar carrito
      </button>
      <Link to="/checkout" style={{ marginRight: "10px" }}>
        Terminar compra
      </Link>
      <Link to="/">Seguir comprando</Link>
    </div>
  );
}

export default Cart;
