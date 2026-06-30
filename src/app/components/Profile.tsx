import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";

import imgExcited    from "../../imports/1.png";
import imgIntentional from "../../imports/2.png";
import imgBored      from "../../imports/3.png";
import imgFOMO       from "../../imports/4.png";
import imgStressed   from "../../imports/5.png";
import imgCraving    from "../../imports/6.png";

// ── Fonts ─────────────────────────────────────────────────────────────────────
const HEAD  = "'Passion One', sans-serif";   // headers
const BODY  = "'Slabo 13px', serif";          // everything else

// ── Palette ───────────────────────────────────────────────────────────────────
const TEAL  = "#1C2E2A";
const GREEN = "#4DAA57";
const OLIVE = "#4DAA57";
const RED   = "#C0463A";
const BG    = "#FAFAFA";
const MUTED = "rgba(28,46,42,0.42)";

// Emotion → image
const EMOTION_IMG: Record<string, string> = {
  Excited:     imgExcited,
  Intentional: imgIntentional,
  Bored:       imgBored,
  FOMO:        imgFOMO,
  Stressed:    imgStressed,
  Craving:     imgCraving,
};

// Watercolor band behind chart
const BAND_FILL: Record<string, string> = {
  Stressed:    "rgba(192,70,58,0.22)",
  Bored:       "rgba(212,168,83,0.18)",
  Excited:     "rgba(77,170,87,0.18)",
  Intentional: "rgba(106,181,169,0.18)",
  FOMO:        "rgba(155,114,207,0.18)",
  Craving:     "rgba(212,134,74,0.20)",
};
const BAND_LABEL: Record<string, string> = {
  Stressed:    "#C0463A",
  Bored:       "#C49A30",
  Excited:     "#4DAA57",
  Intentional: "#4A9A8E",
  FOMO:        "#7B52B0",
  Craving:     "#C4663A",
};

// ── Types ─────────────────────────────────────────────────────────────────────
type DayData = {
  day: number;
  date: Date;
  saved: number;
  spent: number;
  emotion: string;
  flowers: any[];
};

// ── Smooth-curve helper ───────────────────────────────────────────────────────
function smoothLine(pts: [number, number][]): string {
  if (pts.length < 2) return "";
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const cx = (x0 + x1) / 2;
    d += ` C${cx.toFixed(1)},${y0.toFixed(1)} ${cx.toFixed(1)},${y1.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;
  }
  return d;
}

// ── Pattern Chart ─────────────────────────────────────────────────────────────
// Y-axis always shows: 0 → 500 → 1000 → 2000
const Y_TICKS = [0, 500, 1000, 2000];

function PatternChart({ days }: { days: DayData[] }) {
  const W  = 340;
  const H  = 210;
  const pL = 46;   // wider left margin for $ labels
  const pR = 10;
  const pT = 12;
  const pB = 24;
  const cW = W - pL - pR;
  const cH = H - pT - pB;
  const n  = days.length || 1;
  const colW = cW / n;

  const maxY = 2000; // fixed scale top
  const toX  = (i: number) => pL + i * colW + colW / 2;
  const toY  = (v: number) => pT + cH - Math.min(v, maxY) / maxY * cH;
  const baseY = pT + cH;

  const savedPts = days.map((d, i): [number, number] => [toX(i), toY(d.saved)]);
  const spentPts = days.map((d, i): [number, number] => [toX(i), toY(d.spent)]);

  const savedPath = smoothLine(savedPts);
  const spentPath = smoothLine(spentPts);

  const savedArea = savedPath
    ? `${savedPath} L${toX(n - 1).toFixed(1)},${baseY} L${toX(0).toFixed(1)},${baseY} Z`
    : "";
  const spentArea = spentPath
    ? `${spentPath} L${toX(n - 1).toFixed(1)},${baseY} L${toX(0).toFixed(1)},${baseY} Z`
    : "";

  const hasData = days.some(d => d.saved > 0 || d.spent > 0);

  // Format tick label nicely
  function fmtTick(v: number) {
    if (v === 0) return "$0";
    if (v >= 1000) return `$${v / 1000}k`;
    return `$${v}`;
  }

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${W} ${H}`}
      style={{ fontFamily: BODY, overflow: "visible" }}
    >
      <defs>
        <filter id="wc" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>

      {/* Watercolor emotion bands */}
      <g filter="url(#wc)">
        {days.map((d, i) =>
          d.emotion ? (
            <rect
              key={`band-${i}`}
              x={pL + i * colW - 1}
              y={pT}
              width={colW + 2}
              height={cH}
              fill={BAND_FILL[d.emotion] ?? "transparent"}
            />
          ) : null,
        )}
      </g>

      {/* Y-axis grid + labels */}
      {Y_TICKS.map((val) => {
        const y = toY(val);
        return (
          <g key={`ytick-${val}`}>
            <line
              x1={pL} x2={W - pR}
              y1={y} y2={y}
              stroke={val === 0 ? "rgba(28,46,42,0.12)" : "rgba(28,46,42,0.07)"}
              strokeDasharray={val === 0 ? "none" : "3 5"}
            />
            <text
              x={pL - 5}
              y={y + 3.5}
              textAnchor="end"
              fontSize={9}
              fill={MUTED}
              fontFamily={BODY}
            >
              {fmtTick(val)}
            </text>
          </g>
        );
      })}

      {/* Area fills */}
      {hasData && savedArea && (
        <path d={savedArea} fill={OLIVE} fillOpacity={0.13} />
      )}
      {hasData && spentArea && (
        <path d={spentArea} fill={RED} fillOpacity={0.1} />
      )}

      {/* Lines */}
      {hasData && savedPath && (
        <path
          d={savedPath}
          fill="none"
          stroke={OLIVE}
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {hasData && spentPath && (
        <path
          d={spentPath}
          fill="none"
          stroke={RED}
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* Active dots */}
      {hasData &&
        days.map((d, i) => {
          if (d.saved === 0 && d.spent === 0) return null;
          return (
            <g key={`dots-${i}`}>
              {d.saved > 0 && (
                <circle cx={toX(i)} cy={toY(d.saved)} r={3} fill={OLIVE} />
              )}
              {d.spent > 0 && (
                <circle cx={toX(i)} cy={toY(d.spent)} r={3} fill={RED} />
              )}
            </g>
          );
        })}

      {/* X-axis day labels */}
      {days.map((d, i) => {
        const show = i === 0 || i === n - 1 || d.day % 5 === 0;
        return show ? (
          <text
            key={`x-${d.day}`}
            x={toX(i)}
            y={H - 6}
            textAnchor="middle"
            fontSize={9}
            fill={MUTED}
            fontFamily={BODY}
          >
            {d.day}
          </text>
        ) : null;
      })}

      {/* Empty state */}
      {!hasData && (
        <text
          x={W / 2} y={H / 2}
          textAnchor="middle"
          fontSize={12}
          fill={MUTED}
          fontStyle="italic"
          fontFamily={BODY}
        >
          log urges to see patterns
        </text>
      )}
    </svg>
  );
}

// ── Monthly Mood Tracker ──────────────────────────────────────────────────────
function MoodTracker({
  days,
  year,
  month,
}: {
  days: DayData[];
  year: number;
  month: number;
}) {
  const firstDow = new Date(year, month, 1).getDay(); // 0=Sun
  const DOW = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="w-full">
      {/* Day-of-week header */}
      <div className="grid grid-cols-7 mb-1">
        {DOW.map((d, i) => (
          <div
            key={`dh-${i}`}
            className="text-center"
            style={{
              fontFamily: HEAD,
              fontSize: 11,
              color: MUTED,
              letterSpacing: "0.5px",
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {/* Empty offset */}
        {Array.from({ length: firstDow }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {days.map((d) => {
          const img = d.emotion ? EMOTION_IMG[d.emotion] : null;
          const now = new Date();
          const isToday =
            d.day === now.getDate() &&
            month === now.getMonth() &&
            year === now.getFullYear();

          return (
            <div
              key={`md-${d.day}`}
              className="flex flex-col items-center justify-center"
              style={{ minHeight: 42 }}
            >
              {img ? (
                <div className="relative flex items-center justify-center" style={{ width: 38, height: 38 }}>
                  <img
                    src={img}
                    alt={d.emotion}
                    style={{
                      width: 40,
                      height: 40,
                      objectFit: "contain",
                      filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.10))",
                    }}
                  />
                </div>
              ) : (
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 30,
                    height: 30,
                    border: isToday
                      ? `1.5px solid ${TEAL}`
                      : "1px solid rgba(28,46,42,0.09)",
                    background: isToday
                      ? "rgba(28,46,42,0.04)"
                      : "transparent",
                  }}
                >
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: 10,
                      color: isToday ? TEAL : MUTED,
                    }}
                  >
                    {d.day}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Callout card ──────────────────────────────────────────────────────────────
function Callout({
  icon,
  label,
  text,
  accent,
}: {
  icon: string;
  label: string;
  text: string;
  accent: string;
}) {
  return (
    <div
      className="w-full rounded-2xl px-5 py-4 flex flex-col gap-1.5"
      style={{
        background: "#FAFAFA",
        border: "1px solid rgba(28,46,42,0.07)",
        boxShadow: "0 1px 6px rgba(28,46,42,0.05)",
      }}
    >
      <div className="flex items-center gap-2">
        <span style={{ fontSize: 13 }}>{icon}</span>
        <span
          style={{
            fontFamily: HEAD,
            fontSize: 13,
            letterSpacing: "1px",
            color: accent,
          }}
        >
          {label.toUpperCase()}
        </span>
      </div>
      <p
        style={{
          fontFamily: BODY,
          fontSize: 14,
          color: TEAL,
          lineHeight: 1.6,
        }}
      >
        {text}
      </p>
    </div>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: HEAD,
        fontSize: 20,
        fontWeight: 700,
        color: TEAL,
        letterSpacing: "0.5px",
        marginBottom: 12,
      }}
    >
      {children}
    </h2>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export function Profile() {
  const [allFlowers, setAllFlowers] = useState<any[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("gardenFlowers");
    if (raw) {
      try { setAllFlowers(JSON.parse(raw)); } catch {}
    }
  }, []);

  const now = new Date();

  const [viewDate, setViewDate] = useState(
    new Date(now.getFullYear(), now.getMonth(), 1),
  );

  const year  = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const isCurrentMonth =
    month === now.getMonth() && year === now.getFullYear();

  function prevMonth() {
    setViewDate(new Date(year, month - 1, 1));
  }
  function goNow() {
    setViewDate(new Date(now.getFullYear(), now.getMonth(), 1));
  }

  const monthLabel = viewDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const flowers = allFlowers.filter((f) => {
    const d = new Date(f.date);
    return d.getMonth() === month && d.getFullYear() === year;
  });

  // Per-day data
  const days: DayData[] = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const df  = flowers.filter(
      (f) => new Date(f.date).getDate() === day,
    );
    let saved = 0;
    let spent = 0;
    const emCount: Record<string, number> = {};
    df.forEach((f) => {
      const em = f.emotion?.name || "";
      if (em) emCount[em] = (emCount[em] || 0) + 1;
      if (f.state === "wilted") spent += f.amount || 0;
      else saved += f.amount || 0;
    });
    const emotion =
      Object.keys(emCount).sort((a, b) => emCount[b] - emCount[a])[0] ?? "";
    return {
      day,
      date: new Date(year, month, day),
      saved,
      spent,
      emotion,
      flowers: df,
    };
  });

  // ── Callout 1: Trigger day ────────────────────────────────────────────────
  const DOW_NAMES = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
  ];
  const wiltsByDow: Record<number, { count: number; emotions: Record<string, number> }> = {};
  for (let i = 0; i < 7; i++) wiltsByDow[i] = { count: 0, emotions: {} };

  flowers.forEach((f) => {
    if (f.state === "wilted") {
      const dow = new Date(f.date).getDay();
      wiltsByDow[dow].count++;
      const em = f.emotion?.name || "Unknown";
      wiltsByDow[dow].emotions[em] = (wiltsByDow[dow].emotions[em] || 0) + 1;
    }
  });

  const totalWilts = flowers.filter((f) => f.state === "wilted").length;
  const peakDow = Number(
    Object.keys(wiltsByDow).sort(
      (a, b) => wiltsByDow[+b].count - wiltsByDow[+a].count,
    )[0],
  );
  const peakDowCount  = wiltsByDow[peakDow]?.count ?? 0;
  const peakEmotion   =
    Object.keys(wiltsByDow[peakDow]?.emotions ?? {}).sort(
      (a, b) =>
        (wiltsByDow[peakDow].emotions[b] ?? 0) -
        (wiltsByDow[peakDow].emotions[a] ?? 0),
    )[0] ?? "stressed";

  const triggerText =
    peakDowCount > 0
      ? `You spent the most on ${peakEmotion.toLowerCase()} ${DOW_NAMES[peakDow]}s. ${peakDowCount} out of ${totalWilts} wilt${totalWilts !== 1 ? "s" : ""} happened then.`
      : "Log more urges to reveal your trigger pattern.";

  // ── Callout 2: Recovery ───────────────────────────────────────────────────
  const wiltDaySet = new Set(
    flowers
      .filter((f) => f.state === "wilted")
      .map((f) => new Date(f.date).getDate()),
  );
  let recoveries  = 0;
  let wiltDayCnt  = 0;
  wiltDaySet.forEach((d) => {
    if (d < daysInMonth) {
      wiltDayCnt++;
      const nextBloom = flowers.some(
        (f) => f.state !== "wilted" && new Date(f.date).getDate() === d + 1,
      );
      if (nextBloom) recoveries++;
    }
  });
  const recoveryPct =
    wiltDayCnt > 0 ? Math.round((recoveries / wiltDayCnt) * 100) : 0;
  const recoveryText =
    wiltDayCnt > 0
      ? `After a wilt, you bloomed the next day ${recoveryPct}% of the time.`
      : "Log more to see your recovery rhythm.";

  // ── Callout 3: Gut punch ──────────────────────────────────────────────────
  const emWilt: Record<string, number> = {};
  flowers.forEach((f) => {
    if (f.state === "wilted" && (f.amount || 0) > 0) {
      const em = f.emotion?.name || "unknown";
      emWilt[em] = (emWilt[em] || 0) + (f.amount || 0);
    }
  });
  const topEm    = Object.keys(emWilt).sort((a, b) => emWilt[b] - emWilt[a])[0];
  const gutAmt   = topEm ? emWilt[topEm] : 0;
  const gutText  =
    gutAmt > 0
      ? `If every ${topEm.toLowerCase()} urge had bloomed, you'd have $${gutAmt.toFixed(0)} more this month.`
      : "No spent urges yet. Every urge so far has bloomed.";

  // Emotions present this month (for legend)
  const emotionsPresent = [
    ...new Set(days.filter((d) => d.emotion).map((d) => d.emotion)),
  ];

  return (
    <div
      className="min-h-screen flex flex-col w-full"
      style={{ background: BG, color: TEAL }}
    >
      {/* Header */}
      <div
        className="px-5 pt-7 pb-4 flex items-center justify-between shrink-0"
        style={{ borderBottom: "1px solid rgba(28,46,42,0.07)" }}
      >
        <h1
          style={{
            fontFamily: HEAD,
            fontSize: 28,
            fontWeight: 700,
            color: TEAL,
            letterSpacing: "0.5px",
          }}
        >
          PATTERNS
        </h1>

        {/* Month nav — no future allowed */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevMonth}
            className="w-8 h-8 flex items-center justify-center rounded-full"
            style={{ background: "rgba(28,46,42,0.06)" }}
          >
            <ChevronLeft size={16} color={TEAL} />
          </button>

          <span
            style={{
              fontFamily: BODY,
              fontSize: 13,
              color: TEAL,
              minWidth: 110,
              textAlign: "center" as const,
            }}
          >
            {monthLabel}
          </span>

          {!isCurrentMonth ? (
            <button
              onClick={goNow}
              style={{
                fontFamily: HEAD,
                fontSize: 11,
                background: "rgba(11,93,52,0.1)",
                color: GREEN,
                border: "1px solid rgba(11,93,52,0.2)",
                borderRadius: 999,
                padding: "2px 10px",
                letterSpacing: "0.5px",
              }}
            >
              NOW
            </button>
          ) : (
            <div style={{ width: 48 }} />
          )}
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-5 pb-32 pt-6 flex flex-col gap-10">

        {/* ── Monthly Mood Tracker ── */}
        <div>
          <SectionHead>MOOD THIS MONTH</SectionHead>
          <div
            className="w-full rounded-2xl p-4"
            style={{
              background: "#FAFAFA",
              border: "1px solid rgba(28,46,42,0.07)",
              boxShadow: "0 2px 10px rgba(28,46,42,0.05)",
            }}
          >
            <MoodTracker days={days} year={year} month={month} />
          </div>

          {/* Emotion key */}
          {emotionsPresent.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 px-1">
              {emotionsPresent.map((em) => (
                <div key={em} className="flex items-center gap-1.5">
                  <img
                    src={EMOTION_IMG[em]}
                    alt={em}
                    style={{ width: 18, height: 18, objectFit: "contain" }}
                  />
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: 11,
                      color: BAND_LABEL[em] ?? MUTED,
                    }}
                  >
                    {em}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Pattern Chart ── */}
        <div>
          <SectionHead>SPEND & SAVE</SectionHead>

          {/* Legend */}
          <div className="flex items-center gap-5 mb-3">
            <div className="flex items-center gap-1.5">
              <span
                style={{
                  display: "inline-block",
                  width: 22,
                  height: 2.5,
                  borderRadius: 2,
                  background: OLIVE,
                }}
              />
              <span style={{ fontFamily: BODY, fontSize: 11, color: MUTED }}>saved</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                style={{
                  display: "inline-block",
                  width: 22,
                  height: 2.5,
                  borderRadius: 2,
                  background: RED,
                }}
              />
              <span style={{ fontFamily: BODY, fontSize: 11, color: MUTED }}>spent</span>
            </div>

            {/* Emotion swatches */}
            {emotionsPresent.slice(0, 3).map((em) => (
              <div key={em} className="flex items-center gap-1">
                <span
                  style={{
                    display: "inline-block",
                    width: 9,
                    height: 9,
                    borderRadius: 2,
                    background: BAND_LABEL[em] ?? MUTED,
                    opacity: 0.65,
                  }}
                />
                <span
                  style={{
                    fontFamily: BODY,
                    fontSize: 10,
                    color: BAND_LABEL[em] ?? MUTED,
                  }}
                >
                  {em.toLowerCase()}
                </span>
              </div>
            ))}
          </div>

          <div
            className="w-full rounded-2xl overflow-hidden"
            style={{
              background: "#FAFAFA",
              border: "1px solid rgba(28,46,42,0.07)",
              boxShadow: "0 2px 12px rgba(28,46,42,0.05)",
              padding: "14px 6px 8px 2px",
            }}
          >
            <PatternChart days={days} />
          </div>

          <p
            className="text-center mt-2"
            style={{
              fontFamily: BODY,
              fontSize: 10,
              color: MUTED,
              letterSpacing: "0.3px",
            }}
          >
            days of{" "}
            {viewDate.toLocaleDateString("en-US", { month: "long" })}
          </p>
        </div>

        {/* ── Three callouts ── */}
        <div className="flex flex-col gap-3">
          <SectionHead>INSIGHTS</SectionHead>
          <Callout icon="📍" label="Trigger Day"  text={triggerText} accent={RED}     />
          <Callout icon="🌱" label="Recovery"     text={recoveryText} accent={GREEN}  />
          <Callout icon="💸" label="The Number"   text={gutText}      accent="#A07030" />
        </div>
      </div>
    </div>
  );
}
