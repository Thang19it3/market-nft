import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../components/main.css"
import wallet from "../img/oc-wallet-1.png"
import a1 from "../img/2.png"
import a2 from "../img/3.png"
import a3 from "../img/4.png"
import dark1 from "../img/dark-marketplace-graphic1.png"
import dark2 from "../img/dark-marketplace-graphic2.png"
import use from "../img/member-2-1.png"

class Main extends Component {

	render() {
		return (
				<div className='col-12' style={{ padding:'0px 0px',margin:'0px 0px',fontFamily: 'Teko'}}>
					<div className='col-12 img-bg'>
          				<h1>NFT</h1>
          				<p>Built on the Etherium Blockchain, Ready for the Metamask.</p>
          				<div style={{ display:'flex'}}>
							<button>CONNECT</button>
          					<button className='btn1'>Learn More <i class="ri-arrow-right-line"></i></button>
						</div>
        			</div>
					<div className='col-12' style={{paddingBottom: '100px',textAlign:'center'}}>
          				<h2 style={{ paddingTop: '150px',color:'#fff',fontSize:'80px'}}>Set Your Wallet</h2>
          				<p style={{ fontSize: '40px',paddingTop:'0px',paddingBottom:'30px', opacity: '0.7',color:'#fff'}}>Here are a few reasons why you should choose Oction</p>
          				<div className='col-12 container'>
            				<div className='row' style={{ paddingLeft:'100px'}}>
             					 <div className='col-3'>
                					<div className = 'wallet' >
                  						<img src={wallet} alt="" />
                  						<h3>Metamask</h3>
                					</div>
              					</div>
              					<div className='col-3'>
                					<div className = 'wallet' >
                  						<img src={a1} alt="" />
                  						<h3>Bitski</h3>
                					</div>
              					</div>
              				<div className='col-3'>
                				<div className = 'wallet' >
                  					<img src={a2} alt="" />
                  					<h3>Fortmatic</h3>
                				</div>
              				</div>
              				<div className='col-3'>
                				<div className = 'wallet' >
                  					<img src={a3} alt="" />
                  					<h3>Wallet Connect</h3>
                				</div>
              				</div>
            			</div>
          			</div>
        			</div>
					<div className='col-12 buy'>
						<div className='row'>
							<div className='col-5 buy1'>
								<h1><span>500+</span> Unique & <br/> Identifiable Attributes</h1>
              					<h3>Artwork available on Ethereum</h3>
              					<p style={{ color:'#fff'}}>We are a collective group of designers, developers, 
              					and <br/> technologists with extensive backgrounds in digital <br/> sector. 
              					Our purpose is to make most notable NFT <br/> collections.</p>
              					<button>BUY NOW</button>
							</div>
							<div className='col-7'>
								<img src={dark1} alt="" />
							</div>
						</div>
					</div>
					<div className='col-12 sell'>
						<div className='row'>
							<div className='col-7' style={{paddingLeft:'100px'}} >
								<img src={dark2} alt="" />
							</div>
							<div className='col-5' style={{ textAlign:'left',paddingLeft:'100px'}}>
								<h1 style={{color:'#fff', paddingBottom:'30px', fontSize:'60px'}}>NFT</h1>
              					<h3 style={{color:'#fff', paddingBottom:'30px', fontSize:'40px',textAlign:'left'}}>SELL</h3>
              					<p style={{textAlign:'left'}}>
                					Are you an artist or NFT project creator? Get in touch with us to get your <br/>
                 					content on Enefti! We are a collective group of designers, developers, <br/>
                  					and technologists with extensive backgrounds in the digital sector.
              					</p>
              					<button className='btn11'>SELL</button>
							</div>
						</div>
					</div>
					<div className='col-12'>
						<div className='row' style={{ textAlign:'center',paddingTop:'-50px',color:'#fff'}}>
							<h1 className='col-12' style={{ color: '#fff', fontSize:'80px'}}>Get Started in 3 Steps</h1>
							<div className='col-4 get1'>
								<div className='get11'>
									<h4>Connect your Wallet</h4>
                					<p> Sed pellentesque, nunc sit amet volutpat accum,<br/>
               						metus lectus dictum nunc, non consectetur tortor <br/>
                					nibh in nulla.Once you 've set up your wallet.</p>
								</div>
							</div>
							<div className = 'col-4 get1' >
              					<div className='get11'>
                					<h4>Create your NFT Store</h4>
                					<p> Sed pellentesque, nunc sit amet volutpat accum,<br/>
               						metus lectus dictum nunc, non consectetur tortor <br/>
                					nibh in nulla.Once you 've set up your wallet.</p>
              					</div>
            				</div>
							<div className='col-4 get1'>
              					<div className='get11'>
                					<h4>Start Selling & Growing</h4>
                					<p> Sed pellentesque, nunc sit amet volutpat accum,<br/>
               						metus lectus dictum nunc, non consectetur tortor <br/>
                					nibh in nulla.Once you 've set up your wallet.</p>
              					</div>
            				</div>
						</div>
					</div>
					<div className='col-12'>
          				<h1 style={{ textAlign: 'left', paddingLeft:'100px',color:'#fff',fontSize:'60px',paddingBottom:'30px'}}>Our popular <span style={{ color:'green'}}>Creator</span></h1>
          				<div className='row' style={{ paddingLeft:'50px',paddingRight:'50px',paddingBottom:'80px'}}>
            				<div className='col-2'>
              					<img src={use} alt="" />
            				</div>
							<div className='col-2'>
							<img src={use} alt="" />
							</div>
							<div className='col-2'>
							<img src={use} alt="" />
							</div>
							<div className='col-2'>
							<img src={use} alt="" />
							</div>
							<div className='col-2'>
							<img src={use} alt="" />
							</div>
							<div className='col-2'>
							<img src={use} alt="" />
							</div>
          				</div>
        			</div>
					<div className='col-12' style={{textAlign:'center'}}>
						<h1 style={{ color:'#fff', fontSize:'60px',paddingBottom:'50px'}}>
            			Building <span style={{color:'red'}}>trust</span> in metaverse. <br/>
            			The credible canvas for NFT’ s <br/>
            			<span style={{ color:'yellow'}}>creators</span> and <span style={{ color:'blue'}}>collectors</span>
          				</h1>
					</div>
				</div>	
		);
	}
}

export default Main;
