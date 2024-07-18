import React from 'react';
import contact from '../../Images/contact.jpg'
import './Contact.css'
function Contact() {
    return (
        <div className={'contact-container'}>
            <div className={'top-txt'}>
                <p className={'pacifico-regular style-txt'}>We hear you scream</p>
                <div className="stroked-text">
                    <p className="stroke" style={{"--stroke-color": "#bcebf8"}}>for ice-cream</p>
                    <p className="stroke" style={{"--stroke-color": "#bda3ef"}}>for ice-cream</p>
                    <p className="stroke" style={{"--stroke-color": "#f00540"}}>for ice-cream</p>
                </div>
            </div>
            <div className={'content'}>
                <div className={'address'}>
                    <img src={contact} id={'contact_img'}/>
                    <div className={'details'}>
                        <div className={'head paytone-one-regular'}>
                            <p>CORPORATE OFFICE</p>
                        </div>
                        <div className={'add work-sans-regular'}>
                            <p>Vadilal House</p>
                            <p>Vadilal Enterprises Ltd., Nr. Navrangpura Rly Crossing,</p>
                            <p>Navrangpura, Ahmedabad - 9, Gujarat, INDIA</p>
                        </div>
                        <div className={'add work-sans-regular'}>
                            <p className={'mb'}>Tel: +91 79 26564018 to 24</p>
                            <p className={'mb'}>Fax : +91 79 26564027</p>
                            <p>E-mail: info@baskinrobbins.com</p>
                        </div>
                    </div>
                </div>
                <div className={'input-fields'}>
                    <div className={'contact-head work-sans-regular'}>Reach Out To Us</div>
                    <div className={'contact-input'}>
                        <div className={'contact-input-inner'}>
                            <input className={'inp'} type={"text"} placeholder={'Name'}/>
                            <input className={'inp'} type={"text"} placeholder={'Company'}/>
                        </div>
                        <div className={'contact-input-inner'}>
                            <input  className={'inp'} type={"text"} placeholder={'Phone'}/>
                            <input className={'inp'} type={"text"} placeholder={'Email Id'}/>
                        </div>
                        <div className={'contact-input-inner'}>
                            <input className={'inp'} type={"text"} placeholder={'Occupation'}/>
                            <input className={'inp'} type={"text"} placeholder={'Interested in'}/>
                        </div>
                        <textarea className={'txt-ar'} placeholder={'Message'}/>
                    </div>
                    <div className={'send-btn'}>

                        <button className="send-button paytone-one-regular">
                            Send
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Contact;
