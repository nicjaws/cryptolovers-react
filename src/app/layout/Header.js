import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col header__logo">CryptoLovers</div>
          <div className="col text-right">
            <a
              href="https://twitter.com/nicjaws"
              rel="noopener noreferrer"
              target="_blank"
              className="header__icon"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://github.com/nicjaws"
              rel="noopener noreferrer"
              target="_blank"
              className="header__icon"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/nicolascorbalan"
              rel="noopener noreferrer"
              target="_blank"
              className="header__icon"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
