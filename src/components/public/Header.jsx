import "../public/css/header.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const checkCookie = (access_token) => {
  return Cookies.get(access_token) !== undefined;
};

const Header = () => {
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    const cookieExists = checkCookie('access_token');
    console.log(cookieExists)
    setHasCookie(cookieExists);
  }, []);

    return (
      <>
          <nav>
            <ul className="menu">
              <li><Link to="/">ACCUEIL</Link></li>
              <li><Link to="/concept">CONCEPT</Link></li>
              <li><Link to="/cities">VILLES</Link></li>
              <li><Link to="/tournaments">TOURNOIS</Link></li>
              <li><Link to="/rankings">CLASSEMENTS</Link></li>
              <li><Link to="/rules">RÈGLEMENT</Link></li>
              <a>
                <button><Link to="/login"></Link></button>
              </a>
              <p>{hasCookie ? 'Cookie exists!' : 'Cookie does not exist.'}</p> 
            </ul>
          </nav>
          <header>
            <div class="bannerlogo"></div>
            <h1>JOUEZ AUX ECHECS PREZ DE CHEZ VOUS !</h1> 
          </header>
      </>
    )
}
export default Header;