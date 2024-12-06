import React from 'react'
// import signature from './img/signature.png' 


export default function Contact() {
  // const randomimgurl="https://picsum.photos/200/300"
  return (
    <div>
      {/* <img height="200px" src={signature} alt="signature" /> */}
      <img height="200px" src={require("./img/signature.png")} alt='signature'/>
      {/* <img height="200px" src={randomimgurl} alt='signsture'/> */}
    </div>
  )
}
