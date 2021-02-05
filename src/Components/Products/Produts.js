import React from "react";
import iphone from "../../assets/img/iphone.jpg";
import { ReactComponent as Heart } from "../../assets/img/heart.svg";
import { Filter } from "../Filter/Filter";
import { Order } from "../Order/Order";

import styles from "./Produts.module.css";

export const Produts = () => {
  return (
    <div className={styles.productsSection}>


      <div className={styles.filtersWrapper}>
        <div className={styles.titleWrapper}>
        <h4 className={styles.title}>Ordenar por:</h4>
        <div  className={styles.order}>
        <Order />
        </div>
        </div>
        <Filter />
  
      </div>

    

  
      
      <main className={styles.products}>
        <div className={styles.product}>
          <Heart className={`${styles.heart} ${styles.liked}`} />
          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
        <div className={styles.product}>
          <Heart className={styles.heart} />

          <div className={styles.wrapper}>
            <img src={iphone} alt="" className={styles.productImg} />
          </div>
          <h4>Iphone XXI</h4>
          <p>
            <span>R$</span>11.000,00
          </p>
        </div>
      </main>
    </div>
  );
};
