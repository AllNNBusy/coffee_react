import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import OurCoffeeHeader from "../appOurCoffee/ourCoffeeHeader/OurCoffeeHeader";
import aromisticocoffee from "../../img/our-coffe-img/img/AROMISTICOCoffee.png";
import { ReactComponent as CoffeeWhite } from '../../img/logo/coffee-white.svg';

import './singlePage.scss';

const SinglePage = () => {
    const {id} = useParams();
    const content = useSelector(state => {
        const element = state.product.product.find(({country}) => country === id);
        return element;
    });
    const {name, country, price, decr} = content;

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={name}
                    />
                <title>{name}</title>
            </Helmet>
            <OurCoffeeHeader />
            <section className="singleCoffe">
                <div key={name} className="singleCoffe__wrapper">
                    <div className="singleCoffe__img">
                        <img src={aromisticocoffee} alt={name} />
                    </div>
                    <div className="singleCoffe__items">
                        <h2 className="singleCoffe__subtitle fz_24">About it</h2>
                        <div className="singleCoffe__divider">
                            <CoffeeWhite />
                        </div>
                        <p className="singleCoffe__descr fz_14">
                            <strong>Country: </strong>
                            {country[0].toUpperCase() + country.slice(1)}</p>
                        <p className="singleCoffe__subdescr fz_14">{decr}</p>
                        <p className="singleCoffe__subdescr fz_14">
                            <strong>Price: </strong>
                            <strong className="fz_24">{price}</strong>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SinglePage;