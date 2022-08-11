import React from 'react';
import styles from './App.module.css';
import { Sliders } from './components/Sliders/Sliders';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { chooseColor, chooseTab, countMinus, countPlus } from './redux/productCardSlice';
const logo = require("./img/Vector.png");

export const App: React.FC = () => {
  const state = useAppSelector(state => state.productCardSlice);
  const dispatch = useAppDispatch();

  const handleChooseColor = (index: number): void => {
    dispatch(chooseColor(index))
  }

  const handleCountPlus = (): void => {
    dispatch(countPlus())
  }

  const handleCountMinus = (): void => {
    dispatch(countMinus())
  }

  const handleChooseTab = (tabName: string): void => {
    dispatch(chooseTab(tabName));
  }
  
  const handleAddtoCart = (): void => {
    console.log(`Корзина: 
      Цена: ${state.price},
      Цвет: ${state.colors.filter(item => item.selected === true)[0].name},
      Количество: ${state.count}
    `)
  }

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.titleLogo}>
            <p className={styles.title}>Nike Air Force Travis Scott</p>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
          <p className={styles.vendorCode}>Артикул: 34934934</p>
          <div className={styles.content}>
            <div className={styles.sliders}>
              <Sliders />
            </div>
            <div className={styles.info}>
              <div className={styles.infoContainer}>
                <p className={styles.price}>{state.price} <span className={styles.rub}>₽</span></p>
                <div className={styles.colors}>
                  <p className={styles.colorsTitle}>Цвет: </p>
                  <div className={styles.chooseColor}>
                    {state.colors.map((item, index) => {
                      return (
                        <div onClick={() => handleChooseColor(index)} style={{ backgroundColor: `${item.color}` }}
                          className={state.colors[index].selected ? `${styles.color} ${styles.choosenColor}`
                            : styles.color}></div>
                      )
                    })}
                  </div>

                </div>
                <div className={styles.buttons}>
                  <div className={styles.count}>
                    <p onClick={handleCountMinus} className={styles.minus}>-</p>
                    <p className={styles.number}>{state.count}</p>
                    <p onClick={handleCountPlus} className={styles.plus}>+</p>
                  </div>
                  <button className={styles.buy}>Купить в 1 клик</button>
                  <button onClick = {handleAddtoCart} className={styles.addToCart}>
                    <div className={styles.cartImg}></div> <span>В корзину</span>
                  </button>
                </div>
                <div className={styles.tabs}>
                  <div className={styles.tabsTitles}>
                    <p onClick = {() => handleChooseTab('Описание')}  
                    className={state.tabs[0].active ? styles.selectedTab : styles.notSelected}>Описание</p>
                    <p onClick = {() => handleChooseTab('Характеристики')} 
                    className={state.tabs[1].active ? styles.selectedTab : styles.notSelected}>Характеристики</p>
                    <p onClick = {() => handleChooseTab('Отзывы')} 
                    className={state.tabs[2].active ? styles.selectedTab : styles.notSelected}>Отзывы</p>
                  </div>
                  <div className={styles.tabsInfo}>
                    <div className={state.tabs[0].active ? styles.activeTab : styles.notActive}>Описание</div>
                    <div className={state.tabs[1].active ? styles.activeTab : styles.notActive}>
                      <div className={styles.characteristicsTitles}>
                        <p>Категория:</p>
                        <p>Производитель:</p>
                        <p>Гарантия:</p>
                      </div>
                      <div className={styles.characteristicsInfo}>
                        <p>Кроссовки</p>
                        <p>Nike</p>
                        <p>2 года</p>
                      </div>
                    </div>
                    <div className={state.tabs[2].active ? styles.activeTab : styles.notActive}>Отзывы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}