const Hero = () => {
  return (
    <div
      id="template-mo-zay-hero-carousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img
                  class="img-fluid"
                  src="./assets/img/mollycakefleur.png"
                  alt=""
                />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left align-self-center">
                  <h1 class="h1 text-success"><b>Le Coin Des Gourmandises</b><span class="univers"> l'univers de la pâtisserie</span></h1>
                  <p>
                    Au menu des pâtissiers passionnés qui vendent leurs gâteaux faits maison pour satisfaire les becs sucrés !
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img
                  class="img-fluid"
                  src="./assets/img/montblanc.png"
                  alt=""
                />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1 text-success"><b>Le principe est très simple et facile :</b></h1>
                  <p>Connectez-vous à votre espace personnel,
                    Utilisez votre identifiant et votre mot de passe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img
                  class="img-fluid"
                  src="./assets/img/framboise-lait-amandes.png"
                  alt=""
                />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <p>  1. Choisissez votre pâtissier</p>
                  <p>  2. Sélectionnez le modèle de votre gâteau</p>
                  <p>  3. Le paiement s'effectue sur place. </p>
                  <p>  4. Récupérez votre gâteau</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev text-decoration-none w-auto ps-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
      </a>
      <a
        class="carousel-control-next text-decoration-none w-auto pe-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Hero;