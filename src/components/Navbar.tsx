import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-mi", label: "Sobre Mí" },
    { href: "/servicios", label: "Servicios" },
    { href: "/informes-tecnicos", label: "Informes Técnicos" },
    { href: "/colaboracion", label: "Colaboración" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          Innoplan Services
        </Link>
        <div className="md:hidden">
          <button id="menu-toggle" className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul id="menu" className="hidden md:flex md:flex-row md:space-x-4 mt-4 md:mt-0 w-full md:w-auto">
          {navLinks.map((link) => (
            <li key={link.href} className="py-2 md:py-0">
              <Link href={link.href} className="block px-2 py-1 hover:bg-gray-700 rounded transition duration-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <script dangerouslySetInnerHTML={{
        __html: `
          const menuToggle = document.getElementById('menu-toggle');
          const menu = document.getElementById('menu');
          if (menuToggle && menu) {
            menuToggle.addEventListener('click', () => {
              menu.classList.toggle('hidden');
            });
          }
        `
      }} />
    </nav>
  );
};

export default Navbar;

