import { useEffect, useState, useContext, createContext } from 'react';
import { IOneProduct } from '../interface';
import axios from 'axios';
import { getBasePath } from '../utils/PathHelper';

const OrderConfirm = ({ userSelected }: any) => {
  const [products, setProducts] = useState<IOneProduct[]>([]);
  console.log(useContext);
  //console.log(userSelected);
  useEffect(() => {
    {
      (async () => {
        const { data } = await axios.get<IOneProduct[]>(
          `${getBasePath()}/zbozi`
        );
        setProducts(data);
      })();
    }
  }, []);
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
      <div style={{ margin: '30px' }}>
        <h2>Objednané zboží</h2>
      </div>
      <div className="ui stackable inverted divided grid">
        <div className="six wide column" style={{ margin: '20px' }}>
          <div
            className="ui vertical left aligned container"
            style={{ padding: '20px' }}
          >
            <div className="ui grid container" style={{ padding: '10px' }}>
              {userSelected.selectedProducts.counterBlue === 0 ? (
                ''
              ) : (
                <p>Název Zboží:</p>
              )}
              <strong>
                {userSelected.selectedProducts.counterBlue === 0
                  ? ''
                  : products[0].title}
              </strong>
            </div>
            <div className="ui grid container" style={{ padding: '10px' }}>
              <p>Název Zboží:</p>
              <strong>
                {userSelected.selectedProducts.counterRed === 0
                  ? ''
                  : products[1].title}
              </strong>
            </div>
            <div className="ui grid container" style={{ padding: '10px' }}>
              <p>Název Zboží:</p>
              <strong>
                {userSelected.selectedProducts.counterTwoHanded === 0
                  ? ''
                  : products[2].title}
              </strong>
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
