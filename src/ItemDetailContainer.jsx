import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === id));
      }, 1000);
    });

    getProduct.then((res) => setItem(res));
  }, [id]);

  return (
    <>
      {item ? <ItemDetail product={item} /> : <h2>Cargando...</h2>}
    </>
  );
}

export default ItemDetailContainer;