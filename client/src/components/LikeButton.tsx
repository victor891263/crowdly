import {gql, useMutation} from "@apollo/client"
import PopUp from "./PopUp"
import ArrowIcon from "../icons/ArrowIcon"

export default function LikeButton({ postId, liked, disliked, onSuccess }: { postId: string, liked: boolean, disliked: boolean, onSuccess: (isNew: boolean, type: 'like' | 'dislike') => void }) {
    const LIKE_POST = gql`
            mutation LikePost($id: ID!) {
                likePost(id: $id)
            }
        `
    const DELETE_LIKE = gql`
            mutation DeleteLike($id: ID!) {
                deleteLike(id: $id)
            }
        `
    const [likePost, likePostOperation] = useMutation(LIKE_POST)
    const [deleteLike, deleteLikeOperation] = useMutation(DELETE_LIKE)

    function handleLike() {
        if (liked) deleteLike({variables: {id: postId}}).then(() => onSuccess(false, 'like'))
        else likePost({variables: {id: postId}}).then(() => onSuccess(true, 'like'))
    }

    return (
        <>
            {likePostOperation.error && <PopUp msg={likePostOperation.error.message} color={'red'} />}
            {deleteLikeOperation.error && <PopUp msg={deleteLikeOperation.error.message} color={'red'} />}
            <button
                onClick={handleLike}
                disabled={likePostOperation.loading || deleteLikeOperation.loading || disliked}
                className='secondary flex items-center space-x-1.5 !px-2 !rounded-r-none'
            >
                {liked ? (
                    <ArrowIcon className='w-5 h-5 -rotate-90 text-violet-600' strokeWidth={2.5} />
                ):(
                    <ArrowIcon className='w-5 h-5 -rotate-90' />
                )}
            </button>
        </>
    )
}