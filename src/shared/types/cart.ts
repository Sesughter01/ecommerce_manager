export interface CartItem {

    // id: number;
    // name: string;
    // price: number;
    // qty: number;
    // [key: string]: any;
    id: number;
  name: string; // Maps from 'title'
  imgf: string;
  imgb?: string;
  category: { type: string }[]; 
  color: { type: string }[];    
  brand: { type: string }[];  
  price: {
    min: number;
    max: number;
  };
  qty: number; 
  [key: string]: any;

}