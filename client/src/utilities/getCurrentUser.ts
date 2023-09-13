import jwtDecode from 'jwt-decode'

export default function getCurrentUser() {
    const token = localStorage.getItem('jwt')
    if (token) return jwtDecode(token) as { id: number, isVerified: boolean }
    return null
}