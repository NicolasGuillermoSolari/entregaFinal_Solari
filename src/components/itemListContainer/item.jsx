import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.image} alt={producto.title} />
      <h4>{producto.title}</h4>
      <p>Precio: U$s {producto.price}</p>
      <p>Categoria: {producto.category}</p>
      <p>Stock: {producto.stock}</p>
      <p>Descripción: {producto.description}</p>
      <Link className="ver-mas" to={´/item/${producto.id}´}>
        Ver más
      </Link>
    </div>
  );
};

export default Item;
