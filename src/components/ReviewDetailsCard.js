import React from "react";
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit"
import "./ProductCard.css";
import Modal from "../components/Modal"

export default function ReviewDetailsCard({ reviews }) {
    return (
        <MDBCard className="rounded-0 shadow-1-strong">
            <MDBCardBody>
                <MDBRow>
                    <MDBCol>
                        <Modal />
                    </MDBCol>
                    <MDBCol className="col-xs-12 col-md-6 text-center">
                        <h1 className="rating-num">
                            {(reviews.reduce((a, { rating }) => a + rating, 0) / reviews.length).toFixed(1) === "NaN" ? "0.0" : (reviews.reduce((a, { rating }) => a + rating, 0) / reviews.length).toFixed(1)}</h1>
                        <div className="rating">
                            {Array.from({ length: 5 }, (_, index) => (
                                index < (reviews.reduce((a, { rating }) => a + rating, 0) / reviews.length) ? <i key={index} className="fa-solid fa-star m-0"></i> : <i key={index} className="fa-regular fa-star m-0"></i>
                            ))}
                        </div>
                        <div>
                            <span className="glyphicon glyphicon-user"></span>{reviews.length} {reviews.length > 1 ? " reviews" : " review"}
                        </div>
                    </MDBCol>
                    <MDBCol className="col-xs-12 col-md-4">
                        <MDBRow className="rating-desc">
                            <MDBCol className="col-xs-3 col-md-3 text-right">
                                <i className="fa-solid fa-star"></i>5
                            </MDBCol>
                            <MDBCol className="col-xs-8 col-md-9 row align-items-center">
                                <div className="progress ps-0 pe-0">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow="20"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: ((reviews.filter(r => r.rating === 5).length / reviews.length) * 100) + "%" }}>
                                        <span className="sr-only">80%</span>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="col-xs-3 col-md-3 text-right">
                                <i className="fa-solid fa-star"></i>4
                            </MDBCol>
                            <MDBCol className="col-xs-8 col-md-9 row align-items-center">
                                <div className="progress ps-0 pe-0">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow="20"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: ((reviews.filter(r => r.rating === 4).length / reviews.length) * 100) + "%" }}>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="col-xs-3 col-md-3 text-right">
                                <i className="fa-solid fa-star"></i>3
                            </MDBCol>
                            <MDBCol className="col-xs-8 col-md-9 row align-items-center">
                                <div className="progress ps-0 pe-0">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="20"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: ((reviews.filter(r => r.rating === 3).length / reviews.length) * 100) + "%" }}>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="col-xs-3 col-md-3 text-right">
                                <i className="fa-solid fa-star"></i>2
                            </MDBCol>
                            <MDBCol className="col-xs-8 col-md-9 row align-items-center">
                                <div className="progress ps-0 pe-0">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="20"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: ((reviews.filter(r => r.rating === 2).length / reviews.length) * 100) + "%" }}>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="col-xs-3 col-md-3 text-right">
                                <i className="fa-solid fa-star"></i>1
                            </MDBCol>
                            <MDBCol className="col-xs-8 col-md-9 row align-items-center">
                                <div className="progress ps-0 pe-0">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="20"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: ((reviews.filter(r => r.rating === 1).length / reviews.length) * 100) + "%" }}>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
};