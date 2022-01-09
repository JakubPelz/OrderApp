import React from 'react';

const OrderConfirm = ({ userSelected }: any) => {
  console.log(userSelected);
  return (
    <>
      <div style={{ margin: '30px' }}>
        <h2>Rekapitulace</h2>
      </div>
      <div className="ui stackable inverted divided grid">
        <div className="six wide column" style={{ margin: '20px' }}>
          <div
            className="ui vertical left aligned container"
            style={{ padding: '20px' }}
          >
            <h3>Vaše iniciály:</h3>
            <div className="ui grid container" style={{ padding: '10px' }}>
              <p>Jméno:</p>
              <strong>{userSelected.selectedCustomer.customerName}</strong>
            </div>
            <div className="ui grid container" style={{ padding: '10px' }}>
              <p>Název firmy:</p>
              <strong>{userSelected.selectedCustomer.companyName}</strong>
            </div>
            <div className="ui grid container" style={{ padding: '10px' }}>
              <p>Email:</p>
              <strong>{userSelected.selectedCustomer.email}</strong>
            </div>
          </div>
        </div>
        <div className="six wide column" style={{ margin: '20px' }}>
          <div
            className="ui vertical right aligned container"
            style={{ padding: '20px' }}
          >
            <h3>Adresa doručení:</h3>
            <div style={{ padding: '10px' }}>
              <p>Město:</p>
              <strong>{userSelected.selectedCustomer.city}</strong>
            </div>
            <div style={{ padding: '10px' }}>
              <p>Ulice:</p>
              <strong>{userSelected.selectedCustomer.street}</strong>
            </div>
            <div style={{ padding: '10px' }}>
              <p>PSČ:</p>
              <strong>{userSelected.selectedCustomer.zipCode}</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirm;
