import { AnimatePresence } from 'framer-motion'
import { BsGithub, BsPeopleFill } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/ui/Navigation'
import Pages from './pages'

function App() {
  return (
    <BrowserRouter>
      <RoutesWrapper />
      <NavBar />
    </BrowserRouter>
  )
}

function NavBar() {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Navigation.Bar location='right'>
        <Navigation.Bar.Button icon={BsGithub} to='https://github.com/PalmDevs/nrvm' external />
        <Navigation.Bar.Button icon={BsPeopleFill} to='/about' />
      </Navigation.Bar>
      <AnimatePresence mode='wait'>
        {location.pathname !== '/' && (
          <Navigation.Bar location='left' key='back'>
            <Navigation.Bar.Button icon={BiArrowBack} action={() => history.back()} />
          </Navigation.Bar>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}

function RoutesWrapper() {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Pages.Main />} />
        <Route path='/about' element={<Pages.About />} />
        <Route path='/*' element={<Pages.Unknown />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
