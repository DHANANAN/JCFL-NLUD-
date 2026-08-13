"use client";

import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  orbitIndex: number;
  orbitAngle: number;
  orbitSpeed: number;
  label?: string;
  color: string;
}

export function GovernanceNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasWebGLOrCanvas, setHasWebGLOrCanvas] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setHasWebGLOrCanvas(false);
      return;
    }

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse coordinates
    let mouseX = width / 2;
    let mouseY = height / 2;
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      mouseX = width / 2;
      mouseY = height / 2;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // 3 Orbiting Structural Systems
    const orbits = [
      { rx: 170, ry: 75, rotation: -0.35, label: "Corporate Law", color: "#16324F", nodeCount: 5 },
      { rx: 210, ry: 95, rotation: 0.45, label: "Governance", color: "#537C78", nodeCount: 6 },
      { rx: 250, ry: 110, rotation: -0.15, label: "Financial Laws", color: "#B99A5E", nodeCount: 5 },
    ];

    // Initialize Nodes
    const nodes: Node[] = [];
    orbits.forEach((orbit, oIdx) => {
      for (let i = 0; i < orbit.nodeCount; i++) {
        const angle = (i / orbit.nodeCount) * Math.PI * 2 + Math.random() * 0.5;
        nodes.push({
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          radius: 3 + Math.random() * 2,
          baseRadius: 3 + Math.random() * 2,
          orbitIndex: oIdx,
          orbitAngle: angle,
          orbitSpeed: (0.002 + oIdx * 0.001) * (oIdx % 2 === 0 ? 1 : -1),
          label: i === 0 ? orbit.label : undefined,
          color: orbit.color,
        });
      }
    });

    let globalRotation = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw subtle background legal coordinate grid
      ctx.strokeStyle = "rgba(22, 50, 79, 0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - 260, cy);
      ctx.lineTo(cx + 260, cy);
      ctx.moveTo(cx, cy - 260);
      ctx.lineTo(cx, cy + 260);
      ctx.stroke();

      // Central Institutional Core
      ctx.beginPath();
      ctx.arc(cx, cy, 32, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(248, 247, 242, 0.85)";
      ctx.fill();
      ctx.strokeStyle = "rgba(22, 50, 79, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(22, 50, 79, 0.08)";
      ctx.fill();
      ctx.strokeStyle = "rgba(185, 154, 94, 0.6)";
      ctx.stroke();

      // Draw 3 Orbital Paths
      orbits.forEach((orbit, idx) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(orbit.rotation);

        ctx.beginPath();
        ctx.ellipse(0, 0, orbit.rx, orbit.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 2 ? "rgba(185, 154, 94, 0.25)" : idx === 1 ? "rgba(83, 124, 120, 0.2)" : "rgba(22, 50, 79, 0.18)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.restore();
      });

      // Update and calculate node positions
      if (!reducedMotion) {
        globalRotation += 0.0008;
      }

      nodes.forEach((node) => {
        if (!reducedMotion) {
          node.orbitAngle += node.orbitSpeed;
        }

        const orbit = orbits[node.orbitIndex];
        const rot = orbit.rotation + globalRotation * (node.orbitIndex % 2 === 0 ? 1 : -1);

        // Position on rotated ellipse
        const cosAngle = Math.cos(node.orbitAngle);
        const sinAngle = Math.sin(node.orbitAngle);
        const unrotatedX = orbit.rx * cosAngle;
        const unrotatedY = orbit.ry * sinAngle;

        let targetX = cx + (unrotatedX * Math.cos(rot) - unrotatedY * Math.sin(rot));
        let targetY = cy + (unrotatedX * Math.sin(rot) + unrotatedY * Math.cos(rot));

        // Interactive mouse proximity repulsion/attraction
        if (isHovered) {
          const dx = mouseX - targetX;
          const dy = mouseY - targetY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100 && dist > 0) {
            const force = (100 - dist) / 100;
            targetX -= (dx / dist) * force * 15;
            targetY -= (dy / dist) * force * 15;
          }
        }

        node.x = targetX;
        node.y = targetY;
      });

      // Draw Connecting Structural Lines
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.35;
            ctx.strokeStyle = `rgba(22, 50, 79, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Lines to Central Core
      nodes.forEach((node) => {
        const dx = cx - node.x;
        const dy = cy - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.15;
          ctx.strokeStyle = `rgba(185, 154, 94, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      });

      // Draw Nodes & Labels
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        ctx.strokeStyle = "rgba(248, 247, 242, 0.9)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // If orbit label node, render subtle editorial tag
        if (node.label) {
          ctx.font = "500 10px 'Inter', sans-serif";
          ctx.fillStyle = "#16324F";
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [reducedMotion]);

  if (!hasWebGLOrCanvas) {
    // Static accessible SVG fallback
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <svg viewBox="0 0 400 400" className="w-full h-full max-w-[420px] text-[#16324F]/20">
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="#537C78" strokeOpacity="0.3" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="#B99A5E" strokeOpacity="0.4" />
          <circle cx="200" cy="200" r="16" fill="#16324F" fillOpacity="0.1" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center justify-center select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
        style={{ touchAction: "none" }}
      />
      {/* Decorative Corner Coordinate Callouts */}
      <div className="absolute top-2 right-2 font-mono-meta text-[9px] text-[#697480]/60 tracking-wider">
        SYS // LAW · GOVERNANCE · CAPITAL
      </div>
      <div className="absolute bottom-2 left-2 font-mono-meta text-[9px] text-[#697480]/60 tracking-wider">
        CCLGFL // NODAL DYNAMICS
      </div>
    </div>
  );
}
