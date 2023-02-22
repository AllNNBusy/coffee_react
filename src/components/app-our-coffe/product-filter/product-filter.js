import './product-filter.scss';

const ProductFilter = (props) => {
  const {creatingButtons} = props;

  const set = new Set();

  const filterCountry = creatingButtons.filter(({country, ...items}) => {
    if (!set.has(country)) {
      set.add(country)
      return [country, items];
    }
    return null
  })

  const buttons = filterCountry.map(({id, country}, i) => {
    let classNames = 'productFilter_btn';
    if (i === 0) {
      classNames += ' productFilter_btn_first'
    } else if (i === filterCountry.length - 1) {
      classNames += ' productFilter_btn_last'
    }

    const active = props.filter === country;
    const clazz = active ? classNames + ' productFilter_btn_activ' : classNames;

    return (
      <button
        type="button"
        key={id}
        className={clazz}
        onClick={() => props.onFilterSelect(country)}>
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