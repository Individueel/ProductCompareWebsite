import { useState, useEffect, Suspense } from "react";
import { getAllProducts } from "../../api/ProductService"
import './ProductPage.css';
import ProductCard from "../ProductCard";
import { MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
// import { userSlice } from "../../redux/userSlice";

export default function WishlistPage() {
    const [products, setProducts] = useState([]);
    const user = useSelector((state) => state.user)

    useEffect(() => {
        document.title = 'Wishlist';

        const api = async () => {
            const p = await getAllProducts({ "likes": user.id });
            if (JSON.stringify(products) !== JSON.stringify(p)) setProducts(p);
        };

        api();
    }, [products, user.id]);

    return (
        <>
            <MDBRow className="ms-5">
                <h1>Wishlist</h1>
                <hr className="hr hr-blurry" />
            </MDBRow>
            <div className="ms-5">
                <MDBRow>
                    <Suspense fallback={<div>Loading...</div>}>
                        {(products?.length > 0 && products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))) || <div class="fluid-grid ">
                                <div class="ms-3 mt-5 mb-5">
                                    <p><span style={{ verticalAlign: "inherit" }}>Er staan geen artikelen op je verlanglijstje</span></p>
                                    <MDBBtn>Try the product finder</MDBBtn>
                                </div>
                            </div>}
                    </Suspense>
                </MDBRow>
            </div>
        </>
    );
};