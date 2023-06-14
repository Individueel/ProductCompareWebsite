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

export const getSingleBrand = (id) => {
    return fetch(process.env.REACT_APP_API_URL + 'api/v1/brands/' + id)
        .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.error(err));
};

export const getAllBrands = () => {
    return fetch(process.env.REACT_APP_API_URL + 'api/v1/brands')
        .then(checkStatus)
        .then(res => res.json())
        .then(json => json.map((x) => ({ ...x })))
        .catch(err => console.error(err));
};