import React from "react";
import "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type MainNavigationProps = {
  onClick: (isValid: boolean) => void;
};

const MainNavigation: React.FC<MainNavigationProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <h1>
            <span>
              <span className="fas fa-star-half-alt" aria-hidden="true"></span>
              {t("navbar.TITLE")}
            </span>
          </h1>
        </li>
        <li>
          <Link to="home">{t("navbar.HOME_PAGE")}</Link>
        </li>
        <li>
          <Link to="about-us">{t("navbar.ABOUT_US")}</Link>
        </li>
        <li>
          <Link to="services">{t("navbar.SERVICES")}</Link>
        </li>
        <li>
          <Link to="contact">{t("navbar.CONTACT")}</Link>
        </li>
        <li>
          <Link to="blog">{t("navbar.BLOG")}</Link>
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
