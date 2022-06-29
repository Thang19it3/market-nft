import React from 'react'
import logo1 from "../img/phone-shop.png"
import "../components/footer.css"
import logo from "../img/logo.png"

const Footer = () => {
  return (
    <div classname="footer">
      <div div className = 'footerTop' style = {{background: '#000'}} >
        <div className='ftTop'>
          <img src={logo}  alt="" style={{marginTop:'-100px',width:'100px',paddingBottom:'50px'}}/>
          <h1 style={{ color:'#fff', fontWeight:'700'}}>Join Now For Early Access</h1>
          <p>Sign up with gmail to receive the earliest information and prices of nft</p>
          <div>
            <input placeholder='Email....' style={{width:'250px', height:'50px',paddingLeft:'20px',borderRadius:'5px',border:'none',background:'#121212'}}/>
            <button style={{ height:'54px',background:'#121212',borderRadius:'5px',color:'#fff',marginLeft:'10px'}}>SUBSCRIBE</button>
          </div>
        </div>
        <div className='mxh'>
          <i class='bx bxl-facebook'></i>
          <i class='bx bxl-facebook'></i>
          <i class='bx bxl-facebook'></i>
          <i class='bx bxl-facebook'></i>
          <i class='bx bxl-facebook'></i>
        </div>
      </div>
      <div className='footerBottom'>
        <h3>Copyright by © 2022 VKU</h3>
      </div>
    </div>
  )
}

export default Footer