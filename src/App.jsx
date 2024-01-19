import { useState } from 'react';
import './App.css'
import { Link } from 'react-router-dom';

export default function App() {
  const [gameMode, setGameMode] = useState(null);

  const handleModeSelect = (mode) => {
    setGameMode(mode);
  };


  return (
    <>
      <div className="gameModeContainer">
        <div className="innerContainer">
          <div className="game-text">
                <span className='text-section'>
                  <h4>TAŞ</h4>
                  <h4>KAĞIT</h4>
                  <h4>MAKAS</h4>
                </span>
            </div>
          <div className="welcome-text">
            <h2>Hoşgeldiniz! Lütfen oynamak istediğiniz modu seçiniz!</h2>
          </div>
          <div className="gameMode-btns">
              <Link to="/oldschool">
                <button className='classic-mode' onClick={() => handleModeSelect('classic')}>Klasik Oyun Modu</button>
              </Link>
              <Link to="/bonuscontent">
                <button className='bonus-mode' onClick={() => handleModeSelect('bonus')}>Bonus Oyun  Modu</button>
              </Link>
          </div>
        </div>
      </div>
      
    </>
  )
}