import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar.jsx'
const ListProperties = () => {
    const [cartData,setCartData]=useState([])
    const getDataFromApi= async()=>{
        const response=await axios.get("https://dummyjson.com/products")
        
        setCartData(response.data.products)
    }
    useEffect(() => {
      getDataFromApi()
      
    }, [])
    
    return (
        
        <>
      <h1 className='text-3xl font-bold text-center my-4'>Api Data</h1>
             <div className='flex flex-wrap gap-4 mt-4 ml-2'>
               {cartData.map((each)=>(
                
                 <div className="w-72 max-h-80 overflow-hidden rounded-xl bg-white shadow-md">
                    <img
                        src={each.images[0]}
                        alt="Profile"
                        className="h-[50%] w-full object-contain"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold">{each.title}</h2>
                      <p className="mt-2 text-gray-600">
                            <span className="font-semibold">Price:</span> {each.price}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Discount Percentage:</span> {each.discountPercentage}%
                        </p>
                    </div>
                </div>
                
               ))}
            </div>
        </>
    )
}

export default ListProperties