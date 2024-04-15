import React, { useEffect, useState } from 'react';
import 'assets/css/teenager.css';
import HeaderBanner from 'components/HeaderBanner';
import Check from 'assets/images/clinic/icon_04.png';
import Growup1 from 'assets/images/clinic/성장1.png';
import Growup2 from 'assets/images/clinic/성장2.png';
import Growup3 from 'assets/images/clinic/성장3.png';
import Growup4 from 'assets/images/clinic/성장4.png';



const Teenager = () => {
    const [scrollEvent, setScrollEvent] = useState(0);
    const testScroll = () =>{
        setScrollEvent(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll',testScroll);
        console.log(scrollEvent);
    }, []);

    return (
        <>
            <HeaderBanner></HeaderBanner>
            <div className='teenager_info'>
                <div className="wrap">
                    <div className='left_title'><div className='title_bar'></div><div className='title_font'>소아청소년 검진이란?</div></div>
                    <ul className='check'>
                        <li>소아의 성장과 건강상태를 종합적으로 검사하여 질병 및 위험인자에 대해 조기 발견하고 치료하여 올바른 성장과 발육을 유도하는 목적이 있습니다.</li>
                        <li>소아청소년 검진을 통해 성장기 어린이와 청소년의 성장, 비만, 체력, 질환, 면역 등을 통합적으로 관리할 수 있습니다.</li>
                    </ul>
                </div>
            </div>
            <div className="needs">
                <div className="wrap">
                    <div className="left_title"><div className='title_bar'></div><div className='title_font'>소아 종합 검진 필요대상</div></div>
                    <div className='grid_box'>
                        <div className={scrollEvent > 100 ? "a active" : "a static"}><img src={Growup1}/><span>영유아를 포함한 소아</span></div>
                        <div className={scrollEvent > 100 ? "b active" : "b static"}><img src={Growup2}/><span>5세 이후의 학동기</span></div>
                        <div className={scrollEvent > 100 ? "c active" : "c static"}><img src={Growup3}/><span>사춘기 청소년</span></div>
                        <div className={scrollEvent > 100 ? "d active" : "d static"}><img src={Growup4}/><span className='overflow'>성장지연, 피곤함, 식욕부진 등의 특이 증상을 보이는 아이</span> </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Teenager;