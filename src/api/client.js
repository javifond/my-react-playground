const API_ENDPOINT = 'https://randomuser.me/api/?results=50&gender=female';

// Fetch Users
export const fetchUsers = async () => {
    const res = await fetch(API_ENDPOINT);
    const data = await res.json();

    return data;
}
