import React from 'react';
import iphone from '../../assets/img/iphone.jpg';
import { Filter } from '../Filter/Filter';
import { Order } from '../Order/Order';

import styles from './Produts.module.css';

export const Produts = () => {
  return (
    <>
      <div className={styles.filtersWrapper}>
        <h4 className={styles.title}>Ordenar por:</h4>
        <Order />
        <Filter />
      </div>

      <main className={styles.products}>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>

        <div className={styles.product}>
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
      </main>
    </>
  );
};
