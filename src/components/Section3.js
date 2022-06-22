import './section3.css'
import Button from './Button'

export default function Section3() {
    return (
        <div id='general' className="section3">
            <h2 className='header1'>General DJ info</h2>
            <div className='section3main'>
                <div className='section3first'>
                    <div className='section3div'>
                        <p className='p4'><span className='section3span'>Dj since :</span> 1995</p>
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
                        <p className='p4'><span className='section3span'>Extra info :</span>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
                    </div>
                    <div className='section3btn'>
                        <div className='btn9'>
                            <Button name='Technical Rider' />
                        </div>
                        <Button name='Hospitality Rider' />
                    </div>
                </div>
            </div>
        </div>
    )
}
