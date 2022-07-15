
import Button from './Button'
import './section2.css'
import DotRev from './DotRev'

export default function section2() {
    return (
        <div id='biography' className='section2'>
            <div className='divide'>
                <div className='bio'>
                    <h1 className='biography'>Biography</h1>
                    <p className='p2'>
                        DJ Sanchez known as one of the most revered members of the New York breaks scene, Sanchez aka Davis Anderson has made it his duty to share break beats with a growing global audience! As a member of the Respect roster of artists, his Respect is Burning parties and CD series has kept listeners on the pulse of the hot New York breaks scene!
                    </p>
                    <p className='p2'>
                        Music has always been his passion ever since he was very young. He enjoys doing quality live mixes on the turntables to all types of genres. He always wants to satisfy his clients and make sure that they are having a good time with quality services.
                    </p>

                    <p className='p2'>
                        With 17 years of experience as a musician, his signature style of mixes and mashups is what makes him pump up the crowd with a high demand to crave more!
                    </p>
                </div>
                <div className='dotted'>
                    <DotRev />
                </div>
            </div>
        </div>
    )
}
