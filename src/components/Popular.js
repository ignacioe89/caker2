const Popular = () => {
  return (
    <section class="container py-5">
      <div class="row text-center pt-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">Gâteaux populaires</h1>
          <h2 class="h2"><span>été 2021</span></h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4 p-5 mt-3">
          <a href="#"
            ><img
              src="./assets/img/tarte-framboise.png"
              class="rounded-circle img-fluid border"
          /></a>
          <h5 class="text-center mt-3 mb-3">La Fondante tarte framboise</h5>
          <p class="text-center"><a href="shop-product-8.html" class="btn btn-success">Je craque</a></p>
        </div>
        <div class="col-12 col-md-4 p-5 mt-3">
          <img
              src="./assets/img/cake_amandes_litchi.png"
              class="rounded-circle img-fluid border"
          />
          <h2 class="h5 text-center mt-3 mb-3"> amandes litchi</h2>
          <p class="text-center"><a href="shop-product-1.html" class="btn btn-success">Je découvre</a></p>
        </div>
        <div class="col-12 col-md-4 p-5 mt-3">
          <a href="#"
            ><img
              src="./assets/img/le-fraise-vanille.png"
              class="rounded-circle img-fluid border"
          /></a>
          <h2 class="h5 text-center mt-3 mb-3">Le Gourmand Fraise Vanille</h2>
          <p class="text-center"><a href="shop-product-7.html" class="btn btn-success">Je croque</a></p>
        </div>
      </div>
    </section>
  );
};

export default Popular;