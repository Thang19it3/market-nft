import React, { Component } from 'react'

export class YourProduct extends Component {
	render() {
		return (
			<div className="col-md-12 sell">
				<div className = 'col-md-8' >
				<h5 className='h5k'>Your Products</h5>
				<table className="table table-bordered" style={{width: '100%', marginLeft: '100px'}}>
					<thead>
						<tr style={{ textAlign: 'center'}}>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Price</th>
							<th scope="col">Image</th>
						</tr>
					</thead>
					<tbody>
						{this.props.products.filter(p => p.owner === this.props.account).length > 0
							? this.props.products
								.filter(p => p.owner === this.props.account)
								.map((product, key) => {
								return (
									<tr key={key}>
										<th scope="row">{key+1}</th>
										<td>{product.name}</td>
										<td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</td>
										<td style={{ width: '120px'}}><img src={product.img} style={{ width: '100px', height: '100px'}} alt=""/></td>
									</tr>
								)
								})
							: <tr><td colSpan="3" className="text-center">You not have any products yet.</td></tr>
						}
					</tbody>
				</table>
				</div>
			</div>
		)
	}
}

export default YourProduct