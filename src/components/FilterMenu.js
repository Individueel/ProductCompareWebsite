import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import './FilterMenu.css';

export default function FilterMenu({ categories, brands }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    function setCategory(category) {
        searchParams.set('category', category);
        navigate(`?${searchParams.toString()}`, { replace: true });
    };

    function setColors(colors) {
        searchParams.set('colors', colors);
        navigate(`?${searchParams.toString()}`, { replace: true });
    }

    const removeFilter = (key) => {
        searchParams.delete(key);
        navigate(`?${searchParams.toString()}`, { replace: true });
    }

    return (
        <div className="card shadow-none">
            {[...searchParams.entries()].length ?
                <><div className="card-title">
                    <h4>
                        Gekozen Filters
                    </h4>
                </div><hr className="hr mt-2 mb-2" /></>
                : <h4>
                    Filters
                </h4>}
            <div className='row m-1'>
                {categories && [...searchParams.entries()].length > 0 && [...searchParams.entries()].map(([key, value]) => {
                    return <div key={key} className="col-auto p-1">
                        <button onClick={() => removeFilter(key)} className="btn btn-secondary btn-filter" type="button">
                            {!isNaN(value) ? categories.find(x => x.id === parseInt(value))?.name || value : value}<span className="close">&times;</span>
                        </button>
                    </div>
                })}
            </div>
            <hr className="hr mt-2 mb-2" />
            <h5 className="card-title">Category</h5>
            {categories?.length > 0 && categories.filter(c => c?.subCategories && c.subCategories.length && c.name !== "All").sort((a, b) => (a.name > b.name) ? 1 : -1).map((category, key) => (
                <div key={key + category.name}>
                    <p onClick={() => setCategory(category.id)} className="pink-hover mouse-pointer">{category.name}</p>
                    {category.subCategories.sort((a, b) => (a.name > b.name) ? 1 : -1).map((subCategory) => (
                        <div key={subCategory.name} className="list-group">
                            <p onClick={() => setCategory(subCategory.id)} className="pink-hover mouse-pointer ms-3">{subCategory.name}</p>
                        </div>
                    ))}
                </div>
            ))}
            <hr className="hr mt-2 mb-2" />
            <h5 className="card-title">Brand</h5>
            {brands?.length > 0 && brands
                .filter((brand, index, self) => self.findIndex((t) => t.name === brand.name) === index)
                .map((brand, i) => (
                    <div className="pink-hover mouse-pointer" key={i}>{brand.name}</div>
                ))
            }
            <hr className="hr mt-2 mb-2" />
            <div>
                <h5 className="card-title">Color</h5>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("green") }} style={{ color: "green" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("red") }} style={{ color: "red" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("blue") }} style={{ color: "blue" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("yellow") }} style={{ color: "yellow" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("orange") }} style={{ color: "orange" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("pink") }} style={{ color: "pink" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("purple") }} style={{ color: "indigo" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("brown") }} style={{ color: "saddlebrown" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("gray") }} style={{ color: "gray" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("black") }} style={{ color: "black" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer" onClick={() => { setColors("white") }} style={{ color: "white" }}></i>
                <i className="fas fa-circle m-1 fa-2x shadow-circle mouse-pointer rainbow-circle"></i>
            </div>
        </div >
    );
};