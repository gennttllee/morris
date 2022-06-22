import './nav.css'
import { useState } from 'react';

export default function NavBar() {
  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(true)

  const mousedIn = () => {
    if (window.innerWidth > 800) {
      setShow(true)
      setHide(false)
    }
  }

  const mouseLeave = () => {
    if (window.innerWidth > 800) {
      setShow(false)
      setHide(true)
    }
  }

  const clicked = () => {
    if (window.innerWidth > 800) {
      setHide(false)
    }
    setShow(!show)
  }

  return (
    <div className='nav'>
      <h1 className='morris'><span className='dj'>DJ</span>MorrisMakenzee</h1>
      <div className='float'>
        {hide && <button onClick={clicked} onMouseEnter={mousedIn} className='btn'>
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>}
        {show && <div onMouseLeave={mouseLeave} className='navDiv'>
          <div className='ul'>
            <span onClick={mouseLeave} class="material-symbols-outlined li1">
              close
            </span>
            <a onClick={() => setShow(false)} href='#home' className='li'>Home</a>
            <a onClick={() => setShow(false)} href='#biography' className='li'>biography</a>
            <a onClick={() => setShow(false)} href='#general' className='li'>id info </a>
            <a onClick={() => setShow(false)} href='#upcoming' className='li'>upcoming gigs</a>
            <a href='#tracks' onClick={() => setShow(false)} className='li'>music</a>
            <a href='#gallery' onClick={() => setShow(false)} className='li'>gallery</a>
            <a href='#booking' onClick={() => setShow(false)} className='li'>contact </a>
          </div>
        </div>}
      </div>
    </div>
  )
}
