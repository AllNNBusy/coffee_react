import { Component, lazy, Suspense } from 'react';

import NavWrapper from '../nav-wrapper/nav-wrapper';
import DividerBlack from '../divider_black/divider_black';

// router
import { Routes, Route } from 'react-router-dom';

// main
import MainHeader from '../app-main/main-header/main-header';
import MainAbout from '../app-main/main-about/main-about';
import MainOurBest from '../app-main/main-ourBest/main-ourBest';

// our-coffe
// import OurCoffeeHeader from '../app-our-coffe/our-coffee-header/our-coffee-header';
// import OurCoffeeAbout from '../app-our-coffe/our-coffee-about/our-coffee-about';

// app-goodscoffe
// import GoodscoffeeHeader from '../app-goodscoffe/goodscoffee-header/goodscoffee-header';
// import GoodsCoffeeAbout from '../app-goodscoffe/goodscoffee-about/goodscoffee-about';
// import ProductCards from '../app-our-coffe/product-cards/product-cards';

import './app.scss';

// our-coffe lazy
const OurCoffeeHeader = lazy(() => import('../app-our-coffe/our-coffee-header/our-coffee-header'))
const OurCoffeeAbout = lazy(() => import('../app-our-coffe/our-coffee-about/our-coffee-about'))

// app-goodscoffe lazy
const GoodscoffeeHeader = lazy(() => import('../app-goodscoffe/goodscoffee-header/goodscoffee-header'))
const GoodsCoffeeAbout = lazy(() => import('../app-goodscoffe/goodscoffee-about/goodscoffee-about'))
const ProductCards = lazy(() => import('../app-our-coffe/product-cards/product-cards'))


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
        {name: 'Solimo Coffee Beans 2 kg', country: 'kenya', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '6.99$', id: 2,},
        {name: 'Presto Coffee Beans 1 kg', country: 'columbia', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '6.99$', id: 3,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 4,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 5,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 6,},
      ],
      term: '',
      filter: 'all',
      productDescription: false,
    }
  }

  // nav-wrapper
  activeClass = (e, id) => {
    this.setState(({nav}) => ({
      nav: nav.map(item => item.id === id ? {...item, activ: true} : {...item, activ: false})
    }))
  }

  // SearchPanel
  onUpdateSearch = (term) => {
    this.setState({term: term.toLowerCase()})
  }

  searchProduct = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(({name}) => {
      return name.toLowerCase().indexOf(term) > -1
    })
  }

  // AppFilter
  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  filterPost = (items, filter) => {
    if (filter === 'all') {
      return items
    }

    switch (filter) {

      case 'brasil':
        return items.filter(({country}) => country === filter)
      case 'kenya':
        return items.filter(({country}) => country === filter)
      case 'columbia':
        return items.filter(({country}) => country === filter)
      default:
        return items;
    }
  }

  // cards id
  cardsId = (clickId) => {
    this.setState(({productDescription: clickId}))
  }

  cardItem = (itemId) => {
    if (!itemId) {
      return false
    }
    return this.state.product.filter(({id}) => id === itemId)
  }

  hideCardItem = () => {
    if (this.state.productDescription) {
      this.setState(({productDescription: false}))
    }
    return
  }


  render() {
    const {nav, product, term, filter, productDescription} = this.state;
    const visibleProduct = this.filterPost(this.searchProduct(product, term), filter);
    const showCardInformation = this.cardItem(productDescription)

    return (
      <>
        <nav className='nav__header'>
          <NavWrapper
            nav={nav}
            activeClass={this.activeClass}
            hideCardItem={this.hideCardItem}
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
              <Suspense fallback={<div className="loading">loading...</div>}>
                <OurCoffeeHeader />
                <OurCoffeeAbout
                product={visibleProduct}
                creatingButtons={product}
                cardsId={this.cardsId}
                onUpdateSearch={this.onUpdateSearch}
                filter={filter}
                onFilterSelect={this.onFilterSelect}
                productDescription={productDescription}
                showCardInformation={showCardInformation}/>
              </Suspense>
            </>
          }/>

          <Route path="/goodscoffe" element={
            <>
              <Suspense fallback={<div className="loading">loading...</div>}>
                <GoodscoffeeHeader />
                <GoodsCoffeeAbout />
                <ProductCards
                  cardsId={this.cardsId}
                  product={product}/>
              </Suspense>
            </>
          }/>
        </Routes>

        <footer className='footer'>
          <NavWrapper
            nav={nav}
            activeClass={this.activeClass}
            hideCardItem={this.hideCardItem}
          />
          <DividerBlack/>
        </footer>
      </>
    );
  }
}

export default App;