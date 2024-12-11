
import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPost().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-12 mt-6 text-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
    <Container>
        <div className="flex flex-wrap justify-center">
            <div className="p-8 w-full max-w-2xl">
                <h1 className="text-3xl font-extrabold text-white bg-opacity-80 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
                    "The key to a happy life is positive thinking"
                </h1>
            </div>
        </div>
    </Container>
</div>

        

        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
