export default interface IUser {
    id: string,
    _createdAt: string,
    _updatedAt: string,
    username: string,
    email: string,
    follows: number,
    followers: number,
    image?: string,
    about?: string,
    name?: string,
    link?: string
}