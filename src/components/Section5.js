import groove from '../assets/groove.jpeg'
import groove1 from '../assets/groove1.jpeg'
import groove2 from '../assets/groove2.jpeg'
import './section5.css'

export default function Section5() {
    return (
        <div id='upcoming' className='section5'>
            <h2 className='section5h1'>Gigs</h2>
            <div className='section5div'>
                <div className='section5box'>
                    <img className='section5img' src={groove} alt='groove' />
                    <p className='p5'>15th OCT 2021</p>
                    <p className='p7'>Via Zoom</p>
                </div>
                <div className='section5box'>
                    <img className='section5img' src={groove1} alt='groove' />
                    <p className='p5'>17th SEPTEMBER 2021</p>
                    <p className='p7' >Via Zoom</p>
                </div>
                <div className='section5box'>
                    <img className='section5img' src={groove2} alt='groove' />
                    <p className='p5'>13th AUGUST 2021</p>
                    <p className='p7'>Via Zoom</p>
                </div>
            </div>
        </div>
    )
}
