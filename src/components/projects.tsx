export type Project = {
  title: string;
  techStack: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Freelancer Dashboard",
    techStack: "Next.js + TypeScript + Node.js + Express + PostgreSQL",
    description:
      "A full-stack web app for freelancers to manage clients, projects, invoices, and payments with secure authentication and a responsive UI.",
  },
  {
    title: "Market News Sentiment Analyzer",
    techStack: "Python (Pandas, NLP libraries like NLTK, SpaCy, Hugging Face Transformers)",
    description:
      "A project that analyzes financial news sentiment and correlates it with stock or cryptocurrency price movements using NLP and data analysis techniques.",
  },
  {
    title: "Recurring & Subscription Management API",
    techStack: "Java + Spring Boot + PostgreSQL",
    description:
      "A REST API to manage user subscriptions and recurring payments with features like billing cycle tracking, spending summaries, and payment reminders.",
  },
  {
    title: "Stock Market CLI Tool",
    techStack: "Go",
    description:
      "A CLI tool to set stock price alerts, check real-time prices, and calculate portfolio values, designed for speed and simplicity.",
  },
  {
    title: "Budget Tracker Desktop App",
    techStack: "C# + WPF",
    description:
      "A Windows desktop app for tracking personal income and expenses, featuring categorized transactions and visual spending summaries.",
  },
  {
    title: "Portfolio Website",
    techStack: "Next.js + TypeScript + Tailwind CSS",
    description:
      "A sleek, responsive personal website showcasing your fintech projects, skills, and contact information.",
  },
];

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm font-mono mb-4">{project.techStack}</p>
      <p className="leading-relaxed">{project.description}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-4 py-12 flex flex-col space-y-8"
    >
      <h2 className="text-5xl font-extrabold text-center mb-6 py-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

