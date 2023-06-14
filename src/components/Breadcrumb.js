import { Link, useLocation } from 'react-router-dom';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import React from 'react';

export default function BreadcrumpComponent() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <MDBBreadcrumb>
            <MDBBreadcrumbItem>
                <Link to="/">Home</Link>
            </MDBBreadcrumbItem>
            {pathnames.filter(x => isNaN(x)).map(str => str.replace(/-/g, ' ')).map((value, index, arr) => {
                const last = index === arr.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <MDBBreadcrumbItem key={index} active>
                        <Link className="active-breadcrump" to={to}>{value}</Link>
                    </MDBBreadcrumbItem>
                ) : (
                    <MDBBreadcrumbItem key={index}>
                        <Link to={to}>{value}</Link>
                    </MDBBreadcrumbItem>
                );
            })}
        </MDBBreadcrumb>
    );
};