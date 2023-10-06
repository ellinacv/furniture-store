import React from 'react';

import s from './Features.module.scss';

import img_01 from '../../images/features/fea_01.svg';
import img_02 from '../../images/features/fea_02.svg';
import img_03 from '../../images/features/fea_03.svg';
import img_04 from '../../images/features/fea_04.svg';

const features = [
  {
    img: img_01,
    title: 'Next day as standard',
    descr: 'Order before 3pm and get your order the next day as standard',
  },
  {
    img: img_02,
    title: 'Made by true artisans',
    descr: 'Handmade crafted goods made with real passion and craftmanship',
  },
  {
    img: img_03,
    title: 'Unbeatable prices',
    descr:
      'For our materials and quality you won’t find better prices anywhere',
  },
  {
    img: img_04,
    title: 'Recycled packaging',
    descr:
      'We use 100% recycled packaging to ensure our footprint is manageable',
  },
];

export const Features = () => {
  return (
    <section className={s.wrap}>
      <div className="container">
        <div className={s.content}>
          <h2 className={`${s.content__title} title`}>
            What makes our brand different
          </h2>
          <div className={s.content__items}>
            {features.map((i) => (
              <div className={s.item}>
                <img width={24} height={24} src={i.img} alt="Features" />
                <h5 className={s.item__title}>{i.title}</h5>
                <p className={s.item__descr}>{i.descr}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
