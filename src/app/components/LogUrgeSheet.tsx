import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import svgPaths from "../../imports/Container-1/svg-bn934pb3bw";
import imgGrain from "../../imports/Container-1/cbba9115fb590daa573bfb2aaaad974c0e3c5db0.png";

const HEAD = "'Passion One', sans-serif";
const BODY = "'Slabo 13px', serif";
const INK = "#1C2E2A";
const FOREST = "#4DAA57";
const BLUE = "#4DAA57";
const DIVIDER = "rgba(77,170,87,0.2)";

// ── Date helpers ──────────────────────────────────────────────────────────────

function getISOWeek(d: Date) {
  const jan4 = new Date(d.getFullYear(), 0, 4);
  const startOfWeek1 = new Date(jan4);
  startOfWeek1.setDate(
    jan4.getDate() - ((jan4.getDay() + 6) % 7),
  );
  return Math.ceil(
    ((d.getTime() - startOfWeek1.getTime()) / 86400000 + 1) / 7,
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function WaveIcon({ s }: { s: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      className="size-[15px] shrink-0"
    >
      <path
        d={svgPaths.p202b3b80}
        stroke={s}
        strokeLinecap="round"
        strokeWidth="0.875"
      />
      <path
        d={svgPaths.p15be5a20}
        stroke={s}
        strokeLinecap="round"
        strokeWidth="0.875"
      />
      <path
        d={svgPaths.p9128380}
        stroke={s}
        strokeLinecap="round"
        strokeWidth="0.875"
      />
    </svg>
  );
}
function SunIcon({ s }: { s: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      className="size-[15px] shrink-0"
    >
      <g clipPath="url(#sc)">
        <path
          d="M7.5 1.25V3.75"
          stroke={s}
          strokeLinecap="round"
          strokeWidth="0.875"
        />
        <path
          d="M7.5 11.25V13.75"
          stroke={s}
          strokeLinecap="round"
          strokeWidth="0.875"
        />
        <path
          d="M1.25 7.5H3.75"
          stroke={s}
          strokeLinecap="round"
          strokeWidth="0.875"
        />
        <path
          d="M11.25 7.5H13.75"
          stroke={s}
          strokeLinecap="round"
          strokeWidth="0.875"
        />
        <path
          d="M3.0625 3.0625L4.875 4.875"
          stroke={s}
          strokeLinecap="round"
          strokeWidth="0.875"
        />
        <path
          d={svgPaths.p1a893400}
          stroke={s}
          strokeLinecap="round"
          strokeWidth="0.875"
        />
        <path
          d="M11.9375 3.0625L10.125 4.875"
          stroke={s}
          strokeLinecap="round"
          strokeWidth="0.875"
        />
        <path
          d="M4.875 10.125L3.0625 11.9375"
          stroke={s}
          strokeLinecap="round"
          strokeWidth="0.875"
        />
      </g>
      <defs>
        <clipPath id="sc">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
function FlameIcon({ s }: { s: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      className="size-[15px] shrink-0"
    >
      <path
        d={svgPaths.p1539c900}
        stroke={s}
        strokeLinejoin="round"
        strokeWidth="0.875"
      />
      <path
        d={svgPaths.p11b58580}
        stroke={s}
        strokeLinejoin="round"
        strokeWidth="0.7"
        opacity="0.6"
      />
    </svg>
  );
}
function LinesIcon({ s }: { s: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      className="size-[15px] shrink-0"
    >
      <path
        d="M1.875 5H13.125"
        stroke={s}
        strokeLinecap="round"
        strokeWidth="0.875"
      />
      <path
        d="M1.875 8.125H13.125"
        stroke={s}
        strokeLinecap="round"
        strokeWidth="0.875"
      />
      <path
        d="M1.875 11.25H8.75"
        stroke={s}
        strokeLinecap="round"
        strokeWidth="0.875"
      />
    </svg>
  );
}
function LightningIcon({ s }: { s: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      className="size-[15px] shrink-0"
    >
      <path
        d={svgPaths.p2eaec080}
        stroke={s}
        strokeLinejoin="round"
        strokeWidth="0.875"
      />
    </svg>
  );
}
function PlantIcon({ s }: { s: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      className="size-[15px] shrink-0"
    >
      <path
        d={svgPaths.p6195900}
        stroke={s}
        strokeWidth="0.875"
      />
      <path
        d={svgPaths.p38628fc0}
        stroke={s}
        strokeLinecap="round"
        strokeWidth="0.6125"
      />
      <path d={svgPaths.p29587d00} fill={s} />
      <path
        d="M7.5 7.5L9.375 5.625"
        stroke={s}
        strokeLinecap="round"
        strokeWidth="0.7"
      />
    </svg>
  );
}
function MyselfIcon({ s }: { s: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 18 18"
      className="size-[16px] shrink-0"
    >
      <path
        d={svgPaths.pe034900}
        stroke={s}
        strokeWidth="1.2"
      />
      <path
        d={svgPaths.p2b850098}
        stroke={s}
        strokeLinecap="round"
        strokeWidth="1.2"
      />
    </svg>
  );
}
function SomeoneElseIcon({ s }: { s: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 18 18"
      className="size-[16px] shrink-0"
    >
      <path
        d={svgPaths.p22de8600}
        stroke={s}
        strokeWidth="1.125"
      />
      <path
        d={svgPaths.p1dd1200}
        stroke={s}
        strokeWidth="1.125"
        opacity="0.6"
      />
      <path
        d={svgPaths.pd727890}
        stroke={s}
        strokeLinecap="round"
        strokeWidth="1.125"
      />
      <path
        d={svgPaths.p76bb780}
        stroke={s}
        strokeLinecap="round"
        strokeWidth="1.125"
        opacity="0.6"
      />
    </svg>
  );
}
function FutureMeIcon({ s }: { s: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 18 18"
      className="size-[16px] shrink-0"
    >
      <path
        d={svgPaths.p3077bf80}
        stroke={s}
        strokeWidth="1.2"
      />
      <path
        d="M9 5.25V9L11.625 11.625"
        stroke={s}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <path
        d="M12 3H15V6"
        stroke={s}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.05"
      />
      <path
        d="M11.25 3.75L15 3"
        stroke={s}
        strokeLinecap="round"
        strokeWidth="1.05"
      />
    </svg>
  );
}
function CameraIcon({ s }: { s: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 20 20"
      className="size-[18px] shrink-0"
    >
      <path
        d={svgPaths.p12a85900}
        stroke={s}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.04167"
      />
      <path
        d={svgPaths.p380a7500}
        stroke={s}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.04167"
      />
    </svg>
  );
}

// ── Radio ─────────────────────────────────────────────────────────────────────

function EmotionRadio({
  selected,
  color,
}: {
  selected: boolean;
  color: string;
}) {
  return (
    <div
      className="relative rounded-full shrink-0 size-[18px] flex items-center justify-center"
      style={{
        background: "rgba(255,255,255,0)",
        border: `1.5px solid ${selected ? color : DIVIDER}`,
      }}
    >
      {selected && (
        <div
          className="rounded-full size-[9px]"
          style={{ background: color }}
        />
      )}
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const EMOTIONS: {
  name: string;
  color: string;
  Icon: (p: { s: string }) => JSX.Element;
}[] = [
    { name: "Stressed", color: FOREST, Icon: WaveIcon },
    { name: "FOMO", color: BLUE, Icon: SunIcon },
    { name: "Craving", color: "#D4708A", Icon: FlameIcon },
    { name: "Bored", color: "#D97706", Icon: LinesIcon },
    { name: "Excited", color: "#E07B39", Icon: LightningIcon },
    { name: "Intentional", color: "#5A9469", Icon: PlantIcon },
  ];

const FOR_OPTIONS = [
  { id: "myself", label: "myself", Icon: MyselfIcon },
  {
    id: "someone-else",
    label: "someone else",
    Icon: SomeoneElseIcon,
  },
  { id: "future-me", label: "future me", Icon: FutureMeIcon },
];

function SectionLabel({ text }: { text: string }) {
  return (
    <p
      style={{
        fontFamily: BODY,
        fontSize: 7.5,
        letterSpacing: "1.2px",
        color: FOREST,
        textTransform: "uppercase" as const,
        marginBottom: 8,
      }}
    >
      {text}
    </p>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

function AutoSizeInput({
  value,
  onChange,
  onKeyDown,
  placeholder,
  className,
  style,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => void;
  placeholder: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="relative inline-block min-w-[16px]">
      <span
        className={className}
        style={{
          ...style,
          visibility: "hidden",
          whiteSpace: "pre",
          display: "inline-block",
        }}
      >
        {value || placeholder}
      </span>
      <input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        inputMode="decimal"
        className={`absolute inset-0 w-full h-full bg-transparent outline-none ${className}`}
        style={style}
      />
    </div>
  );
}

export function LogUrgeSheet({
  onClose,
}: {
  onClose: () => void;
}) {
  const navigate = useNavigate();
  const now = new Date();
  const week = getISOWeek(now);
  const dateLabel = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const entryNo = (() => {
    try {
      const stored = localStorage.getItem("gardenFlowers");
      const flowers = stored ? JSON.parse(stored) : [];
      return Array.isArray(flowers) ? flowers.length + 1 : 1;
    } catch {
      return 1;
    }
  })();

  const [itemName, setItemName] = useState("");
  const [tokens, setTokens] = useState<
    (
      | { id: string; type: "number"; value: string }
      | { id: string; type: "operator"; value: string }
    )[]
  >([{ id: "init", type: "number", value: "" }]);
  const [activeOperatorIdx, setActiveOperatorIdx] = useState<
    number | null
  >(null);
  const [emotion, setEmotion] = useState<string>("");
  const [buyingFor, setBuyingFor] = useState("myself");
  const [notes, setNotes] = useState("");
  const [imageFiles, setImageFiles] = useState<string[]>([]);

  const fileRef = useRef<HTMLInputElement>(null);

  const totalCost = (() => {
    const expr = tokens
      .map((t) => {
        if (t.type === "number") {
          const val = parseFloat(t.value);
          return isNaN(val) ? 0 : val;
        }
        return t.value;
      })
      .join(" ");
    try {
      // eslint-disable-next-line no-new-func
      const res = new Function("return " + expr)();
      return typeof res === "number" && !isNaN(res) ? res : 0;
    } catch {
      return 0;
    }
  })();

  function updateNumber(i: number, val: string) {
    setTokens((prev) => {
      const copy = [...prev];
      copy[i] = {
        ...copy[i],
        value: val.replace(/[^0-9.]/g, ""),
      };
      return copy;
    });
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    i: number,
  ) {
    if (
      e.key === "Backspace" &&
      tokens[i].value === "" &&
      i > 0
    ) {
      setTokens((prev) => {
        const copy = [...prev];
        copy.splice(i - 1, 2);
        return copy;
      });
    }
  }

  function appendOperator() {
    setTokens((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "operator",
        value: "+",
      },
      {
        id: Math.random().toString(),
        type: "number",
        value: "",
      },
    ]);
  }

  function handleOperatorSelect(i: number, op: string) {
    if (op === "=") {
      setTokens([
        {
          id: Math.random().toString(),
          type: "number",
          value: parseFloat(totalCost.toFixed(2)).toString(),
        },
      ]);
      setActiveOperatorIdx(null);
    } else {
      setTokens((prev) => {
        const copy = [...prev];
        copy[i] = { ...copy[i], value: op };
        return copy;
      });
      setActiveOperatorIdx(null);
    }
  }

  const canSubmit = itemName.trim().length > 0;

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-end justify-center md:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(26,36,32,0.22)" }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full overflow-hidden rounded-t-[24px] md:rounded-[20px] md:max-w-[440px] md:mx-auto"
        style={{ background: "rgba(250,250,250,0.98)" }}
        initial={{ y: "100%", scale: 1 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: "100%", scale: 1 }}
        transition={{
          type: "spring",
          damping: 32,
          stiffness: 300,
        }}
      >
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${imgGrain})`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            opacity: 0.2,
            mixBlendMode: "multiply",
          }}
        />

        <div className="relative z-10 flex flex-col">
          {/* Handle pill — mobile only */}
          <div className="flex justify-center pt-2 pb-0 md:hidden">
            <div
              className="w-8 h-[3px] rounded-full"
              style={{ background: DIVIDER }}
            />
          </div>

          {/* ── Header: week / date / close ── */}
          <div className="flex items-start justify-between px-5 pt-6 pb-2">
            <div>
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: 8,
                  letterSpacing: "1.6px",
                  color: FOREST,
                  textTransform: "uppercase",
                }}
              >
                {`Week ${week} — Entry No. ${entryNo}`}
              </p>
              <p
                style={{
                  fontFamily: HEAD,
                  fontSize: 26,
                  letterSpacing: "-0.39px",
                  color: INK,
                  lineHeight: "28.6px",
                  marginTop: 6,
                }}
              >
                {dateLabel}
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-1 flex items-center justify-center rounded-full size-7 shrink-0"
              style={{
                background: "rgba(60,50,40,0.07)",
                border: `1px solid ${DIVIDER}`,
              }}
            >
              <svg
                fill="none"
                viewBox="0 0 16 16"
                className="size-3.5"
              >
                <path
                  d="M12 4L4 12"
                  stroke={FOREST}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <path
                  d="M4 4L12 12"
                  stroke={FOREST}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
              </svg>
            </button>
          </div>

          {/* ── Polaroid Preview ── */}
          {imageFiles.length > 0 && (
            <div className="px-5 py-3">
              <div className="relative h-[90px]">
                {imageFiles.map((img, index) => (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${index * 38}px`,
                      transform: `rotate(${index * 4 - 4}deg)`,
                      zIndex: index + 1,
                    }}
                  >
                    <div className="relative bg-white p-1 rounded-[6px] shadow-lg">
                      <img
                        src={img}
                        alt=""
                        className="w-[70px] h-[70px] object-cover rounded"
                      />

                      <button
                        onClick={() =>
                          setImageFiles((prev) =>
                            prev.filter((_, i) => i !== index),
                          )
                        }
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#1C2E2A] text-white flex items-center justify-center text-[10px]"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── I want to buy ── */}
          <div className="px-5 pt-2">
            <p
              style={{
                fontFamily: BODY,
                fontSize: 7.5,
                letterSpacing: "1.2px",
                color: FOREST,
                textTransform: "uppercase" as const,
                marginBottom: 3,
              }}
            >
              i want to buy
            </p>
            <div className="flex items-center gap-3">
              <input
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="new headphones…"
                className="flex-1 bg-transparent outline-none"
                style={{
                  fontFamily: BODY,
                  fontSize: 16,
                  color: itemName ? INK : "rgba(26,36,32,0.45)",
                  caretColor: BLUE,
                }}
              />
              <input
                ref={fileRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  files.forEach((file) => {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                      const img = new Image();
                      img.onload = () => {
                        const canvas = document.createElement("canvas");
                        const MAX_SIZE = 400;
                        let { width, height } = img;
                        if (width > height) {
                          if (width > MAX_SIZE) {
                            height = Math.round((height * MAX_SIZE) / width);
                            width = MAX_SIZE;
                          }
                        } else {
                          if (height > MAX_SIZE) {
                            width = Math.round((width * MAX_SIZE) / height);
                            height = MAX_SIZE;
                          }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext("2d");
                        ctx?.drawImage(img, 0, 0, width, height);
                        const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
                        setImageFiles((prev) => [...prev, dataUrl]);
                      };
                      img.src = ev.target?.result as string;
                    };
                    reader.readAsDataURL(file);
                  });
                  e.target.value = "";
                }}
              />
              <button
                onClick={() => fileRef.current?.click()}
                className="shrink-0 flex flex-col items-center justify-center gap-1 rounded-[12px] px-3 py-2"
                style={{ background: "rgba(60,50,40,0.06)" }}
              >
                <CameraIcon s={FOREST} />
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: 6.5,
                    color: FOREST,
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {imageFiles.length > 0
                    ? `${imageFiles.length} images`
                    : "Upload image"}
                </p>
              </button>
            </div>
          </div>

          {/* ── It costs ── */}
          <div className="px-5 py-2">
            <SectionLabel text="it costs" />
            <div className="flex flex-wrap items-center gap-2">
              <span
                style={{
                  fontFamily: HEAD,
                  fontSize: 18,
                  color: FOREST,
                }}
              >
                ₹
              </span>
              {tokens.map((tok, i) => {
                if (tok.type === "number") {
                  return (
                    <AutoSizeInput
                      key={tok.id}
                      value={tok.value}
                      onChange={(e) =>
                        updateNumber(i, e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      placeholder="0"
                      className="text-center"
                      style={{
                        fontFamily: HEAD,
                        fontSize: 18,
                        color: tok.value
                          ? INK
                          : "rgba(26,36,32,0.38)",
                        caretColor: BLUE,
                      }}
                    />
                  );
                } else {
                  return (
                    <div key={tok.id} className="relative">
                      <button
                        onClick={() =>
                          setActiveOperatorIdx(
                            activeOperatorIdx === i ? null : i,
                          )
                        }
                        className="flex items-center justify-center size-6 rounded-full"
                        style={{
                          background: "rgba(60,50,40,0.06)",
                          color: FOREST,
                          fontFamily: HEAD,
                          fontSize: 16,
                        }}
                      >
                        {tok.value}
                      </button>
                      {activeOperatorIdx === i && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col shadow-xl rounded-xl overflow-hidden z-[99]"
                          style={{
                            background: "#FAFAFA",
                            border:
                              "1px solid rgba(77,170,87,0.2)",
                            width: "40px",
                          }}
                        >
                          {["+", "-", "*", "/", "="].map(
                            (op) => (
                              <button
                                key={op}
                                onClick={() =>
                                  handleOperatorSelect(i, op)
                                }
                                className="w-full py-2 text-center transition-colors"
                                onMouseEnter={(e) =>
                                (e.currentTarget.style.background =
                                  "rgba(77,170,87,0.08)")
                                }
                                onMouseLeave={(e) =>
                                (e.currentTarget.style.background =
                                  "transparent")
                                }
                                style={{
                                  fontFamily: HEAD,
                                  fontSize: 16,
                                  color:
                                    op === "=" ? BLUE : INK,
                                  borderBottom:
                                    op !== "="
                                      ? "1px solid rgba(0,0,0,0.05)"
                                      : "none",
                                }}
                              >
                                {op}
                              </button>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  );
                }
              })}
              <button
                onClick={appendOperator}
                className="flex items-center justify-center size-6 rounded-full"
                style={{
                  color: FOREST,
                  fontFamily: HEAD,
                  background: "rgba(60,50,40,0.06)",
                  fontSize: 18,
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* ── What's stirring? — single-select radio 3×2 ── */}
          <div className="px-5 py-2">
            <SectionLabel text="what's stirring?" />
            <div
              className="grid gap-x-6"
              style={{
                gridTemplateColumns:
                  "repeat(3, minmax(0, 1fr))",
                gridTemplateRows:
                  "repeat(2, fit-content(100%))",
              }}
            >
              {EMOTIONS.map(({ name, color, Icon }) => {
                const sel = emotion === name;
                return (
                  <button
                    key={name}
                    onClick={() => setEmotion(sel ? "" : name)}
                    className="flex gap-2 items-center py-[10px]"
                  >
                    <EmotionRadio
                      selected={sel}
                      color={color}
                    />
                    <div className="flex gap-1 items-center">
                      <Icon s={sel ? color : "#6b6058"} />
                      <span
                        style={{
                          fontFamily: BODY,
                          fontSize: 10,
                          fontWeight: sel ? 600 : 500,
                          color: sel ? color : "#6b6058",
                          letterSpacing: "0.225px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Buying for ── */}
          <div className="px-5 py-2">
            <SectionLabel text="buying for" />
            <div className="grid grid-cols-3 gap-1.5">
              {FOR_OPTIONS.map(({ id, label, Icon }) => {
                const sel = buyingFor === id;
                return (
                  <button
                    key={id}
                    onClick={() => setBuyingFor(id)}
                    className="flex flex-col items-center gap-1.5 rounded-[12px] py-3 px-1 transition-all"
                    style={{
                      background: sel
                        ? INK
                        : "rgba(255,255,255,0.5)",
                      border: `1px solid ${sel ? INK : DIVIDER}`,
                    }}
                  >
                    <Icon s={sel ? "#FAFAFA" : FOREST} />
                    <span
                      style={{
                        fontFamily: BODY,
                        fontSize: 7,
                        fontWeight: 500,
                        color: sel
                          ? "rgba(240,237,232,0.85)"
                          : "#6b6058",
                        letterSpacing: "0.4px",
                        textTransform: "uppercase" as const,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── What's on your mind? ── */}
          <div className="px-5 py-3">
            <SectionLabel text="what's on your mind?" />
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="write freely here…"
              rows={2}
              className="w-full bg-transparent outline-none resize-none"
              style={{
                fontFamily: BODY,
                // 16px min prevents iOS Safari from auto-zooming on focus
                fontSize: 16,
                lineHeight: "22px",
                color: notes ? INK : "rgba(26,36,32,0.45)",
                caretColor: BLUE,
              }}
            />
          </div>

          {/* ── Log it ── */}
          <div className="px-5 pt-2 pb-5">
            <button
              onClick={() => {
                if (canSubmit) {
                  localStorage.setItem("urgeItem", itemName.trim());
                  localStorage.setItem(
                    "currentPhotos",
                    JSON.stringify(imageFiles),
                  );
                  localStorage.setItem(
                    "purchaseCost",
                    totalCost.toFixed(2),
                  );
                  localStorage.setItem(
                    "currentWhoFor",
                    buyingFor,
                  );

                  // Always overwrite old journal value
                  localStorage.removeItem("currentJournal");
                  localStorage.setItem("currentJournal", notes);

                  const em =
                    EMOTIONS.find((e) => e.name === emotion) ??
                    EMOTIONS[0];

                  localStorage.setItem(
                    "currentEmotion",
                    JSON.stringify({
                      name: em.name,
                      hex: em.color,
                    }),
                  );

                  onClose();
                  navigate("/draw");
                }
              }}
              className="w-full flex items-center justify-between rounded-[18px] px-5 py-3.5 transition-all"
              style={{
                background: canSubmit
                  ? INK
                  : "rgba(26,36,32,0.4)",
                opacity: canSubmit ? 1 : 0.35,
              }}
            >
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#FAFAFA",
                  letterSpacing: "1.6px",
                  textTransform: "uppercase" as const,
                }}
              >
                log it
              </span>
              <div
                className="rounded-[5px] size-[9px]"
                style={{
                  background: BLUE,
                  boxShadow: `0 0 10px 0 ${BLUE}`,
                }}
              />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}