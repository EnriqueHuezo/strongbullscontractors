import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ROUTE } from './utils/constants/routes'
import { LayoutMain } from './layout/LayoutMain'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Gallery } from './pages/Gallery'
import { ContactUs } from './pages/ContactUs'

function App() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<LayoutMain />}>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.ABOUTUS} element={<AboutUs />} />
        <Route path={ROUTE.GALLERY} element={<Gallery />} />
        <Route path={ROUTE.CONTACT_US} element={<ContactUs />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  )
}

export default App
