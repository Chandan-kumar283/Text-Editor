import React from 'react'
import qrImage from './img/qr.jpg'

export default function About() {
  return (
    <>
    <div className="div1">
      <p className="pp">
      Welcome to Text Editor, We’ve created this platform to provide a clean, efficient, and ad-free experience for all users. Our goal is to maintain a high-quality service that fosters creativity and productivity. To achieve this, we rely on the support of our community. If you find value in our ad-free environment and the tools we offer, we would be incredibly grateful for any donations to help cover server costs and future development. Your contributions will allow us to continue improving and providing the best possible experience for all users.  Thank you for considering supporting our mission!
      </p>
      <hr />
      <div className="payment">
        <a href="upi://pay?pa=7857083594-2@axl&pn=Donate&mc=500&tid=1234567890&tn=Payment%20Description&url=https%3A%2F%2Fexample.com"> <img src={qrImage} alt=""style={{width:'200px', height:'200px'}}/><h6>  Scan to Donate</h6> </a>
      </div>
      <hr />
      <h2 className="h4">Thanking You...!</h2>
    </div>
    </>
  )
}
