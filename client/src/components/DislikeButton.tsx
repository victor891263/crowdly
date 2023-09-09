import DislikeIcon from "../icons/DislikeIcon"
import {gql, useMutation} from "@apollo/client"
import PopUp from "./PopUp"
import ArrowIcon from "../icons/ArrowIcon";

export default function DislikeButton({ postId, liked, disliked, onSuccess }: { postId: string, liked: boolean, disliked: boolean, onSuccess: (isNew: boolean, type: 'like' | 'dislike') => void }) {
    const DISLIKE_POST = gql`
            mutation DislikePost($id: ID!) {
                dislikePost(id: $id)
            }
        `
    const DELETE_DISLIKE = gql`
            mutation DeleteDislike($id: ID!) {
                deleteDislike(id: $id)
            }
        `
    const [dislikePost, dislikePostOperation] = useMutation(DISLIKE_POST)
    const [deleteDislike, deleteDislikeOperation] = useMutation(DELETE_DISLIKE)

    function handleDislike() {
        if (disliked) deleteDislike({variables: {id: postId}}).then(() => onSuccess(false, 'dislike'))
        else dislikePost({variables: {id: postId}}).then(() => onSuccess(true, 'dislike'))
    }

    return (
        <>
            {dislikePostOperation.error && <PopUp msg={dislikePostOperation.error.message} color={'red'} />}
            {deleteDislikeOperation.error && <PopUp msg={deleteDislikeOperation.error.message} color={'red'} />}
            <button
                onClick={handleDislike}
                disabled={dislikePostOperation.loading || deleteDislikeOperation.loading || liked}
                className='secondary flex items-center space-x-1.5 !px-2 !rounded-l-none'
            >
                {disliked ? (
                    <ArrowIcon className='w-5 h-5 rotate-90 text-violet-600' strokeWidth={2.5} />
                ):(
                    <ArrowIcon className='w-5 h-5 rotate-90' />
                )}
            </button>
        </>
    )
}