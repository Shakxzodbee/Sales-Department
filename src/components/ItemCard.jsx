import React from 'react'
import { useCart } from 'react-use-cart'

const ItemCard = ({ item }) => {
  const { addItem } = useCart()
  return (
    <div className="coll-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden shadow" s >
        <img style={{ "height": "60%" }} src={item.img} className="card-img-top img-fluid " alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price} sum</p>
          <h6 className='card-text'>{item.desc}</h6>
          <button onClick={() => addItem(item)} className="btn btn-success">Savatga qo`shish</button>
        </div>
      </div>

    </div>

  )
}

export default ItemCard