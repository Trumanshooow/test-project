import axios from 'axios'
export async function getPosts() {
    const res = await axios('https://jsonplaceholder.typicode.com/posts');
    return res.data;
}

export async function getUsers() {
    const res = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(res.data)
    return res.data;
}