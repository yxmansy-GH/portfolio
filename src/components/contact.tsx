type SocialLinkProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

function SocialButton({ name, href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 px-6 py-3 rounded-md shadow-md transition"
    >
      {icon}
      <span>{name}</span>
    </a>
  );
}

export default function Contact() {
  const socials: SocialLinkProps[] = [
    {
      name: "Email",
      href: "mailto:ya7ya.elmansy@outlook.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/yxmansy-GH",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.304-5.466-1.333-5.466-5.931 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404 11.5 11.5 0 013.003.404c2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.479 5.921.431.37.815 1.096.815 2.21v3.277c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yxmansy",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452H17.21v-5.569c0-1.327-.027-3.036-1.852-3.036-1.852 0-2.135 1.445-2.135 2.939v5.666H9.08V9h3.088v1.561h.045c.43-.81 1.48-1.664 3.046-1.664 3.26 0 3.864 2.147 3.864 4.94v6.615zM5.337 7.433a1.79 1.79 0 11.001-3.58 1.79 1.79 0 01-.001 3.58zM6.816 20.452H3.86V9h2.956v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.729V1.73C24 .774 23.206 0 22.225 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-5xl font-extrabold text-center mb-10">Contact Me</h2>
      <div className="flex justify-center space-x-6">
        {socials.map(({ name, href, icon }) => (
          <SocialButton key={name} name={name} href={href} icon={icon} />
        ))}
      </div>
    </section>
  );
}
