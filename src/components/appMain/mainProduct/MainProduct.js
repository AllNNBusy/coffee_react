import './mainProduct.scss';

import aromisticoCoffee from '../../../img/main-img/img/aromisticoCoffee.jpg';
import prestoCoffeeBeans from '../../../img/main-img/img/prestoCoffeeBeans.jpg';
import solimoCoffeeBeans from '../../../img/main-img/img/solimoCoffeeBeans.jpg';

const MainProduct = () => {
    return (
        <main className="main__product">
            <div className="container">
                <h2 className="main__product__title fz_24">Our best</h2>
                <div className="main__product__wrapper">
                    <div className="main__product__item">
                        <img src={solimoCoffeeBeans} alt="Solimo Coffee Beans 2 kg" />
                        <p className="fz_14">Solimo Coffee Beans 2 kg</p>
                        <p className="main__product__price fz_14">10.73$</p>
                    </div>
                    <div className="main__product__item">
                        <img src={prestoCoffeeBeans} alt="Presto Coffee Beans 1 kg" />
                        <p className="fz_14">Presto Coffee Beans 1 kg</p>
                        <p className="main__product__price fz_14">15.99$</p>
                    </div>
                    <div className="main__product__item">
                        <img src={aromisticoCoffee} alt="AROMISTICO Coffee 1 kg" />
                        <p className="fz_14">AROMISTICO Coffee 1 kg</p>
                        <p className="main__product__price fz_14">6.99$</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainProduct;