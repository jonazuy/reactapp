import React from 'react'
import ItemCard from './ItemCard'


const Item = ({productos}) => {
  return (
    <div className='col-2'>



             <ItemCard key={productos.id} nombre={productos.nombre} descripcion={productos.descripcion} imagen={productos.imagen} precio={productos.precio} stock={productos.stock} />
          


    </div>
  )
}

export default Item