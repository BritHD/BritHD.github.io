import Skill from "../components/Skill"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Javascript", "TypeScript", "Python", "HTML/CSS", "C#", "C++", "SQL", "Swift", "JSON"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Flutter", "Flask", "Dash", "Tkinter", "Jupyter Notebook", "Tailwind", "Django", "Spring Boot", "React Native", "Wordpress"],
  },
  {
    title: "Tools",
    skills: ["Node", "Express", "Render", "AWS", "CircleCi", "Git", "SocketIO", "MySQL", "SQLite", "PostgreSQL", "Render", "Google Firebase", "REST", "Vercel", "API", "Requests", "Selenium"],
  },
  {
    title: "Programs",
    skills: ["iMovie", "Adobe Premiere Pro", "Adobe Photoshop", "Procreate", "Unity", "Twine", "Visual Studio Code", "Figma", "Inkscape", "Trello", "Jira", "TinkerCad", "Blender"],
  },
];

function SkillCategoryCard({ category }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4">
      <h3 className="text-2xl font-bold">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="skilllist" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical skills and tools I use to bring ideas to life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
