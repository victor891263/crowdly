import React, {useState} from "react"
import resizeInput from "../utilities/resizeInput"
import BoxFullScreen from "./BoxFullScreen";

type Props = {
    content?: string
    handleSubmit: (e: any, msg: string) => void
    close: () => void
}

export default function TextBox({ content, handleSubmit, close }: Props) {
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
                    <div className='w-fit ml-auto mt-6 text-sm flex gap-2'>
                        <button onClick={close} className="block border rounded-lg py-2 px-3">Cancel</button>
                        <button onClick={(e) => handleSubmit(e, body)} className="btn-primary block py-2 px-3">Submit</button>
                    </div>
                </div>
            </>
        </BoxFullScreen>
    )
}