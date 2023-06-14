import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import "./Header.css";

import BreadcrumbComponent from "./Breadcrumb"
import GoogleLoginButton from "./GoogleLoginButton"

import { getAllCategories } from "../api/CategoryService"
import { getAllBrands } from "../api/BrandService"

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const api = async () => {
            setCategories(await getAllCategories());
            setBrands(await getAllBrands());
        };
        api();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.replace(/ /g, '-').length) navigate(`/searchresults/${searchTerm.replace(/ /g, '-')}`);
    };

    return (
        <header style={{ paddingLeft: 0 }}>
            <MDBNavbar expand='lg' className="p-0">
                <MDBContainer fluid className="pb-2 pt-2" style={{ backgroundColor: window.location.pathname === "/" ? "transparent" : "var(--pink)" }}>
                    <MDBNavbarToggler
                        aria-controls='navbarExample01'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon fas icon='bars' />
                    </MDBNavbarToggler>
                    <div className='collapse navbar-collapse' id='navbarExample01'>
                        <MDBNavbarNav className="mb-2 mb-lg-0">
                            <MDBNavbarItem active>
                                <MDBNavbarLink tag={Link} to="/" style={{ color: window.location.pathname === "/" ? "black" : "white" }} className="text-uppercase logo" aria-current='page'>
                                    {process.env.REACT_APP_WEB_TITLE}
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <ul className="navbar-nav mx-auto">
                                <MDBNavbarItem>
                                    <MDBNavbarLink tag={Link} to="/account/wishlist" style={{ color: window.location.pathname === "/" ? "black" : "white" }} aria-current='page'>
                                        Wishlist
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <div className="dropdown">
                                    <MDBNavbarItem>
                                        <MDBNavbarLink tag={Link} to="/products" style={{ color: window.location.pathname === "/" ? "black" : "white" }} className="dropdown-toggle">
                                            Products
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <div className="dropdown-menu dropdown-menu-center container pb-2 p-4" style={{ width: "30vw" }}>
                                        <MDBRow>
                                            {categories?.length > 0 && categories.filter(c => c?.subCategories && c.subCategories.length).sort((a, b) => (a.name > b.name) ? 1 : -1).map((category) => (
                                                <MDBCol key={category.name}>
                                                    <div>
                                                        <Link to={"/products?category=" + category.id}>
                                                            <p className="filter pinky">{category.name}</p>
                                                        </Link>
                                                        <div className="dropdown-row">
                                                            {category.subCategories.sort((a, b) => (a.name > b.name) ? 1 : -1).map((subCategory) => (
                                                                <div key={subCategory.name} className="list-group">
                                                                    <Link to={"/products?category=" + subCategory.id}>
                                                                        <p className="filter dropdown-item pb-0 pt-0 mb-2">{subCategory.name}</p>
                                                                    </Link>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </MDBCol>
                                            ))}
                                        </MDBRow>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <MDBNavbarItem>
                                        <MDBNavbarLink tag={Link} to="/brands" style={{ color: window.location.pathname === "/" ? "black" : "white" }} className="dropdown-toggle">
                                            Brands
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <div className="dropdown-menu dropdown-menu-center container pb-0 p-4">
                                        <div className="dropdown-row">
                                            {brands?.length > 0 && brands.sort((a, b) => (a.name > b.name) ? 1 : -1).map((brand, key) => (
                                                <Link key={key} to={"/brands/" + brand.name + "/" + brand.id}>
                                                    <p className="filter dropdown-item pb-0 pt-0 mb-2">{brand.name}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* <MDBNavbarItem>
                                <NavLink style={null} to="/productfinder">
                                    <MDBNavbarLink className="text-black">
                                        Product Finder
                                        <svg className="chevronIcon group-hover:rotate-180 transition-transform transform fill-current" width="21" height="21" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m14.28 8.256-3.395 3.395L7.49 8.256A.871.871 0 1 0 6.256 9.49l4.016 4.016a.871.871 0 0 0 1.234 0l4.016-4.016a.871.871 0 0 0 0-1.234.89.89 0 0 0-1.242 0z"></path>
                                        </svg>
                                    </MDBNavbarLink>
                                </NavLink>
                            </MDBNavbarItem> */}
                                <MDBNavbarItem style={{ color: window.location.pathname === "/" ? "black" : "white" }} className="d-flex">
                                    <div style={{ color: window.location.pathname === "/" ? "black" : "white" }} className="input-group">
                                        <input
                                            type="search"
                                            style={{ color: window.location.pathname === "/" ? "black" : "white" }}
                                            className={window.location.pathname === "/" ? "form-control searchbar searchbar-black" : "form-control searchbar searchbar-white"}
                                            placeholder="Search"
                                            aria-label="Search"
                                            aria-describedby="search-addon"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSearch(e);
                                                }
                                            }}
                                        />
                                        <span className="input-group-text border-0" id="search-addon" onClick={handleSearch}>
                                            <i style={{ color: window.location.pathname === "/" ? "black" : "white" }} className="fas fa-search"></i>
                                        </span>
                                    </div>
                                </MDBNavbarItem>
                            </ul>
                            <MDBNavbarItem className="d-flex">
                                <GoogleLoginButton></GoogleLoginButton>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar >

            {
                window.location.pathname !== "/" &&
                <MDBContainer>
                    {window.location.pathname !== "/" &&
                        <MDBRow className="ms-5">
                            <nav className="navbar navbar-expand-lg navbar-white bg-white fs-5">
                                <BreadcrumbComponent></BreadcrumbComponent>
                            </nav>
                        </MDBRow>
                    }
                </MDBContainer>
            }
        </header >
    );
};
