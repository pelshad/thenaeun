import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'assets/css/headBanner.css';
import { boxLight, getLastURL, stringSplit } from '../utils/HeaderUtils';
import HomeIcon from 'assets/images/common/home_icon.png';
import bannerBack1 from 'assets/images/header/subBG_02.jpg';
import bannerBack2 from 'assets/images/header/subBG_03.jpg';

const HeaderBanner = () => {
    //나중에 2중 배열로 리팩토링 필요 지금은 그냥 할래....
    const [pathPackage, SetPathPackage] = useState([]);
    const [lastURL, setLastaURL] = useState('');
    const [div, setDiv] = useState('');
    const [bannerBack, setBannerBack] = useState('');

    const [getTitle, setTitle] = useState('');
    const [banner, setBanner] = useState('');
    const pageLocation = useLocation();

    useEffect(() => {
        loaction();
    }, []);

    const loaction = () => {
        let arr = [];
        const findStartLine = pageLocation.pathname.split('/');
        const startLine = findStartLine[1];
        const endLine = findStartLine[2];
        const mainTitle = getLastURL(endLine);
        switch (startLine) {

            case "clinic":
                arr = [["영유아검진", "/clinic/child"], ["소아청소년 건강검진", "/clinic/teenager"], ["예방접종", "/clinic/vaccination"]];
                setTitle('건강클리닉')
                SetPathPackage([...arr]);
                setBanner("clinic");
                setLastaURL(mainTitle);
                setBannerBack(bannerBack1);
                break;
            case "diagnosis":
                arr = [["소아 알레르기/아토피/비염", "/diagnosis/allergy"],
                ["소아 신장(야뇨증)", "/diagnosis/kideys"], ["소아 소화기", "/diagnosis/digestion"],
                ["소아 비만/저체중", "/diagnosis/obesity"], ["수액 치료", "/diagnosis/sap"]];
                setTitle("소아진료과목");
                SetPathPackage([...arr]);
                setBanner("diagnosis");
                setLastaURL(mainTitle);
                setBannerBack(bannerBack2);
                break;


            default:
                break;
        }
    }

    return (
        <>
            <div className='banner_container'>
                <div className={`head_banner ${banner}`}>
                    <div className='banner_img'></div>
                    <div className="wrap">
                        <div className="check_location"><img src={HomeIcon} /><p>•</p><p>{getTitle}</p><p>•</p><p className='bold'>{lastURL}</p></div>
                        <div className="title"><h1>{getTitle}</h1></div>
                    </div>
                </div>
                <div className="wrap" onMouseOver={() => { console.log(" "); }}>
                    <div className={`side_nav ${banner}`}>
                        {pathPackage.map((a, i) => {
                            return <Link to={a[1]}><div className={boxLight(pageLocation.pathname, { i })}><span>{window.innerWidth <= 1200 ? stringSplit(a[0], '/') : a[0]}</span></div></Link>
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderBanner;