
function CHeckout() {
  return (
    <div className='space-y-6 w-full lg:w-[40%] rounded-lg border border-gray-300 p-6'>
      <p className="font-bold text-xl">Checkout</p>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <p>price</p>
          <p className='font-bold text-xl'>$12</p>
        </div>
        <button type='button' className='py-3 px-6 text-white bg-slate-800 rounded-lg text-lg font-bold'>Pay</button>
      </div>
    </div>
  )
}

export default CHeckout