import { MDBRow } from 'mdb-react-ui-kit';
import React, { Suspense, useEffect, useState } from 'react';
import { getAllBrands } from "../../api/BrandService"
import BrandCard from '../BrandCard';
import CategoryDetails from '../CategoryDetails';

export default function AllBrandsPage() {
    const [brands, setBrands] = useState([]);

    document.title = 'Brands';

    useEffect(() => {
        const api = async () => {
            setBrands(await getAllBrands());
        };
        api();
    }, []);

    return (
        <>
            <CategoryDetails name={"Brands"} description={""} /><MDBRow>
                <div className="ms-5">
                    <MDBRow>
                        <Suspense fallback={<div>Loading...</div>}>
                            {brands?.length && brands.map((brand, key) => (
                                <BrandCard key={key} brand={brand}></BrandCard>
                            ))}
                        </Suspense>
                    </MDBRow>
                </div>
            </MDBRow>
        </>
    );
};
