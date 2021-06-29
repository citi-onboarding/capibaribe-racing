import React, { useState, useEffect } from "react";
import styles from "./AboutUs.module.css";
import Slider from "react-slick";
import apiAxios from "../../services/api-axios.js";
import { ReactComponent as ArrowRight} from "../../assets/arrowRight.svg";
import { ReactComponent as ArrowLeft}  from "../../assets/arrowLeft.svg";
import "./slickAboutUs.css";

function AboutUs (){

  const [aboutUs, setAboutUs] = useState([]);
  const [values, setValues] = useState([]);

  const loadValues = async () => {
    const res = await apiAxios.get('values');
    console.log(res.data);
    setValues(res.data);
  }

  const loadAboutUs = async () => {
    const res = await apiAxios.get('aboutUs');
    setAboutUs(res.data);
  };

  useEffect( () => {
    loadAboutUs();
    loadValues();
  }, []);

  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({onClick}) => {
    return (
      <div className={`${styles.arrow} ${styles.Next}`} onClick={onClick}>
        <ArrowRight />
      </div>
    );
  };

  const PrevArrow = ({onClick}) => {
    return (
      <div className={`${styles.arrow} ${styles.Prev}`} onClick={onClick}>
        <ArrowLeft />
      </div>
    );
  };


  const settings = {
    speed: 500,
    arrows: true,
    infinite: true,
    lazyLoad: true,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    accessibility: true,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    autoplay: true,
    autoplaySpeed: 1555555000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
    ]
  };

  return(
    <section className={`fontDescription container ${styles.aboutUsSection}`} id="AboutUs">
      <div className={styles.aboutUsModel}>
        <div className={styles.title}>
          <h2 className={styles.titleAboutUs}>{aboutUs.map((d) => d.title)}</h2>
        </div>
        <div className={styles.description}>
          <p className={styles.descriptionAboutUs}>{aboutUs.map((d) => d.description)}</p>
        </div>
        <button className={styles.content}>
          <a href={aboutUs.map((d) => d.content)}>ACESSE NOSSOS CONTEÚDOS</a>
        </button>
      </div>

      <div className={styles.Carousel}>
          <Slider {...settings}>
            {values.map(({values, _id, name}, idx) => (
              <div className={idx === imageIndex ? `${styles.CarouselCards} ${styles.activeSlide}` : `${styles.CarouselCards}`}>
                <div className={styles.Card}>
                  <img
                    src={values.icon.secure_url}
                    alt={'f'}
                  />
                  <h3>{values.title}</h3>
                  <p>{values.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

    </section>
  );
};

export default AboutUs;
