import React from "react";
import styles from "./SecondCard.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const SecondCard = ({ img, title, oldprice, price }) => {
  return (
    <motion.div
      className={styles.second__item}
      layout
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.5 },
        duration: 0.7,
      }}
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1 },
      }}
    >
      <div className={styles.second__card_container}>
        <div className={styles.second__card_body}>
          <div className={styles.second__card_title}>
            <h1>Хит</h1>
            <div className={styles.card__icon}></div>
          </div>
          <div className={styles.second__card_img}>
            <img src={img} alt="img" />
          </div>
          <div className={styles.second__card_info}>
            <p>{title}</p>
            <div className={styles.second__card_subtitle}>
              <div>
                <p>{oldprice}₽</p>
                <h2>{price} ₽</h2>
              </div>
              <div>
                <Link href="/aksesuar">
                  <button>Купить</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecondCard;
