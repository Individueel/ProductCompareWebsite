import React, { useEffect } from 'react';
import { Row, Col, Jumbotron } from 'mdbreact';
import { MDBBtn } from 'mdb-react-ui-kit'
import heroImage from '../../images/hero.png';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function LandingPage() {
    useEffect(() => {
        document.title = process.env.REACT_APP_WEB_TITLE;
    }, []);

    return (
        <Jumbotron className="hero">
            <Row>
                <Col md="5" className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h1 className="hero-text text-white">Find<mark>your</mark>{process.env.REACT_APP_WEB_TITLE.split(" ")[2]}</h1>
                        <Link to="/products"> <MDBBtn className='me-1 btn-lg compare-button' outline color='dark'>Compare Now</MDBBtn></Link>
                    </div>
                </Col>
                <Col md="6">
                    <LazyLoadImage className="heroImage" src={heroImage}
                        effect="opacity"
                    />
                </Col>
            </Row>
        </Jumbotron>
    );
};