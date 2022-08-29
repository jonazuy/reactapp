import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'



const productos = [
   {
      "id": 1,
      "nombre": "Macbook air",
      "imagen": "img/prod2.jpg",
      "descripcion": "Apple MacBook Air MD711LL/A 11.6-inch Laptop",
      "precio": 500,
      "cantidad": 1,
      "stock": 2,
      "envio": 1,
      "descuento": 25

   },
   {
      "id": 2,
      "nombre": "Monitor Benq 24 pulgadas",
      "imagen": "img/prod3.jpg",
      "descripcion": "BenQ Zowie XL2540K 24.5 inch 240Hz Gaming Monitor",
      "precio": 500,
      "cantidad": 1,
      "stock": 5,
      "envio": 0,
      "descuento": 25


   },
   {
      "id": 3,
      "nombre": "Placa Gamer Gygabyte",
      "imagen": "img/prod4.jpg",
      "descripcion": "Wi-Fi GIGABYTE B450 AORUS PRO (Protección térmica AMD Ryzen)",
      "precio": 150,
      "cantidad": 1,
      "stock": 2,
      "envio": 0,
      "descuento": 25


   },
   {
      "id": 4,
      "nombre": "Grafica XFX",
      "imagen": "img/prod5.jpg",
      "descripcion": "XFX Speedster SWFT 210 Radeon RX 6600 CORE Gaming",
      "precio": 350,
      "cantidad": 1,
      "stock": 9,
      "envio": 1,
      "descuento": 25

   },
   {
      "id": 5,
      "nombre": "Smartv Hisense",
      "imagen": "img/prod6.jpg",
      "descripcion": "Hisense ULED Premium 65U7G QLED Series 65-inch Android 4K",
      "precio": 800,
      "cantidad": 1,
      "stock": 7,
      "envio": 0,
      "descuento": 25


   },
   {
      "id": 6,
      "nombre": "Intel i5",
      "imagen": "img/prod7.jpg",
      "descripcion": "Procesador Intel Core i5-10400 para equipos de sobremesa 6 núcleos hasta 4,3 GHz ",
      "precio": 200,
      "cantidad": 1,
      "stock": 4,
      "envio": 1,
      "descuento": 25



   },
   {
      "id": 7,
      "nombre": "Apple Ipod ",
      "imagen": "img/prod8.jpg",
      "descripcion": "Apple iPad Pro Tablet (128GB, Wi-Fi, 9.7in) Gray (Renewed)",
      "precio": 900,
      "cantidad": 1,
      "stock": 3,
      "envio": 0,
      "descuento": 25


   },
   {
      "id": 8,
      "nombre": "Joystick Xbox One",
      "imagen": "img/prod9.jpg",
      "descripcion": "Xbox Core Wireless Controller Pulse Red",
      "precio": 100,
      "cantidad": 1,
      "stock": 7,
      "envio": 1,
      "descuento": 25


   },
   {
      "id": 9,
      "nombre": "Iphone 11 128gb",
      "imagen": "img/prod10.jpg",
      "descripcion": "Apple iPhone 11, 64GB, Black - Unlocked (Renewed)",
      "precio": 1200,
      "cantidad": 1,
      "stock": 6,
      "envio": 0,
      "descuento": 25


   },
   {
      "id": 10,
      "nombre": "Joystick Ps5",
      "imagen": "img/prod11.jpg",
      "descripcion": "Playstation DualSense Wireless Controller",
      "precio": 160,
      "cantidad": 1,
      "stock": 4,
      "envio": 1,
      "descuento": 25


   },
   {
      "id": 11,
      "nombre": "Macbook M1 max",
      "imagen": "img/prod12.jpg",
      "descripcion": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina",
      "precio": 1200,
      "cantidad": 1,
      "stock": 3,
      "envio": 1,
      "descuento": 25


   },
   {
      "id": 12,
      "nombre": "Lenovo Legion",
      "imagen": "img/prod13.jpg",
      "descripcion": "Lenovo Legion 2022 16gb Ram ddr4 rtx3050 2TB SSD",
      "precio": 900,
      "cantidad": 1,
      "stock": 8,
      "envio": 0,
      "descuento": 25


   },
   {
      "id": 13,
      "nombre": "Apple Airpods",
      "imagen": "img/prod14.jpg",
      "descripcion": "Apple Airpods Wireless 15h duracion ",
      "precio": 180,
      "cantidad": 1,
      "stock": 5,
      "envio": 1,
      "descuento": 25


   },
   {
      "id": 14,
      "nombre": "Zotac Rtx 3060",
      "imagen": "img/prod15.jpg",
      "descripcion": "ZOTAC Gaming GeForce RTX 3060 Twin Edge OC 12GB GDDR6",
      "precio": 1000,
      "cantidad": 1,
      "stock": 8,
      "envio": 0,
      "descuento": 25


   },
   {
      "id": 15,
      "nombre": "Ryzen 5",
      "imagen": "img/prod16.jpg",
      "descripcion": "AMD Ryzen™ 5 5600 de 6 núcleos y 12 hilos con enfriador Wraith Stealthe",
      "precio": 300,
      "cantidad": 1,
      "stock": 5,
      "envio": 1,
      "descuento": 25


   },
   {
      "id": 16,
      "nombre": "Xbox One S",
      "imagen": "img/prod17.jpg",
      "descripcion": "Consola Xbox one S 4K edicion 2022",
      "precio": 350,
      "cantidad": 1,
      "stock": 5,
      "envio": 0,
      "descuento": 25

   },
   {
      "id": 17,
      "nombre": "EVGA GeForce RTX 3060 XC Gaming, 12G-P5-3657-KR, 12GB",
      "imagen": "img/prod18.jpg",
      "descripcion": "EVGA GeForce RTX 3060 XC Gaming, 12G-P5-3657-KR, 12GB",
      "precio": 700,
      "cantidad": 1,
      "stock": 8,
      "envio": 1,
      "descuento": 25

   }, {
      "id": 18,
      "nombre": "EVGA GeForce RTX 3060 XC Gaming, 12G-P5-3657-KR, 12GB",
      "imagen": "img/prod19.jpg",
      "descripcion": "Philips 346E2CUAE 34 Curved Frameless, UltraWide QHD",
      "precio": 600,
      "cantidad": 1,
      "stock": 8,
      "envio": 0,
      "descuento": 25

   }
]



const ItemListContainer = () => {

   const [data , setData] = useState([])
   const [loading , setLoading] =  useState(true)

   const getData = () => {
      const error = false
      return new Promise((resolve, reject) => {

         setTimeout(() => {

            if (!error) {
               resolve(productos)
            } else {
               reject("Hubo un error")
            }


         }, 5000)
      }
      )
   }

useEffect(()=>{
getData()
.then(res =>{
   setData(res)
   setLoading(false)
} )
.catch( error => console.log(error))
},[])



   return (

            

      <div className='row'>
         {
            data.map(productos => (
               <div className='col-2'>
                  <ItemCard key={productos.id} nombre={productos.nombre} descripcion={productos.descripcion} imagen={productos.imagen} precio={productos.precio} stock={productos.stock} />
               </div>


            ))
         }

      </div>
   )
}

export default ItemListContainer