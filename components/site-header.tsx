import { site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Brisas de la Cayana, inicio">
        <span className="brand__mark" aria-hidden="true">
          B
        </span>
        <span>{site.name}</span>
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        <a href="#cabana">La cabaña</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#historia">Historia</a>
        <a href="#ubicacion">Ubicación</a>
        <a className="button button--small button--dark" href="#disponibilidad">
          Consultar
        </a>
      </nav>

      <details className="mobile-nav">
        <summary aria-label="Abrir menú">Menú</summary>
        <nav aria-label="Navegación móvil">
          <a href="#cabana">La cabaña</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#historia">Historia</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#disponibilidad">Consultar disponibilidad</a>
        </nav>
      </details>
    </header>
  );
}
