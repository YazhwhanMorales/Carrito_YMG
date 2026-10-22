import React from 'react'

export const Catalog = ({products, addToCart}) => {
  return (
    <div className='flex flex-wrap bg-amber-50 p-6 justify-center flex-[8] content-start gap-6 overflow-hidden'>
       {products.map((product)=>(
           <div key={product.id} className='flex flex-col md:flex-row gap-4 shadow-md border border-gray-200 w-full sm:w-[45%] lg:w-[45%] xl:w-[45%] p-6 m-2 justify-between items-center bg-white rounded-lg hover:shadow-lg transition-shadow shrink min-h-[200px]'>
             <div className='flex flex-col w-full md:w-1/2'>
                 <h3 className='font-bold text-lg lg:text-xl text-gray-800 mb-2 truncate'>{product.name}</h3>
                 <span className='text-sm text-gray-600 mb-2'>Disponibles: <span className="font-semibold">{product.quantity}</span></span>
                 <span className='text-sm text-gray-500 mb-4 line-clamp-3' title={product.description}>{product.description}</span>
                 <button onClick={()=>addToCart(product.id)} className='bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors active:scale-95 w-max'>Agregar al carrito</button>
             </div>
             <div className='w-full md:w-1/2 flex justify-center'>
                 <img src={product.src} alt="producto" className='max-h-32 lg:max-h-40 object-contain rounded' />
             </div>
           </div>
       ))}
    </div>
  )
}