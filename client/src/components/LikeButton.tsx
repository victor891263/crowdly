import {gql, useMutation} from "@apollo/client"
import PopUp from "./PopUp"
import ArrowIcon from "../icons/ArrowIcon"
import ChevronIcon from "../icons/ChevronIcon";

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
            <PopUp msg={likePostOperation.error ? likePostOperation.error.message : ''} color={'red'} />
            <PopUp msg={deleteLikeOperation.error ? deleteLikeOperation.error.message : ''} color={'red'} />
            <button
                onClick={handleLike}
                disabled={likePostOperation.loading || deleteLikeOperation.loading || disliked}
                className='secondary flex items-center space-x-1.5 !px-2 !rounded-r-none'
            >
                {liked ? (
                    <ChevronIcon className='w-5 h-5 rotate-180 text-violet-600' strokeWidth={2.5} />
                ):(
                    <ChevronIcon className='w-5 h-5 rotate-180' />
                )}
            </button>
        </>
    )
}