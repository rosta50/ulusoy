import React from "react";
// üst memü
export const Nav = () => (
  <div className="header-toparea">
    <div className="container">
      <div className="row justify-content-betwween">
        <div className="col-lg-8">
          <ul className="header-topcontact">
            <li>
              <i className="zmdi zmdi-phone" /> PHONE :{" "}
              <a href="tel://054666666">123412341</a>
            </li>
            <li>
              <i className="zmdi zmdi-whatsapp" /> WHATSAPP :{" "}
              <a href="tel://054666666">123412341</a>
            </li>
            <li>
              <i className="zmdi zmdi-email" /> E-MAIL :{" "}
              <a href="#">demo@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);


//menü
export const Menu = props => {
  return (
    <div>
      <div className="header-bottomarea">
        <div className="container">
          <div className="header-bottom">
            {/* Header Logo */}
            <a href="index.html" className="header-logo">
              <img src="/assets/images/logo/logo.png" alt="header image" />
            </a>
            {/*// Header Logo */}
            {/* Main Navigation */}
            <nav className="in-navigation">
              <ul>
                <li>
                  <a href="/hakkimizda">Hakkımızda</a>
                </li>
                <li className="in-dropdown">
                  <a href="/urunlerimiz">Ürünlerimiz</a>
                  <ul>
                    <li>
                      <a href="/urunlerimiz/kasko">
                        <i className="zmdi zmdi-car zmdi-hc-lg" /> Kasko
                      </a>
                    </li>
                    <li>
                      <a href="/urunlerimiz/trafik">
                        <i className="zmdi zmdi-traffic zmdi-hc-lg" /> Trafik
                      </a>
                    </li>
                    <li>
                      <a href="/urunlerimiz/saglik">
                        <i className="zmdi zmdi-hospital zmdi-hc-lg" /> Sağlık
                      </a>
                    </li>
                    <li>
                      <a href="/urunlerimiz/seyahat">
                        <i className="zmdi zmdi-airplane zmdi-hc-lg" /> Seyahat
                      </a>
                    </li>
                    <li>
                      <a href="/urunlerimiz/nakliyat">
                        <i className="zmdi zmdi-truck zmdi-hc-lg" /> Nakliyat
                      </a>
                    </li>
                    <li>
                      <a href="/urunlerimiz/konut">
                        <i
                          className="zmdi zmdi-home zmdi-hc-lg"
                          zmdi-hc-lg={""}
                        />{" "}
                        Konut
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Bize Ulaşın</a>
                </li>
              </ul>
            </nav>
            {/*// Main Navigation */}
            <div className="header-right-wrap">
              {/* Buy Now */}
              <div className="buy-now">
                <a id="scrollDown" href="#chp4" className="buy-now-button">
                  Hızlı Teklif
                </a>
              </div>
              {/*// Buy Now */}
            </div>
          </div>
        </div>
      </div>
      {/*// Header Bottom Area */}
      {/* Mobile Menu */}
      <div className="mobile-menu-wrapper clearfix">
        <div className="container">
          <div className="mobile-menu" />
        </div>
      </div>
      {/*// Mobile Menu */}
    </div>
  );
};
// slider
export const Slider = props => {
  const data = props.data;

  return <div />;
};

//Breadcrumb listesi

export const BreadcrumbList = props => {
  const data = props.data;

  return <li>{data.text}</li>;
};

//Breadcrumb kapsayıcı

export const Breadcrumb = props => {
  const data = props.item;

  return (
    <div
      className="breadcrumb-area"
      data-bgimage="/assets/images/breadcrumb-bg-1.jpg"
      data-black-overlay={4}
      style={{ backgroundImage: 'url("assets/images/breadcrumb-bg-1.jpg")' }}
    >
      <div className="container">
        <div className="in-breadcrumb">
          <div className="row align-items-center">
            <div className="col">
              <ul>
                <li>
                  <a href="">Anasayfa</a>
                </li>
                {data.map((item, i) => (
                  <BreadcrumbList data={item} key={i} />
                ))}
              </ul>
            </div>
            <div className="col">
              <h6>{props.active}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//footer
export const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Contact Area */}
      <div className="footer-contact-area">
        <div className="container">
          <div className="footer-contact">
            <div className="row">
              <div className="col">
                <div className="footer-contact-block">
                  <span className="footer-contact-icon">
                    <i className="zmdi zmdi-phone" />
                  </span>
                  <p>
                    <a href="#">+0884567863</a>
                    <br />
                    <a href="#">+0884567863</a>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="footer-contact-block">
                  <span className="footer-contact-icon">
                    <i className="zmdi zmdi-home" />
                  </span>
                  <p>958 Lilyan Junction, Mitchellmouth, Rwanda</p>
                </div>
              </div>
              <div className="col">
                <div className="footer-contact-block">
                  <span className="footer-contact-icon">
                    <i className="zmdi zmdi-email" />
                  </span>
                  <p>
                    <a href="#">info@example.com</a>
                    <br />
                    <a href="#">info2@example.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*// Footer Contact Area */}
      {/* Footer Inner */}
      <div className="footer-inner">
        {/* Footer Widgets Area */}
        <div className="footer-widgets-area section-padding-lg">
          <div className="container">
            <div className="row widgets footer-widgets">
              <div className="col-lg-3 col-md-6">
                <div className="single-widget widget-info">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="assets/images/logo/logo-2.png"
                        alt="footer logo"
                      />
                    </a>
                  </div>
                  <p>
                    Küçük bir hakkımızda yazısı
                  </p>
                  <ul className="footer-socialicons">
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="single-widget widget-links">
                  <h4 className="widget-title">
                    <span>Ürünlerimiz</span>
                  </h4>
                  <ul>
                  <li>
                    <a href="/urunlerimiz/kasko">
                      <i className="zmdi zmdi-car zmdi-hc-lg" /> Kasko
                    </a>
                  </li>
                  <li>
                    <a href="/urunlerimiz/trafik">
                      <i className="zmdi zmdi-traffic zmdi-hc-lg" /> Trafik
                    </a>
                  </li>
                  <li>
                    <a href="/urunlerimiz/saglik">
                      <i className="zmdi zmdi-hospital zmdi-hc-lg" /> Sağlık
                    </a>
                  </li>
                  <li>
                    <a href="/urunlerimiz/seyahat">
                      <i className="zmdi zmdi-airplane zmdi-hc-lg" /> Seyahat
                    </a>
                  </li>
                  <li>
                    <a href="/urunlerimiz/nakliyat">
                      <i className="zmdi zmdi-truck zmdi-hc-lg" /> Nakliyat
                    </a>
                  </li>
                  <li>
                    <a href="/urunlerimiz/konut">
                      <i
                        className="zmdi zmdi-home zmdi-hc-lg"
                        zmdi-hc-lg={""}
                      />{" "}
                      Konut
                    </a>
                  </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                  lorem
              </div>
            
            </div>
          </div>
        </div>
        {/*// Footer Widgets Area */}
        {/* Footer Copyright Area */}
        <div className="footer-copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <p className="copyright-text">
                  Copyright 2018 © <a href="#">Ulusoy Sigorta</a>, Tüm Hakları saklıdır.
                </p>
              </div>
              <div className="col-lg-6 col-12">
                <ul className="copyright-links">
                  <li>
                    <a href="#">Anasayfa</a>
                  </li>
                  <li>
                    <a href="#">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="#">Ürünlerimiz</a>
                  </li>
                  <li>
                    <a href="#">İletişim</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*// Footer Copyright Area */}
      </div>
      {/*// Footer Inner */}
    </footer>
  );
};
