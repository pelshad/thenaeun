import React from 'react';
import 'assets/css/footer.css'
import LOGO from "assets/images/header/f_logo.png";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="wrap">
                    <div className="footerflex">
                        <div className="logo"><img src={LOGO} /></div>
                        <div className="info pc">
                            <span>주소 : </span>대구 달성군 화원읍 비슬로 2579-4  (천내리 40-11) &nbsp;&nbsp; <span>사업자등록번호 : </span> 117-51-00616<br />
                            <span>상호 : </span>더나은 이비인후과의원 &nbsp;&nbsp; <span>대표 : </span> 조현오 &nbsp;&nbsp; <span>전화 :</span>053-632-8274 &nbsp;&nbsp; <span>팩스 : </span> 053-632-8276
                        </div>
                        <div className="info mobile">
                            <span>주소 : </span>대구 달성군 화원읍 비슬로 2579-4 <br/> (천내리 40-11) <br /> <span>사업자등록번호 : </span> 117-51-00616<br />
                            <span>상호 : </span>더나은 이비인후과의원 <br /> <span>대표 : </span> 조현오 <br /> <span>전화 :</span>053-632-8274 <br /> <span>팩스 : </span> 053-632-8276
                        </div>
                        <div className='copy'>
                            Copyright ⓒ2021 더나은이비인후과의원 Allrights reserved
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;