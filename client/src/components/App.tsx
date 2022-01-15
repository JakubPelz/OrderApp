import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import { ICustomer, IOneProduct } from '../interface';
import { CustomerContext } from '../context';
//Import pages
import HomePage from '../pages/HomePage';
import Thanks from '../pages/Thanks';
import OrderConfirm from '../pages/OrderConfirm';

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer[]>([]);

  return (
    <CustomerContext.Provider value={selectedCustomer}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dekujeme" element={<Thanks />} />
          <Route path="/potvrzeni-objednavky" element={<OrderConfirm />} />
        </Routes>
      </BrowserRouter>
    </CustomerContext.Provider>
  );
}

export default App;
