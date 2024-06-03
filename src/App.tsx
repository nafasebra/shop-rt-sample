import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import Loading from './components/shared/Loading'

function App() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen bg-white container py-8'>
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </main>
      <Footer />
    </>
  )
}

export default App
