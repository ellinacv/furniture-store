import React from 'react';

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
  return (
    <header className={s.wrapper}>
      <div className={s.row}>
        <div className={s.row__logo}>
          <Like width="20" height="20" />
          <h3 className={s.logo}>DeiIied</h3>
          <div className={s.actions}>
            <Cart width="20" height="20" />
            <User width="20" height="20" />
          </div>
        </div>
        <nav className={s.row__nav}>
          {navItem.map((i) => (
            <a href={i.href}>{i.title}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};
