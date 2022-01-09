import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import pages
import HomePage from '../pages/HomePage';
import Thanks from '../pages/Thanks';
import OrderConfirm from '../pages/OrderConfirm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dekujeme" element={<Thanks />} />
        <Route path="/potvrzeni-objednavky" element={<OrderConfirm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
