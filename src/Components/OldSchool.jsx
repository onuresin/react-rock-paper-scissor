import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Triangle from "../assets/triangle-bg.svg";
import Close from "../assets/close-shape.svg";
import Rock from "../assets/rock.svg";
import Scissors from "../assets/scissors.svg";
import Paper from "../assets/paper.svg";
import TriangleRes from "../assets/triangle-res.svg";
import RockRes from "../assets/rock-res.svg";
import PaperRes from "../assets/paper-res.svg";
import ScissorsRes from "../assets/scissors-res.svg";

export default function OldSchool() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <div className="oldSchoolContainer">
        <div className="oldSchool-inner">
          <div className="oldSchool-text">
            <div className="text-left">
              <h4>TAŞ</h4>
              <h4>KAĞIT</h4>
              <h4>MAKAS</h4>
            </div>
            <div className="text-score">
              <div className="score-box">
                <h5>SKOR</h5>
                <h2>0</h2>
              </div>
            </div>
          </div>
          <div className="oldSchool-gamebtns">
            <img src={Triangle} alt="" className="triangle" />
            <div className="gamebtns-top">
              <button><img src={Paper} alt="Paper" /></button>
              <button><img src={Scissors} alt="Scissors" /></button>
            </div>
            <div className="gamebtns-bot">
              <button><img src={Rock} alt="Rock" /></button>
            </div>
          </div>
          <div className="oldSchool-gamebtnsRes">
            <img src={TriangleRes} alt="" className="triangleRes" />
              <div className="gamebtns-topRes">
                <button><img src={PaperRes} alt="PaperRes" /></button>
                <button><img src={ScissorsRes} alt="ScissorsRes" /></button>
              </div>
              <div className="gamebtns-botRes">
                <button><img src={RockRes} alt="RockRes" /></button>
              </div>
          </div>
          <div className="footer">
            <div className="modal-container">
              <button className='modal-btn' onClick={toggleModal}>KURALLAR</button>
              {/*MODAL BÖLÜMÜ */}
              {modal && (
                <div className='modal-section'>
                  <div onClick={toggleModal} className="before-opened"></div>
                  <div className="modal-inner">
                    <div className="top-sec">
                      <h4>KURALLAR</h4>
                      <button className='modal-closeRes' onClick={toggleModal}><img src={Close} alt="Close" /></button>
                    </div>
                    <div className="modal-content">
                       <span className='top'><h3>YENER</h3></span>
                       <span className='bot'>
                            <h3>YENER</h3>
                            <h3>YENER</h3>
                       </span>
                    </div>
                    <button className='modal-close' onClick={toggleModal}><img src={Close} alt="Close" /></button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}