import CarouselBN from '../components/CarouselBN';
import '../styles/Main.css';
import React, { useState } from 'react';

const Main = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className='mains-container'>
      <div className='mains container'>
        <div className='mains-box1'>
          <div className='mains-banner'>
            <CarouselBN />
          </div>
        </div>
        &nbsp;&nbsp;
        <div className='mains-box2'>
          <div className='mains-btn1'>
            {/* <img src='../assets/logo.png' className="colored-icon" alt="icon" />
            &nbsp;&nbsp;
            <a href='/send' className='btn btn-success mainBtn2'>이체</a> */}
            <div className='mains-icon'>
              <div className={`icon1 icons ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={process.env.PUBLIC_URL + '/img/billbill.png'} alt="bill1" href="#" className='icons' />
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;공과금</strong>
              </div>
              <div className={`icon2 icons ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={process.env.PUBLIC_URL + '/img/exchange1.png'} alt="exchange1" href="#" className='icons' />
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;환율</strong>
              </div>
              <div className={`icon1 icons ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={process.env.PUBLIC_URL + '/img/swap.png'} alt="swap" href="#" className='icons' />
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;계좌이체</strong>
              </div>
              <div className={`icon2 icons ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={process.env.PUBLIC_URL + '/img/security1.png'} alt="security1" href="#" className='icons' />
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인증센터</strong>
              </div>
              <div className={`icon1 icons ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={process.env.PUBLIC_URL + '/img/billbill.png'} alt="bill1" href="#" className='icons' />
                <p>?</p>
              </div>
              <div className={`icon2 icons ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={process.env.PUBLIC_URL + '/img/customer1.png'} alt="exchange" href="#" className='icons' />
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고객센터</strong>
              </div>

            </div>
           
          </div>
        </div>
      </div>
      {/* <div className='mains-box3'>

      </div> */}
    </div>
  )
}

export default Main;