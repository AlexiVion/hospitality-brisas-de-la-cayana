import { AvailabilityForm } from "@/components/availability-form";
import { PhotoFrame } from "@/components/photo-frame";
import { SiteHeader } from "@/components/site-header";
import { amenities, experienceMoments, practicalNotes, site } from "@/data/site";

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
} as const;

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <SiteHeader />
        <div className="hero__media" aria-hidden="true">
          <div className="hero__gradient" />
          <div className="hero__photo-note">
            <span>Fotografía hero pendiente</span>
            <strong>Cabaña aislada en el paisaje</strong>
          </div>
        </div>

        <div className="hero__content container">
          <p className="eyebrow eyebrow--light">{site.location}</p>
          <h1>Un refugio entre las sierras, el arroyo y el cielo abierto.</h1>
          <p className="hero__lead">
            Un lugar para bajar el ritmo, respirar montaña y quedarse un poco más cerca
            de lo simple.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#disponibilidad">
              Consultar disponibilidad
              <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link text-link--light" href="#descubrir">
              Descubrir Brisas
            </a>
          </div>
        </div>
      </section>

      <section className="editorial-pause section section--paper" id="descubrir">
        <div className="container container--narrow">
          <p className="editorial-quote">
            Hay lugares a los que uno va para hacer cosas. Y otros a los que uno va
            para dejar de hacerlas.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container split split--intro">
          <div className="split__copy">
            <p className="eyebrow">Villa Alpina</p>
            <h2>Acá el tiempo se siente distinto.</h2>
            <p className="body-large">
              Entre monte serrano, aire fresco y caminos que se pierden entre las
              montañas, Brisas de la Cayana aparece como un refugio lejos del ruido.
            </p>
            <p>
              El paisaje cambia con el día y con las estaciones. Hay sol, niebla,
              viento, noches abiertas y un arroyo que atraviesa el entorno. La idea no
              es llenar cada hora de planes: es volver a sentir que el día puede ir un
              poco más lento.
            </p>
          </div>
          <PhotoFrame
            label="Paisaje serrano y arroyo"
            tone="creek"
            className="photo-frame--landscape"
          />
        </div>
      </section>

      <section className="section section--image-transition">
        <PhotoFrame
          label="Ruta de llegada entre las sierras"
          tone="mist"
          className="photo-frame--road"
        />
        <div className="image-transition__caption container">
          <p>Mientras más te alejás del ruido, más cerca estás.</p>
        </div>
      </section>

      <section className="section section--warm" id="cabana">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Tu refugio</p>
            <h2>Simple, cálida y rodeada de naturaleza.</h2>
            <p className="section-heading__lead">
              La cabaña está pensada para descansar después de recorrer las sierras —o
              para no salir en todo el día.
            </p>
          </div>

          <div className="cabin-grid">
            <PhotoFrame
              label="Exterior de la cabaña"
              tone="wood"
              className="photo-frame--cabin-main"
            />
            <PhotoFrame
              label="Deck, interior o vista desde la cabaña"
              tone="mountain"
              className="photo-frame--cabin-detail"
            />
          </div>

          <div className="cabin-copy-grid">
            <p className="body-large">
              Madera, grandes vistas, espacios simples y todo lo necesario para vivir
              la montaña con comodidad, sin separarse del paisaje.
            </p>
            <div className="fact-list" aria-label="Características principales">
              <div>
                <span>Cocina</span>
                <strong>Equipada</strong>
              </div>
              <div>
                <span>Baño</span>
                <strong>Privado</strong>
              </div>
              <div>
                <span>Entorno</span>
                <strong>Serrano</strong>
              </div>
              <div>
                <span>Reserva</span>
                <strong>Consulta directa</strong>
              </div>
            </div>
          </div>

          <a className="button button--dark" href="#disponibilidad">
            Consultar disponibilidad
          </a>
        </div>
      </section>

      <section className="section section--paper" id="experiencia">
        <div className="container">
          <div className="section-heading section-heading--wide">
            <p className="eyebrow">La experiencia</p>
            <h2>Hay días para salir. Y días para quedarse.</h2>
          </div>

          <div className="experience-list">
            {experienceMoments.map((moment, index) => (
              <article
                className={`experience-item ${index % 2 === 1 ? "experience-item--reverse" : ""}`}
                key={moment.title}
              >
                <PhotoFrame
                  label={moment.photoRole}
                  tone={moment.tone as "mountain" | "forest" | "creek" | "earth"}
                  className="photo-frame--experience"
                />
                <div className="experience-item__copy">
                  <span className="experience-item__index">0{index + 1}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section stillness">
        <div className="container stillness__grid">
          <PhotoFrame
            label="Dos sillas mirando el paisaje"
            tone="forest"
            className="photo-frame--stillness"
          />
          <div className="stillness__copy">
            <p className="eyebrow eyebrow--light">O no hacer nada</p>
            <h2>Sentarse también puede ser un plan.</h2>
            <p>
              Una silla mirando el paisaje. Algo para tomar. El sonido del viento.
              Ningún lugar al que llegar.
            </p>
            <p className="stillness__last">A veces, eso alcanza.</p>
          </div>
        </div>
      </section>

      <section className="section section--warm" id="historia">
        <div className="container split split--story">
          <div className="split__copy">
            <p className="eyebrow">La historia de Brisas</p>
            <h2>Un lugar elegido mucho antes de ser un alojamiento.</h2>
            <p className="body-large">
              Gustavo conoce Villa Alpina desde hace años. Volvió por sus caminos, por
              la pesca, por las cabalgatas, por la bicicleta y por esa forma particular
              de estar en la montaña.
            </p>
            <p>
              Con el tiempo encontró este rincón atravesado por el arroyo La Cayana y
              nació Brisas.
            </p>
            <p className="story-line">No como un hotel.</p>
            <p className="story-line story-line--accent">
              Como un lugar que valía la pena compartir.
            </p>
          </div>
          <PhotoFrame
            label="Paisaje o imagen contextual para la historia de Brisas"
            tone="earth"
            className="photo-frame--story"
          />
        </div>
      </section>

      <section className="section section--paper">
        <div className="container amenities-layout">
          <div className="section-heading">
            <p className="eyebrow">Lo esencial</p>
            <h2>Todo lo que necesitás. Nada de más.</h2>
          </div>
          <div className="amenities-grid">
            {amenities.map((amenity) => (
              <div className="amenity" key={amenity}>
                <span className="amenity__dot" aria-hidden="true" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--forest practical-section">
        <div className="container">
          <div className="section-heading section-heading--light">
            <p className="eyebrow eyebrow--light">La montaña tiene sus tiempos</p>
            <h2>Vení preparado para desconectarte.</h2>
            <p>
              Estar más cerca de la naturaleza también significa vivir algunas cosas de
              otra manera. La información final se valida con el alojamiento antes de
              una publicación comercial.
            </p>
          </div>

          <div className="practical-grid">
            {practicalNotes.map((note, index) => (
              <article className="practical-card" key={note.title}>
                <span className="practical-card__index">0{index + 1}</span>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" id="galeria">
        <div className="container">
          <div className="section-heading section-heading--wide">
            <p className="eyebrow">Brisas, sin apuro</p>
            <h2>Mirá un poco más.</h2>
            <p>
              La cabaña, el arroyo, los caminos y el paisaje cambian todo el tiempo.
              Esta es apenas una parte.
            </p>
          </div>

          <div className="gallery-grid">
            <PhotoFrame label="Montaña y valle" tone="mountain" className="gallery-a" />
            <PhotoFrame label="Cabaña entre el monte" tone="wood" className="gallery-b" />
            <PhotoFrame label="Caballos en el paisaje" tone="earth" className="gallery-c" />
            <PhotoFrame label="Arroyo entre piedras" tone="creek" className="gallery-d" />
            <PhotoFrame label="Niebla sobre las sierras" tone="mist" className="gallery-e" />
            <PhotoFrame label="Atardecer en Villa Alpina" tone="sunset" className="gallery-f" />
          </div>

          <p className="gallery-note">
            La versión visual final reemplaza estos marcadores con las fotografías
            originales en máxima calidad del alojamiento.
          </p>
        </div>
      </section>

      <section className="section section--warm" id="ubicacion">
        <div className="container location-grid">
          <div className="location-copy">
            <p className="eyebrow">Villa Alpina · Sierras de Córdoba</p>
            <h2>Lo suficientemente lejos del ruido.</h2>
            <p className="body-large">
              Brisas de la Cayana está en Villa Alpina, rodeada de paisaje serrano y
              naturaleza.
            </p>
            <p>
              La ubicación pública permite orientarte antes del viaje. Las indicaciones
              finales de acceso se mantienen alineadas con la información vigente del
              alojamiento.
            </p>
            <a className="button button--dark" href={site.links.maps} {...externalLinkProps}>
              Abrir en Google Maps
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="map-card" aria-label="Ubicación de Brisas de la Cayana">
            <div className="map-card__coords">31°59′31″ S · 64°48′04″ O</div>
            <div className="map-card__pin" aria-hidden="true">
              <span />
            </div>
            <div className="map-card__label">
              <strong>Brisas de la Cayana</strong>
              <span>Villa Alpina · Córdoba</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper trust-section">
        <div className="container trust-grid">
          <div>
            <p className="eyebrow">También podés encontrarnos en</p>
            <h2>Canales reales, información verificable.</h2>
            <p>
              En esta demo no inventamos reseñas ni puntajes. Los canales externos
              funcionan como una segunda capa de confianza y como alternativa para quien
              prefiera reservar a través de una plataforma.
            </p>
          </div>
          <div className="channel-links">
            <a href={site.links.airbnb} {...externalLinkProps}>
              <span>Airbnb</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href={site.links.booking} {...externalLinkProps}>
              <span>Booking.com</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href={site.links.instagram} {...externalLinkProps}>
              <span>Instagram</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section booking-section" id="disponibilidad">
        <div className="container booking-grid">
          <div className="booking-copy">
            <p className="eyebrow eyebrow--light">Tu próxima pausa</p>
            <h2>¿Cuándo querés venir?</h2>
            <p>
              Elegí tus fechas y cantidad de huéspedes. Abrimos WhatsApp con el mensaje
              listo para que consultes disponibilidad directamente.
            </p>
          </div>
          <div className="booking-card">
            <AvailabilityForm whatsappNumber={site.whatsappNumber} />
            <div className="booking-card__alternatives">
              <span>¿Preferís una plataforma?</span>
              <div>
                <a href={site.links.airbnb} {...externalLinkProps}>
                  Airbnb ↗
                </a>
                <a href={site.links.booking} {...externalLinkProps}>
                  Booking.com ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <PhotoFrame
          label="Atardecer o cielo nocturno para el cierre"
          tone="sunset"
          className="photo-frame--closing"
        />
        <div className="closing-section__content container">
          <p className="eyebrow eyebrow--light">Brisas de la Cayana</p>
          <h2>Quizás lo que necesitás está un poco más lejos del ruido.</h2>
          <p>{site.location}</p>
          <a className="button button--primary" href="#disponibilidad">
            Consultar disponibilidad
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div>
            <strong>{site.name}</strong>
            <span>{site.location}</span>
          </div>
          <div className="site-footer__links">
            <a href={site.links.instagram} {...externalLinkProps}>
              Instagram
            </a>
            <a href={`https://wa.me/${site.whatsappNumber}`} {...externalLinkProps}>
              WhatsApp
            </a>
            <a href={site.links.airbnb} {...externalLinkProps}>
              Airbnb
            </a>
            <a href={site.links.booking} {...externalLinkProps}>
              Booking.com
            </a>
            <a href={site.links.maps} {...externalLinkProps}>
              Google Maps
            </a>
          </div>
        </div>
        <div className="container site-footer__disclosure">
          Sitio demo / propuesta digital. La información definitiva debe ser validada
          por el alojamiento antes de una publicación comercial final.
        </div>
      </footer>

      <a className="mobile-booking-cta" href="#disponibilidad">
        Consultar disponibilidad
      </a>
    </main>
  );
}
