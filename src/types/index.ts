export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}