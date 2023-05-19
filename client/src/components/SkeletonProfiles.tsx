import React from "react"
import SkeletonTinyProfile from "./SkeletonTinyProfile"

export default function SkeletonProfiles() {
    const profiles = [
        {
            id: 1,
            username: 'fhsduohagsdug'
        },
        {
            id: 2,
            username: 'fhsduohagsdug'
        },
        {
            id: 3,
            username: 'fhsduohagsdug'
        },
        {
            id: 4,
            username: 'fhsduohagsdug'
        },
        {
            id: 5,
            username: 'fhsduohagsdug'
        },
    ]

    return (
        <div className='divide-y !text-transparent'>
            {profiles.map((profile, index) => (
                <div className='py-4' key={index}>
                    <SkeletonTinyProfile profile={profile} />
                </div>
            ))}
        </div>
    )
}