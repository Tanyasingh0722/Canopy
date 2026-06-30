// Single source of truth for the garden's coordinate system + stacking.
//
// THE FIX: flowers are stored in absolute "world" pixels inside a
// fixed-size canvas (WORLD_W × WORLD_H). Both the Garden screen and the
// PlantFlower screen render this SAME fixed-size world, panned/zoomed
// with react-zoom-pan-pinch. Because the world dimensions are identical
// everywhere and flowers use absolute px (not "% of a flex container
// whose height changes per screen"), a flower at (x, y) renders in the
// exact same spot on every screen. Placement and preview match by
// construction — no more drift between screens.

export const WORLD_W = 1000;
export const WORLD_H = 1400;

// Base flower size in world px (before depth + user scale).
export const BASE_FLOWER = 150;

export interface FlowerLike {
  id: number;
  // New world coords (px). Legacy flowers may only have x/y as 0–100 %.
  worldX?: number;
  worldY?: number;
  x?: number;
  y?: number;
}

// Resolve a flower's world position, migrating legacy percentage coords.
export function flowerWorldPos(f: FlowerLike): { x: number; y: number } {
  if (typeof f.worldX === "number" && typeof f.worldY === "number") {
    return { x: f.worldX, y: f.worldY };
  }
  // Legacy: x/y were 0–100 percentages of a container.
  const px = typeof f.x === "number" ? f.x : 50;
  const py = typeof f.y === "number" ? f.y : 60;
  return { x: (px / 100) * WORLD_W, y: (py / 100) * WORLD_H };
}

// ── Single coordinate resolver used by BOTH screens ──────────────
// Returns a flower's position as PERCENTAGES of the full viewport.
// Every flower — new, legacy world-px, or coordinate-less — resolves
// the same way on the Garden screen and the PlantFlower screen, so a
// flower can never appear in two different places.
//
// The fallback for coordinate-less flowers is derived from the flower
// id (NOT the list index), so it's stable and identical everywhere.
export function flowerPct(f: FlowerLike): { x: number; y: number } {
  const seed = Math.abs(Math.floor(f.id ?? 1));
  const x =
    typeof f.x === "number"
      ? f.x
      : typeof f.worldX === "number"
        ? (f.worldX / WORLD_W) * 100
        : 18 + (seed % 5) * 16;
  const y =
    typeof f.y === "number"
      ? f.y
      : typeof f.worldY === "number"
        ? (f.worldY / WORLD_H) * 100
        : 60 + (seed % 4) * 8;
  return { x, y };
}

// ── Shared flower render size ────────────────────────────────────
// Used by BOTH Garden and PlantFlower so sizing can never drift.
// On phones (<640px) all drawings render at 0.7×. Position is
// percentage-based + center-anchored, so scaling here never shifts
// where a flower sits — it stays consistent across both screens.
export function responsiveFlowerFactor(): number {
  if (typeof window === "undefined") return 1;
  return window.innerWidth < 640 ? 0.7 : 1;
}

export function flowerRenderSize(
  yPct: number,
  userScale: number = 1,
): number {
  const depth = 0.5 + (yPct / 100) * 0.7; // 0.5 → 1.2
  return Math.round(
    100 * depth * userScale * responsiveFlowerFactor(),
  );
}

// Depth scale from a world-Y. Lower in the world (larger y) = closer =
// bigger. Range roughly 0.6 → 1.15.
export function depthScaleFor(worldY: number): number {
  return 0.6 + (worldY / WORLD_H) * 0.55;
}

// ── Stacking order ───────────────────────────────────────────────
// One sorted list → contiguous z-indexes. Depth first (larger worldY =
// in front), then recency (larger id = newer = in front). Because every
// flower's z comes from the same sorted list, two flowers can never
// collide on the same z and fall back to DOM order.

export interface ZSortable {
  id: number;
  sortY: number; // world-Y used for depth comparison
}

export function buildZIndexMap(flowers: ZSortable[]): Map<number, number> {
  const sorted = [...flowers].sort((a, b) => {
    if (a.sortY !== b.sortY) return a.sortY - b.sortY; // deeper first / behind
    return a.id - b.id; // older first / behind
  });
  const map = new Map<number, number>();
  sorted.forEach((f, i) => map.set(f.id, i + 1));
  return map;
}
