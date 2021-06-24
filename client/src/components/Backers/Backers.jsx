import React, { useState, useEffect } from "react";
import styles from "./backers.module.css";
import Slider from "react-slick";
import apiAxios from "../../services/api-axios.js";
import { ReactComponent as ArrowRight} from "../../assets/arrowRight.svg";
import { ReactComponent as ArrowLeft}  from "../../assets/arrowLeft.svg";

import "./slickBackers.css";

function Backers () {
    const [backers, setBackers] = useState([]);

    const loadBackers = async () => {
      const res = await apiAxios.get("backers");
      setBackers(res.data);
      console.log(backers);
    };

    useEffect(() => {
      loadBackers();
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
      Slide: 'divoooooooo',
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

    return (
      <section className="fontDescription container" id={styles.BackersSection}>
        <h2>Patrocinadores</h2>

        <div className={styles.Carousel} id="CarouselSectionBackers">
          <Slider {...settings}>
            {backers.map(({fields, name, _id}, idx) => (
                <div key={_id} className={idx === imageIndex ? `${styles.CarouselCards} ${styles.activeSlide}` : `${styles.CarouselCards}`}>
                  <div className={styles.Card}>
                    <img
                      src={fields.addImage.url}
                      alt={name}
                      />
                  </div>
                </div>
            ))}
          </Slider>
        </div>

        <article className="backGroundBordo">
          <h2>Nos Apoie</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,
          </p>
        </article>


      </section>

    );
};

export default Backers;
