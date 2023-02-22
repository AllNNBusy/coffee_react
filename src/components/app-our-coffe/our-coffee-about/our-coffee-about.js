import DividerBlack from '../../divider_black/divider_black';
import SearchPanel from '../search-panel/search-panel';
import ProductFilter from '../product-filter/product-filter';
import ProductCards from '../product-cards/product-cards';

import './our-coffee-about.scss';

const OurCoffeeAbout = (
  {product, cardsId, onUpdateSearch, filter, onFilterSelect, creatingButtons, productDescription, showCardInformation}) => {

  let aboutCard = <></>;
  if (productDescription) {
    aboutCard = showCardInformation.map(({name, country, decr, price}) => {
      return (
        <>
          <div className="our-coffee_aboutcard__img">
            <img src={require('../../../img/our-coffe-img/img/AROMISTICOCoffee.png')} alt={name} />
          </div>
          <div className="our-coffee_aboutcard__items">
            <h2 className="our-coffee_aboutcard__subtitle fz_24">About it</h2>
            <DividerBlack/>
            <p className="our-coffee_aboutcard__descr fz_14">
              <strong>Country: </strong>
              {country[0].toUpperCase() + country.slice(1)}</p>
            <p className="our-coffee_aboutcard__subdescr fz_14">{decr}</p>
            <p className="our-coffee_aboutcard__subdescr fz_14">
              <strong>Price: </strong>
              <strong className="fz_24">{price}</strong>
            </p>
          </div>
        </>
      )
    })
  }

  return ( !productDescription ?

    <section className="our-coffee_about">
      <div className="container">
        <div className="our-coffee_about__wrapper">
          <img src={require('../../../img/our-coffe-img/img/our-coffe-photo.png')} alt="girl with coffee mug" />
          <div className="our-coffee_about__items">
            <h2 className="our-coffee_about__subtitle fz_24">About our beans</h2>
            <DividerBlack/>
            <p className="fz_14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
            <p className="fz_14">Afraid at highly months do things on at. Situation recommend objection do intention <br />
            so questions.<br />
            As greatly removed calling pleased improve an.<br /> Last ask him cold feel<br />
            met spot shy want. Children me laughing we<br /> prospect answered followed. At it went<br />
            is song that held help face.</p>
          </div>
        </div>
        <div className="our-coffee_about__divider"></div>
        <div className="our-coffee_about__filter">
          <SearchPanel onUpdateSearch={onUpdateSearch}/>
          <ProductFilter
          creatingButtons={creatingButtons}
          filter={filter}
          onFilterSelect={onFilterSelect}/>
        </div>
        <ProductCards
          product={product}
          cardsId={(id) => cardsId(id)}/>
      </div>
    </section>

    :

    <section className="our-coffee_aboutcard">
      <div className="container">
        <div className="our-coffee_aboutcard__wrapper">
          {aboutCard}
        </div>
      </div>
    </section>
  )
}

export default OurCoffeeAbout;