import DividerBlack from '../../divider_black/divider_black';
import SearchPanel from '../search-panel/search-panel';
import ProductFilter from '../product-filter/product-filter';
import ProductCards from '../product-cards/product-cards';

import './our-coffee-about.scss';

const OurCoffeeAbout = ({product, test}) => {
  return (
    <section className="our-coffee_about">
      <div className="container">
        <div className="our-coffee_about__wrapper">
          <div className="our-coffee_about__img">
            <img src={require('../../../img/our-coffe-img/img/our-coffe-photo.png')} alt="girl with coffee mug" />
          </div>
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
          <SearchPanel/>
          <ProductFilter product={product}/>
        </div>
        <ProductCards product={product} test={(e, id) => test(e, id)}/>
      </div>
    </section>
  )
}

export default OurCoffeeAbout;