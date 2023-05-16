import CartoonImage from '../../assets/cartoon.jpg';
import MovieImage from '../../assets/movie.png';
import LifeImage from '../../assets/life.jpg';
import FoodImage from '../../assets/food.jpg';
import styles from './styles.module.scss';

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

const tabs = [
  {
    key: 'cartoon',
    title: '卡通',
    img: CartoonImage,
  },
  {
    key: 'movie',
    title: '电影',
    img: MovieImage,
  },
  {
    key: 'life',
    title: '生活',
    img: LifeImage,
  },
  {
    key: 'food',
    title: '食品',
    img: FoodImage,
  },
];

const SecondSection = () => {
  const [activeTab, setActiveTab] = useState('cartoon');
  const [isFixed, setIsFixed] = useState(false);
  const secondSectionRef = useRef(null);
  const activate = (key) => {
    setActiveTab(key);
    //获取点击dom
    const tabContentEl = document.querySelector(`[data-id=${key}]`);
    //滑动到指定dom
    if (tabContentEl) {
      tabContentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  //滚动事件
  const onScroll = () => {
    if (secondSectionRef.current) {
      const { top } = secondSectionRef.current.getBoundingClientRect();
      setIsFixed(top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []); //监听数组

  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      <ul className={classNames({ [styles.isFixed]: isFixed })}>
        {tabs.map((tab) => {
          return (
            <li
              key={tab.key}
              onClick={() => {
                return activate(tab.key);
              }}
            >
              <span>{tab.title}</span>
              <span
                className={classNames(styles.line, {
                  [styles.visible]: activeTab === tab.key,
                })}
              ></span>
            </li>
          );
        })}
      </ul>
      <div>
        {tabs.map((tab) => (
          <section data-id={tab.key}>
            <h2>{tab.title}</h2>
            <img src={tab.img} alt={tab.key} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
