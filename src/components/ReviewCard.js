import React from "react";
import { MDBCol, MDBCard, MDBCardText, MDBRow, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit"
import "./ProductCard.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ReviewCard({ review }) {
    return (
        <MDBCard className="rounded-0 shadow-1-strong">
            <MDBCardBody>
                <MDBRow>
                    <MDBCol md='1'>

                    </MDBCol>
                    <MDBCol md='9'>
                        <MDBRow>
                            <MDBCol md="2">
                                <LazyLoadImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                    className="rounded-circle img-fluid" width={100}
                                    effect="opacity"
                                    alt="Image Alt"
                                />
                            </MDBCol>
                            <MDBCol>
                                <h2>
                                    Anonymous
                                </h2>
                                <div className="rating">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        index < review.rating ? <i key={index} className="fa-solid fa-star m-0"></i> : <i key={index} className="fa-regular fa-star m-0"></i>
                                    ))}
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md='1'>
                        27-3-2023
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='1'>

                    </MDBCol>
                    <MDBCol md='9'>
                        <MDBRow>
                            <MDBCol md="2"></MDBCol>
                            <MDBCol md='8'>
                                <MDBCardTitle>
                                    {review.title}
                                </MDBCardTitle>
                                <MDBCardText>
                                    {review.description}
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
};