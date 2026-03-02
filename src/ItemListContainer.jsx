import { useState } from "react";

function Saludo (props) {
    //estados
    const [items, setItems] = useState(0);
    const [nombreArticulo, setNombreArticulo] = useState ("");



    //funciones-acciones
    const agregarAlCarrito = () => {
        setItems (items + 1);
    }



    //vista
    return (
        <>
            <div>
                <h3>{props.greeting}</h3>
                <h2>Este es tu carrito</h2>
            </div>
            <h3>🛒 Cantidad de productos en el carrito: {items}</h3>
            <button onClick={agregarAlCarrito}>
                Agregar al carrito
            </button>

 
 
 
 
        </>
    );
}   
export default Saludo;