import React, { useContext, useState } from 'react';
import { ICustomer, IOneProduct } from '../interface';

export const CustomerContext = React.createContext<ICustomer[]>([]);

export function useCustomer() {
  return useContext(CustomerContext);
}
