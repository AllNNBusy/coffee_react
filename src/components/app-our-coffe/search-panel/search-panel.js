import { Component } from 'react';

import './search-panel.scss';

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <div className="searchPanel">
        <p className="searchPanel_descr fz_14">Lookiing for</p>
        <input
          className="searchPanel_search"
          type="text"
          placeholder="start typing here..."
          value={this.state.term}
          onChange={this.onUpdateSearch}/>
     </div>
    )
  }
}

export default SearchPanel;