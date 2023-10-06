import axios, { AxiosError, AxiosResponse } from "axios";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));
axios.defaults.baseURL = process.env.API_URL;

// arrow functions, they make it easier to keep our code concise.
const responseBody = (response: AxiosResponse) => response.data;

// to fetch error status code.
axios.interceptors.response.use(async response  => {
    await sleep();
    return response;
}, (error : AxiosError) => {
    // console.log("caught by interceptor");
    const {data, status} = error.response as AxiosResponse;
    switch (status) {
        // validation error is also 400 error
        case 400:
            console.log(data.title);
            break;
        case 401:
            console.log(data.title);
            break;
        case 404:
            console.log(data.title);
            break;
        case 500:
            const dataObj = JSON.parse(data);
            // toast.error(dataObj.title);
            console.log(dataObj);
            // router.navigate("/server-error", {state: {error : dataObj}});
            break;
        default:
            break;           
    }
    return Promise.reject(error.response);
});

const requests = {
    get: (url: string, header : {}) => axios.get(url, header).then(responseBody),
    post: (url: string, body: {}, config: {}) => axios.post(url, body, config).then(responseBody),
    put: (url: string, body: {},  config: {}) => axios.put(url, body, config).then(responseBody),
    delete: (url: string, config: {}) => axios.delete(url, config).then(responseBody)
}

// in order to overwrite the baseURL, you have to use config params.
const config = {
    //baseURL : "http://localhost:5001/"
}

const BookAPI = {
    getlist: () => requests.get("books", {}),
    create: (book: BooksItem) => requests.post("books", book, {}),
    update: (id:string, book:BooksItem) => requests.put(`books/${id}`, book, {}),
    delete: (id:string) => requests.delete(`books/${id}`, {})
}

const agent = {
    BookAPI
}

export default agent;