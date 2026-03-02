import { Link } from "react-router-dom";
import { useCart } from "./useCart";

function CartWidget() {
  const { totalProductos } = useCart();

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <h2>🛒 {totalProductos}</h2>
    </Link>
  );
}

export default CartWidget;