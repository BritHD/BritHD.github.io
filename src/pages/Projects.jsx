import Skill from "../components/Skill"

import Shaping from "/Shaping.mp4";
import Tycoon from "/tycoon.png";
import Monster from "/monster.png";
import MonsterHTML from "/monster.html?url";
import Network from "/network.png";
import NetworkPDF from "/networkPDF.pdf";
import DrawNetwork from "/drawNetwork.png";

const projects = [
  {
    title: "Shape Unity Game",
    description:
      "A short platforming game about shapes made in Unity. You can play a prototype version via the link below.",
    media: { type: "video", src: Shaping },
    skills: ["Unity", "C#", "Itch.io"],
    links: [{ label: "Shaping!", href: "https://vdstudio.itch.io/shape" }],
  },
  {
    title: "Multiplayer Card Game",
    description:
      "A multiplayer card game in React.js with a Node.js backend and Socket.io. Based on Persona 5 Royal.",
    media: { type: "image", src: Tycoon },
    skills: ["ReactJs", "NodeJs", "Express", "SocketIO", "Javascript", "Render", "API"],
    links: [
      { label: "Tycoon!", href: "https://tycoon2player.onrender.com/" },
      { label: "Frontend Source Code", href: "https://github.com/BritHD/Card-Client/" },
      { label: "Backend Source Code", href: "https://github.com/BritHD/Card-Server/" },
    ],
  },
  {
    title: "Short RPG with Twine",
    description:
      "A Twine project with choice-based gameplay and puzzle-like RPG mechanics.",
    media: { type: "image", src: Monster },
    skills: ["HTML", "Twine"],
    links: [{ label: "A World With Monsters", href: MonsterHTML }],
  },
  {
    title: "Networkx on HTML",
    description:
      "A React + Django website for creating network graphs. Documentation included as PDF.",
    media: { type: "image", src: Network },
    skills: ["HTML", "Javascript", "Django", "Python", "ReactJs", "AWS"],
    links: [
      { label: "Documentation PDF", href: NetworkPDF },
      { label: "Frontend Source Code", href: "https://github.com/BritHD/NetworkFront" },
      { label: "Backend Source Code", href: "https://github.com/BritHD/NetworkServer" },
    ],
  },
  {
    title: "Draw Networks on the Web",
    description:
      "Draw network graphs interactively on the web. Hosted via GitHub Pages.",
    media: { type: "image", src: DrawNetwork },
    skills: ["HTML", "Javascript", "ReactJs"],
    links: [
      { label: "Drawn Network Website", href: "https://brithd.github.io/DrawNetwork/" },
      { label: "Website Source Code", href: "https://github.com/BritHD/DrawNetwork" },
    ],
  },
];

function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-6">
      {/* Media */}
      {project.media.type === "video" ? (
        <video className="md:w-1/3 rounded" controls>
          <source src={project.media.src} type="video/mp4" />
        </video>
      ) : (
        <img
          className="md:w-1/3 rounded object-cover"
          src={project.media.src}
          alt={project.title}
        />
      )}

      {/* Details */}
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-gray-700">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>

        <div className="flex flex-col gap-1 mt-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in software engineering and game design
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects