import './section7.css'
import image from '../assets/morris.PNG'
import Button from './Button'
import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export default function Booking() {
    const [loading, setLoading] = useState(false)
    const form = useRef();

const formSubmit =(e)=>{
    setLoading(true)
    e.preventDefault();
    emailjs.sendForm('service_9d1lj6w', 'template_1ofq3ys', form.current, 'ppvcgXdko6fdcact8')
    .then((result) => {
        setLoading(false)
        window.alert('success')
        console.log('ok')
    }, (error) => {
        setLoading(false)
        window.alert(error.message)
        console.log(error.message)
    });
    e.target.reset();
}

    return (
        <div id='booking' className='section7'>
            <h1 className='section7h1'>Booking</h1>
            <div className='section7div'>
                <form ref={form} onSubmit={formSubmit} className='section7form'>
                    <input className='input' type='text' name='name' placeholder='Enter Name' required></input>
                    <input className='input' type='email' name='email' placeholder='Enter Email' required></input>
                    <textarea className='text' placeholder='Enter Your Message' required></textarea>
                    <Button name={loading ? 'loading...' : 'submit'} />
                </form>
                <img className='section7img' src={image} alt='morris' />
            </div>
        </div>
    )
}
