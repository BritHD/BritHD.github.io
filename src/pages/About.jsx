import Skill from "../components/Skill"

function About() {
  const languages = ["Java", "Javascript", "TypeScript", "Python", "HTML/CSS", "C#", "SQL"]
  const frameworks = ["React", "Flutter", "Flask", "Dash", "Tkinter", "Jupyter Notebook", "Tailwind", "Django", "Spring Boot", "React Native"]
  const tools = ["Node", "Express", "Render", "AWS", "CircleCi", "Git", "SocketIO", "MySQL", "SQLite", "Render", "Google Firebase"]
  const programs = ["iMovie", "Adobe Premiere Pro", "Adobe Photoshop", "Procreate", "Unity", "Twine", "Visual Studio Code", "Figma", "Inkscape", "Trello", "Jira", "TinkerCad", "Blender"]


  return (
    <div className='lg:p-[150px]' id="about">
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
            <p className="font-bold text-2xl mt-[10px]">Game Designer Internship - University of Pittsburgh</p>
            <p className="mt-[10px]">May 2024 - Present</p>
            <ul className="list-disc list-inside ml-1 mt-[10px]">
              <li>Worked on making a game based on air traffic with the Magnavox Odyssey home console controller</li>
              <li>Collaborated with one other person to design the art and game mechanics</li>
              <li>Was the main designer for the art and game components</li>
            </ul>
            <div className="flex flex-wrap items-center mt-[10px]">
              <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Adobe Photoshop</div>
              <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Procreate</div>
            </div>
          </div>
          <div>
            <p className="font-bold text-2xl mt-[10px]">Java Backend Lead Internship - Shop Online New York</p>
            <p className="mt-[10px]">August 2024 - Present</p>
            <ul className="list-disc list-inside ml-1 mt-[10px]">
              <li>Developed the backend of a shopping website with Java Springboot</li>
              <li>Made a backend database with MySQL using APIs</li>
              <li>Lead a team of developers to develop the backend on a timely manner</li>
            </ul>
            <div className="flex flex-wrap items-center mt-[10px]">
              <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Java</div>
              <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Springboot</div>
              <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">MySQL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About