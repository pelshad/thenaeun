import React, { useEffect, useState } from 'react';
import HeaderBanner from 'components/HeaderBanner';
import 'assets/css/digestion.css';
import Img1 from 'assets/images/digestion/1.png';
import Img2 from 'assets/images/digestion/2.png';
import Img3 from 'assets/images/digestion/3.png';
import Img4 from 'assets/images/digestion/4.png';
import Img5 from 'assets/images/digestion/5.png';
import Check from 'assets/images/clinic/icon_04.png';
const Digestion = () => {
    const [scrollEvent, setScrollEvent] = useState(0);
    const testScroll = () => {
        setScrollEvent(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', testScroll);
        console.log(scrollEvent);
    }, []);

    return (
        <>
            <HeaderBanner></HeaderBanner>
            <div className='wrap'>
                <div className='container'>

                    <div className="left_title">
                        <div className='title_bar'></div> <div className='title_font'>주요 소아 소화기 질환</div> 
                    </div>

                    <div className="dig_process">
                        <div className="wrap pc2">
                            <div className='list'>
                                <div className="a active"><img src={Img1} /><p>설사</p></div>
                                <div className="b active"><img src={Img2} /><p>변비</p></div>
                                <div className="c active"><img src={Img3} /><p>장 중첩증</p></div>
                                <div className="d active"><img src={Img4} /><p>소화성 궤양</p></div>
                                <div className="e active"><img src={Img5} /><p>위식도 역류</p></div>
                            </div>
                        </div>
                        <div className="wrap mobile2">
                            <div className='list'>
                                <div className="a active"><img src={Img1} /><div>설사</div></div>
                                <div className="b active"><img src={Img2} /><div>변비</div></div>
                            </div>
                            <div className='list'>


                                <div className="c active"><img src={Img3} /><div>장 중첩증</div></div>
                                <div className="d active"><img src={Img4} /><div>소화성 궤양</div></div>

                            </div>
                            <div className='list'>
                                <div className="e active"><img src={Img5} /><div>위식도 역류</div></div>
                            </div>
                        </div>
                    </div>

                    <ul className='check_obey'>
                        <li>
                                복통
                        </li>
                    </ul>
                    <div className='dig_list'>
                        <ul>
                            <li>
                                복통은 소아에서 가장 흔한 소화기 증상 중에 하나입니다. 만약 3~5시간 정도를 계속 아파하거나 열이 나거나,<br />
                                목이 아프고, 식욕이 없어 축 쳐져 있다면 진찰을 받아야 합니다. 기본적 검사로 혈액검사, 소변, 대변 검사를 통해 진단할 수 있습니다.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Digestion;