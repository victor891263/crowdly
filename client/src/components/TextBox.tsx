import React, {useState} from "react"
import resizeInput from "../utilities/resizeInput"
import BoxFullScreen from "./BoxFullScreen";

type Props = {
    content?: string
    handleSubmit: (e: any, msg: string) => void
    close: () => void
    deletePost?: (e: any) => void
}

export default function TextBox({ content, handleSubmit, close, deletePost }: Props) {
    const [body, setBody] = useState(content ? content : '')

    return (
        <BoxFullScreen close={close}>
            <>
                <h2 className='text-xl'>{ content ? 'Edit post' : 'Quote post' }</h2>
                <div className="w-full mt-8">
                        <textarea
                            onChange={e => {
                                resizeInput(e)
                                setBody(e.target.value)
                            }}
                            value={body}
                            style={{ resize: 'none', overflow: 'hidden' }}
                            className="w-full py-2.5 px-3.5 pb-4 h-[146px] dark:bg-zinc-700/50"
                            placeholder="What do you think about the post?"
                        />
                    <div className='mt-6 text-sm flex justify-between'>
                        {content ? (
                            <button onClick={deletePost} className='border rounded-lg px-3 py-2 text-sm text-red-600 dark:text-red-400'>Delete post</button>
                        ):(
                            <div></div>
                        )}
                        <div className='flex gap-2'>
                            <button onClick={close} className="block border rounded-lg py-2 px-3">Cancel</button>
                            <button onClick={(e) => handleSubmit(e, body)} className="btn-primary block py-2 px-3">Submit</button>
                        </div>
                    </div>
                </div>
            </>
        </BoxFullScreen>
    )
}