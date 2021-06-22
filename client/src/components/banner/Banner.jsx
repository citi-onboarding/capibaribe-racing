import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import apiAxios from "../../services/api-axios.js";

function Banner(){
  const [banner, setBanner] = useState([]);
  const loadBanner = async () => {
    const res = await apiAxios.get('banner');
    console.log(res.data[0].image.secure_url);
    setBanner(res.data);
  };

  useEffect(
    () => {loadBanner()}, [],
  );

  return(
    <div className={styles.bannerContainer} id={styles.banner} style={{ backgroundImage: `url(${banner.map((d) => d.image.secure_url)})` }}>

      <div className={styles.text}>

        <div className={styles.title}>
          <h1 className={styles.titleBanner}>CONSTUINDO O FUTURO DO AUTOMOBILISMO ELÉTRICO</h1>
        </div>

        <div className={styles.subtitle}>
          <h2 className={styles.subtitleBanner}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</h2>
        </div>

      </div>

    </div>
  );
};

export default Banner;
