import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgCloud1 from "../../imports/image-4.png";
import imgCloud2 from "../../imports/image-5.png";
import { SunShapeSvg } from "./SunShapeSvg";

const HEAD = "'Passion One', sans-serif";
const BODY = "'Slabo 13px', serif";
const INK = "#1C2E2A";
const BARK = "#1C2E2A";
const SNOW_WHITE = "#FAFAFA";
const MEDIUM_GRAY = "#F0F0F0";

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='512' height='512' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

function TypewriterText({
  text,
  delay = 0,
  speed = 0.04,
}: {
  text: string;
  delay?: number;
  speed?: number;
}) {
  const characters = Array.from(text);
  return (
    <span>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * speed,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

type Step =
  | "idle"
  | "pressing"
  | "closing_circle"
  | "clouds_in"
  | "clouds_out";

const vibrateVariants = {
  idle: { x: 0, y: 0, scale: 1 },
  pressing: {
    x: [0, -1, 1, -1, 1, 0],
    y: [0, 1, -1, 1, -1, 0],
    scale: 0.96,
    transition: {
      x: { duration: 0.15, repeat: Infinity, ease: "linear" },
      y: { duration: 0.15, repeat: Infinity, ease: "linear" },
      scale: { duration: 0.2 },
    },
  },
};

const cloud1Variants = {
  hidden: { opacity: 0, x: "-80%", y: "15%" },
  visible: { opacity: 0.9, x: "-10%", y: "15%" },
  exit: { opacity: 0, x: "-80%", y: "15%" },
};

const cloud2Variants = {
  hidden: { opacity: 0, x: "80%", y: "45%" },
  visible: { opacity: 0.8, x: "10%", y: "45%" },
  exit: { opacity: 0, x: "80%", y: "45%" },
};

export function Onboarding() {
  const navigate = useNavigate();
  const hasNavigated = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [step, setStep] = useState<Step>("idle");

  useEffect(() => {
    if (localStorage.getItem("canopy_onboarded")) {
      navigate("/garden", { replace: true });
    }
  }, [navigate]);

  function handleHoldComplete() {
    if (hasNavigated.current) return;
    setStep("closing_circle");

    // Circle closes for 0.4s (wait 500ms total), then clouds slide in
    setTimeout(() => {
      setStep("clouds_in");

      // Clouds stay on screen for 2.5s
      setTimeout(() => {
        setStep("clouds_out");

        // Dissolve to garden after clouds reverse and exit
        setTimeout(() => {
          hasNavigated.current = true;
          localStorage.setItem("canopy_onboarded", "1");
          navigate("/garden");
        }, 1800);
      }, 2500);
    }, 500);
  }

  function handlePointerDown(e: React.PointerEvent) {
    if (step !== "idle") return;
    setStep("pressing");
    timerRef.current = setTimeout(() => {
      handleHoldComplete();
    }, 2500); // Hold for 2.5 seconds
  }

  function handlePointerUp(e: React.PointerEvent) {
    if (step === "pressing") {
      setStep("idle");
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }
  }

  // Prevent context menu on long press on mobile
  useEffect(() => {
    const handleContextMenu = (e: Event) => e.preventDefault();
    window.addEventListener("contextmenu", handleContextMenu);
    return () =>
      window.removeEventListener(
        "contextmenu",
        handleContextMenu,
      );
  }, []);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-between overflow-hidden"
      style={{
        background: SNOW_WHITE,
        touchAction: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        transition: "opacity 1.5s ease",
        opacity: step === "clouds_out" ? 0 : 1, // Dissolves the whole screen at the very end
      }}
    >
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: GRAIN_SVG,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          opacity: 0.20,
          mixBlendMode: "multiply",
        }}
      />

      {/* Floating Clouds Layer */}
      <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
        <motion.div
          className="absolute w-[90vw] max-w-[600px] left-0"
          variants={cloud1Variants}
          initial="hidden"
          animate={
            step === "clouds_in"
              ? "visible"
              : step === "clouds_out"
                ? "exit"
                : "hidden"
          }
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={imgCloud1}
            className="w-full h-auto object-contain"
            alt=""
          />
        </motion.div>

        <motion.div
          className="absolute w-[100vw] max-w-[700px] right-0"
          variants={cloud2Variants}
          initial="hidden"
          animate={
            step === "clouds_in"
              ? "visible"
              : step === "clouds_out"
                ? "exit"
                : "hidden"
          }
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <ImageWithFallback
            src={imgCloud2}
            className="w-full h-auto object-contain"
            alt=""
          />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {(step === "idle" ||
          step === "pressing" ||
          step === "closing_circle") && (
          <motion.div
            key="intro"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col items-center justify-between relative z-10 py-[max(env(safe-area-inset-top,0px),40px)]"
          >
            {/* Top spacer */}
            <div />

            {/* Centre block */}
            <div className="flex flex-col items-center gap-8 px-8">
              {/* Wordmark */}
              <div className="flex flex-col items-center gap-6">
                <motion.h1
                  style={{
                    fontFamily: HEAD,
                    fontSize: "clamp(48px, 15vw, 80px)",
                    fontWeight: 400,
                    color: INK,
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                    textAlign: "center",
                  }}
                >
                  <TypewriterText
                    text="Canopy"
                    delay={0.3}
                    speed={0.15}
                  />
                </motion.h1>

                <p
                  style={{
                    fontFamily: BODY,
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(15px, 4vw, 18px)",
                    color: "rgba(28,24,20,0.52)",
                    letterSpacing: "0.04em",
                    textAlign: "center",
                    lineHeight: 1.55,
                    maxWidth: 340,
                  }}
                >
                  <span style={{ display: "block" }}>
                    <TypewriterText
                      text="pause before you purchase."
                      delay={1.5}
                    />
                  </span>
                  <span style={{ display: "block" }}>
                    <TypewriterText
                      text="grow what matters instead."
                      delay={3.0}
                    />
                  </span>
                </p>
              </div>
            </div>

            {/* Bottom — tap cue */}
            <motion.div
              className="flex flex-col items-center gap-6 mt-8 mb-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 5.0 }}
            >
              <div className="relative flex flex-col items-center justify-center">
                <motion.button
                  onPointerDown={handlePointerDown}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  variants={vibrateVariants}
                  animate={
                    step === "pressing" ? "pressing" : "idle"
                  }
                  className="w-32 h-32 flex items-center justify-center relative focus:outline-none z-10 bg-transparent"
                >
                  {/* Sun Container */}
                  <div className="absolute w-[300px] h-[300px] pointer-events-none flex items-center justify-center">
                    {/* Wiggle / float animation for the whole sun */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <SunShapeSvg
                        width={150}
                        height={150}
                        pressing={step === "pressing"}
                      />
                    </div>
                  </div>
                </motion.button>
              </div>

              <motion.span
                animate={{
                  opacity: step === "pressing" ? 0.4 : 1,
                }}
                style={{
                  fontFamily: BODY,
                  fontWeight: 400,
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(28,24,20,0.35)",
                  zIndex: 10,
                }}
              >
                hold to root
              </motion.span>
            </motion.div>
          </motion.div>
        )}

        {(step === "clouds_in" || step === "clouds_out") && (
          <motion.div
            key="relation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: step === "clouds_in" ? 1 : 0,
              scale: 1,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-20 pointer-events-none"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col items-center gap-6 px-8"
            >
              <h2
                style={{
                  fontFamily: HEAD,
                  fontSize: "clamp(32px, 8vw, 48px)",
                  color: INK,
                  textAlign: "center",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                a new relation begins
              </h2>
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "14px",
                  color: "rgba(77,170,87,0.8)",
                  textAlign: "center",
                  letterSpacing: "0.05em",
                }}
              >
                planting your intention...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}