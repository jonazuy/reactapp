import React from 'react'
import Item from './Item'
import ItemCard from './ItemCard'

const ItemList = ({productos} = []) => {
  return (
    
    <div className='row'>
    {
       productos.map((productos) => {

        return <Item productos={productos} key={productos.id}/>

       }


       )}
    

 </div>
  )
}

export default ItemList
