import DividerBlack from '../../divider_black/divider_black';

import './goodscoffee-about.scss';

const GoodsCoffeeAbout = () => {
  return (
    <section className="goodscoffee_about">
      <div className="container">
        <div className="goodscoffee_about__wrapper">
          <img src={require('../../../img/goodscoffee-img/img/goodscoffee-about.jpg')} alt="hot coffee mug" />
          <div className="goodscoffee_about__items">
            <h2 className="goodscoffee_about__subtitle fz_24">About our goods</h2>
            <DividerBlack/>
            <p className="fz_14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
            <p className="fz_14">Afraid at highly months do things on at. Situation recommend objection do intention <br />
            so questions.<br />
            As greatly removed calling pleased improve an.<br /> Last ask him cold feel<br />
            met spot shy want. Children me laughing we<br /> prospect answered followed. At it went<br />
            is song that held help face.</p>
          </div>
        </div>
        <div className="goodscoffee_about__divider"></div>
      </div>
    </section>
  )
}

export default GoodsCoffeeAbout;