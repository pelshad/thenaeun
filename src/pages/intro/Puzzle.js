import React, { useEffect, useState } from 'react';
import 'assets/css/puzzle.css';
import piece1 from "assets/images/puzzle/병원 둘러보기.png";
import piece3 from "assets/images/puzzle/예약 및 전화.png";
import tel_after from "assets/images/puzzle/예약 및 전화_after.jpg";
import piece4 from "assets/images/puzzle/진료시간.png";
import time_after from "assets/images/puzzle/진료시간_after.jpg";
import piece6 from "assets/images/puzzle/블로그 바로가기.png";
import piece7 from "assets/images/puzzle/오시는 길.png";
import come_after from "assets/images/puzzle/오시는길_after.jpg";
import slide1 from "assets/images/puzzle/KSY_8925.JPG";
import slide2 from "assets/images/puzzle/KSY_8929.JPG";
import slide3 from "assets/images/puzzle/KSY_8932.JPG";
import slide4 from "assets/images/puzzle/KSY_8955.JPG";
import slide5 from "assets/images/puzzle/KSY_8959.JPG";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';

SwiperCore.use([Autoplay]);

const Puzzle = () => {
    const navigate = useNavigate();
    const [changeImga, setChangeImga] = useState('');
    const [a, setA] = useState('');
    const [slideArr, setSlideArr] = useState([slide1, slide2, slide3, slide4, slide5]);

    useEffect(() => {
        navigate("/");
    }, [a]);


    return (
        <>
            <div className='wrap'>
                <Test>
                    <div className='container none'>
                        <div className='piece piece1'
                            onClick={() => {
                                setChangeImga('a');
                            }}>
                            <img src={piece1} alt='병원둘러보기' />
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={'auto'}
                                loop={true}
                                autoplay={{
                                    "delay": 3000,
                                    "disableOnInteraction": false
                                }}
                                className={`puzzle_swiper ${changeImga}`}
                            >
                                {
                                    slideArr.map((a, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <img src={a} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                        <div className="piece piece2">
                        </div>
                        <div className="piece piece3"
                            onClick={() => {
                                setChangeImga('b');
                            }}>
                            <img src={piece3} alt='예약 및 전화' />
                            <img className={changeImga} src={tel_after} />
                        </div>
                        <div className="piece piece4"
                            onClick={() => {
                                setChangeImga('c');
                            }}>
                            <img src={piece4} alt='진료시간' />
                            <img className={changeImga} src={time_after} alt="" />
                        </div>
                        <div className="piece piece5">
                        </div>
                        <div className="piece piece6">
                            <a href="https://blog.naver.com/better8275">
                                <img className={changeImga} src={piece6} alt='블로그 바로가기' />
                            </a>
                        </div>
                        <div className="piece piece7"
                            onClick={() => {
                                setChangeImga('d');
                            }}>
                            <img src={piece7} alt='찾아 오시는길' />
                            <img className={changeImga} src={come_after} alt='찾아 오시는길' />
                        </div>
                        <div className="piece piece8">
                        </div>
                    </div>
                    <div className="mo_container">
                        <div className="mo_grid">
                            <div className='card_1' onClick={() => {
                                setChangeImga('a')
                            }}>
                                <div className={changeImga}>
                                    <span>진료시간</span>
                                    <span>자세히 보기</span>
                                </div>
                                <div className={changeImga}>
                                    <span>진료시간</span>
                                    <span>월 / 화 / 목</span>
                                    <span>am09:00 ~ pm06:30</span>
                                    <br />
                                    <span>점심시간</span>
                                    <span>pm01:00 ~ pm02:00</span>
                                    <br />
                                    <span>수 / 금 / 공휴일</span>
                                    <span>휴진</span>
                                </div>
                            </div>
                            <div className='card_2' onClick={() => {
                                setChangeImga('b')
                            }}>
                                <div className={changeImga}>
                                    <span>예약 및 전화</span>
                                    <span>자세히 보기</span>
                                </div>
                                <div className={changeImga}>
                                    <span>예약 및 전화</span>
                                    <span>0507-1312-8282</span>
                                </div>
                            </div>
                            <div className='card_3' onClick={() => {
                                setChangeImga('c')
                            }}>
                                <div className={changeImga}>
                                    <span>찾아 오시는 길</span>
                                    <span>자세히 보기</span>
                                </div>
                                <div className={changeImga}>
                                    <span>찾아 오시는 길</span>
                                    <span>대구광역시 달성군 화원읍 </span>
                                    <span>비슬로 2579-4</span>
                                    <span>(천내리 40-11)</span>
                                    <span>화원역 1번 출구</span>
                                    <br />
                                    <p>주차장(건물 바로 뒷편에 위치)</p>
                                </div>
                            </div >
                            <a href="https://blog.naver.com/better8275">
                                <div className='card_4'>
                                    <span>블로그 바로가기</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </Test>
            </div>
        </>
    );
};

const Test = styled.div`
    .container {
        display: grid;
        grid-template-areas:
            "a a b c c d"
            "e e e e e d"
            "f g g g h d";
        grid-template-columns: 2.971fr 1.046fr 0.084fr 2.845fr 0.084fr 2.971fr;
        grid-template-rows: 4.901fr 0.198fr 4.901fr;
        width: 1195px;
        height: 506px;
        margin-bottom: 60px;
    }
    .mo_container{
        display: none;
    }
    
`




export default Puzzle;