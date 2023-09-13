import {gql, useQuery} from "@apollo/client"
import {Link, useParams} from "react-router-dom"
import GenericLoading from "../components/GenericLoading"
import GenericError from "../components/GenericError"
import CheckWithCircle from "../icons/CheckWithCircle"
import getCurrentUser from "../utilities/getCurrentUser";

export default function VerifyEmail() {
    const currentUser = getCurrentUser()!
    const { id } = useParams()
    const VERIFY_NEW_EMAIL = gql`
        query VerifyNewEmail($id: ID!) {
            verifyNewEmail(id: $id)
        }
    `
    const { loading, error, data } = useQuery(VERIFY_NEW_EMAIL, {
        variables: { id }
    })

    return (
        <div className='flex items-center justify-center min-h-screen px-6'>
            {loading && <GenericLoading />}
            {error && <GenericError msg={error.message} />}
            {data && (
                <div className='text-center max-w-md'>
                    <CheckWithCircle className='h-10 w-10 text-slate-400/60 mx-auto' />
                    <div className='mt-5 subtitle'>Verification complete!</div>
                    <p className='mt-3'>Your new email has been verified successfully and your profile has been updated.</p>
                    <Link to={`/users/${currentUser.id}`} className='mt-7 w-fit mx-auto block primary' >View profile</Link>
                </div>
            )}
        </div>
    )
}