import './section3.css'
import Button from './Button'

export default function Section3() {
    return (
        <div id='general' className="section3">
            <h2 className='header1'>General DJ info</h2>
            <div className='section3main'>
                <div className='section3first'>
                    <div className='section3div'>
                        <p className='p4'><span className='section3span'>Dj since :</span> 2005</p>
                        <p className='p4'> <span className='section3span'>Category</span>Club DJ / Event DJ</p>
                    </div>
                    <div className='section3div'>
                        <p className='p4'><span className='section3span'>Main genre :</span> Breaks</p>
                        <p className='p4'> <span className='section3span'>Genres</span> Nu Breaks, Break Beat, Acid Breaks, Progressive Breaks, Funky Breaks, Florida Breaks, Dubstep</p>
                    </div>
                    <div className='section3div'>
                        <p className='p4'><span className='section3span'>Music Source :</span> Vinyl, CD</p>
                        <p className='p4'> <span className='section3span'>Set Duration</span>3-6 hours</p>
                    </div>
                    <div>
                        <p className='p4'><span className='section3span'>Equipments :</span>  Technics SL-1210 MK2, Allen & Heath Xone:92, Pioneer CDJ-2000 NXS, Pioneer EFX-1000, Pioneer RMX-1000</p>
                    </div>
                </div>
                <div className='section3second'>
                    <div className='section3div'>
                        <p className='p4'><span className='section3span'>Extra info :</span>  The modern DJ's role as a performer who creates a seamless and extended mix of music for a dance party or club atmosphere evolved from radio personalities who introduced and played individual selections of recorded music on broadcast radio stations. In 1935, American radio commentator Walter Winchell coined the term "disc jockey" (the combination of disc, referring to disc-shaped phonograph records, and jockey, which is an operator of a machine) to describe radio announcer Martin Block, the first radio announcer to gain widespread fame for playing popular recorded music over the air.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
