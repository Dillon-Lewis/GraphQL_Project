import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostsPage from './Components/PostsPage'
import UserPosts from './Components/UserPosts'
import NewPostForm from './Components/NewPostForm'


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={[ <NewPostForm/>, <PostsPage />]} />
        <Route path='/:id' element= {<UserPosts />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
