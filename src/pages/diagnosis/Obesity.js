import React from 'react';
import HeaderBanner from 'components/HeaderBanner';
import 'assets/css/obesity.css';
import Img1 from 'assets/images/obesity/비만도.png';
import Img2 from 'assets/images/obesity/체질량지수.png';
import Img3 from 'assets/images/obesity/원인1.png';
import Img4 from 'assets/images/obesity/원인2.png';
import Img5 from 'assets/images/obesity/원인3.png';
import Check from 'assets/images/clinic/icon_04.png';
const Obesity = () => {
    return (
        <>
            <HeaderBanner></HeaderBanner>
            <div className='wrap'>
                <div className='container'>

                    <div className="left_title">
                        <div className='title_bar'></div><div className='title_font'>소아 비만</div>
                    </div>
                    <ul className='check_obey'>
                            <li>소아 비만 진단법</li>
                    </ul>

                    <div className="obesity_diagnosis">
                        <div className="wrap pc">
                            <div>
                                <div><img src={Img1} /></div>
                                <div><img src={Img2} /></div>
                            </div>
                        </div>
                        <div className="wrap mobile">
                            <div>
                                <div><img src={Img1} /></div>
                            </div>
                            <div>
                                <div><img src={Img2} /></div>
                            </div>
                        </div>
                    </div>

                    <ul className='check_obey'>
                        <li>치료</li>
                    </ul>
                    <div className='obesity_list'>
                        <ul>
                            <li>
                                <span>1. <c>식</c><c>이</c><c>요</c><c>법</c></span>
                                <span>소아기에는 성장을 하고 있으므로 성장에 필요한 영양섭취는 가능한 충분히 섭취하도록 하되 고영양, 저열량식, 하루 세 끼 식사를 기본으로 합니다. <br />
                                    비만의 원인이 되는 식습관을 제공하고 있다면 가족의 식습관을 개선할 필요가 있습니다.</span>
                            </li>
                            <li>
                                <span>2. <c>운</c><c>동</c><c>요</c><c>법</c></span>
                                충분한 영양섭취에 따라 운동량을 늘려 체중을 조절하는 것이 중요합니다. 가족의 분위기를 활동적으로 바꾸며, 꾸준하고 규칙적인 운동습관을 가집니다.
                            </li>
                            <li>
                                <span>3.<c>행동수정요법</c></span>
                                갑작스러운 체중감량보다는 생활습관을 바꾸어 몸이 적응하도록 합니다.
                            </li>
                        </ul>
                    </div>
                    <div className="left_title">
                        <div className='title_bar'></div> <div className='title_font'>소아 저체중</div>
                    </div>
                    <ul className='check_obey'>
                        <li>저체중을 일으키는 원인</li>
                    </ul>
                    <div className="obesity_diagnosis">
                        <div className="wrap">
                            <div>
                                <div><img src={Img3} /></div>
                                <div><img src={Img4} /></div>
                                <div><img src={Img5} /></div>
                            </div>
                        </div>
                    </div>
                    <ul className='check_obey'>
                        <li>치료</li>
                    </ul>
                    <div className='obesity_list'>
                        <ul>
                            <li>
                                <div>균형잡힌 식단, 운동, 질환으로 인한 저체중일 경우 약물치료를 해야합니다.<br />
                                또한 저체중인 아이들에게는 식사를 거부할 만한 심리적인 요인이 있는지 알아보고, 있다면 심리치료를 통해 정서적 안정을 찾아주어야 합니다.</div>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Obesity;