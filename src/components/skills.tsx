type SkillTagProps = {
  skill: string;
};

type SkillCardProps = {
  category: string;
  skills: string[];
};

const skillCategories = {
  Languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "Go",
    "C#",
  ],
  "Frameworks & Libraries": [
    "Node.js",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  Databases: ["SQL", "MongoDB"],
  "DevOps & Tools": [
    "Git",
    "AWS",
    "Linux",
  ],
  "APIs & Protocols": ["REST APIs"],
  Concepts: [
    "Data Structures",
    "Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Blockchain",
    "Cybersecurity",
  ],
};

function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="inline-block bg-blue-100 text-blue-900 text-xs font-semibold mr-2 mb-2 px-2 py-0.5 rounded-full shadow-sm select-none cursor-default transition-colors duration-200 hover:bg-blue-300">
      {skill}
    </span>
  );
}

function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-4">{category}</h3>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-5xl font-extrabold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <SkillCard key={category} category={category} skills={skills} />
        ))}
      </div>
    </section>
  );
}
