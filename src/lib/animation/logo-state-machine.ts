// Logo animation phase state machine
// Pure logic — no DOM, no React

export type Phase = "formed" | "dissolving" | "cloud" | "reforming";

export interface PhaseState {
  phase: Phase;
  /** 0-1 progress within current phase */
  progress: number;
  /** Timestamp when phase started */
  startTime: number;
  /** Duration of current phase in ms */
  duration: number;
}

// Duration ranges per phase [min, max] in ms
const DURATIONS: Record<Phase, [number, number]> = {
  formed:     [25000, 40000],
  dissolving: [5000, 8000],
  cloud:      [20000, 30000],
  reforming:  [5000, 8000],
};

const PHASE_ORDER: Phase[] = ["formed", "dissolving", "cloud", "reforming"];

function randomDuration(phase: Phase): number {
  const [min, max] = DURATIONS[phase];
  return min + Math.random() * (max - min);
}

export function createPhaseState(now: number): PhaseState {
  return {
    phase: "formed",
    progress: 0,
    startTime: now,
    duration: randomDuration("formed"),
  };
}

export function updatePhase(state: PhaseState, now: number): PhaseState {
  const elapsed = now - state.startTime;
  const progress = Math.min(elapsed / state.duration, 1);

  if (progress < 1) {
    return { ...state, progress };
  }

  // Transition to next phase
  const idx = PHASE_ORDER.indexOf(state.phase);
  const nextPhase = PHASE_ORDER[(idx + 1) % PHASE_ORDER.length];
  return {
    phase: nextPhase,
    progress: 0,
    startTime: now,
    duration: randomDuration(nextPhase),
  };
}

// Interpolation helpers driven by phase state

/** SVG logo opacity */
export function svgOpacity(state: PhaseState): number {
  const { phase, progress } = state;
  switch (phase) {
    case "formed":     return 1;
    case "dissolving": return 1 - progress * 0.85;       // 1 → 0.15
    case "cloud":      return 0.15;
    case "reforming":  return 0.15 + progress * 0.85;    // 0.15 → 1
  }
}

/** Canvas particle layer opacity */
export function canvasOpacity(state: PhaseState): number {
  const { phase, progress } = state;
  switch (phase) {
    case "formed":     return 0;
    case "dissolving": return progress;                   // 0 → 1
    case "cloud":      return 1;
    case "reforming":  return 1 - progress;               // 1 → 0
  }
}

/** SVG filter displacement intensity (0-1 range, maps to scale attr) */
export function filterIntensity(state: PhaseState): number {
  const { phase, progress } = state;
  switch (phase) {
    case "formed":     return 0.05 + Math.sin(progress * Math.PI * 2) * 0.05; // subtle pulse 0.05-0.15
    case "dissolving": return 0.15 + progress * 0.45;     // 0.15 → 0.6
    case "cloud":      return 0.3 + Math.sin(progress * Math.PI * 2) * 0.1;   // pulse 0.3-0.5
    case "reforming":  return 0.5 - progress * 0.4;       // 0.5 → 0.1
  }
}

/** Particle drift strength (how far particles wander from home) */
export function driftStrength(state: PhaseState): number {
  const { phase, progress } = state;
  switch (phase) {
    case "formed":     return 0.5;      // tiny jitter only
    case "dissolving": return 0.5 + progress * 40;        // 0.5 → 40
    case "cloud":      return 40;
    case "reforming":  return 40 * (1 - progress);        // 40 → 0
  }
}

/** Snap-back strength — how strongly particles are pulled home */
export function snapBack(state: PhaseState): number {
  const { phase, progress } = state;
  switch (phase) {
    case "formed":     return 0.15;
    case "dissolving": return 0.15 * (1 - progress);      // 0.15 → 0
    case "cloud":      return 0;
    case "reforming":  return progress * 0.2;              // 0 → 0.2
  }
}
