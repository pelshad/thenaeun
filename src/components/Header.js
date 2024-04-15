import React, { useEffect, useState, useR } from 'react';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/common.css';
import '../assets/css/header.css';
import LOGO from "assets/images/header/f_logo.png";




const Header = (props) => {
    const nav = useLocation();
    
    return (
        <>
            <header>
                <div className="wrap">
                    <div className='flexBox'>
                        <h1><Link to="/*"><img src={LOGO} /></Link></h1>
                        <nav className='pc'>
                            <ul>
                                <li>
                                    <Link to="/intro">의료진 소개</Link>
                                </li>
                                <li>
                                    <span><Link to="/clinic/child">건강클리닉</Link></span>
                                    <ol>
                                        <li>
                                            <Link to="/clinic/child">영유아 검진</Link>
                                        </li>
                                        <li>
                                            <Link to="/clinic/teenager">소아청소년 <br /> 건강검진</Link>
                                        </li>
                                        <li>
                                            <Link to="/clinic/vaccination">예방접종</Link>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <span><Link to="/diagnosis/allergy">소아진료과목</Link></span>
                                    <ol>
                                        <li>
                                            <Link to="/diagnosis/allergy">소아 알레르기/ <br />아토피/비염</Link>
                                        </li>
                                        <li>
                                            <Link to="/diagnosis/kideys">소아 신장 <br /> (야뇨증)</Link>
                                        </li>
                                        <li>
                                            <Link to="/diagnosis/digestion">소아 소화기</Link>
                                        </li>
                                        <li>
                                            <Link to="/diagnosis/obesity">소아 비만/<br />저체중</Link>
                                        </li>
                                        <li>
                                            <Link to="/diagnosis/sap">수액 치료</Link>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <Link to="/come">찾아오시는 길</Link>
                                </li>
                            </ul>
                        </nav>
                        <nav className="mobilelg">
                            <Sidebar width={230}></Sidebar>
                        </nav>
                        <nav className="mobilesm">
                            <Sidebar width={350}></Sidebar>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;