import React from 'react';
import HeaderBanner from 'components/HeaderBanner';
import 'assets/css/kideys.css';

import Check from 'assets/images/clinic/icon_04.png';
const Kideys = () => {
    return (
        <>
            <HeaderBanner></HeaderBanner>
            <div className='wrap'>
                <div className='container'>

                    <div className="left_title">
                    <div className='title_bar'></div><div className='title_font'>야뇨증</div>
                    </div>
                    <ul className='check'>
                        <li>일반적으로 4~5세 정도갈 되면 스스로 배변 조절을 할 줄 알아야 합니다. 그러나 해당 나이가 지났음에도 불구하고<br />
                            한 달에 3번 이상 수면 중에 소변을 가리지 못하는 문제가 3개월 이상 지속된다면 어린이 야뇨증이라고 판단할 수 있습니다.<br />
                            만약에 만 7세 이상이라면 한 달에 1번 이상만 밤에 실수해도 코멘트를 받아보아야 하는 상태라고 볼 수 있습니다.
                        </li>
                    </ul>
                    <div className="left_title">
                    <div className='title_bar'></div><div className='title_font'>종류</div>
                    </div>
                    <div className='kideys'>
                        <div className='kideys_table'>
                            <ul>
                                <li><b>일차성 야뇨증</b></li>
                                <li>출생한 뒤에 문제가 계속 발생</li>
                            </ul>
                            <ul>
                                <li><b>이차성 야뇨증</b></li>
                                <li>6개월 정도는 소변을 잘 가렸지만 다시 문제가 발생</li>
                            </ul>
                            <ul>
                                <li><b>단일성 야뇨증</b></li>
                                <li>낮 시간이 아니라 밤에만 배뇨 문제가 발생</li>
                            </ul>
                        </div>
                    </div>
                    <div className='check'>

                    </div>
                    <div className="left_title">
                    <div className='title_bar'></div><div className='title_font'>치료</div>
                    </div>
                    <div className='kideys_list'>
                        <ul>
                            <li>
                                아이를 창피하게 하거나 벌주거나 꾸중을 삼가해야합니다.
                            </li>
                            <li>
                                아이가 자기 전에 소변을 보고 잘 수 있도록 밤에 소변을 보도록 가르쳐줍니다.
                            </li>
                            <li>
                                아이가 밤에 기저귀를 차도록 강요하지 마시고, 대신 방수가 되거나 흡수성이 뛰어난 속옷을 입혀줍니다.<br />
                                (두꺼운 패드나 비닐 매트리스 커버(방수요)등이 매트리스나 요가 젖는 것을 막을 수 있습니다.)
                            </li>
                            <li>
                                위의 증상이 지속되면 소아청소년과 전문의의 진료가 필요합니다.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Kideys;