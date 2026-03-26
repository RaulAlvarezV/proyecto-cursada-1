import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { db } from "./firebaseConfig";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [categoriaCargada, setCategoriaCargada] = useState("");
  const [error, setError] = useState("");
  const { categoryId } = useParams();
  const categoriaActual = categoryId || "todas";
  const loading = categoriaCargada !== categoriaActual;

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const consulta = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    getDocs(consulta)
      .then((res) => {
        const productosFirestore = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(productosFirestore);
        setError("");
        setCategoriaCargada(categoriaActual);
      })
      .catch((error) => {
        setError(`No se pudieron cargar los productos: ${error.message}`);
        setCategoriaCargada(categoriaActual);
      });
  }, [categoryId, categoriaActual]);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (items.length === 0) {
    return <h2>No hay productos para esta categoría</h2>;
  }

  return (
    <>
      <h2>Catálogo de productos</h2>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;