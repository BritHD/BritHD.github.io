import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Linkedin from '/linkedin.png'
import Github from '/github.png'

function App() {
  return (
    <div>
      <header className="flex flex-row bg-black h-[60px] fixed top-0 left-0 w-full">
        <p className="text flex h-full mx-3 items-center text-nowrap text-white text-2xl">Brit Dao</p>
        <div className="flex flex-row h-full justify-around items-center ml-auto mr-3 w-[500px]">
          <a href = '#home'><div className="bg-gray-300 rounded-xl p-1 m-1 text-center w-[72px] md:w-[100px]">Home</div></a>
          <a href = '#about'><div className="bg-gray-300 rounded-xl p-1 m-1 text-center w-[72px] md:w-[100px]">About</div></a>
          <a href = '#projects'><div className="bg-gray-300 rounded-xl p-1 m-1 text-center w-[72px] md:w-[100px]">Projects</div></a>
          <a href = '#contact'><div className="bg-gray-300 rounded-xl p-1 m-1 text-center w-[72px] md:w-[100px]">Contact</div></a>
        </div>
      </header>
      <Home/>
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
