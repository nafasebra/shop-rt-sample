import { ProductProps } from "./type";
import AddButton from "../../shared/AddButton";

function ProductCard({ data }: ProductProps) {
  return (
    <article className="border border-gray-300 rounded-lg p-4 flex flex-col items-center gap-4">
      <img src={data.imageURL} className="h-[250px]" />
      <div className="w-full flex flex-col">
        <h2 className="font-bold text-lg">{data.title}</h2>
        <div className="flex items-center justify-between gap-3">
          <p className="font-bold text-3xl">${data.price}</p>
          <AddButton id={data.id} title={data.title} />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
