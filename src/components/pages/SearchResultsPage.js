import { useEffect, Suspense, useState } from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit"
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import { getAllProducts } from "../../api/ProductService";
import ProductCard from "../ProductCard";

export default function SeachResultsPage() {
    const [products, setProducts] = useState([]);
    const { searchID } = useParams();

    useEffect(() => {
        document.title = "Search results: " + searchID.replace(/-/g, ' ');

        const api = async () => {
            const productsByName = await getAllProducts({ name: searchID.replace(/-/g, ' ') });
            const productsByBrand = await getAllProducts({ brand: searchID.replace(/-/g, ' ') });
            setProducts([...productsByName, ...productsByBrand].filter((x, i, a) => a.findIndex(product => product.name === x.name) === i));
        };
        api();
    }, [searchID]);

    return (
        <MDBContainer>
            <MDBRow className="ms-5 mb-3">
                <Suspense fallback={<div id={'loading'} />}>
                    Results for: {searchID.replace(/-/g, ' ')}
                </Suspense>
            </MDBRow>
            <MDBRow>
                <Suspense fallback={<div>Loading...</div>}>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </Suspense>
            </MDBRow>
        </MDBContainer>
    );
};