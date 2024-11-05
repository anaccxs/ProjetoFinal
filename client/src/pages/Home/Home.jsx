import React from 'react';
import './home.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';

const Home = () => {
  return (
    <div>
      <header>
            <Header />
      </header>

      <section>
        <div id="kyan">
          <img src='/kyan-inicial.jpg' width="1300px" alt="Kyan" />
        </div>
        <h3 id="lacoste">LACOS<br /><span id="ano">2023</span><span id="te">TE</span></h3>
        <article id="nov">LANÇAMENTOS</article>
      </section>

      <section id="section2">
        <div className="roupas gemeas">
          <h2 className="moletons">MOLETONS</h2>
          <h2 className="compra">SAIBA MAIS</h2>
        </div>
        <div className="roupas lentes">
          <h2 className="lentes">LENTES</h2>
          <h2 className="compra">SAIBA MAIS</h2>
        </div>
        <div className="roupas polos">
          <h2 className="polos">POLOS</h2>
          <h2 className="compra">SAIBA MAIS</h2>
        </div>
        <div className="roupas tenis">
          <h2 className="tenis">TÊNIS</h2>
          <h2 className="compra">SAIBA MAIS</h2>
        </div>
      </section>

      <div id="linha"></div>

      <section id="section3">
        <div id="lancamentos">
          <h2>BDA 7 ANOS</h2>
          <p>No grande evento de comemoração de 7 anos <br /> da BDA, novas coleções com a nossa cara <br /> foram lançadas. Descubra aqui todos os produtos.</p>
          <div className="image">
            <img src='/bda.jpg' width="560px" alt="BDA 7 anos" />
          </div>
          <div id="saiba-mais">
            <h2>SAIBA MAIS</h2>
          </div>
        </div>
      </section>

    <Footer />

    </div>
  );
}

export default Home;
