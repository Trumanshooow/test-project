export async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}