import React from "react";
import "./MainNavigation.module.css";
// the hook
import { useTranslation } from 'react-i18next';

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
            <a href="index.html">
              <span className="fas fa-star-half-alt" aria-hidden="true"></span>
              {t('Amber Oral and Dental Health')}
            </a>
          </h1>
        </li>
        <li>
          <a href="">{t('Home page')}</a>
        </li>
        <li>
          <a href="">{t('About us')}</a>
        </li>
        <li>
          <a href="">{t('Our services')}</a>
        </li>
        <li>
          <a href="" target="_blank" className="button">
            Whatsapp
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
