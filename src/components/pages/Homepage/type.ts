export type ProductDataType = {
  id: string;
  title: string;
  imageURL: string;
  price: number;  
}

export interface ProductProps {
  data: ProductDataType
}