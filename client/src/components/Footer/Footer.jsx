import React from 'react';
import styles from "./Footer.module.css";
import InstagramIcon from '../../assets/instagram-ico.svg';
import LinkedinIcon from '../../assets/linkedin-ico.svg';
import PhoneIcon from '../../assets/phone-ico.svg';
import CitiIcon from '../../assets/logo-citi-footer.svg';
import CapibaLogoFooter from '../../assets/logo-footer.svg';


function Footer () {
    return (
        <footer className="fontDescriptionFooter container" id={styles.FooterContent}>
            <div className={styles.SocialContent}>
                <div className={styles.SocialIcons}>
                    <a href="https://www.linkedin.com/company/capibaribe-racing/" rel="noreferrer" target="_blank">
                        <img src={LinkedinIcon} alt=""/>
                        <span>Capibarib-E Racing</span>
                    </a>
                </div>

                <div className={styles.SocialIcons}>
                    <a href="https://www.instagram.com/capibariberacing/" rel="noreferrer" target="_blank">
                        <img src={InstagramIcon} alt=""/>
                        <span>capibariberacing</span>
                    </a>
                </div>

                <div className={styles.SocialIcons}>
                    <img src={PhoneIcon} alt=""/>
                    <span>(81) 00000-0000</span>
                </div>
                <div>
                    <p className={styles.TextSocial}>
                        Nos acompanhe nas redes sociais!
                    </p>
                </div>
            </div>

            <div className={styles.LogoCapibaFooter}>
                <img src={CapibaLogoFooter} alt="" />
            </div>

            <div className={styles.Complement}>
              <div>
                <p>Endereço: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit eqeqeqweqweqweqweeeeeee eeeeeeeeeeeeeeeeeeee</span></p>
              </div>
              <div>
                <p className={styles.MadeWithText}>Made with &lt; / &gt; and <span>❤</span> by <span><img src={CitiIcon} alt="" /></span></p>
              </div>
            </div>
        </footer>
    );
};

export default Footer;
