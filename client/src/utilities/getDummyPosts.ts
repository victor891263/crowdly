export default function getDummyPosts() {
    return [
        {
            id: 1,
            userId: 23,
            createdAt: new Date(2023, 2, 29).toString(),
            updatedAt: new Date(2023, 2, 29).toString(),
            body: `APPALLING: Tallahassee Classical School principal Hope Carrasquilla was forced to resign after 3 parents complained that a sixth grade art lesson involving Michelangelo\'s David, the most famous statue in the world, was "pornographic."`,
            likes: 23,
            dislikes: 12,
            replies: 9,
            User: {
                id: 1,
                username: 'ReallyAmerican1',
                image: 'https://source.unsplash.com/152x152/?portrait?3'
            }
        },
        {
            id: 2,
            userId: 23,
            createdAt: new Date(2023, 2, 27).toString(),
            updatedAt: new Date(2023, 2, 29).toString(),
            body: `Do they also still believe in Santa Claus? Let them grow up. I would bet they are well aware of reproductive organs. I mean, the internet exists ya know lol.`,
            likes: 23,
            dislikes: 12,
            replies: 51,
            quotedId: 59,
            User: {
                id: 1,
                username: 'Williams4TN',
                image: 'https://source.unsplash.com/151x151/?portrait?3',
            }
        },
        {
            id: 3,
            userId: 23,
            createdAt: new Date(2023, 2, 28).toString(),
            updatedAt: new Date(2023, 2, 29).toString(),
            body: `I imagine they will be going after art books,  encyclopedias, copies of National geographic, etc.`,
            likes: 23,
            dislikes: 12,
            replies: 1,
            User: {
                id: 1,
                username: 'Robert76118512',
            }
        },
        {
            id: 4,
            userId: 23,
            createdAt: new Date(2023, 2, 21).toString(),
            updatedAt: new Date(2023, 2, 29).toString(),
            body: `Republicans may think they won today in Tennessee, but their fascism is only further radicalizing and awakening an earthquake of young people, both in the South and across the nation.`,
            likes: 23,
            dislikes: 12,
            replies: 91,
            User: {
                id: 1,
                username: 'AOC',
                image: 'https://source.unsplash.com/151x151/?portrait?6'
            }
        },
        {
            id: 5,
            userId: 23,
            createdAt: new Date(2023, 2, 22).toString(),
            updatedAt: new Date(2023, 2, 29).toString(),
            body: `I agree it shouldn’t have been done. Removal isn’t the answer awful precedent. But you & other hyper partisan establishment & extremist politicians brought us here. Are you sorry yet. It’s awful. But radicals pushing & indoctrinating/ forcing people further apart has consequences`,
            likes: 23,
            dislikes: 12,
            replies: 55,
            User: {
                id: 1,
                username: 'WTPAreTheNews',
            }
        }
    ]
}