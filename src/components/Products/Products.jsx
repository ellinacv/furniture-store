import React from 'react';
import s from './Products.module.scss';

import card1 from '../../images/products/card_01.jpg';
import card2 from '../../images/products/card_02.jpg';
import card3 from '../../images/products/card_03.jpg';
import card4 from '../../images/products/card_04.jpg';
import card5 from '../../images/products/card_05.jpg';

import { Like } from '../../images/svg/Like';
import { Plus } from '../../images/svg/Plus';

const cards = [
  {
    title: 'The Dandy chair',
    price: 250,
    image: card1,
  },
  {
    title: 'Rustic Vase Set',
    price: 155,
    image: card2,
  },
  {
    title: 'The Silky Vase',
    price: 125,
    image: card3,
  },
  {
    title: 'The Lucy Lamp',
    price: 300,
    image: card4,
  },
  {
    title: 'The Dandy chair',
    price: 250,
    image: card5,
  },
  {
    title: 'The Dandy chair',
    price: 250,
    image: card4,
  },
  {
    title: 'Rustic Vase Set',
    price: 155,
    image: card2,
  },
  {
    title: 'The Silky Vase',
    price: 125,
    image: card3,
  },
];

export const Products = () => {
  return (
    <section className={s.wrap}>
      <div className="container">
        <h2 className={`${s.title} title`}>Our products</h2>
        <div className={s.cards}>
          {cards.map((card) => (
            <div className={s.cards__item}>
              <div className={s.cards__item__img}>
                <img src={card.image} alt={card.title} />
                <Like className={s.like} color="white" />
              </div>
              <div className={s.cards__item__text}>
                <div>
                  <h5>{card.title}</h5>
                  <span>{card.price} $</span>
                </div>
                <button className={s.cards__item__btn}>
                  <Plus width="18" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={s.btn}>
          <a href="/#" className="btn">
            View collection
          </a>
        </div>
      </div>
    </section>
  );
};
