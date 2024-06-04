import { Link } from "react-router-dom"

function ProductCard() {
  

  return (
    <article className='border border-gray-300 rounded-lg p-4 flex flex-col items-center gap-4'>
      <Link to={'/product?id=12'}>
        <img src="/images/1.webp" className="h-[250px]" />
      </Link>
      <div className="w-full flex flex-col">
        <h2 className="font-bold text-lg">Clothed</h2>
        <div className="flex items-center justify-between gap-3">
          <p>$12</p>
          <button className={`border border-slate-800 bg-slate-800 rounded-lg text-white py-2 px-3`}>Add</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard