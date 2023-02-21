import './product-cards.scss';

const ProductCards = ({product, test}) => {
  const card = product.map(({name, country, price, id}) => {
    return (
      <div
        className="product-cards_item fz_14"
        key={id}
        onClick={(e) => test(e, id)}>
        <img src={require("../../../img/main-img/img/aromisticoCoffee.jpg")} alt={name} />
        <p>{name}</p>
        <p>{country}</p>
        <p className="product-cards_item__descr">{price}</p>
      </div>
    )
  })

  return (
    <div className="product-cards__wrapper">
      {card}
    </div>
  )
}

export default ProductCards;