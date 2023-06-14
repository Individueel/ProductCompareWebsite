class HTTPResponseError extends Error {
    constructor(response) {
        super(`HTTP Error Response: ${response.status} ${response.statusText}`);
        this.response = response;
    }
}

const checkStatus = response => {
    if (response.ok) {
        // response.status >= 200 && response.status < 300
        return response;
    } else {
        throw new HTTPResponseError(response);
    }
}

export const getAllProducts = (filters) => {
    return fetch(process.env.REACT_APP_API_URL + 'api/v1/products')
        .then(checkStatus)
        .then(res => res.json())
        .then(json => json.map((x) => ({ ...x })))
        .then(products => (filters && Object.keys(filters).length && filterProducts(products, filters)) || products)
        .catch(err => console.error(err));
}

const filterProducts = (products, filters) => {
    return products.filter((product) => {
        for (const key in filters) {
            if (Object.prototype.hasOwnProperty.call(filters, key)) {
                const value = filters[key];
                if (key === "price") {
                    const [minPrice, maxPrice] = value.split("-");
                    const productPrice = parseFloat(product[key]);
                    if (
                        (minPrice && productPrice < parseFloat(minPrice)) ||
                        (maxPrice && productPrice > parseFloat(maxPrice))
                    ) {
                        return false;
                    }
                } else if (key === "likes") {
                    if (!product.likes.includes(value)) return false;
                } else if (key === "brand") {
                    if (product.brand.name.toLowerCase() !== value.toLowerCase()) return false;
                } else if (key === "category") {
                    if (!(parseInt(value) === 1 || product.categories.map(x => x.id).includes(parseInt(value)))) return false;
                } else if (key === "colors") {
                    if (!product.colors.some((color) => color === value.toUpperCase())) return false;
                } else if (value !== "" && !product[key].toLowerCase().startsWith(value.toLowerCase())) {
                    return false;
                }
            }
        }
        return true;
    }).sort();
}

export const getSingleProduct = (id) => {
    return fetch(process.env.REACT_APP_API_URL + 'api/v1/products/' + id)
        .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.error(err));
};

export const changeLikes = (product, userID, like) => {
    if (!like) product.likes.push(userID)
    if (like) product.likes = product.likes.filter(x => x !== userID)

    const object = {
        "op": "update",
        "key": "likes",
        "value": product.likes,
    };

    return fetch(process.env.REACT_APP_API_URL + 'api/v1/products/' + product.id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
        .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.error(err));
}