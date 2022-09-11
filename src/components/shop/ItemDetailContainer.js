import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const product = {
  name: 'Canguro' ,
  price: 1100 ,
  img: '',
  description: ''
}
const ItemDetailContainer = () => {
    
    const [item, setItem] = useState ({})


    useEffect(() => {
     getItem(). then(data => {
        console.log (data);
        setItem (data)
     })
    }, [])
    
    const getItem = () => { 
        return new Promise(resolve => {
          setTimeout(() => {
           resolve ( product ) 
          }, 2000);  
        })
    }
  
    return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer