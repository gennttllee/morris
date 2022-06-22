import './footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footerDiv'>
                <div className='footerFirst'>
                    <h1 className='footerH1'>Contacts</h1>
                    <p>+234 802 966 6379</p>
                    <p> Djmakenzee@gmail.com </p>
                    <p>Morris Makenzee / Booking Agent</p>
                </div>
                <div className='footerSecond'>
                    <h1 className='footerH1'>Follow Me</h1>
                    <a className='l' target='blank' href='https://www.facebook.com/djmorrismakenzee'>
                        <span className="fa fa-facebook lastly"></span>
                    </a>
                    <a className='l' target='blank' href='https://www.instagram.com/djmorrismakenzee/'>
                        <span className="fa fa-instagram lastly"></span>
                    </a>
                    <span className="fa fa-twitter lastly"></span>
                    <a className='l' target='blank' href='https://wa.me/message/B5O2CFXNUP47L1'>
                        <span className="fa fa-whatsapp lastly">
                        </span>
                    </a>
                    <p>Show me some love</p>
                </div>
            </div>
            <div className='footerDiv2'>
                <p>
                    <span className="fa fa-copyright"></span><span className='makenzee'> DJ Morris Makenzee</span> Created and powered by <a className='mark' target='blank' href='https://www.mwprofile.com/'> Mark Williams</a></p>
                <span className="material-symbols-outlined triangle1">
                    change_history
                </span>
            </div>
        </div>
    )
}
