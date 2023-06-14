import React from "react";
import { MDBCol, MDBCard, MDBBtn, MDBCardText, MDBCardBody } from "mdb-react-ui-kit"
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function BrandCard({ brand }) {
    return (
        <MDBCard className="product-card m-0">
            {/* <Link to={"/products/" + product.name.replace(/ /g, '-') + "/" + product.id}>
                <LazyLoadImage src={product.imageUrl}
                    effect="opacity"
                    className="product-card-img" />
            </Link> */}
            <MDBCardBody>
                <Link to={"/brands/" + brand.name + "/" + brand.id}>
                    <MDBCardText className="brand product-card-description text-decoration-underline">{brand.name}</MDBCardText>
                </Link>
                <MDBCol className="d-flex align-items-center">
                    <h5 className="text-truncate">{brand.name}</h5>
                </MDBCol>
                <Link to={"/brands/" + brand.name + "/" + brand.id}>
                    <MDBBtn className='product-card-button me-1 btn-lg mt-2' outline variant="primary">Check Products</MDBBtn>
                </Link>
            </MDBCardBody>
        </MDBCard>
    );
};