import React from 'react'
import whatsappImage from './img/whatsapp.png';
import gmailImage from './img/gmail.png';
import linkedinImage from './img/linkedin.png';
export default function Contact() {
 
  return (
    <>
   <div className="big">
   <div className='sbox'>
    <h1 className='h1-contact'>
      <span className='span2' >GET IN TOUCH</span>
    </h1>
    <h6 className="h6-grey">Click any of them to Contact Me</h6>
    <hr />
   <div className="contact-links">
   <div className="reach-out mx-1" id='whatsapp'>
      <a href="https://wa.me//+917857083594">
      <img src={whatsappImage} alt="whatsapp" style={{width:'84px'}}/><h6>Whatsapp</h6></a>
    </div>
    <div className="reach-out mx-1" id='linkedin'>
      <a href="https://www.linkedin.com/in/chandan-kumar-saw-09262230b/">
      <img src={linkedinImage} alt="linkedin" style={{width:'84px'}}/><h6>Linkedin</h6></a>
    </div>
    <div className="reach-out mx-1" id='mail'>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chandan020803@gmail.com&su=Hello&body=Hi%20Chandan,%20I%20wanted%20to%20reach%20out."
  target="_blank"
  rel="noopener noreferrer">
      <img src={gmailImage} alt="whatsapp" style={{width:'84px'}}/><h6>Mail</h6></a>
   </div>
    </div>
    <hr />
    <p className='des'><h5 className="h5">Reach Out to Me!</h5>
    I’m here to assist with any questions, project inquiries, or collaboration opportunities you might have. Whether you’re looking for support with front-end development, need advice, or just want to connect, feel free to get in touch. You can use the link above to Contact me. I look forward to hearing from you!</p>
    </div>
    </div>
    </>

  )
}
