import React, { useEffect, useState } from 'react';
import HeaderBanner from 'components/HeaderBanner';
import 'assets/css/child.css';
import Check from 'assets/images/clinic/icon_04.png';
import Card1 from 'assets/images/clinic/카드_01.png';
import Card2 from 'assets/images/clinic/카드_02.png';
import Card3 from 'assets/images/clinic/카드_03.png';
import Card4 from 'assets/images/clinic/카드_04.png';
import Card1Mo from 'assets/images/clinic/card (1).jpg';
import Card2Mo from 'assets/images/clinic/card (2).jpg';
import Card3Mo from 'assets/images/clinic/card (3).jpg';
import Card4Mo from 'assets/images/clinic/card (4).jpg';
import Arr from 'assets/images/clinic/icon_arr.png';
import ChildScope from 'assets/images/clinic/child_scope.jpg';
import { animateHTML } from '../../utils/AnimationUtils';


const Child = () => {
    const [scrollEvent, setScrollEvent] = useState(0);
    const testScroll = () =>{
        setScrollEvent(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll',testScroll);
    }, []);
    return (
        <>
            <HeaderBanner></HeaderBanner>
            <div className='child_info'>
                <div className="wrap">
                    <div className='left_title'><div className='title_bar'></div><div className='title_font'>영유아 검진은 언제인가요?</div></div>
                    <div className='child_scope'><img src={ChildScope}/></div>
                    <ul className='check'>
                        <li>성장 이상이나 발달 이상, 비만, 청각 이상, 시각 이상 등의 발달을 체크하고 관리합니다.</li>
                        <li>의료진에 의해서 부모가 무심코 지나치거나 놓칠 수 있는 성장과 발달에 대한 평가를 받을 수 있습니다.</li>
                        <li>영유아 건강검진 전액 국가에서 부담합니다.
                            < br/>(다만, 추가 검사 필요시 별도의 추가 비용이 발생할 수 있습니다.) </li>
                    </ul>
                </div>
            </div>
            {animateHTML().init()}
            <div className="process">
                <div className="wrap">
                    <div className='left_title'><div className='title_bar'></div><div className='title_font'>검진절차</div></div>
                    <div className='grid_box_child_pc'>
                        <div className={scrollEvent > 100 ? "a active" : "a static"}><img className='img_card' src={Card1}/></div>
                        <div className={scrollEvent > 100 ? "b active arr" : "b static arr"}><img src={Arr} /></div>
                        <div className={scrollEvent > 100 ? "b active" : "b static"}><img className='img_card' src={Card2}/></div>
                        <div className={scrollEvent > 100 ? "c active arr" : "c static arr"}><img src={Arr} /></div>
                        <div className={scrollEvent > 100 ? "c active" : "c static"}><img className='img_card' src={Card3}/></div>
                        <div className={scrollEvent > 100 ? "d active arr " : "d static arr"}><img src={Arr} /></div>
                        <div className={scrollEvent > 100 ? "d active" : "d static"}><img className='img_card' src={Card4}/></div>
                    </div>
                    <div className='grid_box_child_mobile'>
                        <div className={scrollEvent > 100 ? "a active" : "a static"}><img src={Card1Mo}/></div>
                        <div className={scrollEvent > 100 ? "b active" : "b static"}><img src={Card2Mo}/></div>
                        <div className={scrollEvent > 100 ? "c active" : "c static"}><img src={Card3Mo}/></div>
                        <div className={scrollEvent > 100 ? "d active" : "d static"}><img src={Card4Mo}/></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Child;