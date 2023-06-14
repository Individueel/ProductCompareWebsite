import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    useEffect(() => {
        document.title = 'Page not found';
    }, []);

    function handleClick() {
        window.history.back();
    }
    return (
        <div className="page-wrap d-flex flex-row h-100 row align-items-center">
            <MDBContainer>
                <MDBRow className="row justify-content-center">
                    <MDBCol className="col-md-12 text-center">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">Page not found</div>

                        <button className="btn btn-link" onClick={handleClick}>Back</button>
                        <Link to="/">
                            <button className="btn btn-link">Home</button>
                        </Link>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div >
    );
};