import React, {ReactNode} from "react"
import DownloadFolderIcon from "../icons/DownloadFolderIcon";
import ExclaimIcon from "../icons/ExclaimIcon";

type Props = {
    children: JSX.Element | null
    data: any | null
    error: string | null
}

export default function RetrievalWrapper({ children, data, error }: Props) {
    if (data) return children
    if (error) return (
        <div className='flex flex-col items-center justify-center py-10 h-full'>
            <ExclaimIcon className={'h-10 w-10 text-gray-400'} triangle={true} />
            <h2 className='mt-3 mb-1.5'>Failed to retrieve data</h2>
            <span>{error}.</span>
        </div>
    )
    return (
        <div className='flex flex-col items-center justify-center py-10 h-full'>
            <DownloadFolderIcon className={'h-10 w-10 text-gray-400'} />
            <h2 className='mt-3 mb-1.5'>Retrieving data...</h2>
            <span>This action might take a while.</span>
        </div>
    )
}