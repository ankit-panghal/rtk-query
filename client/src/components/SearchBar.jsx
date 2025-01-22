import React, { useRef } from 'react'
import { useAddPostsMutation } from '../redux/apiSlice'
import { nanoid } from '@reduxjs/toolkit';

const SearchBar = () => {
    const [addPost] = useAddPostsMutation();

   const titleInputRef = useRef()
   const descInputRef = useRef()

   function handleSubmit(e) {
    e.preventDefault()
    const title = titleInputRef.current.value
    const body = descInputRef.current.value
    console.log(title,body);
    
    addPost({id : nanoid,title,body})
   }

  return (
    <form onSubmit={handleSubmit} className='p-10 flex flex-col gap-4'>
        <input ref={titleInputRef} type='text' placeholder='Title' className=' p-2 rounded-md bg-zinc-700 flex-1' />
        <textarea ref={descInputRef} type='text' placeholder='Description' className=' p-2 rounded-md bg-zinc-700 flex-1' ></textarea>
        <button className='bg-sky-500 text-white px-4 py-2 rounded-md ml-2 w-max'>Add Post</button>
    </form>
  )
}

export default SearchBar