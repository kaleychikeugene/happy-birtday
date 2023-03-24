import React, { useState, useEffect, createRef } from 'react';
import { Link, navigate } from 'gatsby';

import { isAuth } from '../../helpers/general';

import AddNotification from '../AddNotification';
import Brand from '../Brand';
import Container from '../Container';
import Config from '../../config.json';
import Drawer from '../Drawer';
import ExpandedMenu from '../ExpandedMenu';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import MiniCart from '../MiniCart';
import MobileNavigation from '../MobileNavigation';
import * as styles from './Header.module.css';

const Header = (prop) => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const [menu, setMenu] = useState();
  const [activeMenu, setActiveMenu] = useState();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');

  const searchRef = createRef();
  const bannerMessage = 'Free shipping worldwide';
  const searchSuggestions = [
    'Oversize sweaters',
    'Lama Pajamas',
    'Candles Cinnamon',
  ];

  const handleHover = (navObject) => {
    if (navObject.category) {
      setShowMenu(true);
      setMenu(navObject.category);
      setShowSearch(false);
    } else {
      setMenu(undefined);
    }
    setActiveMenu(navObject.menuLabel);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    setShowSearch(false);
  };

  // disable active menu when show menu is hidden
  useEffect(() => {
    if (showMenu === false) setActiveMenu(false);
  }, [showMenu]);

  // hide menu onscroll
  useEffect(() => {
    const onScroll = () => {
      setShowMenu(false);
      setShowSearch(false);
      setActiveMenu(undefined);
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  //listen for show search and delay trigger of focus due to CSS visiblity property
  useEffect(() => {
    if (showSearch === true) {
      setTimeout(() => {
        searchRef.current.focus();
      }, 250);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSearch]);

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.header}>
          <h2>HAPPY BIRTHDAY, GEORGE!</h2>
        </div>
      </Container>
    </div>
  );
};

export default Header;
