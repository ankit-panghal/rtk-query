import Posts from './components/Posts';
import SearchBar from './components/SearchBar';

const App = () => {
  
  return (
    <div className='min-h-screen bg-zinc-900 text-white'>
      <SearchBar/>
      <Posts/>
    </div>
  )
}

export default App