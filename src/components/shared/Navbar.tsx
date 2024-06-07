import { ShoppingCartIcon } from '@heroicons/react/16/solid'
import { useAppSelector } from '../../service/store'

function Navbar() {
  const store = useAppSelector(store => store.cart)

  console.log(store)

  return (
    <nav className='bg-slate-800 py-4'>
      <div className='container flex items-center justify-between text-white'>
        <h1 className='font-bold text-xl'>Shop</h1>

        <div className='relative'>
          <ShoppingCartIcon className='w-8 h-8' />
          <div className='absolute -top-1 -right-1 bg-red-600 text-center flex items-center justify-center text-white rounded-full w-5 h-5 text-sm'>
            {store.carts.length}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar