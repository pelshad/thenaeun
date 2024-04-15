import React from 'react';
import HeaderBanner from 'components/HeaderBanner';
import 'assets/css/sap.css';

const Sap = () => {
    return (
        <>
            <HeaderBanner></HeaderBanner>
            <div className='wrap'>
                <div className='container'>

                    <div className="left_title">
                        <div className='title_bar'></div><div className='title_font'>수액 치료</div>
                    </div>

                </div>
                <div className='sap'>
                    <div className='sap_table'>
                        <ul>
                            <li><b className='point_remover'>　</b></li>
                            <li><b>수가</b></li>
                        </ul>
                        <ul>
                            <li><b>탈수 주사</b></li>
                            <li>30,000</li>
                        </ul>
                        <ul>
                            <li><b>몸살수액 60분</b></li>
                            <li>80,000</li>
                        </ul>
                        <ul>
                            <li><b>페라미플루</b></li>
                            <li>100,000</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sap;