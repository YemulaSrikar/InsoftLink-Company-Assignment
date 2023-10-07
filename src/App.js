import {Route, Routes} from 'react-router-dom'
import MainPage from './components/MainPage'
import ExamSolutions from './components/ExamSolutions'
import Header from './components/Header'
import Home from './components/Home'
import OnlineStudy from './components/OnlineStudy'
import Blogs from './components/Blogs'
import TutorSolutions from './components/TutorSolutions'
// import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <MainPage />
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/exam-solutions" element={<ExamSolutions />} />
      <Route exact path="/online-study" element={<OnlineStudy />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/tutor-solution" element={<TutorSolutions />} />
    </Routes>
  </>
)
export default App
