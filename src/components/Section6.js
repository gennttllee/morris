import './section6.css'
import track from '../assets/track.jpeg'

export default function Section6() {
    return (
        <div id='tracks' className='section6'>
            <h1 className='section6h1'> Tracks & Mixes</h1>
            <div className='section6div'>
                <a className='anchor' target='blank' href='https://audiomack.com/djmakenzee/song/dj-morris-express-mix-vol-1' download>
                    <span className="material-symbols-outlined play">
                        play_circle
                    </span>
                    <div>
                        <p className='p6'>Dj Morris afrobeat mix. </p>
                        <img className='track' src={track} alt='track' />
                    </div>
                </a>
                <a className='anchor' target='blank' href='https://audiomack.com/djmakenzee/song/dj-morrismakenzee-y2k-mix' download>
                    <span className="material-symbols-outlined play">
                        play_circle
                    </span>
                    <div>
                        <p className='p6'>Dj Morris Millennium 2000 mix </p>
                        <img className='track' src={track} alt='track' />
                    </div>
                </a>
                <a className='anchor' target='blank' href='https://audiomack.com/djmakenzee/song/dj-morris-makenzee-naija-mix' download>
                    <span className="material-symbols-outlined play">
                        play_circle
                    </span>
                    <div>
                        <p className='p6'>Dj Morris afrobeat 2019 mix</p>
                        <img className='track' src={track} alt='track' />
                    </div>
                </a>
            </div>
        </div>
    )
}
