import { useEffect, useState } from "react";
import CarritoContexto from "./carritoContexto";

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("cart");
    if (carritoGuardado) {
      return JSON.parse(carritoGuardado);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

  const agregarItem = (producto, cantidad = 1) => {
    if (cantidad <= 0) return;

    setCarrito((carritoAnterior) => {
      let productoExiste = false;

      const carritoActualizado = carritoAnterior.map((productoEnCarrito) => {
        if (productoEnCarrito.id === producto.id) {
          productoExiste = true;
          return {
            ...productoEnCarrito,
            cantidad: productoEnCarrito.cantidad + cantidad,
          };
        }

        return productoEnCarrito;
      });

      if (productoExiste) {
        return carritoActualizado;
      }

      return [...carritoAnterior, { ...producto, cantidad }];
    });
  };

  const eliminarItem = (id) => {
    setCarrito((carritoAnterior) =>
      carritoAnterior.filter((productoEnCarrito) => productoEnCarrito.id !== id)
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  let totalProductos = 0;
  let precioTotal = 0;

  carrito.forEach((productoEnCarrito) => {
    totalProductos += productoEnCarrito.cantidad;
    precioTotal += productoEnCarrito.price * productoEnCarrito.cantidad;
  });

  return (
    <CarritoContexto.Provider
      value={{
        carrito,
        agregarItem,
        eliminarItem,
        vaciarCarrito,
        totalProductos,
        precioTotal,
      }}
    >
      {children}
    </CarritoContexto.Provider>
  );
}
