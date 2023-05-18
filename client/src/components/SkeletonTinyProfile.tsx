import React from "react"

export default function SkeletonTinyProfile() {
    const profiles = [
        {
            username: 'fhsduohagsdug'
        },
        {
            username: 'fhsduohagsdug'
        },
        {
            username: 'fhsduohagsdug'
        },
        {
            username: 'fhsduohagsdug'
        },
        {
            username: 'fhsduohagsdug'
        },
    ]

    return (
        <div className='divide-y !text-transparent'>
            {profiles.map((profile, index) => (
                <div className="py-4 flex items-center gap-3" key={index}>
                    <div className='w-10 h-10 rounded-full bg-gray-100' />
                    <span className="bg-gray-100">{profile.username}</span>
                </div>
            ))}
        </div>
    )
}