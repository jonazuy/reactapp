import React from 'react'

const Itemdetail = ({Item}) => {
  return (
    <div className='container'>

    <img src={productos.img} />
    <h3>{Item.nombre}</h3>
    <p>{Item.nombre}</p>
    <p>{Item.stock}</p>
   <button>Agregar al carrito</button>
    </div>
  )
}

export default Itemdetail