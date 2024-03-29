import React, { useState } from "react";
import Polygon from "../assets/Polygon-bg.svg"
import Scissors from "../assets/scissors-pol.svg"
import Spock from "../assets/spock.svg"
import Paper from "../assets/paper-pol.svg"
import Lizzard from "../assets/lizzard.svg"
import Rock from "../assets/rock-pol.svg"
import Close from "../assets/close-shape.svg";
import PolygonRes from "../assets/Polygon-res.svg"
import ScissorsRes from "../assets/scissors-res.svg"
import SpockRes from "../assets/spock-res.svg"
import PaperRes from "../assets/paper-res.svg"
import RockRes from "../assets/rock-res.svg"
import LizzardRes from "../assets/Lizzard-res.svg"



export default function BonusContent() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return(
        <>
            <div className="bonusContentContainer">
                <div className="bonusContent-inner">
                    <div className="bonusContent-text">
                        <span className="text-left">
                            <h4>TAŞ</h4>
                            <h4>KAĞIT</h4>
                            <h4>MAKAS</h4>
                            <h4>KERTENKELE</h4>
                            <h4>SPOCK</h4>
                        </span>
                        <div className="text-score">
                            <div className="score-box">
                                <h5>SKOR</h5>
                                <h2>0</h2>
                            </div>
                        </div>
                    </div>
                    <div className="bonusContent-gamebtns">
                        <img className="polygon" src={Polygon}/>
                        <div className="bonusGamebtns-top">
                            <button><img src={Scissors} alt="scissors" /></button>
                        </div>
                        <div className="bonusGamebtns-mid">
                            <button><img src={Spock} alt="spock"/></button>
                            <button><img src={Paper} alt="paper"/></button>
                        </div>
                        <div className="bonusGamebtns-bot">
                            <button><img src={Lizzard} alt="lizzard"/></button>
                            <button><img src={Rock} alt="rock"/></button>
                        </div>
                    </div>
                    <div className="bonusContent-gamebtnsRes">
                    <img className="polygonRes" src={PolygonRes}/>
                        <div className="bonusGamebtns-topRes">
                            <button><img src={ScissorsRes} alt="scissorsRes" /></button>
                        </div>
                        <div className="bonusGamebtns-midRes">
                            <button><img src={SpockRes} alt="spockRes"/></button>
                            <button><img src={PaperRes} alt="paperRes"/></button>
                        </div>
                        <div className="bonusGamebtns-botRes">
                            <button><img src={LizzardRes} alt="lizzardRes"/></button>
                            <button><img src={RockRes} alt="rockRes"/></button>
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
                                <div className="modal-content-polygon">
                                    <span className='top-polygon'>
                                        <h3>YENER</h3>
                                        <h3>YENER</h3>
                                    </span>
                                    <span className='mid-polygon'>
                                        <h3>YENER</h3>
                                        <h3>YENER</h3>
                                    </span>
                                    <span className="bot-polygon">
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
    )
}