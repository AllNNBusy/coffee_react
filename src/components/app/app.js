import { Component } from 'react';

import NavWrapper from '../nav-wrapper/nav-wrapper';
import DividerBlack from '../divider_black/divider_black';

// router
import { Routes, Route } from 'react-router-dom';

// main
import MainHeader from '../app-main/main-header/main-header';
import MainAbout from '../app-main/main-about/main-about';
import MainOurBest from '../app-main/main-ourBest/main-ourBest';

// our-coffe
import OurCoffeeHeader from '../app-our-coffe/our-coffee-header/our-coffee-header';
import OurCoffeeAbout from '../app-our-coffe/our-coffee-about/our-coffee-about';



import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {name: 'Coffee house', href: '/', id: 1, activ: true},
        {name: 'Our coffee', href: '/about', id: 2, activ: false},
        {name: 'For your pleasure', href: '/goodscoffe', id: 3, activ: false},
      ],
      product: [
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 1,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'kenya', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '6.99$', id: 2,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'columbia', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '6.99$', id: 3,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 4,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 5,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 6,},
      ]
    }
  }

  // nav-wrapper
  activeClass = (e, id) => {
    this.setState(({nav}) => ({
      nav: nav.map(item => item.id === id ? {...item, activ: true} : {...item, activ: false})
    }))
  }

  // cards id
  test = (e, id) => {
    console.log(id)
  }

  render() {
    const {nav, product} = this.state;

    return (
      <>
        <nav className='nav__header'>
          <NavWrapper
            nav={nav}
            activeClass={this.activeClass}
          />
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <MainHeader />
              <MainAbout/>
              <MainOurBest/>
            </>
          }/>

          <Route path="/about" element={
            <>
              <OurCoffeeHeader />
              <OurCoffeeAbout product={product} test={this.test}/>
            </>
          }/>

          <Route path="/goodscoffe" element={<MainOurBest/>}/>
        </Routes>

        <footer className='footer'>
          <NavWrapper
            nav={nav}
            activeClass={this.activeClass}
          />
          <DividerBlack/>
        </footer>



      </>
    );
  }
}

export default App;