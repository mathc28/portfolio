import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo-perso/logo mc gris .png";
import hamburger from "../../assets/menu-hamburger/bars-solid.svg";
import { useTranslation } from "react-i18next";
import "./style.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`header ${isTransparent ? "transparent" : ""} ${
        menuOpen ? "open" : ""
      }`}
    >
      {/* Logo avec animation fade-down */}
      <img
        src={logo}
        className="logo"
        alt="logo de Mathieu C"
        data-aos="fade-down"
        data-aos-duration="800"
      />
      <button className="menu-toggle" onClick={handleMenuToggle}>
        <img src={hamburger} className="hamburger" alt="menu toggle" />
      </button>

      {/* Navigation */}
      <div className={`navigation ${menuOpen ? "open" : ""}`}>
        <ul className="nav">
          <li>
            <Link
              to="presentation"
              href="#presentation"
              spy={true}
              smooth={true}
              duration={500}
              className="liens"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("description")}
            </Link>
          </li>
          <li>
            <Link
              to="competences"
              href="#competences"
              spy={true}
              smooth={true}
              duration={500}
              offset={-20}
              className="liens"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("competences")}
            </Link>
          </li>
          <li>
            <Link
              to="projets"
              href="#projets"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="liens"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {t("projets")}
            </Link>
          </li>
          <li>
            <Link
              to="temoignages"
              href="#temoignages"
              spy={true}
              smooth={true}
              duration={500}
              offset={-20}
              className="liens"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t("temoignages")}
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              href="#contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-20}
              className="liens"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>

        {/* Bouton de changement de langue */}
        <button
          className="switchlanguage"
          onClick={() => {
            if (i18n.resolvedLanguage === "fr") {
              i18n.changeLanguage("en");
            } else {
              i18n.changeLanguage("fr");
            }
          }}
        >
          {i18n.resolvedLanguage === "fr" ? "🇬🇧 / 🇫🇷" : "🇫🇷 / 🇬🇧"}
        </button>
      </div>
    </div>
  );
};

export default Header;
