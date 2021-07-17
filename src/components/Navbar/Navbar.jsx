import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/logo.svg';
import arrow from '../../assets/img/arrow-right.svg';
import s from './Navbar.module.scss';

export const Navbar = () => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (

    <header className={isActive ? s.showed : s.hidden}>
      <span onClick={handleToggle}  className={`${s.toggler} ${isActive ? s.menu_open : s.menu_close}`}>
        <img src={arrow} alt="IBS-9" className={s.toggle_icon} />
      </span>

      <div className={s.navigation}>
        <NavLink to="/" className={s.logo}>
          <img src={logo} alt="IBS-9" className={s.logo__img} />
        </NavLink>
        <ul className={s.menuList}>
          <li className={s.menuList__item}>
            <NavLink to="/" exact className={s.menuList__link} activeClassName={s.menuList__link_active}>
              <span className={`${s.menuList__icon} ${s.menuList__icon_home}`} />
              О проекте
            </NavLink>
          </li>
          <li className={s.menuList__item}>
            <NavLink to="/service" className={s.menuList__link} activeClassName={s.menuList__link_active}>
              <span className={`${s.menuList__icon} ${s.menuList__icon_service}`} />
              Сервис
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}