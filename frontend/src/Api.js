// Declare the base url
const BASE_URL = 'http://localhost:3000';

// Declares the headers settings
const headers = {
    'Accept': 'application/json'
}

// Make a call in the API to check if the value entered is a palindrome
export const checkPalindrome = (query) => (
    fetch(`${BASE_URL}/checkPalindrome`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    })
    .then((response) => {
        if(response.status === 200)
            return true;

        return false;
    })
)
