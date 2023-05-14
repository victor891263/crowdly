export default function getCurrentUser() {

    return localStorage.getItem('jwt')
}