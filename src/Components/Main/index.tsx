import Slide from "./Slide/Slide";

function Main() {
  return (
    <div className="main">
      <div className="main__top">
        <div className="main__top__left">
          <h1>
            <span className="logo-color">&#123; &#125; </span>Aldas.dev
          </h1>
        </div>
        <div className="main__top__right">
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className="main__bottom">
        <Slide />
      </div>
    </div>
  );
}

export default Main;
