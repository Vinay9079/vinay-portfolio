import { useEffect, useRef } from "react";
import "../styles/backgroundFX.css";

/**
 * Danger + CyberSecure background (matrix-free)
 * Layers:
 * - particle field canvas
 * - rotating threat-rings
 * - hex-grid depth layer
 * - scanning beams + hologram noise
 */
export default function BackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let raf;
    let w = 0;
    let h = 0;
    let t = 0;

    const palette = ["#22d3ee", "#06b6d4", "#7c3aed", "#ef4444", "#4ade80"];
    const particleCount = 90;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.9 + 0.1,
      vx: (Math.random() - 0.5) * 0.00055,
      vy: (Math.random() - 0.5) * 0.00055,
      r: Math.random() * 2 + 0.8,
      c: palette[Math.floor(Math.random() * palette.length)],
    }));

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * devicePixelRatio));
      canvas.height = Math.max(1, Math.floor(h * devicePixelRatio));
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const drawLink = (a, b) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 0.13) return;
      const alpha = (0.13 - dist) * 1.7;
      ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(a.x * w, a.y * h);
      ctx.lineTo(b.x * w, b.y * h);
      ctx.stroke();
    };

    const loop = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createRadialGradient(w * 0.7, h * 0.2, 10, w * 0.45, h * 0.5, h);
      grad.addColorStop(0, "rgba(6, 182, 212, 0.15)");
      grad.addColorStop(0.4, "rgba(59, 130, 246, 0.10)");
      grad.addColorStop(1, "rgba(1, 4, 20, 0.0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx / p.z;
        p.y += p.vy / p.z;

        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const pulse = 0.5 + Math.sin(t * 2 + i) * 0.5;
        ctx.beginPath();
        ctx.fillStyle = p.c.replace(")", `, ${0.22 + pulse * 0.35})`).replace("rgb", "rgba");
        ctx.arc(p.x * w, p.y * h, p.r * (1 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          drawLink(particles[i], particles[j]);
        }
      }

      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bgfx" aria-hidden="true">
      <canvas ref={canvasRef} className="bgfx__canvas" />
      <div className="bgfx__hex" />
      <div className="bgfx__rings" />
      <div className="bgfx__scan bgfx__scan--v" />
      <div className="bgfx__scan bgfx__scan--h" />
      <div className="bgfx__noise" />
      <div className="bgfx__danger" />
      <div className="bgfx__blob bgfx__blob--1" />
      <div className="bgfx__blob bgfx__blob--2" />
    </div>
  );
}
