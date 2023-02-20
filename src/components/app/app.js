import { Component } from 'react';

import NavWrapper from '../nav-wrapper/nav-wrapper';
import MainHeader from '../app-main/main-header/main-header';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {name: 'Coffee house', href: '/', id: 1, activ: true},
        {name: 'Our coffee', href: '/about', id: 2, activ: false},
        {name: 'For your pleasure', href: '/goodscoffe', id: 3, activ: false},
      ]
    }
  }

  // nav-wrapper
  activeClass = (e, id) => {
    e.preventDefault();
    this.setState(({nav}) => ({
      nav: nav.map(item => item.id === id ? {...item, activ: true} : {...item, activ: false})
    }))
  }

  render() {
    const {nav} = this.state;

    return (
      <>
        <nav className='nav__header'>
          <NavWrapper
            nav={nav}
            activeClass={this.activeClass}
          />
        </nav>
        <MainHeader></MainHeader>


        {/* <footer className='footer'>
          <NavWrapper
            nav={nav}
            activeClass={this.activeClass}
          />
        </footer> */}
      </>
    );
  }
}

export default App;