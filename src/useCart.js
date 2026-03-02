import { useContext } from "react";
import CarritoContexto from "./carritoContexto";

export function useCart() {
  return useContext(CarritoContexto);
}
