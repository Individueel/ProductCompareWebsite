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

export const getSingleUser = (id) => {
    return fetch(process.env.REACT_APP_API_URL + 'api/v1/users/' + id)
        .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const createUser = (data) => {
    const object = {
        "name": data.name,
        "email": data.email,
        "id": data.sub,
        "date": "2023-03-21"
    };

    return fetch(process.env.REACT_APP_API_URL + 'api/v1/users', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
        .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.error(err));
};

export const updateUser = () => {
    return fetch(process.env.REACT_APP_API_URL + 'api/v1/users')
        .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.error(err));
};

export const deleteUser = () => {
    return fetch(process.env.REACT_APP_API_URL + 'api/v1/users')
        .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.error(err));
};