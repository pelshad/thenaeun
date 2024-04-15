import React from 'react';
import HeaderBanner from 'components/HeaderBanner';
import 'assets/css/allergy.css';

import Check from 'assets/images/clinic/icon_04.png';
const Allergy = () => {
    return (
        <>
            <HeaderBanner></HeaderBanner>
            <div className='wrap'>
                <div className='container'>
                    <div className="left_title">
                        <div className='title_bar'></div><div className='title_font'>식품 알레르기</div>
                    </div>
                    <ul className='check'>
                        <li>식품 알레르기란 어떤 식품에 대해 면역학적으로 일어나는 과민반응을 말하며, 매우 다양한 증상들이 있으며<br className='br' />
                            여기에는 피부, 위장관, 심혈관계, 호흡기 관련 증상이 포함될 수 있습니다.</li>
                    </ul>
                    <div className="left_title">
                        <div className='title_bar'></div><div className='title_font'>아토피 피부염</div>
                    </div>
                    <ul className='check'>
                        <li>
                            아토피 피부염은 심한 가려움증과 특징적인 피부 병변이 자주 재발하면서 만성화 됩니다.<br />
                            아토피 피부염을 가지고 있는 영아의 80% 정도에서 알레르기 비염 또는 천식으로 진행합니다.<br />
                            그렇기 때문에 증상이 발생한 후에 전체적인 원인을 찾고 치료하는 것이 중요합니다.
                        </li>
                    </ul>
                    <div className="left_title">
                        <div className='title_bar'></div><div className='title_font'>알레르기 비염</div>
                    </div>

                </div>
                <div className='diag'>
                    <div className='diag_table'>
                        <ul>
                            <li><b className='point_remover'>　　</b></li>
                            <li><b>알레르기 비염</b></li>
                        </ul>
                        <ul>
                            <li><b>원인</b></li>
                            <li>꽃가루, 집 먼지 진드기, 동물 털 등의 알레젠</li>
                        </ul>
                        <ul>
                            <li><b>증상</b></li>
                            <li>코가려움증, 갑자기 발생하는 재채기와 맑은 콧물, 코막힘</li>
                        </ul>
                        <ul>
                            <li><b>치료</b></li>
                            <li>약물치료, 원인물질 회피</li>
                        </ul>
                        <ul>
                            <li><b>경과</b></li>
                            <li>1~2달 이상 지속</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Allergy;