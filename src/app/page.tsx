import Link from 'next/link';

// Componente para una tarjeta de servicio
const ServiceCard = ({ title, description, icon, examples }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
    <div className="text-4xl mb-4 text-blue-600">{icon}</div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{description}</p>
    {examples && (
      <div className="mt-auto pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500"><em>{examples}</em></p>
      </div>
    )}
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-sky-100 text-gray-800 font-sans">
      {/* Navbar Simplificada */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors">
            Javier Santana
          </Link>
          <div className="space-x-1 md:space-x-2">
            <Link href="#sobre-mi" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm md:text-md font-medium transition-colors">Sobre Mí</Link>
            <Link href="#servicios" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm md:text-md font-medium transition-colors">Servicios</Link>
            <Link href="#informe" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm md:text-md font-medium transition-colors">Informe IA</Link>
            <Link href="#contacto" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm md:text-md shadow hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Hablemos
            </Link>
          </div>
        </div>
      </nav>

      {/* Sección Hero */}
      <header className="bg-blue-700 text-white py-20 md:py-32 pattern-bg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforma tu Cocina o tu Aula con Inteligencia y Tradición
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light max-w-3xl mx-auto">
            Consultoría práctica en gastronomía, automatización y formación profesional. Desde la experiencia real, con soluciones personalizadas y sostenibles para un sector que evoluciona constantemente.
          </p>
          <Link href="#contacto" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            Explora una Colaboración
          </Link>
        </div>
      </header>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Sobre Mí: Javier Santana</h2>
            <p className="text-lg text-indigo-600 font-semibold">
              Chef Profesional, Docente Acreditado y Consultor Híbrido Especializado en Optimización Gastronómica
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Qué Hago</h3>
              <p className="text-gray-700 leading-relaxed">
                Acompaño a negocios, docentes y profesionales del sector gastronómico a mejorar su día a día con herramientas prácticas y estratégicas. Desde la optimización de escandallos y fichas técnicas que aseguren la rentabilidad (un restaurante promedio puede tener un margen neto del 3-5%, pero con gestión eficiente puede superar el 10-15%), hasta la implementación de automatizaciones inteligentes con Notion y Make. Mi labor incluye la gestión de contenidos, la aplicación de IA en la docencia y el diseño de procesos formativos o productivos que realmente funcionan, siempre buscando la eficiencia y la sostenibilidad.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Por Qué lo Hago</h3>
              <p className="text-gray-700 leading-relaxed">
                Porque he vivido la cocina desde dentro durante más de veinte años. Conozco sus desafíos, como la gestión de costes de personal (que pueden representar el 30-35% de los ingresos) o el control de la materia prima (25-40%). Sé que muchos proyectos valiosos necesitan avanzar sin complicaciones innecesarias y con soluciones reales. Mi compromiso es ofrecer estrategias honestas y adaptadas al terreno, como la metodología VCOR® (Validación de Costos Operativos en Restauración) que he desarrollado para ayudar a pasar de una gestión reactiva (Nivel G0) a una estratégica (Nivel G3+), permitiendo un crecimiento sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios Principales */}
      <section id="servicios" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Servicios Principales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones de mentoría y formación diseñadas para impulsar tu proyecto, combinando experiencia práctica con innovación tecnológica. Nos enfocamos en resultados tangibles y sostenibles.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon="🍳" 
              title="Consultoría Gastronómica Estratégica"
              description="Asesoramiento experto en producción culinaria, control de escandallos y costes (el food cost ideal se sitúa entre 25-35%), optimización de compras, organización eficiente de la cocina, diseño de cartas atractivas y rentables, y programas de formación personalizados para equipos de alto rendimiento. Implementamos sistemas para mejorar márgenes y eficiencia operativa."
              examples="Ej: Reducción del coste de materia prima en un 5% manteniendo calidad, optimización de turnos para mejorar la productividad del personal."
            />
            <ServiceCard 
              icon="🎓" 
              title="Formación y Contenidos Didácticos Innovadores"
              description="Diseño de sesiones formativas impactantes y adaptadas a las necesidades actuales (considerando la alta rotación del sector, donde hasta el 75% de empleados busca cambiar). Creación de recursos didácticos para certificados profesionales (SEPE), elaboración de fichas técnicas visuales y efectivas, planificación docente asistida por IA y desarrollo de plantillas interactivas para un aprendizaje dinámico y práctico."
              examples="Ej: Desarrollo de un programa de onboarding para nuevo personal que reduce el tiempo de adaptación en un 30%."
            />
            <ServiceCard 
              icon="🤖" 
              title="Automatización Inteligente y Herramientas Digitales"
              description="Implementación práctica de Inteligencia Artificial generativa (ChatGPT y similares) y desarrollo de automatizaciones con Make y Notion para optimizar flujos de trabajo. Te ayudo a pasar de una gestión manual (G0-G1) a procesos más eficientes y escalables (G2-G3), liberando tiempo para la estrategia. Formación personalizada para que domines estas herramientas con autonomía."
              examples="Ej: Automatización de la gestión de reservas o pedidos online, creación de dashboards en Notion para control de KPIs."
            />
          </div>
        </div>
      </section>

      {/* Sección Informe */}
      <section id="informe" className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-5xl mb-6 inline-block">📘</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">La Revolución Inteligente en la Mesa</h2>
            <p className="text-lg md:text-xl mb-10 font-light">
              He preparado un informe técnico detallado que explora cómo aplicar la inteligencia artificial en la consultoría gastronómica de forma práctica y efectiva. Descubre casos reales, herramientas accesibles y estrategias que puedes implementar desde hoy mismo para innovar en tu negocio o aula. Un sector que en Canarias movió ~24.000 millones € en ingresos turísticos en 2024 tiene un enorme potencial de optimización.
            </p>
            <Link href="/informe_final_IA_gastronomia.md" download className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
              Descargar el Informe Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">¿Hablamos?</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              ¿Tienes un proyecto entre manos, una idea que quieres llevar más lejos o simplemente curiosidad por explorar cómo la experiencia y la tecnología pueden sumar valor real a tu trabajo? Tanto si eres docente, cocinero/a, emprendedor/a o parte de un centro de formación, estoy abierto a colaboraciones.
            </p>
            <a href="mailto:javvv.6@gmail.com" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 inline-block">
              📩 Envíame un Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Javier Santana - Innoplan Services. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Transformando la gastronomía y la formación con inteligencia y tradición.</p>
        </div>
      </footer>

    </div>
  );
}

