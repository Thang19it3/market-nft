import React, { Component } from 'react'
import "../components/buy.css"

export class Buy extends Component {
	handleChange(e) {
        localStorage.setItem('selected', e.target.value)
		localStorage.removeItem('search')
		window.location.reload()
    }
	render() {
		return (
			<div className="col-md-12 buy">
				<form className='form-group' onSubmit={(event) => {
							event.preventDefault()
							const name = this.name.value
							localStorage.removeItem('selected')
							localStorage.setItem('search', name)
							window.location.reload()
						}}>
					<div className='boxContainer col-md-12'>
						<div className='boxSearch'>
							<input type='text' ref={(input) => { this.name = input }} className="search"></input>
					    	<div className='boxBtn'>
								<button type='submit' ><i class='bx bx-search'></i></button>
							</div>
						</div>
					</div>
				</form>
				<h2 className='h2k'>BUY PRODUCT</h2>
				<hr/>
				<select id='type' onChange={this.handleChange} className="pk1">
					<option value='0'>N/A</option>
					<option value='a'>All</option>
					<option value='1'>Portrait</option>
					<option value='2'>Scenery</option>
				</select>
				<div className="row">
				{ this.props.products && this.props.products.length > 0
					? this.props.products
					.sort((a,b) => { return b.id - a.id })
					.map((product, key) => {
					return(
						<div key={key} className="col-sm-4 mb-3">
							{ localStorage.getItem('selected') === 'a' || product.pk === localStorage.getItem('selected') || product.name.includes(localStorage.getItem('search'))? 
							<div className="card" style={{minHeight: '100px'}}>
								<div className="card-body">
									<div className="mb-2">
										<img className="img-shop" src={product.img} alt="a"></img>
										<div div style = {{display: 'flex',justifyContent: 'space-around', marginTop: '15px' }} >
											<span style={{fontSize: '18pt',fontWeight: '900'}}>{product.name}</span>
											<div className="d-flex flex-column">
												<small style={{ fontSize: '17px'}}>Price:</small>
												<span className="font-weight-bold" style={{fontSize: '13pt'}}>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</span>
											</div>
										</div>
									</div>
									<hr />
									<small>{!product.purchased ? 'Owner' : 'BUY'}: {product.owner}</small><br/>
								</div>
								<div className="card-footer" style={{background: 'transparent', borderTop: '0px'}}>
									{ !product.purchased && product.owner !== this.props.account ?
										<button 
											className="btn btn-info float-right font-weight-bold" 
											style={{width: '75px'}}
											name={product.id}
											value={product.price}
											onClick={(event) => {
												this.props.purchaseProduct(event.target.name, event.target.value)
											}}
											>Buy</button>
										: product.owner === this.props.account ? <button className="btn btn-light float-right font-weight-bold" disabled style={{minWidth: '75px'}}>Your product</button> : <button className="btn btn-secondary float-right font-weight-bold" disabled style={{minWidth: '75px'}}>Purchased</button>
									}
								</div>
							</div>
						: ""}

						</div>
						)
					})
					: ""
				}
				</div>	
			</div>
		)
	}
}

export default Buy
