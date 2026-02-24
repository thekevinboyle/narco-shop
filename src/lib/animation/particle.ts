// Particle system for logo dissolution/reformation
// All positions in SVG viewBox coords (0-475 x, 0-100 y)

export interface Particle {
  // Home position (sampled from SVG path)
  hx: number;
  hy: number;
  // Current position
  x: number;
  y: number;
  // Velocity
  vx: number;
  vy: number;
  // Per-particle noise offset for organic motion
  noiseOffsetX: number;
  noiseOffsetY: number;
  // Size (1-2.5px in viewBox space)
  size: number;
  // Color: 0 = LIGHT (#ECECEC), 1 = FLASH (#EEFF00)
  colorIdx: number;
}

export function createParticle(hx: number, hy: number): Particle {
  return {
    hx, hy,
    x: hx, y: hy,
    vx: 0, vy: 0,
    noiseOffsetX: Math.random() * 1000,
    noiseOffsetY: Math.random() * 1000,
    size: 0.4 + Math.random() * 0.8,
    colorIdx: Math.random() > 0.85 ? 1 : 0,
  };
}

export function samplePointsFromPath(
  pathData: string,
  count: number,
): { x: number; y: number }[] {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);
  svg.appendChild(path);
  document.body.appendChild(svg);

  const totalLength = path.getTotalLength();
  const points: { x: number; y: number }[] = [];

  for (let i = 0; i < count; i++) {
    const t = (i / count) * totalLength;
    const pt = path.getPointAtLength(t);
    points.push({ x: pt.x, y: pt.y });
  }

  document.body.removeChild(svg);
  return points;
}

const COLORS = ["#ECECEC", "#EEFF00"] as const;

export function renderParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  canvasWidth: number,
  canvasHeight: number,
  viewBoxWidth: number,
  viewBoxHeight: number,
  opacity: number,
): void {
  if (opacity <= 0) return;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.globalAlpha = opacity;

  const scaleX = canvasWidth / viewBoxWidth;
  const scaleY = canvasHeight / viewBoxHeight;

  // Batch by color to minimize state changes
  for (let c = 0; c < COLORS.length; c++) {
    ctx.fillStyle = COLORS[c];
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (p.colorIdx !== c) continue;
      const px = p.x * scaleX;
      const py = p.y * scaleY;
      const sz = p.size * scaleX;
      ctx.fillRect(px - sz * 0.5, py - sz * 0.5, sz, sz);
    }
  }

  ctx.globalAlpha = 1;
}
