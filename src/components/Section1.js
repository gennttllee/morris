import './section1.css'
import { useState, useEffect } from 'react';
import Dot from './Dot'
import Circle from './Circle'
import DotRev from './DotRev'

export default function Section1() {
    const names = ['its', 'your', 'one', 'and', 'only', 'Dj Morris', 'Makenzee']
    const [name, setName] = useState(names[0])

    useEffect(() => {
        const time = setTimeout(() => {
            changeName()
        }, 1000);
        return () => {
            clearInterval(time)
        };
    }, [name]);

    const changeName = () => {
        names.forEach((item, index) => {
            if (item === name) {
                if (item === names[6]) {
                    setName(names[0])
                    return;
                } else {
                    setName(names[index + 1])
                    return;
                }
            }
        })
    }

    return (
        <div id='home' className="section1">
            <div className='dotDiv'>
                <Circle />
                <ul className='sectionUl'>
                    <li className='sectionLi'>About</li>
                    <li className='sectionLi'>Gigs</li>
                    <li className='sectionLi'>News</li>
                    <li className='sectionLi'>Music </li>
                    <li className='sectionLi'>Contact</li>
                </ul>
                <Dot />
            </div>
            <div className='box'>
                <div className='floater'>
                    <DotRev />
                </div>
                <div className='word'>
                    <div className='words'>
                        <h1 className='h1'>{name}</h1>
                        <p className='p'>Performance club dj & producer from Lagos Nigeria</p>
                        <div className='iconDiv'>
                            <span className="material-symbols-outlined icons">
                                radio
                            </span>
                            <span className="fa fa-headphones icon"></span>
                            <span className="fa fa-tv icon"></span>
                            <span className="fa fa-microphone icon"></span>
                        </div>
                    </div>
                    <div className='anime'>
                        <h4 className='h4'>Official website of Dj morris</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
