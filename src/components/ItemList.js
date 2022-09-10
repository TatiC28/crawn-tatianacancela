import React,{useState} from 'react'
import Item from './Item';

const ItemList = () => {
    const [items,setItem] = useState ([
        {id: 1, 
        title: "Campera Think",
        price: "$900",
        img: "https://images.unsplash.com/photo-1523111567642-f71bebeb173f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" },
        {
            id: 2,
            title: "Campera Rita",
            price: "$1050",
            img: "https://images.unsplash.com/photo-1621359709843-1f86130c042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=546&q=80"
        },
        {
            id: 3,
            title: "Remera Black",
            price: "$2000",
            img: "https://images.unsplash.com/photo-1556094896-23de9115a14d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        }
    ])
  return (
    <div className = "row">
        {items.map(item => {
            return (
                < Item title = {item.title}img = {item.img}price = {item.price} />
            )
        } )}
    </div>
  );
}

export default ItemList;