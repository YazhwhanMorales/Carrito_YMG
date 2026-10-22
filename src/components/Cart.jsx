import React from 'react'

export const Cart = ({ productsCart, removeFromCart }) => {
  return (
    <div className='flex flex-col bg-slate-800 p-2 lg:p-3 w-full border-t-4 border-emerald-600 shadow-inner flex-[2] overflow-hidden'>
      <h2 className='text-white text-base lg:text-lg font-bold text-center mb-2 shrink-0'>Tus productos en carrito</h2>
      
      {productsCart.length === 0 ? (
        <p className='text-gray-400 text-center italic text-sm'>El carrito está vacío.</p>
      ) : (
        <div className='flex flex-row flex-nowrap justify-center items-stretch gap-3 w-full h-full overflow-hidden pb-1'>
          {productsCart.map((product) => (
            <div key={product.id} className='flex-1 min-w-0 max-w-[200px] flex flex-col gap-1 shadow-lg border border-gray-700 p-2 items-center justify-between bg-white rounded-lg shrink'>
              <h3 className='font-bold text-gray-800 text-xs lg:text-sm truncate w-full text-center' title={product.name}>{product.name}</h3>
              <span className='text-emerald-700 font-medium text-[11px] lg:text-xs shrink-0'>En carrito: {product.quantity}</span>
              
              {}
              <div className='flex-1 flex items-center justify-center min-h-[32px]'>
                <img src={product.src} alt={product.name} className='max-h-8 lg:max-h-12 w-auto object-contain' />
              </div>

              <button onClick={() => removeFromCart(product.id, product.quantity)} className='bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium text-[11px] lg:text-xs px-2 py-1 rounded-md transition-all mt-auto w-full shrink-0'>
                Quitar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}