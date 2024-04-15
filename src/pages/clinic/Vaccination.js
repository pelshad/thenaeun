import React from 'react';
import HeaderBanner from 'components/HeaderBanner';
import 'assets/css/Vaccination.css'
import Check from 'assets/images/clinic/icon_04.png';
import GridImg1 from 'assets/images/clinic/01.png';
import GridImg2 from 'assets/images/clinic/02.png';
import GridImg3 from 'assets/images/clinic/03.png';
import GridImg4 from 'assets/images/clinic/04.png';
import GridImg5 from 'assets/images/clinic/05.png';
import GridImg6 from 'assets/images/clinic/06.png';
import GridImg7 from 'assets/images/clinic/07.png';
import GridImg8 from 'assets/images/clinic/08.png';
import GridImg9 from 'assets/images/clinic/09.png';
import GridImg10 from 'assets/images/clinic/10.png';
import GridImg11 from 'assets/images/clinic/11.png';
import GridImg12 from 'assets/images/clinic/12.png';
import GridImg13 from 'assets/images/clinic/13.png';


const Vaccination = () => {
    return (
        <>
            <HeaderBanner></HeaderBanner>
            <div className='vaccination_info'>
                <div className="wrap">
                    <div className='left_title'><div className='title_bar'></div><div className='title_font'>국가 필수 예방접종</div></div>
                    <ul className='check'>
                        <li>국가가 권장하는 예방접종을 말합니다.</li>
                        <li>국가에서 전염병예방법령을 통해 예방접종대상 전염병과 예방접종의 실시 기준 및 방법을 정하고 국민과 의료인들에게 이를 준수하도록 하고 있습니다.</li>
                    </ul>
                </div>
            </div>
            <div className="vaccination_list">
                <div className="wrap">
                    <div className='img_grid'>
                        <div><img src={GridImg1}/></div>
                        <div><img src={GridImg2}/></div>
                        <div><img src={GridImg3}/></div>
                        <div><img src={GridImg4}/></div>
                        <div><img src={GridImg5}/></div>
                        <div><img src={GridImg6}/></div>
                        <div><img src={GridImg7}/></div>
                        <div><img src={GridImg8}/></div>
                        <div><img src={GridImg9}/></div>
                        <div><img src={GridImg10}/></div>
                        <div><img src={GridImg11}/></div>
                        <div><img src={GridImg12}/></div>
                        <div><img src={GridImg13}/></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Vaccination;