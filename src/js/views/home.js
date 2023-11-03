import React from "react";

import "../../styles/home.css";




export const Home = () => {

	return (
		<div className="container">
			<button type="button" className="btn btn-success button">Add new contact</button>
			{/* Contact Info bootstrap  */}
			<div className="card mb-3 contact" style={{ maxWidth: "700px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg" className="img-fluid" alt="" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title name">Name</h5>
							<div>
								<i className="fas fa-edit mr-2"></i>
								<i className="fas fa-trash-alt"></i>
							</div>
							<p className="card-text address">
								<i className="fas fa-location-dot"></i> Address
							</p>
							<p className="card-text">
								<i class="fa-solid fa-phone phone"></i> Phone
							</p>
							<p className="card-text">
								<i class="fa-solid fa-envelope mail"></i> E-mail
							</p>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

