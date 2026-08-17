"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Layers, Activity, Info } from "lucide-react";

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
  sublabel?: string;
  color: string;
  pulsePhase: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export function GovernanceNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasWebGLOrCanvas, setHasWebGLOrCanvas] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeMode, setActiveMode] = useState<"nexus" | "grid" | "nodes">("nexus");
  const [hoveredNodeInfo, setHoveredNodeInfo] = useState<{ title: string; sub: string } | null>(null);

  const shockwavesRef = useRef<Shockwave[]>([]);

  useEffect(() => {
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
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

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
      setHoveredNodeInfo(null);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      shockwavesRef.current.push({
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: 160,
        alpha: 0.8,
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);

    const orbits = [
      { rx: 175, ry: 75, rotation: -0.35, label: "Corporate Law", sub: "Director Fiduciary & Entities", color: "#16324F", nodeCount: 6 },
      { rx: 220, ry: 95, rotation: 0.45, label: "Corporate Governance", sub: "Board Accountability & ESG", color: "#537C78", nodeCount: 6 },
      { rx: 265, ry: 115, rotation: -0.15, label: "Financial Laws", sub: "Securities, Banking & Restructuring", color: "#B99A5E", nodeCount: 7 },
    ];

    const nodes: Node[] = [];
    orbits.forEach((orbit, oIdx) => {
      for (let i = 0; i < orbit.nodeCount; i++) {
        const angle = (i / orbit.nodeCount) * Math.PI * 2 + Math.random() * 0.4;
        nodes.push({
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          radius: 3.5 + Math.random() * 2,
          baseRadius: 3.5 + Math.random() * 2,
          orbitIndex: oIdx,
          orbitAngle: angle,
          orbitSpeed: (0.002 + oIdx * 0.001) * (oIdx % 2 === 0 ? 1 : -1),
          label: i === 0 ? orbit.label : undefined,
          sublabel: i === 0 ? orbit.sub : undefined,
          color: orbit.color,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    });

    let globalRotation = 0;
    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw Institutional Legal Grid Matrix
      ctx.strokeStyle = "rgba(22, 50, 79, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Legal Axis Crosshairs
      ctx.strokeStyle = "rgba(185, 154, 94, 0.2)";
      ctx.beginPath();
      ctx.moveTo(cx - 280, cy);
      ctx.lineTo(cx + 280, cy);
      ctx.moveTo(cx, cy - 200);
      ctx.lineTo(cx, cy + 200);
      ctx.stroke();

      // Central Institutional Core Hub
      ctx.beginPath();
      ctx.arc(cx, cy, 36, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.fill();
      ctx.strokeStyle = "rgba(22, 50, 79, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner Rotating Gold Ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(globalRotation * 2);
      ctx.beginPath();
      ctx.arc(0, 0, 24, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(185, 154, 94, 0.5)";
      ctx.setLineDash([6, 8]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Center Core Dot
      ctx.beginPath();
      ctx.arc(cx, cy, 7, 0, Math.PI * 2);
      ctx.fillStyle = "#16324F";
      ctx.fill();
      ctx.strokeStyle = "#B99A5E";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Orbit Paths
      if (activeMode !== "grid") {
        orbits.forEach((orbit, idx) => {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(orbit.rotation + globalRotation * 0.2);

          ctx.beginPath();
          ctx.ellipse(0, 0, orbit.rx, orbit.ry, 0, 0, Math.PI * 2);
          ctx.strokeStyle =
            idx === 2
              ? "rgba(185, 154, 94, 0.35)"
              : idx === 1
              ? "rgba(83, 124, 120, 0.3)"
              : "rgba(22, 50, 79, 0.25)";
          ctx.lineWidth = 1.2;
          ctx.setLineDash([5, 7]);
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.restore();
        });
      }

      // Update Rotation
      if (!reducedMotion) {
        globalRotation += 0.0009;
      }

      let closestHovered: { title: string; sub: string } | null = null;
      let minDistance = 25;

      // Update Node Coordinates
      nodes.forEach((node) => {
        if (!reducedMotion) {
          node.orbitAngle += node.orbitSpeed;
          node.pulsePhase += 0.03;
        }

        const orbit = orbits[node.orbitIndex];
        const rot = orbit.rotation + globalRotation * (node.orbitIndex % 2 === 0 ? 1 : -1);

        const cosAngle = Math.cos(node.orbitAngle);
        const sinAngle = Math.sin(node.orbitAngle);
        const unrotatedX = orbit.rx * cosAngle;
        const unrotatedY = orbit.ry * sinAngle;

        let targetX = cx + (unrotatedX * Math.cos(rot) - unrotatedY * Math.sin(rot));
        let targetY = cy + (unrotatedX * Math.sin(rot) + unrotatedY * Math.cos(rot));

        // Interactive mouse magnetism & proximity
        if (isHovered) {
          const dx = mouseX - targetX;
          const dy = mouseY - targetY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            targetX += (dx / dist) * force * 20;
            targetY += (dy / dist) * force * 20;
          }

          if (dist < minDistance && (node.label || node.sublabel)) {
            minDistance = dist;
            closestHovered = {
              title: node.label || orbit.label,
              sub: node.sublabel || orbit.sub,
            };
          }
        }

        node.x = targetX;
        node.y = targetY;
      });

      setHoveredNodeInfo(closestHovered);

      // Render Dynamic Connecting Conduits
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.45;
            ctx.strokeStyle = `rgba(22, 50, 79, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Flowing Particle packet along line
            if (activeMode === "nexus" && (i + j) % 3 === 0) {
              const packetPos = (Math.sin(tick * 0.03 + i) + 1) / 2;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * packetPos;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * packetPos;
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(185, 154, 94, 0.8)";
              ctx.fill();
            }
          }
        }
      }

      // Connecting Conduits to Central Hub
      nodes.forEach((node) => {
        const dx = cx - node.x;
        const dy = cy - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 210) {
          const alpha = (1 - dist / 210) * 0.22;
          ctx.strokeStyle = `rgba(185, 154, 94, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      });

      // Render Shockwaves
      for (let i = shockwavesRef.current.length - 1; i >= 0; i--) {
        const sw = shockwavesRef.current[i];
        sw.radius += 3.5;
        sw.alpha -= 0.02;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwavesRef.current.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(185, 154, 94, ${sw.alpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      // Render Nodes with Outer Glow Rings
      nodes.forEach((node) => {
        const dynamicRadius =
          node.baseRadius + Math.sin(node.pulsePhase) * 1.2;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, dynamicRadius + 4, 0, Math.PI * 2);
        ctx.fillStyle = node.color === "#B99A5E" ? "rgba(185, 154, 94, 0.15)" : "rgba(22, 50, 79, 0.1)";
        ctx.fill();

        // Node Body
        ctx.beginPath();
        ctx.arc(node.x, node.y, dynamicRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label badges on prominent primary nodes
        if (node.label) {
          ctx.font = "600 10px 'Inter', sans-serif";
          ctx.fillStyle = "#16324F";
          ctx.fillText(node.label, node.x + 9, node.y + 3);
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
      canvas.removeEventListener("click", handleClick);
    };
  }, [reducedMotion, activeMode]);

  if (!hasWebGLOrCanvas) {
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
    <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px] flex flex-col items-center justify-center select-none overflow-hidden rounded-xl">
      {/* Top Interactive Mode Switcher */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-lg p-1 border border-[#16324F]/15 shadow-xs text-[11px] font-mono-meta">
          <button
            onClick={() => setActiveMode("nexus")}
            className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
              activeMode === "nexus" ? "bg-[#16324F] text-white font-semibold shadow-2xs" : "text-[#697480] hover:text-[#16324F]"
            }`}
          >
            <Activity className="w-3 h-3 text-[#B99A5E]" />
            <span>Tri-Orbit Nexus</span>
          </button>
          <button
            onClick={() => setActiveMode("grid")}
            className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
              activeMode === "grid" ? "bg-[#16324F] text-white font-semibold shadow-2xs" : "text-[#697480] hover:text-[#16324F]"
            }`}
          >
            <Layers className="w-3 h-3 text-[#537C78]" />
            <span>Nodal Matrix</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#16324F]/10 text-[10px] font-mono-meta text-[#697480]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B99A5E] animate-ping" />
          <span>Click canvas for shockwave</span>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
        style={{ touchAction: "none" }}
      />

      {/* Hover Node Tooltip Card */}
      {hoveredNodeInfo && (
        <div className="absolute bottom-4 left-4 z-20 bg-[#0B1927]/95 text-white backdrop-blur-md p-3 rounded-lg border border-[#B99A5E]/40 shadow-xl max-w-xs animate-in fade-in zoom-in-95 duration-100 pointer-events-none">
          <div className="text-[10px] font-mono-meta text-[#B99A5E] uppercase tracking-wider font-semibold">
            Institutional Discipline
          </div>
          <div className="font-serif-display font-bold text-sm text-white mt-0.5">
            {hoveredNodeInfo.title}
          </div>
          <div className="text-xs text-[#F8F7F2]/80 font-sans-ui mt-0.5">
            {hoveredNodeInfo.sub}
          </div>
        </div>
      )}

      {/* Bottom Technical Coordinates */}
      <div className="absolute bottom-2 right-3 font-mono-meta text-[9px] text-[#697480]/70 tracking-wider">
        LAW × GOVERNANCE × CAPITAL // 60FPS
      </div>
    </div>
  );
}
