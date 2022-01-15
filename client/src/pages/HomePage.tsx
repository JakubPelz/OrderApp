import { useEffect, useState } from 'react';
import { ICustomer } from '../interface';
import { Link } from 'react-router-dom';

import CustomerInfo from '../components/CustomerInfo';
import Products from '../components/Products';

const HomePage = ({ setUserSelected }: any) => {
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>();
  const [selectedProducts, setSelectedProducts] = useState();

  /*  console.log(selectedProducts);
  useEffect(() => {
    setUserSelected({ selectedProducts, selectedCustomer });
  }, []); */

  const onClick = () => {
    //setUserSelected({ selectedProducts, selectedCustomer });
  };

  return (
    <>
      <div
        className="ui inverted vertical masthead segment"
        style={{ minHeight: '80px' }}
      >
        <h3 style={{ paddingLeft: '20px', marginTop: '15px' }}>
          Prosím vyplňte vaše iniciály a zvolte typ produktu k objednávce.
        </h3>
      </div>
      <div className="ui center aligned container">
        <CustomerInfo setSelectedCustomer={setSelectedCustomer} />
      </div>

      <div className="ui center aligned container" style={{ margin: '0px' }}>
        <Products setSelectedProducts={setSelectedProducts} />
      </div>
      <div className="ui center aligned container">
        <Link to="/potvrzeni-objednavky">
          <button
            className="ui button"
            type="submit"
            style={{ margin: '15px' }}
            onClick={onClick}
          >
            Potvrdit Objednávku
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
