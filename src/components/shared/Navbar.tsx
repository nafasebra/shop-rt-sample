import { ShoppingBagIcon } from '@heroicons/react/16/solid'
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-slate-800 py-3'>
      <div className='container flex items-center text-white'>
        <h1 className='font-bold text-xl'>Shop</h1>

        <div className='relative'>
          <ShoppingBagIcon />
          <div className='bg-red-600 text-center flex items-center justify-center text-white rounded-full w-5 h-5 text-sm'>1</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar