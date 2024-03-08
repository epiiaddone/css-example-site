import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ErrorPage from './pages/ErrorPage'
import LandingPage from './pages/LandingPage'
import ThreeDCards from './pages/ThreeDCards'
import BackgroundGradients from './pages/BackgroundGradients'
import DirectionAwareUnderline from './pages/DirectionAwareUnderline'
import FooterSmallContent from './pages/FooterSmallContent'
import ResponsiveList from './pages/ResponsiveList'
import RotatingGlowBorder from './pages/RotatingGlowBorder'
import UserResizeDiv from './pages/UserResizeDiv'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="threedcards" element={<ThreeDCards />} />
        <Route path="backgroundgradients" element={<BackgroundGradients />} />
        <Route path="directionawarenavunderline" element={<DirectionAwareUnderline />} />
        <Route path="footerforsmallcontent" element={<FooterSmallContent />} />
        <Route path="responsivelist" element={<ResponsiveList />} />
        <Route path="rotatingglowingborder" element={<RotatingGlowBorder />} />
        <Route path="userresizediv" element={<UserResizeDiv />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
