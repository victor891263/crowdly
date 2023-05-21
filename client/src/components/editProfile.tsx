import React, {useState} from "react"
import resizeInput from "../utilities/resizeInput"
import {UserDetailed} from "../types"
import BoxFullScreen from "./BoxFullScreen";
import axios from "axios";
import getToken from "../utilities/getToken";
import {useNavigate} from "react-router-dom";
import handleError from "../utilities/handleError";
import PopUp from "./PopUp";

type Props = {
    user: UserDetailed
    handleSubmit: (e: any, userData: UserDetailed) => void
    close: () => void
}

export default function EditProfile({ user, handleSubmit, close }: Props) {
    const [userData, setUserData] = useState(user)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function deleteProfile() {
        axios.delete(`${process.env.REACT_APP_API_URL}/users`, {
            headers: {
                Authorization: getToken()
            }
        }).then(() => {
            navigate('/')
        }).catch(error => {
            handleError(error, (msg: string) => setError(msg), true)
        })
    }

    return (
        <>
            {error && <PopUp msg={error} />}
            <BoxFullScreen close={close}>
                <>
                    <h2 className='text-xl mb-6'>Edit profile</h2>
                    <span className='block font-medium mb-2'>Username</span>
                    <input onChange={e => {
                        setUserData(prev => ({ ...prev, username: e.target.value }))
                    }}
                           value={userData.username}
                           type='text'
                           placeholder='Username'
                           className='py-2 px-3 w-full dark:bg-zinc-700/50'
                    />
                    <span className='block font-medium mb-2 mt-5'>About you</span>
                    <textarea
                        onChange={e => {
                            resizeInput(e)
                            setUserData(prev => ({ ...prev, about: e.target.value }))
                        }}
                        value={userData.about}
                        style={{ resize: 'none', overflow: 'hidden' }}
                        className="w-full py-2.5 px-3.5 pb-3.5 h-24 dark:bg-zinc-700/50"
                        placeholder="Introduce yourself"
                    />
                    <div className='mt-6 text-sm flex justify-between'>
                        <button onClick={deleteProfile} className='border rounded-lg px-3 py-2 text-sm text-red-600 dark:text-red-400'>Delete profile</button>
                        <div className='flex gap-2'>
                            <button onClick={close} className="block border rounded-lg py-2 px-3">Cancel</button>
                            <button onClick={(e) => handleSubmit(e, userData)} className="btn-primary block py-2 px-3">Submit</button>
                        </div>
                    </div>
                </>
            </BoxFullScreen>
        </>
    )
}