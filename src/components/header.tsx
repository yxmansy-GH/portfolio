export default function Header() {
    return (
        <header className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl mx-4 my-4 sticky z-50 top-4">
            <div className="container mx-auto flex items-center justify-between p-4">
                <h1 className="font-bold text-xl">Mansy Portfolio</h1>
                <nav className="flex space-x-6">
                <a href="#about" className="relative pb-1 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">About Me</a>
                <a href="#skills" className="relative pb-1 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">Skills</a>
                <a href="#projects" className="relative pb-1 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">Projects</a>
                <a href="#contact" className="relative pb-1 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">Contact Me</a>
                </nav>
            </div>
        </header>
    );
}
