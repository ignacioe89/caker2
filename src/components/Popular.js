import tarteFramboise from '../styles/img/tarte-framboise.png';
import cakeAmandesLitchi from '../styles/img/cake_amandes_litchi.png';
import leFraiseVainille from '../styles/img/le-fraise-vanille.png';

const Popular = () => {
  return (
    <section className="container py-5">
      <div className="row text-center pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Gâteaux populaires</h1>
          <h2 className="h2"><span>été 2021</span></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 p-5 mt-3">
          <a href="#">
          <img src={tarteFramboise} className="rounded-circle img-fluid border" />
          </a>
          <h5 className="text-center mt-3 mb-3">La Fondante tarte framboise</h5>
          <p className="text-center"><a href="shop-product-8.html" className="btn btn-success">Je craque</a></p>
        </div>
        <div className="col-12 col-md-4 p-5 mt-3">
          <a href="#">
            <img src={cakeAmandesLitchi} className="rounded-circle img-fluid border" />
          </a>
          <h2 className="h5 text-center mt-3 mb-3"> amandes litchi</h2>
          <p className="text-center"><a href="shop-product-1.html" className="btn btn-success">Je découvre</a></p>
        </div>
        <div className="col-12 col-md-4 p-5 mt-3">
          <a href="#"
            ><img
              src={leFraiseVainille}
              className="rounded-circle img-fluid border"
          /></a>
          <h2 className="h5 text-center mt-3 mb-3">Le Gourmand Fraise Vanille</h2>
          <p className="text-center"><a href="shop-product-7.html" className="btn btn-success">Je croque</a></p>
        </div>
      </div>
    </section>
  );
};

export default Popular;