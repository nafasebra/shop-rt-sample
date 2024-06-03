export type ProductDataType = {
  id: number;
  title: string;
  imageURL: string;
  price: number;  
}

export interface ProductProps {
  data: ProductDataType
}