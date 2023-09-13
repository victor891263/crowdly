import MailIcon from "../icons/MailIcon"

export default function Unverified() {
    function logout() {
        localStorage.removeItem('jwt')
        localStorage.removeItem('rememberMe')
        window.location.href = '/'
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='text-center max-w-md py-20 px-6'>
                <MailIcon className='h-10 w-10 text-slate-400/60 mx-auto dark:text-gray-600' />
                <div className='mt-5 subtitle'>You need to verify</div>
                <p className='mt-3'>To finish the joining process, follow the instructions in the email sent to you to verify your account.</p>
                <button onClick={logout} className='mt-7 secondary' >Logout</button>
            </div>
        </div>
    )
}