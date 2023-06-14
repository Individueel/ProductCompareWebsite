import { useState, useEffect, Suspense } from "react";
import { getAllProducts } from "../../api/ProductService"
import { getAllCategories, getSingleCategory } from "../../api/CategoryService"
import './ProductPage.css';
import ProductCard from "../ProductCard";
import CategoryDetails from "../CategoryDetails";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import FilterMenu from "../FilterMenu";
import { useSearchParams } from "react-router-dom";

export default function ProductPage() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});
    const [allCategories, setAllCategories] = useState([]);
    let [searchParams] = useSearchParams();
    let categoryID = searchParams.get("category") || 1;

    useEffect(() => {
        const api = async () => {
            setProducts(await getAllProducts(Object.fromEntries([...searchParams.entries()])));
        };
        api();
    }, [searchParams]);

    useEffect(() => {
        const api = async () => {
            const category = await getSingleCategory(categoryID);
            setCategory(category);
            setAllCategories(await getAllCategories());
            document.title = category.name !== "All" ? category.name : "All Products";
        };
        api();
    }, [categoryID]);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {category && <CategoryDetails name={category.name} description={category.description}></CategoryDetails>}
            </Suspense>

            <MDBRow className="ms-5">
                <MDBCol md='2'>
                    {allCategories?.length > 0 &&
                        <FilterMenu categories={allCategories} brands={(products && products.map(x => x.brand)) || []}></FilterMenu>
                    }
                </MDBCol>
                <MDBCol>
                    <MDBRow>
                        <Suspense fallback={<div>Loading...</div>}>
                            {products && products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </Suspense>
                    </MDBRow>
                </MDBCol>
            </MDBRow >
        </>
    );
};
