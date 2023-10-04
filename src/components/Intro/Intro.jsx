import React from 'react';

import s from './Intro.module.scss';
import bg from '../../images/intro/intro-bg.jpg';

export const Intro = () => {
  return (
    <section className={s.wrap}>
      <div className="container">
        <div className={s.content}>
          <div className={s.content__text}>
            <h1 className={`${s.content__title} title`}>
              The furniture brand for the future, with timeless designs
            </h1>
            <div className={s.content__row}>
              <a href="/#" className={s.content__btn}>
                View collection
              </a>
              <p className={s.content__descr}>
                A new era in eco friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>
            </div>
          </div>
          <div className={s.content__image}>
            <img src={bg} alt="Chair" />
          </div>
        </div>
      </div>
    </section>
  );
};
