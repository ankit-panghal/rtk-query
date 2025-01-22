import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath : 'postsApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3001'
    }),
    tagTypes : ['Posts'],
    endpoints : (builder) => ({
        getPosts : builder.query({
            query : () => '/posts',
            transformResponse : (posts) => posts.reverse(),
            providesTags : ['Posts']
        }),
        addPosts : builder.mutation({
            query : (newPost) => ({
                url : '/posts/add',
                method : 'POST',
                body : newPost
            }),
            invalidatesTags : ['Posts']
        })
    })
})

export const {useGetPostsQuery,useAddPostsMutation} = postsApi;