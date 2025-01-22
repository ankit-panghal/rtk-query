import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { postsApi } from './redux/apiSlice.js'

createRoot(document.getElementById('root')).render(
    <ApiProvider api={postsApi}>

        <App />
    </ApiProvider>
)
