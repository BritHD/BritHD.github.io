import Home from './pages/Home.jsx'
import About from './pages/SkillList.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Linkedin from '/linkedin.png'
import Github from '/github.png'
import Header from './components/Header.jsx'
import WorkExperience from './pages/WorkExperience.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <WorkExperience/>
      <About/>
      <Projects/>
      <Contact/> 
      <footer className="flex items-center bg-black h-[60px] w-full">
        <p className='text-white md:ml-8'>Designed in Figma and built with Vite ReactJS and Tailwind CSS. Hosted with github-pages.</p>
        <div className='flex items-center h-full ml-auto mr-3'>
          <a href = 'https://www.linkedin.com/in/brit-d-a448512aa/'><img className = 'h-[40px] mx-3' src = {Linkedin}/></a>
          <a href = 'https://github.com/BritHD'><img className = 'h-[40px] mx-3' src = {Github}/></a>
        </div>
      </footer>
    </div>
  )
}

export default App
