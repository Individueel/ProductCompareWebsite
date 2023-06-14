import React from 'react';
import { MDBContainer } from "mdb-react-ui-kit"
import { useLocation } from 'react-router-dom';

export default function PageBody(props) {
    const location = useLocation();
    return (
        <>
            {(location.pathname !== "/" &&
                <MDBContainer>
                    {props.children}
                </MDBContainer>) || props.children
            }
        </>);
};
