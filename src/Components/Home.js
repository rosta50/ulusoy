import React from "react";

import { Nav, Menu, Slider, Breadcrumb,Footer, Product, Teklif, Rehber, Kaydırak, Rehberlik } from "../Partials/Ui";

const Home = () => {
  return (
    <div>
      <header>
        <Nav />
        <Menu />
      </header>
      
      <Kaydırak/>
      <Product/>
      <Teklif/>
      <Rehberlik/> 
      <Footer/>
    </div>
  );
};

export default Home;
