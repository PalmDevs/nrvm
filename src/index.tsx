import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPage, MainPage, UnknownPage } from './pages'
import WithBottomNavbar from './pages/with/WithBottomNavbar'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WithBottomNavbar />}>
            <Route index element={<MainPage />} />
            <Route path='*' element={<UnknownPage />} />
        </Route>

        <Route path='/*' element={<WithBottomNavbar showBackButton />}>       
          <Route path='about' element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.debug)
