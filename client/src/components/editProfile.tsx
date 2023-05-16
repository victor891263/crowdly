import React, {useState} from "react"
import resizeInput from "../utilities/resizeInput"
import {UserDetailed} from "../types"

type Props = {
    user: UserDetailed
    handleSubmit: (e: any, userData: UserDetailed) => void
    close: () => void
}

export default function EditProfile({ user, handleSubmit, close }: Props) {
    const [userData, setUserData] = useState(user)

    return (
        <>
            <div className='fixed top-0 left-0 w-screen min-h-screen z-10 bg-gray-900/25 backdrop-blur-sm'></div>
            <div className="fixed top-0 left-0 w-screen h-screen flex z-20 overflow-y-auto sm:p-10">
                <div className='sm:m-auto sm:rounded-2xl mt-auto rounded-t-2xl max-w-lg w-full bg-white shadow-md p-7'>
                    <h2 className='mb-6'>Edit profile</h2>
                    <span className='block font-medium mb-2'>Username</span>
                    <input onChange={e => {
                        setUserData(prev => ({ ...prev, username: e.target.value }))
                    }}
                        value={userData.username}
                        type='text'
                        placeholder='Username'
                        className='py-2 px-3 w-full'
                    />
                    <span className='block font-medium mb-2 mt-5'>About you</span>
                    <textarea
                        onChange={e => {
                            resizeInput(e)
                            setUserData(prev => ({ ...prev, about: e.target.value }))
                        }}
                        value={userData.about}
                        style={{ resize: 'none', overflow: 'hidden' }}
                        className="w-full py-2.5 px-3.5 pb-3.5 h-24"
                        placeholder="Introduce yourself"
                    />
                    <div className='w-fit ml-auto mt-3 text-sm flex gap-2'>
                        <button onClick={close} className="block border rounded-lg py-2 px-3">Cancel</button>
                        <button onClick={(e) => handleSubmit(e, userData)} className="btn-primary block py-2 px-3">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}