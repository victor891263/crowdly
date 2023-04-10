import React from 'react';

export default function FeedProfile() {
    const profile = {
        id: '23122321',
        _createdAt: new Date(2023, 2, 21).toString(),
        _updatedAt: new Date(2023, 2, 24).toString(),
        username: 'LJenkins3872',
        email: 'ljenkins2323@gmail.com',
        image: 'https://source.unsplash.com/150x150/?portrait?3',
        about: 'Full Stack maker & UI/UX designer; Loves hip hop music; Author of Building UI.',
        name: 'Leroy Jenkins',
        link: 'https://github.com/ljenkins233',
        follows: 78,
        followers: 21
    };

    return (
        <div className="h-fit flex flex-col p-6 sm:rounded-lg bg-white dark:bg-gray-800">
            <img src={profile.image} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"/>
            <div className="space-y-4 mt-3">
                <div className="space-y-1 text-center">
                    <h2 className="text-lg font-bold text-black dark:text-white">{profile.name}</h2>
                    <p className="px-5 text-xs sm:text-base text-gray-400 dark:text-gray-500">{profile.username}</p>
                </div>
                <p>{profile.about}</p>
                <a href="/" className="text-violet-600 block dark:text-violet-400">{profile.link}</a>
                <div className="flex gap-4 pt-1">
                    <p><span className="font-bold text-black dark:text-white">{profile.follows}</span> follows</p>
                    <p><span className="font-bold text-black dark:text-white">{profile.followers}</span> followers</p>
                </div>
            </div>
        </div>
    );
};


/*


<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"/>
            <div className="space-y-4 mt-3">
                <div className="space-y-1 text-center">
                    <h2 className="text-lg font-bold text-black dark:text-white">{profile.name}</h2>
                    <p className="px-5 text-xs sm:text-base text-gray-400 dark:text-gray-500">{profile.username}</p>
                </div>
                <p>{profile.about}</p>
                <a href="/" className="text-violet-600 block dark:text-violet-400">{profile.link}</a>
                <div className="flex gap-4 pt-1">
                    <p><span className="font-bold text-black dark:text-white">{profile.follows}</span> follows</p>
                    <p><span className="font-bold text-black dark:text-white">{profile.followers}</span> followers</p>
                </div>
            </div>


 */