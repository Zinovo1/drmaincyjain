"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  [139, 58, 82],
  [180, 100, 120],
  [234, 214, 220],
  [250, 240, 243],
];

function particleCount(width, height) {
  const area = width * height;
  if (area < 500000) return 28;
  if (area < 900000) return 42;
  return 58;
}

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    z: Math.random(),
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    vz: (Math.random() - 0.5) * 0.0012,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    twinkle: Math.random() * Math.PI * 2,
  };
}

const AmbientParticles = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let running = true;
    let pointer = { x: 0.5, y: 0.5 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = particleCount(width, height);
      if (particles.length < target) {
        while (particles.length < target) {
          particles.push(createParticle(width, height));
        }
      } else {
        particles.length = target;
      }
    };

    const onPointerMove = (event) => {
      pointer = {
        x: event.clientX / width,
        y: event.clientY / height,
      };
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    const tick = (time) => {
      if (!running) return;

      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx * (0.35 + particle.z * 0.85);
        particle.y += particle.vy * (0.35 + particle.z * 0.85);
        particle.z += particle.vz;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;
        if (particle.z < 0 || particle.z > 1) particle.vz *= -1;

        const depth = 0.25 + particle.z * 0.75;
        const parallaxX = (pointer.x - 0.5) * depth * 36;
        const parallaxY = (pointer.y - 0.5) * depth * 36;
        const drawX = particle.x + parallaxX;
        const drawY = particle.y + parallaxY;
        const radius = (0.6 + depth * 2.2) * (width < 768 ? 0.85 : 1);
        const twinkle = 0.72 + Math.sin(time * 0.001 + particle.twinkle) * 0.28;
        const alpha = (0.08 + depth * 0.28) * twinkle;
        const [r, g, b] = particle.color;

        ctx.beginPath();
        ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();

        if (depth > 0.72 && radius > 1.8) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.18})`;
          ctx.fill();
        }
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    resize();
    frameRef.current = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="tr-ambient-particles"
      aria-hidden="true"
    />
  );
};

export default AmbientParticles;
