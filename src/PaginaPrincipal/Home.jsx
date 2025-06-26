import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Datos de los proyectos
  const projects = [
    {
      id: 1,
      name: "Tactika",
      image: "/img/Tactika.png", // Cambia por la ruta de tu imagen
      technologies: ["React", "Laravel", "MySQL","Docker"],
      url: "https://sergiogr25.iesmontenaranco.com/", // Cambia por la URL de tu proyecto
      description: "Aplicación de gestión futbol para entrenadores"
    },
    {
      id: 2,
      name: "Dashboard Analytics",
      image: "/img/proyecto2.jpg", // Cambia por la ruta de tu imagen
      technologies: ["React", "Chart.js", "Firebase"],
      url: "https://tu-proyecto2.com", // Cambia por la URL de tu proyecto
      description: "Dashboard interactivo para visualización de datos y análisis en tiempo real"
    },
    
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <>
      <Navbar />
      
      {/* Video de fondo */}
      <video 
        className="background-video"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/video/fondoPortfolio.mp4" type="video/mp4" />
      
      </video>

      {/* Overlay para dar contraste al texto */}
      <div className="video-overlay"></div>
      
      <section id="home" className="home-section">
        <div 
          className="animated-bg"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
        
        <div className="home-content">
          <div className={`hero-text ${isLoaded ? 'loaded' : ''}`}>
            {/* Contenedor de 2 columnas */}
            <div className="hero-columns">
              {/* Columna izquierda - Imagen */}
              <div className="hero-image-column">
                <div className="profile-image-container">
                  <img 
                    src="/public/img/yo.png" 
                    alt="Sergio García Rodríguez" 
                    className="profile-image"
                  />
                </div>
              </div>

              {/* Columna derecha - Texto */}
              <div className="hero-text-column">
                <h1 className="hero-title">
                  Hola<span className="accent">.</span>
                </h1>
                
                <div className="hero-subtitle">
                  <h2 className="subtitle">
                    Soy <span className="name">Sergio García Rodríguez</span>
                  </h2>
                  
                  <p className="description">
                    Desarrollador creativo especializado en crear experiencias digitales 
                    únicas y funcionales que conectan tecnología con diseño.
                  </p>
                </div>

                <div className="hero-buttons">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="btn-primary"
                  >
                    <span>Ver mi trabajo</span>
                    <div className="btn-gradient"></div>
                  </button>
                  
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="btn-secondary"
                  >
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-container">
          <h2 className="section-title">
            Sobre <span className="accent">mí</span>
          </h2>
          <p className="section-text">
            Aquí puedes agregar información sobre ti, tu experiencia, 
            tus pasiones y lo que te motiva como desarrollador.
          </p>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-container">
          <h2 className="section-title">
            Habilidades<span className="accent">.</span>
          </h2>
          <p className="section-text">
            Tecnologías y herramientas que domino para crear experiencias digitales excepcionales.
          </p>
          
          {/* Grid de habilidades */}
          <div className="skills-grid">
            {/* React */}
            <div className="skill-card">
              <div className="skill-icon react-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9.03 1.5l-.81 1.5c-.3.53-.62 1-.91 1.47-.54.03-1.11.03-1.71.03s-1.17 0-1.71-.03c-.29-.47-.61-.94-.91-1.47L8.57 12l.81-1.5c.3-.53.62-1 .91-1.47C10.83 9 11.4 9 12 9s1.17 0 1.71.03c.29.47.61.94.91 1.47l.81 1.5z"/>
                </svg>
              </div>
              <h3 className="skill-name">React</h3>
              <p className="skill-description">Desarrollo de interfaces dinámicas y componentes reutilizables</p>
            </div>

            {/* HTML5 */}
            <div className="skill-card">
              <div className="skill-icon html-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
              </div>
              <h3 className="skill-name">HTML5</h3>
              <p className="skill-description">Estructura semántica y accesible para aplicaciones web</p>
            </div>

            {/* CSS3 */}
            <div className="skill-card">
              <div className="skill-icon css-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                </svg>
              </div>
              <h3 className="skill-name">CSS3</h3>
              <p className="skill-description">Diseño moderno, animaciones y layouts responsive</p>
            </div>

            {/* PHP */}
            <div className="skill-card">
              <div className="skill-icon php-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.391.313-.27.503-.644.572-1.115.05-.33-.044-.611-.291-.849-.248-.239-.644-.293-1.191-.293h.239zm-.788 3.876h-.157l-.288 1.4h-.638l.8-4.018h1.525c.474 0 .84.09 1.109.271.268.182.403.442.403.781 0 .1-.013.2-.038.3-.077.38-.244.721-.5 1.019-.258.297-.565.525-.926.682-.36.156-.766.234-1.215.234-.08 0-.2-.007-.275-.031zm8.79-3.876h-.943l-.516 2.648h.838c.557 0 .983-.122 1.293-.391.314-.27.503-.644.572-1.115.05-.33-.044-.611-.291-.849-.247-.239-.644-.293-1.191-.293h.238zm-.788 3.876h-.157l-.287 1.4h-.639l.8-4.018h1.525c.475 0 .840.09 1.109.271.268.182.403.442.403.781 0 .1-.013.2-.038.3-.077.38-.244.721-.5 1.019-.258.297-.565.525-.926.682-.36.156-.766.234-1.215.234-.08 0-.2-.007-.275-.031zM12 5.688c6.627 0 12 2.689 12 6s-5.373 6-12 6S0 15.001 0 11.688s5.373-6 12-6z"/>
                </svg>
              </div>
              <h3 className="skill-name">PHP</h3>
              <p className="skill-description">Desarrollo backend y aplicaciones web dinámicas</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-container">
          <h2 className="section-title">
            Proyectos<span className="accent">.</span>
          </h2>
          <p className="section-text">
            Algunos de los proyectos en los que he trabajado, combinando creatividad y funcionalidad.
          </p>
          
          {/* Grid de proyectos */}
          <div className="projects-grid">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => handleProjectClick(project.url)}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xMzUgNzVIMTY1VjEyNUgxMzVWNzVaIiBmaWxsPSIjNkI3Mjc5Ii8+CjxwYXRoIGQ9Ik0xMjAgMTAwTDE1MCA3NUwxODAgMTAwTDE1MCA2MFoiIGZpbGw9IiM2Qjc5Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5Qjk5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                  />
                  <div className="project-overlay">
                    <svg className="external-link-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className="section-title white">
            Contacto<span className="accent-light">.</span>
          </h2>
          <p className="section-text light">
            ¿Tienes un proyecto en mente? Me encantaría escuchar de ti.
          </p>
          
          {/* Botones de redes sociales y CV */}
          <div className="social-buttons">
            <a 
              href="https://www.linkedin.com/in/sergio-garc%C3%ADa-rodr%C3%ADguez-14a739285/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn linkedin-btn"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            
            <a 
              href="https://github.com/seergarciia99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn github-btn"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a 
              href="public/cv/CV-Sergio-Garcia-Rodriguez.pdf" 
              download="CV-Sergio-Garcia-Rodriguez.pdf"
              className="social-btn cv-btn"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                <path d="M12,19L8,15H10.5V12H13.5V15H16L12,19Z"/>
              </svg>
              Descargar CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;