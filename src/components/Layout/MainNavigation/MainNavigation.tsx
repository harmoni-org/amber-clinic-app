import React from "react";
import "./MainNavigation.module.css";

type MainNavigationProps = {
  onClick: (isValid: boolean) => void;
};

const MainNavigation: React.FC<MainNavigationProps> = ({ onClick }) => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="index.html">
              <span className="fas fa-star-half-alt" aria-hidden="true"></span>
              Amber Ağız ve Diş Sağlığı
            </a>
          </h1>
        </li>
        <li>
          <a href="">Anasayfa</a>
        </li>
        <li>
          <a href="">Hakkımızda</a>
        </li>
        <li>
          <a href="">Hizmetlerimiz</a>
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
