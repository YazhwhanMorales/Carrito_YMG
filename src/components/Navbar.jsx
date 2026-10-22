import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-center w-full h-[10vh] items-center bg-emerald-700 text-white shadow-md'>
        <ul className='list-none flex gap-8 font-bold cursor-pointer text-lg'>
            <li className="hover:text-emerald-200 transition-colors"><a>Catálogo</a></li>
            <li className="hover:text-emerald-200 transition-colors"><a>Carrito</a></li>
        </ul>
    </div>
  )
}