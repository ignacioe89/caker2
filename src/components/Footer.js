const Footer = () => {
  return (
    <footer class="bg" id="tempaltemo_footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 pt-5">
            <h2 class="footer h2 text-success border-bottom pb-3 border-light logo">
              Le Coin Des Gourmandises
            </h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li>
                <i class="fas fa-map-marker-alt fa-fw"></i>
                123 Champs-Elysées Paris
              </li>
              <li>
                <i class="fa fa-phone fa-fw"></i>
                <a class="text-decoration-none" href="tel:010-020-0340"
                  >010-020-0340</a
                >
              </li>
              <li>
                <i class="fa fa-envelope fa-fw"></i>
                <a class="text-decoration-none" href="mailto:info@company.com"
                  >lc-gourmandise@gmail.com</a
                >
              </li>
            </ul>
          </div>

          <div class="col-md-4 pt-5">
            <h2 class="footer h2 text-light border-bottom pb-3 border-light">
              Vends,Commande Tes Pâtisserie
            </h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li><a class="text-decoration-none" href="patissier.html">Trouver mon Pâtissier</a></li>
              <li><a class="text-decoration-none" href="vends_tes_patisserie.html">vends tes Pâtisserie</a></li>
              <li><a class="text-decoration-none" href="profil.html">Profil</a></li>
            </ul>
          </div>

          <div class="col-md-4 pt-5">
            <h2 class="footer h2 text-light border-bottom pb-3 border-light">
              Informations
            </h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li><a class="text-decoration-none" href="index.html">Accueil</a></li>
              <li><a class="text-decoration-none" href="patisserie.html">Comment ça marche</a></li>
              <li><a class="text-decoration-none" href="contact.html">Contact</a></li>
              <li><a class="text-decoration-none" href="sign-up.html">s'inscrire</a></li>
              <li><a class="text-decoration-none" href="sign-in.html">s'indentifier</a></li>
            </ul>
          </div>
        </div>

        <div class="row text-light mb-4">
          <div class="col-12 mb-3">
            <div class="w-100 my-3 border-top border-light"></div>
          </div>
          <div class="col-auto me-auto">
            <ul class="list-inline text-left footer-icons">
              <li
                class="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <a
                  class="text-light text-decoration-none"
                  target="_blank"
                  href="http://facebook.com/"
                  ><i class="fab fa-facebook-f fa-lg fa-fw"></i
                ></a>
              </li>
              <li
                class="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <a
                  class="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.instagram.com/"
                  ><i class="fab fa-instagram fa-lg fa-fw"></i
                ></a>
              </li>
              <li
                class="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <a
                  class="text-light text-decoration-none"
                  target="_blank"
                  href="https://twitter.com/"
                  ><i class="fab fa-twitter fa-lg fa-fw"></i
                ></a>
              </li>
              <li
                class="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <a
                  class="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.linkedin.com/"
                  ><i class="fab fa-linkedin fa-lg fa-fw"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-auto">
            <label class="sr-only" for="subscribeEmail">Email address</label>
            <div class="input-group mb-2">
              <input
                type="text"
                class="form-control bg-dark border-light"
                id="subscribeEmail"
                placeholder="Email address"
              />
              <div class="input-group-text btn-success text-light">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 bg-black py-3">
        <div class="container">
          <div class="row pt-2">
            <div class="col-12">
              <p class="text-left text-light">
                Copyright &copy; 2021 Company Name | Designed by 
                <a rel="sponsored" href="#" target="_blank"
                  >Le Coin Des Gourmandises</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;