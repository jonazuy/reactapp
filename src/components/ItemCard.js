import React from 'react'
import { Button , Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap'
import ItemCount from './ItemCount';

const ItemCard = (props) => {
    const {id , nombre , imagen , descripcion , precio , cantidad , stock} = props;
  return (
    
    <div>
        <Card
  className="my-2"
  style={{
    width: '12rem' 
  }}
>
  <CardHeader>
    Header
  </CardHeader>
  <img src={imagen}/>
  <CardBody>
    <CardTitle tag="h5">
      {nombre}
    </CardTitle>
    <CardText>
      {descripcion}
    </CardText>
    <ItemCount stock={stock}/>
  </CardBody>
  <CardFooter>
   Stock  {stock} -
   USD {precio}
  </CardFooter>
</Card>
    </div>
  )
}

export default ItemCard