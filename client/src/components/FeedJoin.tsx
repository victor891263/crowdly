import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom";

export default function FeedJoin() {
    const [username, setUsername] = useState('')

    return (
        <div>
            <h2>New to Crowdly?</h2>
            <p className='mt-5 mb-6'>Join us now to get your own personalized timeline!</p>
            <input onChange={e => setUsername(e.target.value)} value={username} type='text' placeholder='Choose a username' className='mb-2 w-full py-2 px-3 text-sm' />
            <Link to={`/join?username=${username}`} className="btn-primary block py-2 text-center text-sm">Create account</Link>
        </div>
    )
}