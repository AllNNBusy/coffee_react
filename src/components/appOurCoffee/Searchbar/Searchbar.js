import ProductFilter from './productFilter/ProductFilter';
import SearchPanel from './searchPanel/SearchPanel';

import './searchbar.scss';

const Searchbar = () => {
    return (
        <section className="searchbar">
            <SearchPanel/>
            <ProductFilter/>
        </section>
    )
}

export default Searchbar;