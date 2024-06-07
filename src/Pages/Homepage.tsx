import ProductCard from "../components/pages/Homepage/ProductCard";
import products from '../assets/product.json'

function Homepage() {
  return (
    <section className="container space-y-4">
      <h2 className="font-bold text-2xl">Lastest products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}

export default Homepage;
