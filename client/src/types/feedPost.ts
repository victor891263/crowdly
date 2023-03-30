export default interface IFeedPost {
    id: string,
    _createdAt: string,
    body: string,
    username: string,
    score: number,
    replies: number,
    image? :string,
    quotedId?: string
}