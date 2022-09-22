import React from "react";
import "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type MainNavigationProps = {
  onClick: (isValid: boolean) => void;
};

const MainNavigation: React.FC<MainNavigationProps> = ({ onClick }) => {
  const { t, i18n } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <h1>
            <span>
              <span className="fas fa-star-half-alt" aria-hidden="true"></span>
              Amber Ağız ve Diş Sağlığı
            </span>
          </h1>
        </li>
        <li>
          <Link to="home">Anasayfa</Link>
        </li>
        <li>
          <Link to="about-us">Hizmetlerimiz</Link>
        </li>
        <li>
          <Link to="services">Hakkımızda</Link>
        </li>
        <li>
          <Link to="contact">İletişim</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone="
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Whatsapp
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
