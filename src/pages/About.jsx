function About() {

  return (
    <div className = 'p-[150px]' id="about">
      <p className="font-bold text-8xl py-[70px] text-center">About Me</p>
      <div className="flex">
        <div className="w-1/2 ml-[50px]">
          <div>
            <p className="font-bold text-4xl mb-[10px]">Skills</p>
            <p className="font-bold text-2xl">Programing Languages</p>
            <div className="flex flex-wrap mt-[10px]">
              <div className="bg-gray-300 w-max rounded-xl m-1 ml-0 px-2 py-1">Java</div>
              <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Javascript</div>
              <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">TypeScript</div>
              <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Python</div>
              <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">HTML/CSS</div>
              <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">C#</div>
            </div>
            <p className="font-bold mt-[15px] text-2xl">Tools and FrameWorks</p>
              <div className="flex flex-wrap mt-[10px]">
                <div className="bg-gray-300 w-max rounded-xl m-1 ml-0 px-2 py-1">ReactJs</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">NodeJs</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Express</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Git</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Flask</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Dash</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Render</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Tkinter</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Jupyter Notebook</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Tailwind Css</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">SocketIO</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Django</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">SQLite</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">AWS</div>
              </div>
            <p className="font-bold mt-[15px] text-2xl">Programs</p>
              <div className="flex flex-wrap mt-[10px] ">
                <div className="bg-gray-300 w-max rounded-xl m-1 ml-0 px-2 py-1">IMovie</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Adobe Premiere Pro</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Adobe Photoshop</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Procreate</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Unity</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Twine</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Itch.io</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Visual Studio Code</div>
                <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Figma</div>
              </div>
          </div>
        </div>
        <div className="">
          <p className="font-bold text-4xl">Work Experience</p>
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
      </div>
    </div>
  )
}

export default About