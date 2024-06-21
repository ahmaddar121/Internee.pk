import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Internship from './components/Internship'
import Browse from './components/Browse'
import RecentBlog from './components/RecentBlog'
import TaskPortal from './components/TaskPortal'
import LMS from './components/LMS'
import Instructor from './components/Instructor'
import JobsPortal from './components/JobsPortal'
import Motive from './components/Motive'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
function App() {
  const router = createBrowserRouter([
    { path: '/', element:<> <Navbar /> <Home/> <About/> <Internship/> <Browse/> <RecentBlog/> <TaskPortal/> <LMS/> <Instructor/> <JobsPortal/> <Motive/> <Testimonials/> <Footer/> </>}
  ]
  )
  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App
