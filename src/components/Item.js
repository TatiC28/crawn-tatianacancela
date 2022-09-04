import React from 'react'

const Item = (props) => {
  return (
  < div class = "col-lg-2 align-center" >
      <div class = "text-center card-box" >
      <div class = "member-card pt-2 pb-2" >
      <div class = "thumb-lg member-thumb mx-auto" >
      <img src = {props.img} href= "#" class = "img-thumbnail" alt = "profile-image" />
      </div> 
      <div class = "" >
        <h4 > {props.title} </h4> <p class = "text-muted"> {props.price} </p> 
        <button type = "button" class = "btn btn-primary" > Agregar al Carrito </button>
        </div > 
        </div> 
        </div>
         </div>
  )
}

export default Item