import React from 'react'
import { useGetPostsQuery } from '../redux/apiSlice'

const Posts = () => {
    const {data,isLoading,isError} = useGetPostsQuery()
     console.log(data);
     
  return (
    <div className='container mx-auto p-5'>
        <h1 className='text-3xl font-bold text-center'>Posts</h1>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data && data.map(post => (
          <div key={post.id} className='bg-zinc-800 p-5 my-5 rounded-md'>
            <h2 className='text-xl font-bold'>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
  )
}

export default Posts