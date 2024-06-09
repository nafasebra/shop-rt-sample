import CHeckout from '../components/pages/ShoppingCart/CHeckout'
import CartContainer from '../components/pages/ShoppingCart/CartContainer'

function ShoppingCart() {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <CartContainer />
      <CHeckout />
    </div>
  )
}

export default ShoppingCart