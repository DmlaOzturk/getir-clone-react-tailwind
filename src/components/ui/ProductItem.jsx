import React from 'react'
import {FiPlus} from 'react-icons/fi'


export default function ProductItem({product}) {
  return (
    
    <div className='bg-white flex flex-col items-center text-center gap-y-1 p-3 relative'>
      <button className=' absolute top-2 rounded-md right-2 p-2 font-semibold bg-white shadow-md text-brand-color hover:text-brand-yellow hover:bg-secondary-brand-color cursor-pointer' > <FiPlus size={16}/> </button>
        <img src={product.image} alt={product.title} />
        <div className='text-sm font font-semibold text-brand-color'>₺{product.price}</div>
        <div className='font-semibold text-sm'>{product.title}</div>
        <div className='text-sm text-[#a6a4a4] font-semibold'>{product.alt}</div>
    </div>
  )
}
