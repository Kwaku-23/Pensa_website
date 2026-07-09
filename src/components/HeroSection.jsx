import { useEffect, useRef } from 'react';
import { initParticles } from '../utils/effects';

export default function HeroSection({ variant = 'home', title, subtitle, showParticles = false, showActions = false, actions, children }) {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (showParticles && particlesRef.current) {
      initParticles(particlesRef.current);
    }
  }, [showParticles]);

  return (
    <section className={`hero hero--${variant}`} id={`hero${variant.charAt(0).toUpperCase() + variant.slice(1)}`}>
      {/* Floating decorative elements */}
      <div className="hero__decoration hero__decoration--circle"></div>
      <div className="hero__decoration hero__decoration--circle-2"></div>
      <div className="hero__decoration hero__decoration--dots"></div>
      <div className="hero__decoration hero__decoration--line"></div>
      {showParticles && <div className="hero__particles" ref={particlesRef}></div>}
      <div className="container">
        {children || (
          <>
            <h1 className="hero__title" style={variant !== 'home' ? { fontFamily: 'var(--font-serif)' } : undefined}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {subtitle && (
              <p className="hero__subtitle" id={variant === 'home' ? 'heroSubtitle' : undefined}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}
            {showActions && actions && (
              <div className="hero__actions">
                {actions}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
