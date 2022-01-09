import axios from 'axios';
import { useEffect, useState } from 'react';
import { IOneProduct } from '../interface';
import { getBasePath } from '../utils/PathHelper';
import { Link } from 'react-router-dom';

const Products = ({ setSelectedProducts }: any) => {
  const [products, setProducts] = useState<IOneProduct[]>([]);
  const [activeProduct, setActiveProduct] = useState('');
  const [counterBlue, setCounterBlue] = useState(0);
  const [counterRed, setCounterRed] = useState(0);
  const [counterTwoHanded, setCounterTwoHanded] = useState(0);
  const [finalProduct, setFinalProduct] = useState({
    counterTwoHanded,
    counterRed,
    counterBlue,
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    {
      (async () => {
        const { data } = await axios.get<IOneProduct[]>(
          `${getBasePath()}/zbozi`
        );
        setProducts(data);
      })();
    }
    setFinalProduct({ counterBlue, counterRed, counterTwoHanded });
    setSelectedProducts(finalProduct);
  }, []);

  const onPlusClick = () => {
    setCounterBlue(counterBlue + 1);
  };

  const onMinusClick = () => {
    setCounterBlue(counterBlue - 1);
  };

  const onClick = () => {
    setFinalProduct({ counterBlue, counterRed, counterTwoHanded });
    setMessage('Objednané množstvý bylo zaznamenáno.');
  };

  return (
    <>
      <div
        className="ui grid center aligned segment"
        style={{ maxWidth: '980px' }}
      >
        {products.map((product: IOneProduct) => {
          return (
            <div className="five wide column" key={product.image}>
              <div className="ui card">
                <div className="image">
                  <img src={`${product.image}`} style={{}} />
                </div>
                <div className="content">
                  <a className="header">{product.title}</a>
                  <div className="meta">
                    <span className="date">Cena: {product.price}Kč</span>
                  </div>
                  <div className="description">
                    Vlastnosti: {product.properities}
                  </div>
                  <div className="description">Barva meče: {product.color}</div>
                </div>
                <div className="extra content">
                  <a onClick={() => setActiveProduct(`${product.title}`)}>
                    <i className="shop icon"></i>
                    Přidat do košíku
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Objednané produkty</h3>
      <div className="ui grid center aligned segment">
        <div className="five wide column" style={{ paddingTop: '10px' }}>
          {activeProduct === 'Světelný meč - modrý' || counterBlue >= 1 ? (
            <div>
              <h4 style={{ padding: '2px' }}>Světelný meč - modrý</h4>
              <div className="ui card">
                <div className="extra content" style={{ color: 'black' }}>
                  <span className="left floated">
                    <p style={{ padding: '2px' }}>
                      Cena bez DPH:&nbsp;&nbsp;
                      {`${products[0].price * counterBlue}` <= '0'
                        ? '0'
                        : `${products[0].price * counterBlue}`}
                      Kč
                    </p>
                  </span>
                  <span className="right floated">
                    <a onClick={() => setCounterBlue(0)}>
                      <i className="trash icon"></i>
                    </a>
                  </span>
                </div>
                <div className="extra content">
                  <span className="left floated like">
                    <a onClick={onMinusClick}>
                      <i className="minus icon"></i>
                    </a>
                  </span>
                  <span style={{ paddingLeft: '10px', color: 'black' }}>
                    V košíku máte: {counterBlue} Ks
                  </span>
                  <span className="right floated star">
                    <a onClick={onPlusClick}>
                      <i className="plus icon"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div style={{ paddingTop: '10px' }} className="five wide column">
          {activeProduct === 'Světelný meč - červený' || counterRed >= 1 ? (
            <div>
              <h4 style={{ padding: '2px' }}>Světelný meč - červený</h4>
              <div className="ui card">
                <div className="extra content" style={{ color: 'black' }}>
                  <span className="left floated">
                    <p style={{ padding: '2px' }}>
                      Cena bez DPH:&nbsp;&nbsp;
                      {`${products[1].price * counterRed}` <= '0'
                        ? '0'
                        : `${products[1].price * counterRed}`}
                      Kč
                    </p>
                  </span>
                  <span className="right floated">
                    <a onClick={() => setCounterRed(0)}>
                      <i className="trash icon"></i>
                    </a>
                  </span>
                </div>
                <div className="extra content">
                  <span className="left floated like">
                    <a onClick={() => setCounterRed(counterRed - 1)}>
                      <i className="minus icon"></i>
                    </a>
                  </span>
                  <span style={{ paddingLeft: '10px', color: 'black' }}>
                    V košíku máte: {counterRed} Ks
                  </span>
                  <span className="right floated star">
                    <a onClick={() => setCounterRed(counterRed + 1)}>
                      <i className="plus icon"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div style={{ paddingTop: '10px' }} className="five wide column">
          {activeProduct === 'Obouruční meč' || counterTwoHanded >= 1 ? (
            <div>
              <h4 style={{ padding: '2px' }}>Obouruční</h4>
              <div className="ui card">
                <div className="extra content" style={{ color: 'black' }}>
                  <span className="left floated">
                    <p style={{ padding: '2px' }}>
                      Cena bez DPH:&nbsp;&nbsp;
                      {`${products[2].price * counterTwoHanded}` <= '0'
                        ? '0'
                        : `${products[2].price * counterTwoHanded}`}
                      Kč
                    </p>
                  </span>
                  <span className="right floated">
                    <a onClick={() => setCounterTwoHanded(0)}>
                      <i className="trash icon"></i>
                    </a>
                  </span>
                </div>
                <div className="extra content">
                  <span className="left floated like">
                    <a
                      onClick={() => setCounterTwoHanded(counterTwoHanded - 1)}
                    >
                      <i className="minus icon"></i>
                    </a>
                  </span>
                  <span style={{ paddingLeft: '10px', color: 'black' }}>
                    V košíku máte: {counterTwoHanded} Ks
                  </span>
                  <span className="right floated star">
                    <a
                      onClick={() => setCounterTwoHanded(counterTwoHanded + 1)}
                    >
                      <i className="plus icon"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className="ui container" style={{ padding: '10px' }}>
          <h4>
            Cena za produkty celkem:&nbsp;&nbsp;
            {products.length === 0
              ? '0'
              : counterTwoHanded * products[2].price +
                counterRed * products[1].price +
                counterBlue * products[0].price}
            Kč
          </h4>
        </div>
        <div className="ui container">
          <p>Ceny světelných mečů jsou bez DPH.</p>
        </div>
        <button
          className="ui button"
          type="submit"
          style={{ margin: '15px' }}
          onClick={onClick}
        >
          Potvrdit množství
        </button>
        <div className="ui container" style={{ margin: '15px' }}>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
