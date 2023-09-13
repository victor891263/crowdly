import {useParams} from "react-router-dom"
import {gql, useQuery} from "@apollo/client"
import GenericLoading from "../components/GenericLoading"
import GenericError from "../components/GenericError"
import CheckWithCircle from "../icons/CheckWithCircle"

export default function Verify() {
    const { id } = useParams()
    const VERIFY_USER = gql`
        query VerifyUser($id: ID!) {
            verifyUser(id: $id)
        }
    `
    const { loading, error, data } = useQuery<{ verifyUser: string }>(VERIFY_USER, {
        variables: { id }
    })

    if (data) localStorage.setItem('jwt', data.verifyUser)

    return (
        <div className='flex items-center justify-center min-h-screen px-6'>
            {loading && <GenericLoading />}
            {error && <GenericError msg={error.message} />}
            {data && (
                <div className='text-center max-w-md'>
                    <CheckWithCircle className='h-10 w-10 text-slate-400/60 mx-auto' />
                    <div className='mt-5 subtitle'>Verification complete!</div>
                    <p className='mt-3'>Your email has been verified successfully. You can now start using Quizwiz.</p>
                    <button onClick={() => window.location.href = '/'} className='mt-7 mx-auto primary' >Start browsing</button>
                </div>
            )}
        </div>
    )
}