import { useState } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore";
import { useCart } from "./useCart";
import { db } from "./firebaseConfig";

function CheckoutForm() {
  const { carrito, precioTotal, vaciarCarrito } = useCart();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");

  const enviarOrden = async (e) => {
    e.preventDefault();

    if (!nombre || !telefono || !email) {
      setError("Completá todos los campos");
      return;
    }

    if (carrito.length === 0) {
      setError("No hay productos en el carrito");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const batch = writeBatch(db);
      const productosSinStock = [];

      for (const producto of carrito) {
        const productoRef = doc(db, "productos", producto.id);
        const productoFirestore = await getDoc(productoRef);

        if (!productoFirestore.exists()) {
          productosSinStock.push(producto.name);
          continue;
        }

        const stockActual = productoFirestore.data().stock;

        if (stockActual >= producto.cantidad) {
          batch.update(productoRef, {
            stock: stockActual - producto.cantidad,
          });
        } else {
          productosSinStock.push(producto.name);
        }
      }

      if (productosSinStock.length > 0) {
        setError(`Sin stock para: ${productosSinStock.join(", ")}`);
        setLoading(false);
        return;
      }

      const orden = {
        comprador: {
          nombre,
          telefono,
          email,
        },
        items: carrito.map((producto) => ({
          id: producto.id,
          name: producto.name,
          price: producto.price,
          cantidad: producto.cantidad,
        })),
        total: precioTotal,
        fecha: serverTimestamp(),
      };

      await batch.commit();

      const ordenRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(ordenRef.id);
      vaciarCarrito();
    } catch {
      setError("No se pudo generar la orden");
    } finally {
      setLoading(false);
    }
  };

  if (ordenId) {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Compra confirmada</h2>
        <p>Tu id de orden es: {ordenId}</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto", textAlign: "left" }}>
      <h2>Checkout</h2>

      <form onSubmit={enviarOrden}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Teléfono</label>
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Generando orden..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;