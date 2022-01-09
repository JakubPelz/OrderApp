import React from 'react';

import CustomerInfo from '../components/CustomerInfo';
import Products from '../components/Products';

const HomePage = () => {
  return (
    <>
      {' '}
      <div
        className="ui inverted vertical masthead segment"
        style={{ minHeight: '80px' }}
      >
        <h3 style={{ paddingLeft: '20px', marginTop: '15px' }}>
          Prosím vyplňte vaše iniciály a zvolte typ produktu k objednávce.
        </h3>
      </div>
      <div className="ui center aligned container">
        <CustomerInfo />
      </div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui center aligned container">
          <Products />
          <h3>Ceny světelných mečů jsou bez DPH.</h3>
        </div>
      </div>
      <div className="ui container" style={{ minHeight: '410px' }}>
        <div className="ui vertical left aligned footer segment">
          <div className="center aligned container">
            <form className="ui form">
              <h2 style={{ marginTop: '20px' }}>Vaše objednávka</h2>
              {/*  <div className="ui stackable inverted divided grid">
                <CustomerReInfo selectedMode={selectedMode} />
                <ProductsSelected
                  selectedProduct={selectedProduct}
                  product={Product}
                  selectedMode={selectedMode}
                />
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
