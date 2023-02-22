import { Link } from 'react-router-dom';

import './product-cards.scss';

const ProductCards = ({product, cardsId}) => {
  const card = product.map(({name, country, price, id}) => {

    const firstToUpperCase = country[0].toUpperCase() + country.slice(1);
    return (
      <Link
        to="/about"
        className="product-cards_item fz_14"
        key={id}
        onClick={() => cardsId(id)}>
        <img src={require("../../../img/main-img/img/aromisticoCoffee.jpg")} alt={name} />
        <p>{name}</p>
        <p>{firstToUpperCase}</p>
        <p className="product-cards_item__descr">{price}</p>
      </Link>
    )
  })

  return (
    <div className="product-cards__wrapper">
      {card}
    </div>
  )
}

export default ProductCards;