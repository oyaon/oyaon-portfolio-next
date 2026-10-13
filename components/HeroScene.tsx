'use client';

import dynamic from 'next/dynamic';
import { Component, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';

const OrbitalCanvas = dynamic(() => import('@/components/OrbitalCanvas'), {
  ssr: false,
  loading: () => null,
});

class SceneErrorBoundary extends Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

export function HeroScene() {
  const container = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const [webglAvailable, setWebglAvailable] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context =
      canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: true }) ??
      canvas.getContext('webgl', { failIfMajorPerformanceCaveat: true });
    if (!context) return;
    context.getExtension('WEBGL_lose_context')?.loseContext();
    setWebglAvailable(true);
  }, []);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} className="hero-scene" aria-hidden="true">
      <div className="hero-orbit-fallback">
        <span className="fallback-orbit fallback-orbit-one" />
        <span className="fallback-orbit fallback-orbit-two" />
        <span className="fallback-orbit fallback-orbit-three" />
        <span className="fallback-core" />
      </div>
      {webglAvailable && !sceneFailed && !reduceMotion && (
        <SceneErrorBoundary onError={() => setSceneFailed(true)}>
          <div className="hero-canvas">
            <OrbitalCanvas active={inView} reduceMotion={reduceMotion} />
          </div>
        </SceneErrorBoundary>
      )}
      <span className="hero-scene-caption">FIG. 01 / SYSTEMS IN MOTION</span>
    </div>
  );
}
