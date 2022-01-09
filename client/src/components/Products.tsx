import axios from 'axios';
import { useEffect, useState } from 'react';
import { IOneProduct } from '../interface';
import { getBasePath } from '../utils/PathHelper';

const Products = () => {
  const [products, setProducts] = useState<IOneProduct[]>([]);

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
    <div
      className="ui grid center aligned segment"
      style={{ maxWidth: '980px' }}
    >
      {products.map((product: IOneProduct) => {
        return (
          <div className="four wide column" key={product.image}>
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
                <a>
                  <i className="shop icon"></i>
                  Přidat do košíku
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
