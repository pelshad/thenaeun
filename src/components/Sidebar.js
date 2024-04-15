import React, {useEffect, useRef, useState } from "react";
import styles from "assets/css/sidebar.module.css";
import "assets/css/sidebar.css"
import Menu from "assets/images/header/menu.png";
import { Link } from 'react-router-dom';
import Doctor from "assets/images/header/doctor.png";
import LOGO from "assets/images/header/f_logo.png";


const Sidebar = ({ width=280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();
  const [showOn, setShow] = useState("hide");
  const [showOn2, setShow2] = useState("hide");

  
  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };
  
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = e => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      setX(-width); 
      setOpen(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })


  return (
    <div className={styles.container}>
      <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
          <button onClick={() => toggleMenu()}
          className={styles.button} >
            {isOpen 
            ? <span className="pc">X</span> 
            //: <img src={Menu} alr="contact open button" className={styles.openBtn}/>
            : <span>☰</span>
            }
          </button>
        <div className={styles.content}>
          <div className="side_title"><h1><Link to="/*"><img src={LOGO} /></Link></h1></div>
            <ul className={styles.side_ul}>
                <li>
                    <Link to="/intro" onClick={() => toggleMenu()}>의료진 소개</Link>
                </li>
                <li onClick={() => {
                    showOn == "hide"
                    ? setShow("on")
                    : setShow("hide")
                    console.log(showOn);
                }}>
                    <a href="https://www.flaticon.com/kr/free-icons/-" title="여 의사 아이콘 제작자: wanicon - Flaticon"></a>
                    <span>건강클리닉</span>
                    <ol className={showOn}>
                        <li>
                            <Link to="/clinic/child" onClick={() => toggleMenu()}>영유아 검진</Link>
                        </li>
                        <li>
                            <Link to="/clinic/teenager" onClick={() => toggleMenu()}>소아청소년 <br/> 건강검진</Link>
                        </li>
                        <li>
                            <Link to="/clinic/vaccination" onClick={() => toggleMenu()}>예방접종</Link>
                        </li>
                    </ol>
                </li>
                <li onClick={() => {
                    showOn2 == "hide"
                    ? setShow2("on")
                    : setShow2("hide")
                }}>
                    <span>소아진료과목</span>
                    <ol className={showOn2}>
                        <li>
                            <Link to="/diagnosis/allergy" onClick={() => toggleMenu()}>소아 알레르기/아토피/비염</Link>
                        </li>
                        <li>
                            <Link to="/diagnosis/kideys" onClick={() => toggleMenu()}>소아 (신장야뇨증)</Link>
                        </li>
                        <li>
                            <Link to="/diagnosis/digestion" onClick={() => toggleMenu()}>소아 소화기</Link>
                        </li>
                        <li>
                            <Link to="/diagnosis/obesity" onClick={() => toggleMenu()}>소아 비만/저체중</Link>
                        </li>
                        <li>
                            <Link to="/diagnosis/sap" onClick={() => toggleMenu()}>수액 치료</Link>
                        </li>
                    </ol>
                </li>
                <li>
                    <Link to="/come" onClick={() => toggleMenu()}>찾아오시는 길</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};


export default Sidebar;