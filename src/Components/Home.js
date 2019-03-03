import React from "react";

import { Nav, Menu, Slider, Breadcrumb } from "../Partials/Ui";

const Home = () => {
  return (
    <div>
      <header>
        <Nav />
        <Menu />
      </header>
      <div className="heroslider-area in-sliderarrow">
        {/* Hero Slider Single */}
        <div
          className="heroslider animated-heroslider d-flex align-items-center"
          data-bgimage="assets/images/bg/background-image-1.jpg"
          data-secondary-overlay={8}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 col-lg-8">
                <div className="heroslider-content">
                  <h1>
                    <span>Daha İyi Bir Gelecek İçin </span>Ulusoy Sigorta
                  </h1>
                  <p>20 yılı aşkın süredir alanında lider marka</p>
                  <div className="heroslider-buttonholder">
                    <a
                      href="#chp4"
                      id="scrollDown"
                      className="in-button in-button-colorwhite"
                    >
                      Hemen Teklif Alın
                    </a>
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
        
      </div>
    </div>
  );
};

export default Home;
