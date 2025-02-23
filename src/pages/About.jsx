import Skill from "../components/Skill"

function About() {
  const languages = ["Java", "Javascript", "TypeScript", "Python", "HTML/CSS", "C#", "SQL"]
  const frameworks = ["React", "Flutter", "Flask", "Dash", "Tkinter", "Jupyter Notebook", "Tailwind", "Django", "Spring Boot", "React Native"]
  const tools = ["Node", "Express", "Render", "AWS", "CircleCi", "Git", "SocketIO", "MySQL", "SQLite", "PostgreSQL", "Render", "Google Firebase"]
  const programs = ["iMovie", "Adobe Premiere Pro", "Adobe Photoshop", "Procreate", "Unity", "Twine", "Visual Studio Code", "Figma", "Inkscape", "Trello", "Jira", "TinkerCad", "Blender"]


  return (
    <div className='lg:px-[150px]' id="about">
      <p className="font-bold py-[70px] text-center text-6xl lg:text-8xl">About Me</p>
      <div className="flex">
        <div className="w-1/2 ml-[50px]">
          <div>
            <p className="font-bold text-4xl mb-[10px]">Skills</p>
            <p className="font-bold text-2xl">Programing Languages</p>
            <div className="flex flex-wrap mt-[10px]">
              {languages.map((skill) => <Skill key={skill} skill={skill} />)}
            </div>
            <p className="font-bold mt-[15px] text-2xl">FrameWorks</p>
            <div className="flex flex-wrap mt-[10px]">
              {frameworks.map((skill) => <Skill key={skill} skill={skill} />)}
            </div>
            <p className="font-bold mt-[15px] text-2xl">Tools</p>
            <div className="flex flex-wrap mt-[10px]">
              {tools.map((skill) => <Skill key={skill} skill={skill} />)}
            </div>
            <p className="font-bold mt-[15px] text-2xl">Programs</p>
            <div className="flex flex-wrap mt-[10px] ">
              {programs.map((skill) => <Skill key={skill} skill={skill} />)}
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-bold text-4xl">Work Experience</p>
          <div>
            <p className="font-bold text-2xl mt-[10px]">UI/UX & Full Stack Developer Internship - Campus Collect</p>
            <p className="mt-[10px]">September 2024 - Present</p>
            <ul className="list-disc list-inside ml-1 mt-[10px]">
              <li>Worked on developing a student marketplace mobile application</li>
              <li>Designed a UI for the of the application with Figma</li>
              <li>Developed the user experience and interaction of the product</li>
              <li>
                Managed and developed the fullstack tech of the mobile application with React Native
                and Google Firebase
              </li>
              <li>Launched the application onto the App Store</li>
              <li>Collaborated with team members to design a consistent theme and experience</li>
            </ul>
            <div className="flex flex-wrap items-center mt-[10px]">
              <Skill skill="Google Firebase" />
              <Skill skill="React Native" />
              <Skill skill="Figma" />
            </div>
          </div>
          <div>
            <p className="font-bold text-2xl mt-[10px]">Director of Development Internship - Shop Online New York</p>
            <p className="mt-[10px]">August 2024 - Present</p>
            <ul className="list-disc list-inside ml-1 mt-[10px]">
              <li>Developed the backend of a shopping website with Java SpringBoot</li>
              <li>Made a backend database with MySQL using APIs</li>
              <li>Created frontend applications with Flutter and React.js</li>
              <li>
                Used AWS services to launch the web-based applications online, and the App Store and
                Google play store for the mobile application.
              </li>
              <li>Lead a team of developers with agile and scrum methodology</li>
              <li>Directed and oversaw multiple departments to develop our tech stack</li>
              <li>Addressed any issues and tickets ongoing with various levels of complexity</li>
              <li>Developed the backend of a shopping website with Java Springboot</li>
              <li>Made a backend database with MySQL using APIs</li>
              <li>Lead a team of developers to develop the backend on a timely manner</li>
            </ul>
            <div className="flex flex-wrap items-center mt-[10px]">
              <Skill skill="Java" />
              <Skill skill="Spring Boot" />
              <Skill skill="MySQL" />
              <Skill skill="PostgreSQL" />
            </div>
          </div>
          <div>
            <p className="font-bold text-2xl mt-[10px]">Game Development Internship - University of Pittsburgh</p>
            <p className="mt-[10px]">May 2024 - Present</p>
            <ul className="list-disc list-inside ml-1 mt-[10px]">
              <li>Designed and tested a game based on air traffic with the Magnavox Odyssey home console controller</li>
              <li>Collaborated with a team to design the art and game mechanics</li>
              <li>Worked as the main designer for the art and game components using Adobe Photoshop</li>
              <li>Used 3d printers to make accurate models for game pieces with Blender and TinkerCad</li>
            </ul>
            <div className="flex flex-wrap items-center mt-[10px]">
              <Skill skill="Adobe Photoshop" />
              <Skill skill="Procreate" />
              <Skill skill="Blender" />
              <Skill skill="TinkerCad" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About