import React from 'react';
import Map from './Map';
import 'assets/css/map.css';
import 'assets/css/come.css';
import LOGO from "assets/images/header/f_logo.png";
import HomeIcon from 'assets/images/common/home_icon_white.png';


const Come = () => {
    return (
        <>
            <div className="banner_come">
                <div className="wrap">
                    <div className="check_location"><img src={HomeIcon} /><p>•</p><p>찾아오시는 길</p></div>
                    <div className="title"><h1>찾아오시는 길</h1></div>
                </div>
            </div>
            <div className="container">
                <div>
                    {Map("35.8039", "128.499", "map", "더나은 이비인후과")}
                </div>
                <div className="bottom">
                    <span>
                        <img src={LOGO} alt="로고" />
                    </span>
                    <span className='blank'></span>
                    <span className='blank'></span>
                    <span>
                        <b>주소</b> 대구 달성군 화원읍 비슬로 2579-4 2층 <c> (화원역 1번 출구에서 128m)</c>
                    </span>
                    <span>
                        <b>전화</b> 0507-1312-8282
                    </span>
                </div>
            </div>
        </>
    );
};

export default Come;
