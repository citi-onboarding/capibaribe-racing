import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import apiAxios from "../../services/api-axios.js";

function Banner(){
  const [banner, setBanner] = useState([]);

  const loadBanner = async () => {
    const res = await apiAxios.get('banner');
    setBanner(res.data);
  };


  useEffect(
    () => {loadBanner()}, [],
  );

  return(
    <div className={`${styles.bannerContainer} ${styles.banner}`} id="banner" style={{ backgroundImage: `url(${banner.map((d) => d.image.secure_url)})` }}>

      <div className={`container ${styles.text}`}>

        <div className={styles.title}>
          <h1 className={styles.titleBanner} id={styles.title}>{banner.map((d) => d.title)}</h1>
        </div>

        <div className={styles.lineCenter} id={styles.title}></div>

        <div className={styles.subtitle}>
          <p className={styles.subtitleBanner}>
            {banner.map((d) => d.description)}
          </p>
        </div>

      </div>

    </div>
  );
};

export default Banner;
