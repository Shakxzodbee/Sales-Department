import React from 'react'
import ItemCard from './ItemCard'
import { data } from '../data'

const Home = () => {
  return (
        <>
        <h1 className='text-center mt-3'>Barcha mahsulotlar</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {
                        data.productData.map((juice)=> (
                    <ItemCard key={juice.id} item = {juice} selectedItem={juice}/>
                        ))
                    }
                </div>
            </section>
        </>
  )
}

export default Home