import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterBnt, removeFilter } from '../../productSlice';

import './productFilter.scss';

const ProductFilter = () => {
    const dispatch = useDispatch();
    const createBtn = useSelector(state => {
        return state.product.product.reduce((acc, item) => {
            return acc.includes(item.country) ? acc : [...acc, item.country];
        }, []);
    });
    const activeFilterBtn = useSelector(state => state.product.btn);

    useEffect(() => {
        return () => {
            dispatch(removeFilter());
        }
        // eslint-disable-next-line
    }, [])

    const btn = createBtn.map(item => {
        const firstToUpperCase = item[0].toUpperCase() + item.slice(1);
        const styles = activeFilterBtn === item ? 'productFilter__btn_active' : '';

        return (
            <button
            className={`productFilter__btn ${styles}`}
            onClick={() => dispatch(filterBnt(item))}
            key={item}>
                {firstToUpperCase}
            </button>
        )
    })

    return (
        <div className="productFilter">
            <p className="productFilter__descr fz_14">Or filter</p>
            {btn}
        </div>
    )
}

export default ProductFilter;