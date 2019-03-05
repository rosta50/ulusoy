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
                  <a href="/hakkımızda">Hakkımızda</a>
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
                  <a href="/bize-ulaşın">Bize Ulaşın</a>
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


//kaydırıcı
export const Kaydırak = props => {
  return (
    <div>
      {/* Hero Slider Area */}
      <div className="heroslider-area in-sliderarrow">
        {/* Hero Slider Single */}
        <div className="heroslider animated-heroslider d-flex align-items-center" data-bgimage="assets/images/bg/background-image-1.jpg" data-secondary-overlay={8}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 col-lg-8">
                <div className="heroslider-content">
                  <h1><span>Daha İyi Bir Gelecek İçin </span>Ulusoy Sigorta</h1>
                  <p>20 yılı aşkın süredir alanında lider marka</p>
                  <div className="heroslider-buttonholder">
                    <a href="#chp4" id="scrollDown" className="in-button in-button-colorwhite">Hemen Teklif Alın</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="heroslider-roundbox roundbox">
                  <div className="roundbox-block">
                    <span className="roundbox-icon">
                      <i className="flaticon-mind" />
                    </span>
                    <h5>Etkili iletişim </h5>
                  </div>
                  <div className="roundbox-block">
                    <span className="roundbox-icon">
                      <i className="flaticon-life-insurence" />
                    </span>
                    <h5>Güvenilirlik</h5>
                  </div>
                  <div className="roundbox-block">
                    <span className="roundbox-icon">
                      <i className="flaticon-planning" />
                    </span>
                    <h5>İvedilik</h5>
                  </div>
                  <div className="roundbox-block">
                    <span className="roundbox-icon">
                      <i className="flaticon-businessman" />
                    </span>
                    <h5>Optimum Fiyat </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*// Hero Slider Single */}
      </div>
      {/*// Hero Slider Area */}
    </div>  
  );
}

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


//Product
export const Product = () => {
  return (
    <div>
      {/* Services Area */}
      <div className="services-area in-section section-padding-xs bg-shape">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6>SİZLER İÇİN EN İYİSİ</h6>
                <h2>Ürünlerimiz</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Service */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="in-service mt-30">
                <a href="services-details.html">
                  <span className="in-service-icon">
                    <i className="flaticon-life-insurence" />
                  </span>
                </a><h5><a href="services-details.html" /><a href="services-details.html"> Hayat Sigortası</a></h5>
                <p>Hastalık veya kazalar sonucu yaşanabilecek sağlık sorunlarında  ekonomik bir güvence sağlamak için isteğe bağlı olarak yaptırılan bir sigorta türü olduğudur.</p>
                <span className="in-service-transparenticon">
                  <i className="flaticon-life-insurence" />
                </span>
              </div>
            </div>
            {/*// Single Service */}
            {/* Single Service */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="in-service mt-30">
                <span className="in-service-icon">
                  <i className="flaticon-mortgage" />
                </span>
                <h5><a href="services-details.html">Konut Sigortası</a></h5>
                <p>Konut sigortası, bina ve isteğe bağlı olarak içinde yer alan eşyaları güvence altına alır. Bu durumda  her tür sabit tesisat da sigorta kapsamına girmektedir.</p>
                <span className="in-service-transparenticon">
                  <i className="flaticon-mortgage" />
                </span>
              </div>
            </div>
            {/*// Single Service */}
            {/* Single Service */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="in-service mt-30">
                <span className="in-service-icon">
                  <i className="flaticon-van" />
                </span>
                <h5><a href="services-details.html">Seyehat Sigortası</a></h5>
                <p>Seyahat sırasında ortaya çıkabilecek trafik kazaları, yolculuk iptalleri veya uçak seferinin gecikmesi gibi çeşitli risklere karşı güvence sağlar.</p>
                <span className="in-service-transparenticon">
                  <i className="flaticon-van" />
                </span>
              </div>
            </div>
            {/*// Single Service */}
            {/* Single Service */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="in-service mt-30">
                <span className="in-service-icon">
                  <i className="flaticon-bars" />
                </span>
                <h5><a href="services-details.html">İş Yeri Sigortası</a></h5>
                <p>İşyeri binası, demirbaş eşyalar, makine-tesisat varlıklarınızı paket olarak bir araya getirilmiş teminatlar dahilinde, oluşabilecek risklere karşı güvence al tına alır.</p>
                <span className="in-service-transparenticon">
                  <i className="flaticon-bars" />
                </span>
              </div>
            </div>
            {/*// Single Service */}
            {/* Single Service */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="in-service mt-30">
                <span className="in-service-icon">
                  <i className="flaticon-agriculture" />
                </span>
                <h5><a href="services-details.html">Nakliyat Sigortası</a></h5>
                <p>Herhangi bir yükün, karayolu, havayolu, denizyolu ve demiryolu nakil vasıtalarıyla taşınması esnasında olabilecek hasar ve kayıpları  güvence altına alan sigorta türüdür.</p>
                <span className="in-service-transparenticon">
                  <i className="flaticon-agriculture" />
                </span>
              </div>
            </div>
            {/*// Single Service */}
            {/* Single Service */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="in-service mt-30">
                <span className="in-service-icon">
                  <i className="flaticon-health-insurance" />
                </span>
                <h5><a href="services-details.html">Hayat Sigortası</a></h5>
                <p>Hayat Sigortası, hayatın getireceği beklenmedik durumlara karşı kendinizin ve sevdiklerinizin yaşam standardını korumanızı sağlayan bir güvencedir.</p>
                <span className="in-service-transparenticon">
                  <i className="flaticon-health-insurance" />
                </span>
              </div>
            </div>
            {/*// Single Service */}
            {/* Single Service */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="in-service mt-30">
                <span className="in-service-icon">
                  <i className="flaticon-car-1" />
                </span>
                <h5><a href="services-details.html">Trafik Sigortası</a></h5>
                <p>Trafiğe çıkmadan önce yaptırması gereken, hasar anında karşı tarafa verilebilecek bedeni ve maddi zararları güvence altına alan kanunen zorunlu olan sigortadır.</p>
                <span className="in-service-transparenticon">
                  <i className="flaticon-car-1" />
                </span>
              </div>
            </div>
            {/*// Single Service */}
            {/* Single Service */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="in-service mt-30">
                <span className="in-service-icon">
                  <i className="flaticon-car" />
                </span>
                <h5><a href="services-details.html">Kasko Sigortası</a></h5>
                <p>Kasko sigortası, hasar durumunda aracın zararını karşılamak amacıyla, isteğe bağlı olarak yaptırılan sigortadır.</p>
                <span className="in-service-transparenticon">
                  <i className="flaticon-car" />
                </span>
              </div>
            </div>
            {/*// Single Service */}
          </div>
        </div>
      </div>
      {/*// Services Area */}
    </div>  
  );
}

//Teklif
export const Teklif = () => {
  return (
    <div>
      {/* About Area */}
      <div className="about-area in-section section-padding-top-xs bg-white" id="chp4">
        <div className="container ">
          <div className="row no-gutters">
            <div className="col-xl-12 col-lg-12">
              <div className="insurencebox heightmatch">
                <h2>Hemen Teklif Alın</h2>
                <div className="tab-content">
                  <ul>
                    <li className="active">
                      <a href="javascript:;" data-tab="menu-1"><i className="zmdi zmdi-car" />  Kasko</a>
                    </li>
                    <li>
                      <a href="javascript:;" data-tab="menu-2"><i className="zmdi zmdi-traffic" />  Trafik</a>
                    </li>
                    <li>
                      <a href="javascript:;" data-tab="menu-3"><i className="zmdi zmdi-home" /> Dask</a>
                    </li>
                    <li>
                      <a href="javascript:;" data-tab="menu-4"><i className="zmdi zmdi-favorite" /> Sağlık</a>
                    </li>
                    <li>
                      <a href="javascript:;" data-tab="menu-5"><i className="zmdi zmdi-airplane" /> Seyehat</a>
                    </li>
                  </ul>
                  <div className="tab-panel">
                    <div className="tab-subject active" id="menu-1">
                      <form>
                        <input type="text" className="col-3" />
                        <input type="text" className="col-3" />
                        <input type="text" className="col-6" />
                      </form>
                    </div>
                    <div className="tab-subject" id="menu-2">
                      <form>
                        <input type="text" className="col-3" />
                        <input type="text" className="col-3" />
                        <input type="text" className="col-6" />
                      </form>
                    </div>
                    <div className="tab-subject" id="menu-3">
                      <form>
                        <input type="text" className="col-3" />
                        <input type="text" className="col-3" />
                        <input type="text" className="col-6" />
                      </form>
                    </div>
                    <div className="tab-subject" id="menu-4">
                      <form>
                        <input type="text" className="col-3" />
                        <input type="text" className="col-3" />
                        <input type="text" className="col-6" />
                      </form>
                    </div>
                    <div className="tab-subject" id="menu-5">
                      <form>
                        <input type="text" className="col-3" />
                        <input type="text" className="col-3" />
                        <input type="text" className="col-6" />
                      </form>
                    </div>
                    <button className="btn btn-warning">Teklif Alın</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*// About Area */}
    </div>  
  );
}

//Sigorta Rehberi
export const Rehber  = () => {
  return (
    <div>
      {/* Blog Area */}
      <div className="blogs-area in-section section-padding-lg bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6>SİZLER İÇİN EN İYİSİ</h6>
                <h2>Sigorta Rehberi</h2>
              </div>
            </div>
          </div>
          <div className="row blog-slider-active in-slidearrow">
            {/* Single Blog */}
            <div className="col-lg-4">
              <div className="in-blog mt-30">
                <div className="in-blog-image">
                  <a href="#">
                    <img src="assets/images/blog/blog-image-1.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="in-blog-content">
                  <div className="in-blog-metatop">
                    <span>15 Mart, 2019</span>
                    <span><a href="#">Devamını Oku...</a></span>
                  </div>
                  <h4 className="in-blog-title"><a href="#">Sağlık Sigortası Nedir?</a></h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipicing elit, sed do eiusmod tempor </p>
                  <div className="in-blog-authorimage">
                    <span>
                      <img src="assets/images/blog/author-image/author-image-1.png" alt="author image" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*// Single Blog */}
            {/* Single Blog */}
            <div className="col-lg-4">
              <div className="in-blog mt-30">
                <div className="in-blog-image">
                  <a href="#">
                    <img src="assets/images/blog/blog-image-2.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="in-blog-content">
                  <div className="in-blog-metatop">
                    <span>15 Mart, 2019</span>
                    <span><a href="#">Devamını Oku...</a></span>
                  </div>
                  <h4 className="in-blog-title"><a href="#">Neden Hayat Sigortası Yaptrmalıyız?</a></h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipicing elit, sed do eiusmod tempor </p>
                  <div className="in-blog-authorimage">
                    <span>
                      <img src="assets/images/blog/author-image/author-image-2.png" alt="author image" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*// Single Blog */}
            {/* Single Blog */}
            <div className="col-lg-4">
              <div className="in-blog mt-30">
                <div className="in-blog-image">
                  <a href="#">
                    <img src="assets/images/blog/blog-image-3.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="in-blog-content">
                  <div className="in-blog-metatop">
                    <span>15 Mart, 2019</span>
                    <span><a href="#">Devamını Oku...</a></span>
                  </div>
                  <h4 className="in-blog-title"><a href="#">İşyeri Sigortası Neleri Kapsar?</a></h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipicing elit, sed do eiusmod tempor </p>
                  <div className="in-blog-authorimage">
                    <span>
                      <img src="assets/images/blog/author-image/author-image-3.png" alt="author image" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*// Single Blog */}
            {/* Single Blog */}
            <div className="col-lg-4">
              <div className="in-blog mt-30">
                <div className="in-blog-image">
                  <a href="#">
                    <img src="assets/images/blog/blog-image-5.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="in-blog-content">
                  <div className="in-blog-metatop">
                    <span>15 Mart, 2019</span>
                    <span><a href="#">Devamını Oku...</a></span>
                  </div>
                  <h4 className="in-blog-title"><a href="#">Konut Sigortası Yaptırırken Nelere Dikkat Edilmeli?</a></h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipicing elit, sed do eiusmod tempor </p>
                  <div className="in-blog-authorimage">
                    <span>
                      <img src="assets/images/blog/author-image/author-image-1.png" alt="author image" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*// Single Blog */}
            {/* Single Blog */}
            <div className="col-lg-4">
              <div className="in-blog mt-30">
                <div className="in-blog-image">
                  <a href="#">
                    <img src="assets/images/blog/blog-image-3.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="in-blog-content">
                  <div className="in-blog-metatop">
                    <span>15 Mart, 2019</span>
                    <span><a href="#">Devamını Oku...</a></span>
                  </div>
                  <h4 className="in-blog-title"><a href="#">We are leading insurance
                      service.</a></h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipicing elit, sed do eiusmod tempor </p>
                  <div className="in-blog-authorimage">
                    <span>
                      <img src="assets/images/blog/author-image/author-image-3.png" alt="author image" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*// Single Blog */}
            {/* Single Blog */}
            <div className="col-lg-4">
              <div className="in-blog mt-30">
                <div className="in-blog-image">
                  <a href="#">
                    <img src="assets/images/blog/blog-image-3.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="in-blog-content">
                  <div className="in-blog-metatop">
                    <span>15 Mart, 2019</span>
                    <span><a href="#">Devamını Oku...</a></span>
                  </div>
                  <h4 className="in-blog-title"><a href="#">We are leading insurance
                      service.</a></h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipicing elit, sed do eiusmod tempor </p>
                  <div className="in-blog-authorimage">
                    <span>
                      <img src="assets/images/blog/author-image/author-image-3.png" alt="author image" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*// Single Blog */}
          </div>
        </div>
      </div>
      {/*// Blog Area */}
    </div>  
  );
}



// Hakkımızda içerik
export const Features = () => {
  return (
    <div>
      {/* Features Area */}
      <div className="features-area in-section section-padding-md bg-white">
        <div className="container">
          <div className="row features-wrapper">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="in-feature">
                <span className="in-feature-icon">
                  <i className="flaticon-lock" />
                </span>
                <h4>Güvenilir İşlem</h4>
                <p>Do eiusmod tempor incididunt ut labore et dolore masit amet.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="in-feature">
                <span className="in-feature-icon">
                  <i className="flaticon-lab" />
                </span>
                <h4>25 Yıllık Deneyim</h4>
                <p>Do eiusmod tempor incididunt ut labore et dolore masit amet.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-9">
              <div className="in-feature">
                <span className="in-feature-icon">
                  <i className="flaticon-partner" />
                </span>
                <h4>Efektif Kadro</h4>
                <p>Do eiusmod tempor incididunt ut labore et dolore masit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*// Features Area */}
    </div>   
  );
}


export const AboutUS = () => {
  return (
    <div>  
      {/* About Area */}
      <div className="about-area in-section section-padding-bottom-lg bg-white">
        <div className="container custom-container">
          <div className="row no-gutters">
            <div className="col-xl-6 col-lg-12">
              <div className="about-content heightmatch">
                <h6>ABOUT US </h6>
                <h2>Something about us</h2>
                <h4>We are leading international Insurance service
                  provider to make your happy life .</h4>
                <ul className="ul-style-1">
                  <li>Lorem ipsum dolor sit amet, ciit in voluptate velit esse cillum.</li>
                  <li>Tempor at. Duis aute irure dolor in reprehenderit in voluptate veldolou fugiat nulla paria turat.</li>
                  <li>Omnis iste natus error sit voluptatem accusantium doloremque laudantiuquae ab illo inventore veritatis et
                    quasi dolorem.</li>
                  <li>Do eiusmod tempor incididunt ut labore et dolore masit amet.</li>
                </ul>
                <a href="#" className="in-button">ABOUT US</a>
              </div>
            </div>
              <div className="col-xl-6 col-lg-6">
                <div className="heightmatch">
                  <div className="in-videobox">
                    <img src="assets/images/other/videbox-image-1.jpg" alt="man with umbrella" />
                    <a href="#" data-video-id={136709781} data-channel="vimeo" className="in-videobutton in-videobox-button"><i className="zmdi zmdi-play" /></a>
                  </div>
                </div>
              </div>
          </div>  
        </div>
      </div>
      {/*// About Area */}
    </div>  
  );
}
