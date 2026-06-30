import { useNavigate } from "react-router";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus, Maximize2 } from "lucide-react";
import ScribblePng from "../../imports/116.png";
import { sameDay, sameWeek } from "./Garden";
import { GardenHeader } from "./Garden";
import {
  buildZIndexMap,
  flowerPct,
  flowerRenderSize as flowerSize,
} from "./gardenZ";

interface Pos {
  x: number;
  y: number;
}
type Phase = "idle" | "asking" | "wilting";

// Same tokens as Garden
const BG = "#FAFAFA";
const TEAL = "#1C2E2A";
const GREEN = "#4DAA57";
const HEAD = "'Passion One', sans-serif";
const BODY = "'Slabo 13px', serif";

// Wilting animation
function WiltSVG() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path
        d="M26 10 C26 10, 20 16, 18 22 C16 28, 18 34, 26 36 C34 34, 36 28, 34 22 C32 16, 26 10, 26 10 Z"
        stroke="rgba(28,46,42,0.35)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M26 36 L24 46"
        stroke="rgba(28,46,42,0.35)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 40 C24 40, 19 39, 17 42"
        stroke="rgba(28,46,42,0.35)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScribbleOverlay({
  size,
  animate = false,
}: {
  size: number;
  animate?: boolean;
}) {
  return (
    <motion.img
      src={ScribblePng}
      alt=""
      initial={
        animate ? { opacity: 0, scale: 0.8 } : { opacity: 1 }
      }
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: size,
        height: size,
        objectFit: "contain",
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  );
}

export function PlantFlower() {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Pos | null>(null);
  const [dragging, setDragging] = useState(false);
  const [planted, setPlanted] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [scale, setScale] = useState(1.0);
  const [showSize, setShowSize] = useState(false);

  const drawing = localStorage.getItem("currentDrawing");
  const urgeItem = localStorage.getItem("urgeItem") || "";
  const emotion = localStorage.getItem("currentEmotion")
    ? JSON.parse(localStorage.getItem("currentEmotion")!)
    : null;
  const allFlowers: any[] = JSON.parse(
    localStorage.getItem("gardenFlowers") || "[]",
  );

  // The new flower is always planted into TODAY, so only show today's
  // flowers as placement context — not the whole week.
  const today = new Date();
  const existingFlowers = allFlowers.filter((f) =>
    sameWeek(new Date(f.date), today),
  );
  const todaysFlowers = allFlowers.filter((f) =>
    sameDay(new Date(f.date), today),
  );

  const flowersByDate = new Map<string, number>();
  allFlowers.forEach((f) => {
    const d = new Date(f.date);
    const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    flowersByDate.set(k, (flowersByDate.get(k) ?? 0) + 1);
  });

  const daySaved = todaysFlowers
    .filter((f) => f.state === "bloomed")
    .reduce((s, f) => s + (f.amount || 0), 0);
  const daySpent = todaysFlowers
    .filter((f) => f.state === "wilted")
    .reduce((s, f) => s + (f.amount || 0), 0);

  const moodHex: string =
    typeof emotion?.hex === "string" &&
    emotion.hex.startsWith("#")
      ? emotion.hex
      : "#4DAA57";

  const wilting = phase === "wilting";

  // Convert a pointer event to % of the canvas element.
  function pctFromEvent(
    e: React.PointerEvent | PointerEvent,
  ): Pos {
    const el = canvasRef.current!;
    const r = el.getBoundingClientRect();
    return {
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    };
  }

  function handlePointerDown(e: React.PointerEvent) {
    if (planted || phase !== "idle") return;
    if (e.button !== 0 && e.pointerType === "mouse") return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setPos(pctFromEvent(e));
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!dragging || planted || phase !== "idle") return;
    setPos(pctFromEvent(e));
  }

  function handlePointerUp(e: React.PointerEvent) {
    if (!dragging) return;
    setDragging(false);
    setPos(pctFromEvent(e));
  }

  function handlePlantHere() {
    if (!pos || planted || phase !== "idle") return;
    setPhase("asking");
  }

  function plantNow(bought: boolean) {
    if (!pos || planted) return;
    setPlanted(true);
    const cost = parseFloat(
      localStorage.getItem("purchaseCost") || "0",
    );
    const garden: any[] = JSON.parse(
      localStorage.getItem("gardenFlowers") || "[]",
    );
    garden.push({
      id: Date.now(),
      emotion,
      amount: cost,
      date: new Date().toISOString(),
      state: bought ? "wilted" : "bloomed",
      drawing: drawing || null,
      // x/y are percentages of the full viewport — identical to what
      // Garden uses, same anchor (bottom-center), no conversion needed.
      x: pos.x,
      y: pos.y,
      scale,
      itemName: localStorage.getItem("urgeItem") || undefined,
      whoFor:
        localStorage.getItem("currentWhoFor") || undefined,
      journal:
        localStorage.getItem("currentJournal") || undefined,
      voiceNote:
        localStorage.getItem("currentVoiceNote") || undefined,
      photos: localStorage.getItem("currentPhotos")
        ? JSON.parse(localStorage.getItem("currentPhotos")!)
        : undefined,
    });
    localStorage.setItem(
      "gardenFlowers",
      JSON.stringify(garden),
    );
    [
      "currentJournal",
      "urgeItem",
      "currentWhoFor",
      "currentEmotion",
      "purchaseCost",
      "currentVoiceNote",
      "currentPhotos",
    ].forEach((k) => localStorage.removeItem(k));
    localStorage.setItem(
      "boughtAnyway",
      bought ? "true" : "false",
    );

    const bd = JSON.parse(
      localStorage.getItem("bloomData") ||
        '{"totalSaved":0,"flowersGrown":0,"currentStreak":0,"totalEntries":0}',
    );
    bd.totalSaved = (bd.totalSaved || 0) + cost;
    bd.flowersGrown = (bd.flowersGrown || 0) + 1;
    bd.totalEntries = (bd.totalEntries || 0) + 1;
    if (!bought) bd.currentStreak = (bd.currentStreak || 0) + 1;
    localStorage.setItem("bloomData", JSON.stringify(bd));
    setTimeout(() => navigate("/success"), 700);
  }

  // z-index map: sort by y% (deeper = in front), then id (newer = in front)
  const zMap = buildZIndexMap(
    existingFlowers.map((f) => ({
      id: f.id,
      sortY: flowerPct(f).y,
    })),
  );

  const previewSize = pos
    ? flowerSize(pos.y, scale)
    : flowerSize(50, scale);

  return (
    <div
      className="fixed inset-0"
      style={{
        background: BG,
        fontFamily: BODY,
        userSelect: "none",
        color: TEAL,
        touchAction: "none",
      }}
    >
      {/* ── Full-bleed canvas ── */}
      <div
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          cursor:
            planted || phase !== "idle"
              ? "default"
              : "crosshair",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Existing flowers — dimmed */}
        {existingFlowers.map((f) => {
          const tilt = ((f.id % 9) - 4) * 4;
          const { x: xPct, y: yPct } = flowerPct(f);
          const sz = flowerSize(yPct, f.scale ?? 1.0);
          const shW = Math.round(sz * 0.62);
          const shH = Math.round(shW * 0.1);
          return (
            <div
              key={f.id}
              className="absolute pointer-events-none flex flex-col items-center"
              style={{
                left: `${xPct}%`,
                top: `${yPct}%`,
                // Center anchor, upright — matches Garden + preview
                transform: "translate(-50%, -50%)",
                opacity: 0.4,
                lineHeight: 0,
                zIndex: zMap.get(f.id) ?? 1,
              }}
            >
              {f.drawing ? (
                <div
                  style={{
                    position: "relative",
                    width: sz,
                    height: "auto",
                  }}
                >
                  <img
                    src={f.drawing}
                    alt=""
                    style={{
                      width: sz,
                      height: "auto",
                      display: "block",
                    }}
                  />
                  {f.state === "wilted" && (
                    <ScribbleOverlay size={sz} />
                  )}
                </div>
              ) : (
                <div
                  style={{
                    width: sz * 0.6,
                    height: sz * 0.6,
                    borderRadius: "50%",
                    background: `${f.emotion?.hex || "#4DAA57"}55`,
                  }}
                />
              )}
              {/* Ground shadow — same as the Garden */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "58%",
                  transform: "translateX(-38%)",
                  width: shW,
                  height: shH,
                  borderRadius: "50%",
                  background: "rgba(0,30,15,0.07)",
                  filter: "blur(1px)",
                  zIndex: 1,
                }}
              />
            </div>
          );
        })}

        {/* Preview — outer plain div owns the centering transform (framer
            on the inner element must not manage transform), so the preview
            anchors EXACTLY like the garden flower. */}
        <AnimatePresence>
          {pos && (
            <div
              key="preview"
              className="absolute pointer-events-none"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: "translate(-50%, -50%)",
                lineHeight: 0,
                zIndex: 99999,
              }}
            >
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{
                  scale: planted ? [1, 1.15, 1] : 1,
                  opacity: 1,
                }}
                transition={
                  planted
                    ? { duration: 0.45, times: [0, 0.5, 1] }
                    : {
                        type: "spring",
                        stiffness: 420,
                        damping: 28,
                      }
                }
                className="relative flex flex-col items-center"
                style={{ lineHeight: 0 }}
              >
                {drawing ? (
                  <div
                    style={{
                      position: "relative",
                      width: previewSize,
                      height: "auto",
                    }}
                  >
                    <img
                      src={drawing}
                      alt="flower"
                      style={{
                        width: previewSize,
                        height: "auto",
                        display: "block",
                        filter: wilting
                          ? "grayscale(0.8) brightness(0.65)"
                          : "drop-shadow(4px 6px 10px rgba(28,46,42,0.22))",
                      }}
                    />
                    {wilting && (
                      <ScribbleOverlay
                        size={previewSize}
                        animate
                      />
                    )}
                  </div>
                ) : (
                  <div
                    style={{
                      width: previewSize * 0.6,
                      height: previewSize * 0.6,
                      borderRadius: "50%",
                      background: `${moodHex}88`,
                    }}
                  />
                )}
                {/* Ground shadow — same as the Garden, marks the spot */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "58%",
                    transform: "translateX(-38%)",
                    width: Math.round(previewSize * 0.62),
                    height: Math.round(
                      previewSize * 0.62 * 0.1,
                    ),
                    borderRadius: "50%",
                    background: "rgba(0,30,15,0.07)",
                    filter: "blur(1px)",
                    zIndex: 1,
                  }}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Floating header — constrained width, click-through ── */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none flex justify-center">
        <div className="w-full" style={{ maxWidth: 480 }}>
          {/* Item name badge */}
          {urgeItem ? (
            <div className="flex items-center gap-2 px-4 pt-5 pb-1">
              <span
                style={{
                  fontFamily: HEAD,
                  fontSize: 13,
                  color: "rgba(28,46,42,0.45)",
                  letterSpacing: "0.04em",
                }}
              >
                placing ·{" "}
              </span>
              <span
                style={{
                  fontFamily: HEAD,
                  fontSize: 15,
                  color: TEAL,
                  letterSpacing: "0.02em",
                }}
              >
                {urgeItem.length > 28
                  ? urgeItem.slice(0, 28) + "…"
                  : urgeItem}
              </span>
            </div>
          ) : null}
          <GardenHeader
            selectedDate={new Date()}
            onSelectDate={() => {}}
            flowersByDate={flowersByDate}
            daySaved={daySaved}
            daySpent={daySpent}
            isToday={true}
          />
        </div>
      </div>

      {/* ── Hint pill ── */}
      <div
        className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-30"
        style={{ paddingTop: 90 }}
      >
        <div
          className="rounded-full px-4 py-1.5"
          style={{
            background: "rgba(250,250,250,0.88)",
            border: "1px solid rgba(32,70,84,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p
            style={{
              fontFamily: HEAD,
              fontStyle: "italic",
              fontSize: 13,
              color: TEAL,
            }}
          >
            {phase !== "idle"
              ? "almost there…"
              : pos
                ? dragging
                  ? "drag to adjust…"
                  : "looking good?"
                : "drag your flower into place"}
          </p>
        </div>
      </div>

      {/* ── Bottom bar: [size icon] ──────────── [plant here] ── */}
      <style>{`
        .vslider{-webkit-appearance:none;appearance:none;writing-mode:vertical-lr;direction:rtl;width:4px;height:120px;border-radius:99px;outline:none;cursor:pointer}
        .vslider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#1C2E2A;cursor:pointer;box-shadow:0 1px 6px rgba(28,46,42,0.4)}
        .vslider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#1C2E2A;border:none;cursor:pointer}
      `}</style>
      <div
        className="absolute left-0 right-0 z-30 flex items-end justify-between"
        style={{
          bottom: 28,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Size icon + vertical slider popover */}
        <div
          className="flex flex-col items-center gap-2"
          style={{ position: "relative" }}
        >
          <AnimatePresence>
            {showSize && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.9 }}
                transition={{
                  type: "spring",
                  damping: 24,
                  stiffness: 340,
                }}
                className="absolute flex flex-col items-center gap-2 rounded-2xl px-3 py-4"
                style={{
                  bottom: 52,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(252,252,252,0.96)",
                  border: "1px solid rgba(32,70,84,0.1)",
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 8px 32px rgba(28,46,42,0.12)",
                }}
              >
                <span
                  style={{
                    fontFamily: BODY,
                    fontSize: 10,
                    color: TEAL,
                    letterSpacing: "0.06em",
                  }}
                >
                  {Math.round(scale * 100)}%
                </span>
                <input
                  type="range"
                  min={40}
                  max={300}
                  step={5}
                  value={Math.round(scale * 100)}
                  onChange={(e) =>
                    setScale(parseInt(e.target.value) / 100)
                  }
                  className="vslider"
                  style={{
                    background: `linear-gradient(to top, ${TEAL} ${((scale - 0.4) / (3 - 0.4)) * 100}%, rgba(32,70,84,0.15) ${((scale - 0.4) / (3 - 0.4)) * 100}%)`,
                  }}
                />
                <button
                  onClick={() =>
                    setScale((s) =>
                      Math.max(
                        0.4,
                        parseFloat((s - 0.1).toFixed(2)),
                      ),
                    )
                  }
                >
                  <Minus
                    style={{
                      width: 12,
                      height: 12,
                      color: TEAL,
                    }}
                  />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setShowSize((v) => !v)}
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: showSize
                ? TEAL
                : "rgba(252,252,252,0.94)",
              border: "1px solid rgba(32,70,84,0.12)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 16px rgba(28,46,42,0.1)",
            }}
          >
            <Maximize2
              style={{
                width: 16,
                height: 16,
                color: showSize ? "#FAFAFA" : TEAL,
              }}
            />
          </button>
        </div>

        {/* Plant here button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handlePlantHere}
          disabled={!pos || planted || phase !== "idle"}
          className="py-4 px-8 rounded-2xl"
          style={{
            background:
              pos && !planted && phase === "idle"
                ? TEAL
                : "rgba(32,70,84,0.07)",
            color:
              pos && !planted && phase === "idle"
                ? "#FAFAFA"
                : "rgba(32,70,84,0.3)",
            fontFamily: BODY,
            fontSize: 13,
            letterSpacing: "0.06em",
            border: "1px solid rgba(32,70,84,0.1)",
            backdropFilter: "blur(8px)",
            transition: "background 0.25s, color 0.25s",
          }}
        >
          {planted
            ? "blooming…"
            : pos
              ? "plant here"
              : "drag first"}
        </motion.button>
      </div>

      {/* ── Decision modal ── */}
      <AnimatePresence>
        {(phase === "asking" || phase === "wilting") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-end justify-center px-4 pb-8"
            style={{
              zIndex: 100000,
              background: "rgba(250,250,250,0.85)",
              backdropFilter: "blur(12px)",
            }}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 300,
              }}
              className="w-full max-w-sm rounded-3xl p-7"
              style={{
                background: "#FAFAFA",
                boxShadow: "0 24px 72px rgba(28,46,42,0.18)",
                border: "1px solid rgba(28,46,42,0.08)",
              }}
            >
              {phase === "wilting" ? (
                <div className="flex flex-col items-center gap-4 py-4">
                  <motion.div
                    animate={{
                      scale: [1, 0.85, 0.7],
                      rotate: [0, -6, -14],
                    }}
                    transition={{
                      duration: 1.4,
                      ease: "easeIn",
                    }}
                  >
                    <WiltSVG />
                  </motion.div>
                  <p
                    style={{
                      fontFamily: HEAD,
                      fontStyle: "italic",
                      fontSize: 15,
                      color: "rgba(28,46,42,0.35)",
                    }}
                  >
                    withering…
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: `${moodHex}22`,
                        border: `1.5px solid ${moodHex}44`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: moodHex,
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: HEAD,
                        fontSize: 17,
                        color: TEAL,
                        lineHeight: 1.3,
                      }}
                    >
                      You drew through the urge.
                    </p>
                  </div>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: 12,
                      color: "rgba(28,46,42,0.55)",
                      lineHeight: 1.8,
                      marginBottom: 24,
                      letterSpacing: "0.03em",
                    }}
                  >
                    That took real awareness. Are you still
                    going to make this purchase?
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => plantNow(false)}
                      className="w-full py-4 rounded-2xl"
                      style={{
                        background: TEAL,
                        color: "#FAFAFA",
                        fontFamily: BODY,
                        fontSize: 13,
                        letterSpacing: "0.08em",
                        boxShadow:
                          "0 6px 20px rgba(32,70,84,0.28)",
                      }}
                    >
                      No — I don't have to
                    </button>
                    <button
                      onClick={() => {
                        setPhase("wilting");
                        setTimeout(() => plantNow(true), 1600);
                      }}
                      className="w-full py-4 rounded-2xl"
                      style={{
                        background: "rgba(32,70,84,0.07)",
                        color: TEAL,
                        fontFamily: BODY,
                        fontSize: 12,
                        letterSpacing: "0.05em",
                        border: "1px solid rgba(32,70,84,0.1)",
                      }}
                    >
                      Yes — I'm buying it
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}