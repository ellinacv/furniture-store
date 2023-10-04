import React, { useEffect, useState } from 'react';

import { useScrollLock } from '../../hooks/useScrollLock';

import { Like } from '../../images/svg/Like';
import { Cart } from '../../images/svg/Cart';
import { User } from '../../images/svg/User';

import s from './Header.module.scss';

const navItem = [
  { title: 'Plant pots', href: '#plant' },
  { title: 'Tables', href: '#tables' },
  { title: 'Chairs', href: '#chairs' },
  { title: 'Tableware', href: '#tableware' },
  { title: 'Cutlery', href: '#cultery' },
];

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const [lockScroll, unlockScroll] = useScrollLock();

  useEffect(() => {
    if (showNav) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [showNav, lockScroll, unlockScroll]);

  return (
    <header className={`${s.wrapper} ${showNav ? s.active : ''}`}>
      <div className={s.row}>
        <div className={s.row__logo}>
          <Like className={s.like} width="20" height="20" />
          <h3 className={s.logo}>DeiIied</h3>
          <div className={s.actions}>
            <Cart width="20" height="20" />
            <User width="20" height="20" />
          </div>
          <Cart className={s.cart_mobile} width="20" height="20" />
          <button
            className={`${s.menu} ${showNav ? s.active : ''}`}
            onClick={() => setShowNav((s) => !s)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav className={s.row__nav}>
          {navItem.map((i) => (
            <a key={i.href} href={i.href}>
              {i.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
