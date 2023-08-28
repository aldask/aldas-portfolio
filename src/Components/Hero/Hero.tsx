import HeroImg from "../../Images/Hero/Hero.png";


function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero__content">
          <div className="hero__content__side1">
            <div className="hero__content__side1__text">
              <h1 className="hero__content__side1__text--title">
                Hi, I'm Aldas
              </h1>
              <p className="hero__content__side1__content">
                Welcome to my portfolio website, a platform where I proudly
                exhibit my various projects and creations. Feel free to explore
                and discover the innovative solutions I've crafted using React.
                Whether you're interested in web development, user interfaces,
                or cutting-edge design, you've come to the right place. Join me
                on this journey as I continue to push the boundaries of what's
                possible in the world of front-end development.
              </p>
            </div>
          </div>
          <div className="hero__content__side2">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
