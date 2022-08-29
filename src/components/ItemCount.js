import React, { useState } from 'react'
import { Button } from 'reactstrap'


const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0)

const handleSumar = () =>{
    if (count < stock){
      setCount(count+1)
    }

}

const handleRestar = () =>{
    if (count > 0){
      setCount(count-1)
    }
    
}

  return (
    <div>

        <Button onClick={handleRestar}> - </Button>
        <span> {count} </span>
        <Button onClick={handleSumar}> + </Button>
        <Button style={{width: "100%" , marginTop: "1rem"}} disabled={stock <= 0}>Agregar al carrito </Button>
    </div>
  )
}

export default ItemCount