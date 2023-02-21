import './search-panel.scss';

const SearchPanel = () => {
  return (
    <div className="searchPanel">
      <p className="searchPanel_descr fz_14">Lookiing for</p>
      <input className="searchPanel_search" type="text" placeholder="start typing here..."/>
    </div>
  )
}

export default SearchPanel;