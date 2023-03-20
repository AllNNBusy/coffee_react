import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AromisticoCoffee from '../../img/main-img/img/aromisticoCoffee.jpg';

import './productCards.scss';

const ProductCards = () => {
    const product = useSelector(state => state.product.product);
    const filterInput = useSelector(state => state.product.input);
    const filterBtn = useSelector(state => state.product.btn);

    const visibleProduct = () => {
        const filter = () => {
            switch (filterBtn) {
                case 'brasil':
                    return product.filter(({country}) => country === filterBtn);
                case 'columbia':
                    return product.filter(({country}) => country === filterBtn);
                case 'kenya':
                    return product.filter(({country}) => country === filterBtn);
                default:
                    return product;
            }
        }
        if (filterInput) {
            const filterInp = filter();
            return filterInp.filter(({name}) => name.toLowerCase().indexOf(filterInput) > -1)
        }
        return filter();
    };

    return (
        <section className="productCards">
            <div className="container">
                <div className="productCards__wrapper">
                    <View product={visibleProduct()}/>
                </div>
            </div>
        </section>
    )
};

const View = ({product}) => {
    const card = product.map(({name, country, price, id}) => {

        const firstToUpperCase = country[0].toUpperCase() + country.slice(1);
        return (
            <Link
                to={`/about/${country}`}
                className="productCards__item fz_14"
                key={id}>
                <img src={AromisticoCoffee} alt={name} />
                <p>{name}</p>
                <p>{firstToUpperCase}</p>
                <p className="productCards__item__descr">{price}</p>
            </Link>
        )
    })

    return (
        <>
            {card}
        </>
    )
};

export default ProductCards;