import { useAppSelector } from '../service/store'
import Counter from '../components/shared/Counter'
import { Link } from 'react-router-dom'

function ShoppingCart() {
  const state = useAppSelector(state => state.cart)

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className='rounded-lg border border-gray-200 p-6'>
        <div className='divide-y divide-gray-300'>
          {
            state.carts.length ? (
              state.carts.map((item) => (
                <div key={item.id} className='flex items-center justify-between'>
                  <div className='w-[50px] h-[50px] overflow-hidden flex items-center justify-center'>
                    <p>{item.title}</p>
                    <Counter id={item.id} />
                  </div>
                </div>
              ))
            ) : (
              <div className='py-12'>
                <p className='text-gray-600 text-center'>The Shopping cart is empty! go to <Link to="/">Homepage</Link></p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart