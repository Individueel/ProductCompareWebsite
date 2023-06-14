import { MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';

export default function LandingPage() {
    useEffect(() => {
        document.title = 'Product Finder';
    }, []);

    return (
        <MDBRow>
            <div className="ms-5">
                <h1>Product Finder</h1>
            </div>
        </MDBRow>
    );
};
