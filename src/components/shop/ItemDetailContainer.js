import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const product = {
    name: 'Canguro' ,
    price: 1100 ,
    img: 'https://images.unsplash.com/photo-1621359709843-1f86130c042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=546&q=80',
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