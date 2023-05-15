import React, {useState} from "react"
import resizeInput from "../utilities/resizeInput"

type Props = {
    content?: string
    handleSubmit: (e: any, msg: string) => void
    close: () => void
}

export default function TextBox({ content, handleSubmit, close }: Props) {
    const [body, setBody] = useState(content ? content : '')

    return (
        <>
            <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-gray-900/25 backdrop-blur-sm'></div>
            <div className="fixed top-0 left-0 w-screen h-screen flex z-20">
                <div className='max-w-lg w-full m-auto bg-white shadow-md p-7 rounded-2xl'>
                    <h2>Quote post</h2>
                    <div className="w-full mt-7">
                    <textarea
                        onChange={e => {
                            resizeInput(e)
                            setBody(e.target.value)
                        }}
                        style={{ resize: 'none', overflow: 'hidden' }}
                        className="w-full py-2.5 px-3.5 h-24"
                        placeholder="What do you think about the post?"
                    />
                        <div className='w-fit ml-auto mt-3 text-sm flex gap-2'>
                            <button onClick={close} className="block border rounded-lg py-2 px-3">Cancel</button>
                            <button onClick={(e) => handleSubmit(e, body)} className="btn-primary block py-2 px-3">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}