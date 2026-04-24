import Skill from "../components/Skill"

const experiences = [
    {
    title: "Frontend Engineer",
    company: "Cliqk",
    period:"November 2025 - March 2026",
    achievments: ["Designed user interface and branding assets with Figma", "Convert designs into functional, interactable user interfaces using Html + TypeScript"],
    skills: ["Figma", "React", "Javascript", "HTML", "Typescript"],
    link: "https://mycliqk.com"
  },
  {
    title: "UI/UX & Full Stack Developer Internship",
    company: "Campus Collect",
    period:"September 2024 - November 2025",
    achievments: ["Led development of a student marketplace mobile app, launched to the App Store in 6 months", 
      "Designed UI/UX with Figma, improving user interaction and retention",
      "Developed full-stack architecture with React Native, Firebase, and Expo, achieving 30% faster performance than previous stack",
      "Directed a team of developers, set project roadmaps, and ensured timely delivery of features"],
    skills: ["Google Firebase", "React Native", "Figma"],
    link: "https://apps.apple.com/us/app/campus-collect/id6739402982"
  },
  {
    title: "Digital Communications Manager",
    company: "Community Liver Alliance",
    period: "March 2025 - July 2025",
    achievments: ["Maintained and optimized WordPress site, improving website visibility by 10%",
"Designed themes, event pages, and graphics using Figma",
"Resolved technical issues and improved digital communication workflows"],
  skills: ["Wordpress", "Figma", "HTML"]
  },
  {
    title: "Director of Development Internship",
    company: "Shop Online New York",
    period: "August 2024 - March 2025",
    achievments: ["Built backend with Spring Boot + MySQL, improving system performance by 20%",
"Developed web and mobile apps with React.js and Flutter, deployed via AWS",
"Managed cross-functional teams using Agile/Scrum, ensuring smooth delivery"],
      skills: ["Java", "Spring Boot", "MySQL", "PostgreSQL"]
  },
  {
    title: "Game Development Internship ",
    company: "University of Pittsburgh",
    period: "May 2024 - April 2025",
    achievments: ["Designed and developed an air traffic control game for the Magnavox Odyssey in under 12 months",
"Led art and design efforts with Photoshop, Blender, and TinkerCad",
"Showcased the game at a university-wide event with 50+ attendees"],
skills: ["Adobe Photoshop", "Procreate", "Blender", "TinkerCad"]
  }
]

function ExperienceCard({ experience }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between" id = "workexperience">
      <div>
        <h3 className="text-xl font-semibold">{experience.title}</h3>
        <p className="text-sm text-gray-500">{experience.company}</p>
        <p className="text-sm text-gray-400 mb-4">{experience.period}</p>

        <ul className="list-disc list-inside space-y-1 mb-4">
          {experience.achievments.map((item, idx) => (
            <li key={idx} className="text-gray-700 text-sm">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </div>

      {experience.link && (
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-600 hover:underline text-sm"
        >
          View Project
        </a>
      )}
    </div>
  );
}


function WorkExperience() {
  return (
    <section className="py-20 px-4 bg-muted/30" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey across software engineering and game design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default WorkExperience