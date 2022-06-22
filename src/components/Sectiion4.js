import photo1 from '../assets/photo1.jpeg'
import photo2 from '../assets/photo2.jpeg'
import photo3 from '../assets/photo3.jpeg'
import photo4 from '../assets/photo4.jpeg'
import photo6 from '../assets/photo6.jpeg'
import photo7 from '../assets/photo7.jpeg'
import photo8 from '../assets/photo8.jpeg'
import photo5 from '../assets/photo5.jpeg'
import photo10 from '../assets/photo10.jpeg'
import './section4.css'
import { useState } from 'react';


export default function Sectiion4() {
  const [show, setShow] = useState(false)
  const [picture, setPicture] = useState()

  const clickMe = (me) => {
    if (window.innerWidth > 600){
      setPicture(me);
      setShow(true)
    }
  }
  return (
    <div id='gallery' className='section4'>
      <h1 className='photos'>Photos and Videos</h1>
      {show ? <div>
        <button className='section4btn' onClick={() => setShow(false)}>Close</button>
        <img onClick={() => setShow(false)} src={picture} alt='pictures' />
      </div> : <div className='section4img'>
        <img onClick={() => clickMe(photo1)} className='img' src={photo1} alt="photo1" />
        <img onClick={() => clickMe(photo3)} className='img' src={photo3} alt="photo1" />
        <img onClick={() => clickMe(photo2)} className='img' src={photo2} alt="photo1" />
        <img onClick={() => clickMe(photo4)} className='img1' src={photo4} alt="photo1" />
        <img onClick={() => clickMe(photo6)} className='img1' src={photo6} alt="photo1" />
        <img onClick={() => clickMe(photo7)} className='img1' src={photo7} alt="photo1" />
        <img onClick={() => clickMe(photo8)} className='img1' src={photo8} alt="photo1" />
        <img onClick={() => clickMe(photo5)} className='img1' src={photo5} alt="photo1" />
        <img onClick={() => clickMe(photo10)} className='img1' src={photo10} alt="photo1" />
      </div>}
    </div>
  )
}
