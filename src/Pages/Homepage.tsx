import ProductCard from "../components/pages/Homepage/ProductCard";

function Homepage() {
  return (
    <section className="container space-y-4">
      <h2 className="font-bold text-2xl">Lastest products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCard key={"product" + index} />
        ))}
      </div>
    </section>
  );
}

export default Homepage;
