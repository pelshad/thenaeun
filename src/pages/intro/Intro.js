import React from 'react';
import 'assets/css/intro.css';
import Doctor from 'assets/images/intro/doctor.png';
import Quote from 'assets/images/intro/quote.png';
import HomeIcon from 'assets/images/common/home_icon.png';

const Intro = () => {
    return (
        <>
            <div className="banner_intro">
                <div className="wrap">
                    <div className="check_location"><img src={HomeIcon}/><p>•</p><p>의료진 소개</p></div>
                    <div className="title"><h1>의료진 소개</h1></div>
                </div>
            </div>
            <div className="wrap">
                <div className="doctor_info">
                    <ul>
                        <li>
                            <div className='doctor_img a active'>
                                <img src={Doctor}/>
                            </div>
                        </li>
                        <li>
                            <div className='greetings'>
                                <div className='b active'><img src={Quote}/></div>
                                <div className='c active'>
                                    아이들에게 따뜻한 미소와 <br/>
                                    친절한 사랑을 전해주는 <br />
                                    더나은 소아청소년과의원 
                                </div>
                                <div className='d active'>소아청소년과 <span>장혜민</span></div>
                            </div>  
                        </li>
                    </ul>
                </div>
                <div className='career'>
                    <div className='career_title'>교수 경력</div>
                    <div className='career_list'>
                        <ul>
                            <li>경북대학교 의학전문대학원 졸업</li>
                            <li>경북대학교병원 인턴 수료</li>
                            <li>경북대학교병원 소아청소년과 레지던트 수료</li>
                            <li>경북대학교 소아청소년과 임상강사</li>
                            <li>칠곡 경북대학교병원 소아청소년과 진료교수</li>
                        </ul>
                        <ul>
                            <li>소아신장분과 세부전문의</li>
                            <li>대한소아청소년과학회 정회원</li>
                            <li>대한신장학회 정회원</li>
                            <li>대한소아신장학회 정회원</li>
                        </ul>
                    </div>
                </div>
                <div className='time'>
                    <div className="time_title">
                        진료시간
                    </div>
                    <div className='time_table'>
                        <ul>
                            <li>일반진료</li>
                            <li>월</li>
                            <li>화</li>
                            <li>수</li>
                            <li>목</li>
                            <li>금</li>
                            <li>토</li>
                        </ul>
                        <ul>
                            <li>오전</li>
                            <li>●</li>
                            <li>●</li>
                            <li>X</li>
                            <li>●</li>
                            <li>X</li>
                            <li>X</li>
                        </ul>
                        <ul>
                            <li>오후</li>
                            <li>●</li>
                            <li>●</li>
                            <li>X</li>
                            <li>●</li>
                            <li>X</li>
                            <li>X</li>
                        </ul>
                    </div>
                    <div className="annotaion">
                        * 수요일, 금요일 / 공휴일 휴진
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;