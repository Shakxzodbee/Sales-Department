import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {items,
    isEmpty,
    totalUniqueItems,
    cartTotal,
    totalItems, 
    updateItemQuantity, 
    emptyCart, 
    removeItem} = useCart()

    if(isEmpty) {
        return <h5 className='text-center'> Savat bo`sh</h5>
    }

return (
    <section className='py-5 container'>
        <div className="row justify-content-center">
            <div className="col-12 ">
                <h5>Mahsulot ({totalUniqueItems}), Umumiy miqdori: ({totalItems})</h5>
                <table className='table   m-0'>
                    {items.map((item) => (
                        <tbody key={item.id}>
                            <tr >
                                <td>
                                    <img src={item.img} style={{height:"6rem"}} alt="img" />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price} sum</td>
                                <td>Miqdori ({item.quantity})</td>
                                <td>
                                    <button className='btn btn-info ms-2 '
                                    onClick={()=> updateItemQuantity(item.id, item.quantity-1)} 
                                    >-</button>
                                    <button className='btn btn-info ms-2'
                                    onClick={()=> updateItemQuantity(item.id, item.quantity+1)}
                                    >+</button>
                                    <button 
                                    onClick={() => removeItem(item.id)}
                                    className='btn btn-danger ms-4'>Savatdan o`chirish</button>
                                </td>
                            </tr>
                        </tbody>
                        
                    ))}
                </table>
            
            </div>
            <div className="col-auto ms-auto">
                <h2>Umumiy narxi: {cartTotal} sum</h2>
            </div>
            <div className="col-auto">
            <button 
            onClick={() => emptyCart()}
            className="btn btn-danger m-2">Savatni tozalash</button>
                <button
            className='btn btn-primary '>Sotib olish</button>
            </div>
        </div>
    </section>
  )
}

export default Cart