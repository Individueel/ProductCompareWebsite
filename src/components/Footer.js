import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="text-center text-lg-start">
            {/* <section className="d-flex justify-content-center justify-content p-4 border-bottom">
                <div className="me-5 d-none d-lg-block text-center">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="https://github.com/Individueel" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section> */}
            <section>
                <MDBContainer className="text-center text-md-start">
                    <MDBRow className="row mt-3">
                        <MDBCol className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>{process.env.REACT_APP_WEB_TITLE}
                            </h6>
                            <p>
                                My schoolproject for semester 3 on Fontys
                            </p>
                        </MDBCol>
                        <MDBCol className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="https://github.com/Individueel" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="https://github.com/Individueel" className="text-reset">Next.js</a>
                            </p>
                            <p>
                                <a href="https://github.com/Individueel" className="text-reset">Spring boot</a>
                            </p>
                            <p>
                                <a href="https://github.com/Individueel" className="text-reset">MySQL</a>
                            </p>
                        </MDBCol>
                        <MDBCol className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="/account" className="text-reset">Account</a>
                            </p>
                            <p>
                                <a href="/products" className="text-reset">Products</a>
                            </p>
                            <p>
                                <a href="/brands" className="text-reset">Brands</a>
                            </p>
                            <p>
                                <a href="/about" className="text-reset">About</a>
                            </p>
                        </MDBCol>
                        <MDBCol className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i>Fontys Eindhoven</p>
                            <p style={{ cursor: 'pointer' }} onClick={() => { window.location.replace("mailto:431326@student.fontys.nl") }}><i className="fas fa-envelope me-3"></i>431326@student.fontys.nl</p>
                            <p><i className="fas fa-phone me-3"></i>+ 01 010 010 01</p>
                            <p><i className="fas fa-print me-3"></i>+ 01 010 010 01</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className="me-5 d-none d-lg-block text-center" style={{ borderTop: "1px solid #e6e6e8", paddingTop: "30px" }}>
                © 2023 Copyright:
                <a className="text-reset fw-bold" href="https://github.com/Headoros"> Mike van den Hoef</a>
            </div>
        </footer >
    );
};
