import { createContext } from 'vm';

export interface IProducts {
  products: IOneProduct[];
}

export interface IOneProduct {
  title: string;
  color: string;
  properities: string;
  image: string;
  price: number;
}

export interface ICustomer {
  customerName: string;
  companyName: string;
  email: string;
  city: string;
  street: string;
  zipCode: string;
}

export interface ISelected {
  counterRed: number;
  counterBlue: number;
  counterTwoHanded: number;
}

export interface ISelectedData {
  selectedCustomer: ICustomer[];
  selectedProducts: ISelected[];
}

export const selectedContextDefaultValue: ISelectedData = {
  selectedCustomer: [],
  selectedProducts: [],
};
