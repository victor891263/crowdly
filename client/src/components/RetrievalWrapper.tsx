import React from "react"
import DownloadFolderIcon from "../icons/DownloadFolderIcon"
import CrossIcon from "../icons/CrossIcon"

type Props = {
    children: JSX.Element | null
    data: any | null
    error: string | null
    skeleton?: JSX.Element
}

export default function RetrievalWrapper({ children, data, error, skeleton }: Props) {
    if (data) return children
    if (error) return (
        <div className='flex flex-col items-center justify-center py-10 grow'>
            <CrossIcon circle={true} className={'h-8 w-8 text-gray-400'} />
            <h2 className='mt-4 mb-1'>Failed to retrieve data</h2>
            <span>{error}</span>
        </div>
    )
    return (
        skeleton ? (
            skeleton
        ):(
            <div className='flex flex-col items-center justify-center py-10 grow'>
                <DownloadFolderIcon className={'h-8 w-8 text-gray-400'} />
                <h2 className='mt-4 mb-1'>Retrieving data...</h2>
                <span>This action might take a while.</span>
            </div>
        )
    )
}