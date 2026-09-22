import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Trash2, X } from "lucide-react";
import { Flower } from "../types";
import { VoicePlayer } from "./Garden";

const TEAL = "#1C2E2A";
const GREEN = "#4DAA57";
const RED = "#D94539";
const HEAD = "'Passion One', sans-serif";
const BODY = "'Slabo 13px', serif";
const RULE = "#A3A3A3";

interface ReceiptModalProps {
  selectedFlower: Flower;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export function ReceiptModal({
  selectedFlower,
  onClose,
  onDelete,
}: ReceiptModalProps) {
  const zigzagClipPaper = useMemo(() => {
    const pts: string[] = ["0% 0%", "100% 0%"];
    const TEETH = 34;
    for (let i = TEETH; i >= 0; i--) {
      const xPct = ((i / TEETH) * 100).toFixed(2);
      const yVal = i % 2 === 0 ? "100%" : "calc(100% - 6px)";
      pts.push(`${xPct}% ${yVal}`);
    }
    return `polygon(${pts.join(", ")})`;
  }, []);

  const zigzagClipPrinter = useMemo(() => {
    const pts: string[] = ["0% 0%", "100% 0%"];
    const TEETH = 34;
    for (let i = TEETH; i >= 0; i--) {
      const xPct = ((i / TEETH) * 100).toFixed(2);
      const yVal = i % 2 === 0 ? "100%" : "calc(100% - 6px)";
      pts.push(`${xPct}% ${yVal}`);
    }
    return `polygon(${pts.join(", ")})`;
  }, []);

  const dateObj = new Date(selectedFlower.date);
  const dateStr = dateObj
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
    .toUpperCase();
    
  const timeStr = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const isBloomed = selectedFlower.state === "bloomed";

  // Authentic barcode pattern modeled directly after reference image
  const barcodeBars = useMemo(
    () => [
      // 1. Tall bar at start
      { w: 2.5, tall: true },
      // Group 1: 6 short bars
      { w: 1, tall: false },
      { w: 1.5, tall: false },
      { w: 2, tall: false },
      { w: 1, tall: false },
      { w: 2.5, tall: false },
      { w: 1, tall: false },

      // 2. Tall bar
      { w: 2, tall: true },
      // Group 2: 7 short bars
      { w: 1, tall: false },
      { w: 2, tall: false },
      { w: 1.5, tall: false },
      { w: 1, tall: false },
      { w: 3, tall: false },
      { w: 1, tall: false },
      { w: 1.5, tall: false },

      // 3. Tall bar
      { w: 1.5, tall: true },
      // Group 3: 6 short bars
      { w: 1, tall: false },
      { w: 2.5, tall: false },
      { w: 1, tall: false },
      { w: 1.5, tall: false },
      { w: 2, tall: false },
      { w: 1, tall: false },

      // 4. Tall bar
      { w: 2, tall: true },
      // Group 4: 8 short bars
      { w: 1, tall: false },
      { w: 1.5, tall: false },
      { w: 1, tall: false },
      { w: 2.5, tall: false },
      { w: 1, tall: false },
      { w: 2, tall: false },
      { w: 1.5, tall: false },
      { w: 1, tall: false },

      // 5. Tall bar
      { w: 2, tall: true },
      // Group 5: 6 short bars
      { w: 1.5, tall: false },
      { w: 1, tall: false },
      { w: 3, tall: false },
      { w: 1, tall: false },
      { w: 2, tall: false },
      { w: 1, tall: false },

      // 6. Tall bar (Center)
      { w: 2.5, tall: true },
      // Group 6: 7 short bars
      { w: 1, tall: false },
      { w: 2, tall: false },
      { w: 1.5, tall: false },
      { w: 1, tall: false },
      { w: 2.5, tall: false },
      { w: 1, tall: false },
      { w: 1.5, tall: false },

      // 7. Tall bar
      { w: 2, tall: true },
      // Group 7: 8 short bars
      { w: 1, tall: false },
      { w: 1.5, tall: false },
      { w: 3, tall: false },
      { w: 1, tall: false },
      { w: 1, tall: false },
      { w: 2, tall: false },
      { w: 1.5, tall: false },
      { w: 1, tall: false },

      // 8. Tall bar
      { w: 1.5, tall: true },
      // Group 8: 6 short bars
      { w: 2.5, tall: false },
      { w: 1, tall: false },
      { w: 1.5, tall: false },
      { w: 1, tall: false },
      { w: 2, tall: false },
      { w: 1, tall: false },

      // 9. Tall bar
      { w: 2, tall: true },
      // Group 9: 7 short bars
      { w: 1, tall: false },
      { w: 2, tall: false },
      { w: 1.5, tall: false },
      { w: 1, tall: false },
      { w: 3, tall: false },
      { w: 1, tall: false },
      { w: 1.5, tall: false },

      // 10. Tall bar
      { w: 2, tall: true },
      // Group 10: 6 short bars
      { w: 1, tall: false },
      { w: 2.5, tall: false },
      { w: 1, tall: false },
      { w: 1.5, tall: false },
      { w: 2, tall: false },
      { w: 1, tall: false },

      // 11. Tall bar
      { w: 2, tall: true },
      // Group 11: 7 short bars
      { w: 1.5, tall: false },
      { w: 1, tall: false },
      { w: 2, tall: false },
      { w: 1, tall: false },
      { w: 2.5, tall: false },
      { w: 1, tall: false },
      { w: 1.5, tall: false },

      // 12. Tall bar (Near right)
      { w: 2, tall: true },
      // Ending: 5 short bars — ending with a small one!
      { w: 1, tall: false },
      { w: 2, tall: false },
      { w: 1.5, tall: false },
      { w: 1, tall: false },
      { w: 1.5, tall: false },
    ],
    []
  );

  return (
    <div className="fixed inset-0 z-[101] flex flex-col items-center">
      {/* 1. Dedicated static backdrop — separated from scroll container to prevent GPU seam artifacts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 pointer-events-auto"
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />

      {/* 2. Modal content layer — sits on top, isolated from backdrop filter */}
      <div 
        className="fixed inset-0 flex flex-col items-center pointer-events-none z-10"
        style={{ fontFamily: BODY }}
      >
        {/* PRINTER HEAD (fixed at top, clean vector geometry without filter: drop-shadow) */}
        <div
          className="w-full max-w-[420px] shrink-0 pointer-events-auto relative z-[110]"
        >
          <div
            className="w-full h-[64px] flex items-center justify-between px-5 relative"
            style={{
              background: "#182622",
              clipPath: zigzagClipPrinter,
              WebkitClipPath: zigzagClipPrinter,
            }}
          >
            <div className="flex-1" />
            <div className="flex items-center gap-2 flex-1 justify-center mb-1">
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, flexShrink: 0 }} />
              <p
                style={{
                  fontFamily: HEAD,
                  color: "#FAFAFA",
                  fontSize: 14,
                  letterSpacing: "3px",
                  whiteSpace: "nowrap",
                  opacity: 0.9,
                }}
              >
                CANOPY PRINTER
              </p>
            </div>
            <div className="flex-1 flex justify-end mb-1">
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* SCROLLABLE RECEIPT WRAPPER */}
        <div 
          className="w-full max-w-[420px] flex-1 overflow-y-auto no-scrollbar relative pointer-events-auto z-10"
          style={{
            marginTop: "-64px", // Starts all the way at y = 0 cleanly behind printer head
            paddingTop: "0px",
            paddingBottom: "48px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <div
            className="relative w-full flex flex-col"
            style={{
              filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.15)) drop-shadow(0 4px 8px rgba(0,0,0,0.05))",
            }}
          >
            <motion.div
              key={`receipt-${selectedFlower.id}`}
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // snappy out
              }}
              className="relative w-full flex flex-col"
              style={{
                background: "#F9F8F5",
                clipPath: zigzagClipPaper,
                WebkitClipPath: zigzagClipPaper,
                paddingBottom: "24px",
                minHeight: "400px",
                outline: "none",
              }}
              onClick={(e) => e.stopPropagation()}
            >
            {/* CONTENT INSIDE PAPER */}
            <div className="pt-20 px-6 pb-4">
              
              {/* Optional Drawing */}
              {selectedFlower.drawing && (
                <div className="flex justify-center mb-8">
                  <img
                    src={selectedFlower.drawing}
                    alt="flower drawing"
                    style={{
                      maxHeight: 120,
                      objectFit: "contain",
                      filter: isBloomed
                        ? "drop-shadow(0px 6px 18px rgba(77,170,87,0.25))"
                        : "grayscale(1) brightness(0.65) drop-shadow(0px 6px 16px rgba(32,70,84,0.15))",
                    }}
                  />
                </div>
              )}

              {/* CURRENT STATE & STAMP */}
              <div className="flex justify-between items-start mb-4 relative">
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(28,46,42,0.45)",
                      letterSpacing: "0.15em",
                      marginBottom: 4,
                    }}
                  >
                    CURRENT STATE
                  </p>
                  <p
                    style={{
                      fontFamily: HEAD,
                      fontSize: 36,
                      color: TEAL,
                      lineHeight: 1,
                    }}
                  >
                    {selectedFlower.emotion?.name || "Unknown"}
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 10,
                    transform: isBloomed ? "rotate(-6deg)" : "rotate(6deg)",
                    border: `2px solid ${isBloomed ? GREEN : RED}`,
                    color: isBloomed ? GREEN : RED,
                    padding: "4px 12px",
                    borderRadius: "4px",
                    fontFamily: HEAD,
                    fontSize: 22,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.9,
                  }}
                >
                  {isBloomed ? "APPROVED" : "REJECTED"}
                </div>
              </div>

              <div style={{ borderBottom: `1px dashed ${RULE}`, margin: "16px 0" }} />

              {/* Date & Time */}
              <div className="flex justify-between items-center mb-4">
                <p
                  style={{
                    fontFamily: HEAD,
                    fontSize: 14,
                    color: TEAL,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {dateStr}
                </p>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: 13,
                    color: "rgba(28,46,42,0.5)",
                  }}
                >
                  {timeStr}
                </p>
              </div>

              {/* Subject */}
              {(selectedFlower.itemName || selectedFlower.whoFor) && (
                <div className="mb-4">
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(28,46,42,0.45)",
                      letterSpacing: "0.15em",
                      marginBottom: 6,
                    }}
                  >
                    SUBJECT
                  </p>
                  <p style={{ fontFamily: BODY, fontSize: 16, color: TEAL }}>
                    {[selectedFlower.itemName, selectedFlower.whoFor]
                      .filter(Boolean)
                      .join(" / ")}
                  </p>
                </div>
              )}

              {/* Itemized Details (Journal) */}
              {selectedFlower.journal && (
                <div className="mb-4">
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(28,46,42,0.45)",
                      letterSpacing: "0.15em",
                      marginBottom: 6,
                    }}
                  >
                    ITEMIZED DETAILS
                  </p>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: 16,
                      color: TEAL,
                      lineHeight: 1.5,
                    }}
                  >
                    {selectedFlower.journal}
                  </p>
                </div>
              )}

              {/* Item Images */}
              {selectedFlower.photos && selectedFlower.photos.length > 0 && (
                <div className="mb-4">
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(28,46,42,0.45)",
                      letterSpacing: "0.15em",
                      marginBottom: 6,
                    }}
                  >
                    ITEM IMAGE
                  </p>
                  <div className="flex gap-3">
                    {selectedFlower.photos.map((src, i) => (
                      <div
                        key={i}
                        className="bg-white border p-1"
                        style={{ borderColor: "rgba(0,0,0,0.1)" }}
                      >
                        <img
                          src={src}
                          alt=""
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Voice Note */}
              {selectedFlower.voiceNote && (
                <div className="mb-4">
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(28,46,42,0.45)",
                      letterSpacing: "0.15em",
                      marginBottom: 6,
                    }}
                  >
                    VOICE NOTE
                  </p>
                  <VoicePlayer src={selectedFlower.voiceNote} />
                </div>
              )}

              <div style={{ borderBottom: `1px dashed ${RULE}`, margin: "16px 0" }} />

              {/* TOTAL AMOUNT */}
              {selectedFlower.amount > 0 && (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <p
                      style={{
                        fontSize: 10,
                        color: "rgba(28,46,42,0.45)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      TOTAL AMOUNT
                    </p>
                    <p style={{ fontFamily: HEAD, fontSize: 32, color: TEAL }}>
                      ₹{selectedFlower.amount.toFixed(2)}
                    </p>
                  </div>
                  <div style={{ borderBottom: `1px dashed ${RULE}`, margin: "16px 0" }} />
                </>
              )}

              {/* Barcode and Branding */}
              <div className="flex flex-col items-center mt-6 mb-4">
                {/* Full-width uneven barcode */}
                <div
                  className="w-full flex items-end justify-between h-[44px] mb-3.5 px-[10px] overflow-hidden"
                >
                  {barcodeBars.map((bar, i) => (
                    <div
                      key={i}
                      style={{
                        width: `${bar.w}px`,
                        height: bar.tall ? "44px" : "29px",
                        backgroundColor: "#9EA29F",
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: HEAD,
                    fontStyle: "italic",
                    fontSize: 14,
                    color: "rgba(28,46,42,0.7)",
                    marginBottom: 6,
                    textAlign: "center",
                  }}
                >
                  Thank you for checking in with yourself.
                </p>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "rgba(28,46,42,0.45)",
                    textAlign: "center",
                  }}
                >
                  CANOPY · PAUSE BEFORE YOU PURCHASE
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2.5 w-full mt-5">
                <button
                  onClick={() => onDelete(selectedFlower.id)}
                  className="w-[44px] h-[44px] shrink-0 flex items-center justify-center rounded-[8px] transition-transform active:scale-95"
                  style={{
                    background: "#FAF9F5",
                    border: "1px solid #DCD7CE",
                    color: "#78807A",
                  }}
                >
                  <Trash2 strokeWidth={1.5} className="w-[18px] h-[18px]" />
                </button>

                <button
                  onClick={() => {
                    if (selectedFlower.drawing) {
                      const link = document.createElement("a");
                      link.href = selectedFlower.drawing;
                      link.download = `flower-${selectedFlower.id}.png`;
                      link.click();
                    }
                  }}
                  className="flex-1 h-[44px] flex items-center justify-center rounded-[8px] transition-transform active:scale-95"
                  style={{
                    background: "#FAF9F5",
                    border: "1px solid #DCD7CE",
                    color: "#1C2E2A",
                    fontFamily: HEAD,
                    fontSize: 14.5,
                    letterSpacing: "0.08em",
                  }}
                >
                  SAVE TICKET
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 h-[44px] flex items-center justify-center rounded-[8px] transition-transform active:scale-95"
                  style={{
                    background: TEAL,
                    color: "#FFFFFF",
                    fontFamily: HEAD,
                    fontSize: 14.5,
                    letterSpacing: "0.08em",
                  }}
                >
                  DISCARD
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  );
}
