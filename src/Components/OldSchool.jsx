import React from "react";
import { Link } from 'react-router-dom';
export default function OldSchool() {
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
                                <h2>12</h2>
                            </div>
                        </div>
                    </div>
                    <div className="oldSchool-gamebtns">
                        
                        <div className="gamebtns-top">
                            <button><img src="src/assets/rock.svg"/></button>
                            <button><img src="src/assets/scissors.svg"/></button>
                        </div>
                        <div className="gamebtns-bot">
                            <button><img src="src/assets/paper.svg"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}