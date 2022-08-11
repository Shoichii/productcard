import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../redux/hooks';
import styles from './Sliders.module.css';
import 'swiper/css';
import { Navigation, Swiper as SwiperClass, Thumbs } from 'swiper';
import { useAppDispatch } from './../../redux/hooks';
import { chooseSlide } from '../../redux/productCardSlice';
import 'swiper/css/navigation';
import './swiper.css'

export const Sliders: React.FC = () => {
    const state = useAppSelector(state => state.productCardSlice);
    const dispatch = useAppDispatch();
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    const handleChooseSlide = (index: number): void => {
        dispatch(chooseSlide(index))
    }

    return (
        <div className={styles.main}>
            <div className={styles.bigslider}>
                <Swiper
                    initialSlide={0}
                    grabCursor={true}
                    spaceBetween={15}
                    slidesPerView={1}
                    centeredSlides={true}
                    modules={[Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {state.slider1.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <div className={styles.slider1Sneaker}>
                                    <img src={item} alt="sneakers" />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className={styles.smallSlider}>
                <Swiper
                    grabCursor={true}
                    className='smallSwiper'
                    slidesPerView={3}
                    spaceBetween={15}
                    initialSlide={2}
                    modules={[Navigation]}
                    navigation
                    onSwiper={setThumbsSwiper}
                >
                    {state.slider2.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <div onClick={() => handleChooseSlide(index)}
                                    className={item.selected ? `${styles.slider2Sneaker} ${styles.selectedSlide}`
                                        : styles.slider2Sneaker}>
                                    <img src={item.src} alt="sneakers" />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}