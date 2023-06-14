import { useState, useEffect, Suspense } from "react";
import { MDBCardText, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import { getSingleProduct } from "../../api/ProductService"
import { Link, useParams } from 'react-router-dom';
import { changeLikes } from "../../api/ProductService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import ReviewCard from "../ReviewCard";
import ReviewDetailsCard from "../ReviewDetailsCard";

import "./ProductDetailPage.css"

export default function ProductDetailPage() {
    const [product, setProduct] = useState(null);
    const user = useSelector((state) => state.user)
    const [isFavorite, setIsFavorite] = useState(false);

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
        changeLikes(product, user.sub, isFavorite);
        likeAlert(!isFavorite);
    }

    const { productID } = useParams();

    useEffect(() => {
        const api = async () => {
            const p = await getSingleProduct(productID);
            setProduct(p);
            setIsFavorite(p.likes.includes(user.sub));
            document.title = p.name;
        };
        api();
    }, [productID, user.sub]);

    return (
        <MDBContainer className="mt-5">
            <MDBRow className="row">
                <div className="col-md-4 mb-6">
                    {product?.imageUrl && <img src={product.imageUrl} alt="" />}
                </div>
                <div className="col-md-6 mb-6">
                    <div className="p-4">
                        <div className="mb-3">
                            {product?.categories && product.categories.filter(x => x.name !== "All").map((category, index) => (
                                <Link key={index} to={"/products?category=" + category.id}>
                                    <span className="badge bg-danger me-1">{category.name}</span>
                                </Link>
                            ))}
                            <Link to="/new">
                                <span className="badge bg-info me-1">New</span>
                            </Link>
                            <Link to="/bestsellers">
                                <span className="badge bg-success me-1">Bestseller</span>
                            </Link>
                        </div>

                        <h2>{product?.name && product.name}</h2>

                        <MDBRow className="d-flex">
                            <MDBCol className="col-auto">
                                {isFavorite ? (
                                    <i onClick={toggleFavorite} className="fa-solid fa-heart m-0"></i>
                                ) : (
                                    <i onClick={toggleFavorite} className="fa-regular fa-heart m-0"></i>
                                )}
                            </MDBCol>
                            <MDBCol className="col-auto ps-0">
                                <p className="border-0 bg-transparent p-0">({(product?.likes && product.likes.length) || 0})</p>
                            </MDBCol>
                        </MDBRow>

                        <div className="rating">
                            {product?.reviews && Array.from({ length: 5 }, (_, index) => (
                                index < (product.reviews.reduce((a, { rating }) => a + rating, 0) / product.reviews.length) ? <i key={index} className="fa-solid fa-star m-0"></i> : <i key={index} className="fa-regular fa-star m-0"></i>
                            ))}
                        </div>
                        <div>
                            <span className="glyphicon glyphicon-user"></span>{product && product.reviews.length} {product && product.reviews.length > 1 ? " reviews" : " review"}
                        </div>

                        <MDBCardText className="product-card-description mt-5">Material: {product && product.material}</MDBCardText>

                        <p>{product?.description && product.description}</p>
                    </div>
                </div>
            </MDBRow >

            <hr className="hr" />

            <Suspense fallback={<div>Loading...</div>}>
                {product?.reviews && <ReviewDetailsCard reviews={product.reviews} />}
            </Suspense>

            <hr className="hr" />

            <Suspense fallback={<div>Loading...</div>}>
                {product?.reviews && product.reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </Suspense>
        </MDBContainer >
    );
};
