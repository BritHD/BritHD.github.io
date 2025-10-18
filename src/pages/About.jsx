import Skill from "../components/Skill"

function About() {
  const languages = ["Java", "Javascript", "TypeScript", "Python", "HTML/CSS", "C#", "C++", "SQL", "Swift", "JSON"]
  const frameworks = ["React", "Flutter", "Flask", "Dash", "Tkinter", "Jupyter Notebook", "Tailwind", "Django", "Spring Boot", "React Native", "Wordpress"]
  const tools = ["Node", "Express", "Render", "AWS", "CircleCi", "Git", "SocketIO", "MySQL", "SQLite", "PostgreSQL", "Render", "Google Firebase", "REST", "Vercel", "API", "Requests", "Selenium"]
  const programs = ["iMovie", "Adobe Premiere Pro", "Adobe Photoshop", "Procreate", "Unity", "Twine", "Visual Studio Code", "Figma", "Inkscape", "Trello", "Jira", "TinkerCad", "Blender"]


  return (
    <div className='lg:px-[150px]' id="about">
      <p className="font-bold py-[70px] text-center text-6xl lg:text-8xl">About Me</p>
      <div className="flex">
        <div className="w-1/2 mx-[50px]">
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
            <div className="flex items-center gap-2 mt-[10px]">
              <p className="font-bold text-2xl">
                UI/UX & Full Stack Developer Internship - Campus Collect&nbsp;
                <a
                  href="https://apps.apple.com/us/app/campus-collect/id6739402982"
                  className="text-blue-500 hover:underline text-2xl"
                >
                  (Link)
                </a>
              </p>
            </div>
            <p className="mt-[10px]">September 2024 - Current</p>
            <ul className="list-disc list-inside ml-1 mt-[10px]">
              <li>Led development of a student marketplace mobile app, launched to the App Store in 6 months</li>
              <li>Designed UI/UX with Figma, improving user interaction and retention</li>
              <li>Developed full-stack architecture with React Native, Firebase, and Expo, achieving
30% faster performance than previous stack</li>
              <li> Directed a team of developers, set project roadmaps, and ensured timely delivery of features</li>
            </ul>
            <div className="flex flex-wrap items-center mt-[10px]">
              <Skill skill="Google Firebase" />
              <Skill skill="React Native" />
              <Skill skill="Figma" />
            </div>
          </div>
          <div>
            <p className="font-bold text-2xl mt-[10px]">Digital Communications Manager - Community Liver Alliance</p>
            <p className="mt-[10px]">March 2025 - July 2025</p>
            <ul className="list-disc list-inside ml-1 mt-[10px]">
              <li>Maintained and optimized WordPress site, improving website visibility by 10%</li>
              <li>Designed themes, event pages, and graphics using Figma</li>
              <li>Resolved technical issues and improved digital communication workflows</li>
            </ul>
            <div className="flex flex-wrap items-center mt-[10px]">
              <Skill skill="Wordpress" />
              <Skill skill="Figma" />
              <Skill skill="HTML" />
            </div>
          </div>
          <div>
            <p className="font-bold text-2xl mt-[10px]">Director of Development Internship - Shop Online New York</p>
            <p className="mt-[10px]">August 2024 - March 2025</p>
            <ul className="list-disc list-inside ml-1 mt-[10px]">
              <li>Built backend with Spring Boot + MySQL, improving system performance by 20%</li>
              <li>Developed web and mobile apps with React.js and Flutter, deployed via AWS</li>
              <li>Managed cross-functional teams using Agile/Scrum, ensuring smooth delivery</li>
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
            <p className="mt-[10px]">May 2024 - April 2025</p>
            <ul className="list-disc list-inside ml-1 mt-[10px]">
              <li>Designed and developed an air traffic control game for the Magnavox Odyssey in
under 12 months</li>
              <li>Led art and design efforts with Photoshop, Blender, and TinkerCad</li>
              <li>Showcased the game at a university-wide event with 50+ attendees</li>
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