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

export const getSingleCategory = (id) => {
    return fetch(process.env.REACT_APP_API_URL + 'api/v1/categories/' + id)
        .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.error(err));
};

export const getAllCategories = () => {
    return fetch(process.env.REACT_APP_API_URL + 'api/v1/categories')
        .then(checkStatus)
        .then(res => res.json())
        .then(json => json.map((x) => ({ ...x })))
        .catch(err => console.error(err));
}