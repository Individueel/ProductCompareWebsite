import { useEffect, Suspense, useState } from "react";
import { MDBRow } from "mdb-react-ui-kit"
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import { getAllProducts } from "../../api/ProductService";
import ProductCard from "../ProductCard";
import CategoryDetails from "../CategoryDetails"

export default function BrandInfoPage() {
    const [products, setProducts] = useState([]);
    const { brandName } = useParams();

    useEffect(() => {
        document.title = brandName.replace(/-/g, ' ')

        const api = async () => {
            setProducts(await getAllProducts({ brand: brandName.replace(/-/g, ' ') }));
        };
        api();
    }, [brandName]);

    return (
        <>
            <CategoryDetails name={brandName} description={brandName} />
            <MDBRow>
                <div className="ms-5">
                    <MDBRow>
                        <Suspense fallback={<div>Loading...</div>}>
                            {products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </Suspense>
                    </MDBRow>
                </div>
            </MDBRow>
        </>
    );
};
