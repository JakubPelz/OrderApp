import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//Import pages
import HomePage from '../pages/HomePage';
import Thanks from '../pages/Thanks';
import OrderConfirm from '../pages/OrderConfirm';

function App() {
  const [userSelected, setUserSelected] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage setUserSelected={setUserSelected} />}
        />
        <Route path="/dekujeme" element={<Thanks />} />
        <Route
          path="/potvrzeni-objednavky"
          element={<OrderConfirm userSelected={userSelected} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
