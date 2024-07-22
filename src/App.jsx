// import { Suspense } from 'react'
// import './App.scss'
import { Home } from './pages/HomePage/index'
// import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Home />

    </>
    // <Suspense fallback={<span>Loading...</span>}>
    //   <Routes>
    //     <Route path='' />
    //   </Routes>
    // </Suspense>
  )
}