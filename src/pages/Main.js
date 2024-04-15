import Puzzle from './intro/Puzzle';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import 'assets/css/main.css';
import MainSlide1 from 'assets/images/main/mainSlider_01.jpg';
import MainSlide2 from 'assets/images/main/mainSlider_02.jpg';
// import MainSlide1Mo from 'assets/images/main/슬라이더1.jpg';
// import MainSlide2Mo from 'assets/images/main/슬라이더2.jpg';
// import MainSlide1Mo from 'assets/images/main/슬라이더1_1.jpg';
// import MainSlide2Mo from 'assets/images/main/슬라이더2_1.jpg';
import MainSlide1Mo from 'assets/images/main/slide_move1.jpg';
import MainSlide2Mo from 'assets/images/main/slide_move2.jpg';
import MainSlideArrL from 'assets/images/main/arr_L.png';
import MainSlideArrR from 'assets/images/main/arr_R.png';
import Icon1 from 'assets/images/main/icon_01.png';
import Icon2 from 'assets/images/main/icon_02.png';
import Icon3 from 'assets/images/main/icon_03.png';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Main = () => {
    const [slideCount, setSlideCount] = useState(1);

    return (
        <>
            <Swiper
                className='main_swiper'
                spaceBetween={0}
                slidesPerView='auto'
                scrollbar={{ draggable: true }}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                loop='true'
                pagination={{
                    type: "fraction",
                    el: ".num"
                }}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <img className='pcimg' src={MainSlide1} />
                    <img className='moimg' src={MainSlide1Mo} />
                    <div className='swipAbsolute1'>
                        <div className='wrap nav_hide'>
                            <div>우리 <p>아이들의 건강</p></div>
                            <div><p>더나은 소아청소년과의원</p>이<br />
                                함께합니다.</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='pcimg' src={MainSlide2} />
                    <img className='moimg' src={MainSlide2Mo} />
                    <div className='swipAbsolute2'>
                        <div className='wrap nav_hide'>
                            <div><p>더나은 소아청소년과의원</p>은</div>
                            <div>전 직원이 한마음으로 소중한</div>
                            <div><p>아이들을 위해 헌신</p>하고 있습니다.</div>
                        </div>
                    </div>
                </SwiperSlide>
                <PageNav className="pageNav nav_hide">
                    <div className="next"><img src={MainSlideArrL} alt="" /></div>
                    <div className="num"></div>
                    <div className="prev"><img src={MainSlideArrR} alt="" /></div>
                </PageNav>
            </Swiper>
            <div className='main_side'>
                <div className="wrap">
                    <div className="flex_box">
                        <Link to="/clinic/child"><div><img src={Icon1} className="pc" /><p>영유아 검진</p></div></Link>
                        <Link to="/clinic/vaccination"><div><img src={Icon2} className="pc" /><p>예방접종</p></div></Link>
                        <Link to="/diagnosis/allergy"><div><img src={Icon3} className="pc" /><p>진료과목</p></div></Link>
                    </div>
                </div>
            </div>


            <Puzzle></Puzzle>
        </>
    );
};

const PageNav = styled.div`
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1200px;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 10px;
    .num{
        width: unset;
        font-size: 16px;
        vertical-align: middle;
    }
    .swiper-pagination-current{
        font-size: 26px;
        vertical-align: middle;
    }
    .swiper-pagination-total{
        font-size: 16px;
        vertical-align: middle;
    }
    #text{
        font-size: 16px;
        vertical-align: middle;
    }
`
export default Main;