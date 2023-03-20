import { filterInput } from '../../productSlice';
import { useDispatch, useSelector } from 'react-redux';

import './searchPanel.scss';

const SearchPanel = () => {
    const term = useSelector(state => state.product.term);
    const dispatch = useDispatch();

    return (
        <div className="searchPanel">
            <label className="searchPanel__descr fz_14">Lookiing for</label>
            <input
                className="searchPanel__search"
                type="text"
                value={term}
                onChange={e => dispatch(filterInput(e.target.value))}
                placeholder="start typing here..."/>
        </div>
    )
}

export default SearchPanel;