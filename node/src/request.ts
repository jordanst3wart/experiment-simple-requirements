import axios, { AxiosResponse, AxiosError } from 'axios';

// Define the URL you want to make the GET request to
const url = 'http://example.com';

// Make the GET request
axios.get(url)
    .then((response: AxiosResponse) => {
        // Handle successful response
        console.log('Response:', response.data);
    })
    .catch((error: AxiosError) => {
        // Handle error
        console.error('Error:', error.message);
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Request:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error:', error.message);
        }
    });