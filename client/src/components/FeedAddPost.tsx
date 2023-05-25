import React, {useEffect, useState} from "react"
import Avatar from "./Avatar";
import {Link, useNavigate} from "react-router-dom";
import resizeInput from "../utilities/resizeInput";
import PopUp from "./PopUp";
import getCurrentUser from "../utilities/getCurrentUser";
import axios from "axios";
import handleError from "../utilities/handleError";
import getToken from "../utilities/getToken";
import {UserTiny} from "../types";
import SkeletonTinyProfile from "./SkeletonTinyProfile";

export default function FeedAddPost() {
    const [profile, setProfile] = useState<UserTiny | null>(null)
    const [body, setBody] = useState('')
    const [operationError, setOperationError] = useState('')

    const currentUser = getCurrentUser()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/users/${currentUser!.id}?small=true`)
            .then(response => {
                setProfile(response.data)
            })
            .catch(error => {
                handleError(error, (msg: string) => setOperationError(msg), true)
            })
    }, [currentUser])

    function submitPost(e: any) {
        e.target.innerText = 'Submitting...'
        e.target.disabled = true
        axios.post(`${process.env.REACT_APP_API_URL}/posts`, { body }, { headers: { Authorization: getToken() }})
            .then(response => {
                navigate(`/posts/${response.data.id}`)
            })
            .catch(error => {
                handleError(error, (msg: string) => setOperationError(msg), true)
                e.target.innerText = 'Submit'
                e.target.disabled = false
            })
    }

     return (
         <>
             {operationError && <PopUp msg={operationError} />}
             <div className="h-fit">
                 {profile ? (
                     <div className="flex items-center gap-2.5">
                         <Avatar img={profile.image} className={'w-9 h-9'} svgClassName={'w-7 h-7'} />
                         <Link to={`/users/${profile.id}`} className="cursor-pointer font-semibold text-black dark:text-white">{profile.username}</Link>
                     </div>
                 ):(
                     <SkeletonTinyProfile profile={{ id: 1, username: 'largerandomuser' }} />
                 )}
                 <div className="w-full mt-3.5">
                        <textarea onChange={e => {
                            resizeInput(e)
                            setBody(e.target.value)
                        }}
                                  value={body}
                                  style={{ resize: 'none', overflow: 'hidden' }}
                                  className="w-full py-2.5 px-3.5 pb-4 h-24"
                                  placeholder="What's on your mind?"
                        />
                     <button onClick={submitPost} className="btn-primary block ml-auto mt-2 py-2 px-3 text-sm">Submit</button>
                 </div>
             </div>
         </>
     )
}