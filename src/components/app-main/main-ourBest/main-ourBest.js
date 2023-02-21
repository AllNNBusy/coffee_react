import './main-ourBest.scss';

const MainOurBest = () => {
  return (
    <main className="main_ourBest">
      <div className="container">
        <h2 className="main_ourBest__title fz_24">Our best</h2>
        <div className="main_ourBest__wrapper">
          <div className="main_ourBest__item">
            <img src={require("../../../img/main-img/img/solimoCoffeeBeans.jpg")} alt="Solimo Coffee Beans 2 kg" />
            <p className="fz_14">Solimo Coffee Beans 2 kg</p>
            <p className="main_ourBest__price fz_14">10.73$</p>
          </div>
          <div className="main_ourBest__item">
            <img src={require("../../../img/main-img/img/prestoCoffeeBeans.jpg")} alt="Presto Coffee Beans 1 kg" />
            <p className="fz_14">Presto Coffee Beans 1 kg</p>
            <p className="main_ourBest__price fz_14">15.99$</p>
          </div>
          <div className="main_ourBest__item">
            <img src={require("../../../img/main-img/img/aromisticoCoffee.jpg")} alt="AROMISTICO Coffee 1 kg" />
            <p className="fz_14">AROMISTICO Coffee 1 kg</p>
            <p className="main_ourBest__price fz_14">6.99$</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainOurBest;