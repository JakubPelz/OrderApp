import axios from 'axios';
import { SyntheticEvent, useEffect, useState } from 'react';
import { ICustomer } from '../interface';
import { getBasePath } from '../utils/PathHelper';

const CustomerInfo = ({ setSelectedCustomer }: any) => {
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCide] = useState('');
  const [customer, setCustomer] = useState<ICustomer>({
    customerName,
    companyName,
    email,
    city,
    street,
    zipCode,
  });

  const onButtonClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    setCustomer({ customerName, companyName, email, city, street, zipCode });
    await axios.post<ICustomer>(`${getBasePath()}/novy-zakaznik`, {
      customer,
    });
  };

  useEffect(() => {
    setSelectedCustomer(customer);
  });

  return (
    <div className="ui vertical left aligned footer segment">
      <div className="center aligned container">
        <form className="ui form">
          <div className="ui stackable inverted divided grid">
            <div className="eight wide column">
              <div className="field">
                <h3>Objednavatel</h3>
                <label>Jméno a příjmení</label>
                <input
                  type="text"
                  name="First name"
                  placeholder="Jméno a příjmení"
                  id="First name"
                  required
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Název firmy</label>
                <input
                  type="text"
                  name="Last name"
                  placeholder="Jméno firmy"
                  id="Last name"
                  required
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="eight wide column">
              <h3>Adresa</h3>
              <div className="field">
                <label>Město</label>
                <input
                  type="text"
                  name="First name"
                  placeholder="Město"
                  id="First name"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Ulice včetně č.p.</label>
                <input
                  type="text"
                  name="Last name"
                  placeholder="Ulice a číslo popisné"
                  id="Last name"
                  required
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="field">
                <label>PSČ</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="email"
                  required
                  onChange={(e) => setZipCide(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            className="ui button"
            type="submit"
            style={{ marginTop: '8px' }}
            onClick={onButtonClick}
          >
            {customer.customerName === ''
              ? 'Potvrdit údaje'
              : 'Údaje byly odeslány'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerInfo;
