import React, { Component } from 'react'
import "../components/sell.css"
import bg from "../img/bg1.png"
import user1 from "../img/user1.jpg"

export class Sell extends Component {
	render() {
		return (
			<div className="col-12 sell" style={{ marginBottom:'100px'}}>
				<div className='col-lg-4 img-1'>
          			<img src={bg} alt="" className="col-12 img-11"/>
          			<img src={user1} alt="" className="user1"/>
          			<h3 className='img-name'>ADAM</h3>
          			<p>electronic coin trading</p>
          			<div className='mxh'>
            			<i class='bx bxl-facebook'></i>
            			<i class='bx bxl-facebook'></i>
						<i class='bx bxl-facebook'></i>
						<i class='bx bxl-facebook'></i>
						<i class='bx bxl-facebook'></i>
          			</div>
          			<button className='btn-img'>FOLLOW</button>
        		</div>
				<div className="col-md-8 sell1">
					<h1 style={{marginLeft:'-100px'}}>Sell Product</h1>
					<form 
						onSubmit={(event) => {
							event.preventDefault()
							const name = this.productName.value
							const img = this.productImg.value
							const pk = this.productPk.value
							const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
							this.props.createProduct(name, price, img, pk)
						}}>
						<div className="form-group mr-sm-2 sell-name">
							<label htmlFor="productName">Product Name</label>
							<input
							id="productName"
							type="text"
							ref={(input) => { this.productName = input }}
							className="form-control"
							placeholder="iPhone 12 Pro"
							required />
						</div>
						<div className="form-group mr-sm-2 sell-price">
							<label htmlFor="productPrice">Product Price</label>
							<input
							id="productPrice"
							type="text"
							ref={(input) => { this.productPrice = input }}
							className="form-control"
							placeholder="1.2"
							required />
						</div>
						<div className="form-group mr-sm-2 sell-price">
							<label htmlFor="productImg">Product Image</label>
							<input
							id="productImg"
							type="text"
							ref={(input) => { this.productImg = input }}
							className="form-control"
							placeholder="Image"
							required />
						</div>
						<div className="form-group mr-sm-2">
							<label htmlFor="productPk">Product Type</label>
							<select id="productPk" className="form-control" ref={(input) => { this.productPk = input }}>
								<option value="1">Portrait</option>
								<option value="2">Scenery</option>
							</select>
						</div>
						
						<button type="submit" className="btn btn-info">POST</button>
					</form>
				</div>
				<hr className="my-4"/>
			</div>
		)
	}
}

export default Sell
