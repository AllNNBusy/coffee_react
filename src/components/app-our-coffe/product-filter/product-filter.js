import './product-filter.scss';

const ProductFilter = (props) => {
  const {product} = props;

  const set = new Set();

  const filterProduct = product.filter(({country, ...items}) => {
    if (!set.has(country)) {
      set.add(country)
      return [country, items];
    }
    return null
  })


  const buttons = filterProduct.map(({id, country}, i) => {
    let classNames = null;
    if (i === 0) {
      classNames = 'productFilter_btn_first'
    } else if (i === filterProduct.length - 1) {
      classNames = 'productFilter_btn_last'
    }

    return (
      <button
        type="button"
        key={id}
        className={classNames}>
          {country[0].toUpperCase() + country.slice(1)}
        </button>
    )
  })

  return (
    <div className="productFilter">
      <p className="productFilter_descr fz_14">Or filter</p>
      {buttons}
    </div>
  )
}

export default ProductFilter;