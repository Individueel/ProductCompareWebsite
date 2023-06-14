import React, { useState } from "react";
import { MDBCol, MDBCard, MDBBtn, MDBCardText, MDBCardBody } from "mdb-react-ui-kit"
import "./ProductCard.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";
import { changeLikes } from "../api/ProductService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function ProductCard({ product }) {
    const user = useSelector((state) => state.user)
    const [isFavorite, setIsFavorite] = useState((user && product.likes.includes(user.id)) || false);

    const likeAlert = (isFavorite) => isFavorite ? toast.success("You liked: " + product.name, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    }) : toast.error("You disliked: " + product.name, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    function toggleFavorite() {
        if (!user) return;
        setIsFavorite(!isFavorite);
        changeLikes(product, user.id, isFavorite);
        likeAlert(!isFavorite);
    }

    return (
        <MDBCard className="product-card m-0">
            <Link to={"/products/" + product.name.replace(/ /g, '-') + "/" + product.id}>
                <LazyLoadImage src={product.imageUrl}
                    effect="opacity"
                    className="product-card-img" />
            </Link>
            <MDBCardBody>
                <Link to={"/brands/" + product.brand.name + "/" + product.brand.id}>
                    <MDBCardText className="brand product-card-description text-decoration-underline">{product.brand.name}</MDBCardText>
                </Link>
                <MDBCol className="d-flex align-items-center">
                    <h5 className="text-truncate">{product.name}</h5>
                </MDBCol>
                <MDBCardText className="product-card-description">Material: {product.material}</MDBCardText>
                <div className="d-flex">
                    {Array.from({ length: 5 }, (_, index) => (
                        index < (product.reviews.reduce((a, { rating }) => a + rating, 0) / product.reviews.length) ? <i key={index} className="fa-solid fa-star m-0"></i> : <i key={index} className="fa-regular fa-star m-0"></i>
                    ))}
                    <p className="border-0 bg-transparent p-0">({product.reviews.length})</p>
                    {isFavorite ? (
                        <i onClick={toggleFavorite} className="fa-solid fa-heart m-0 ms-5 me-1"></i>
                    ) : (
                        <i onClick={toggleFavorite} className="fa-regular fa-heart m-0 ms-5 me-1"></i>
                    )}
                    <p className="border-0 bg-transparent p-0">({(product?.likes && product.likes.length) || 0})</p>
                </div>
                <Link to="/compare">
                    <MDBBtn className='product-card-button me-1 btn-lg mt-2' outline variant="primary">Compare Now</MDBBtn>
                </Link>
            </MDBCardBody>
        </MDBCard>
    );
};