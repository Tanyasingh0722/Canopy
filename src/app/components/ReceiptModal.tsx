import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Trash2, Share } from "lucide-react";
import { Flower } from "../types";
import { VoicePlayer } from "./Garden";

const TEAL = "#1C2E2A";
const GREEN = "#4DAA57";
const HEAD = "'Passion One', sans-serif";
const BODY = "'Slabo 13px', serif";
const RULE = "#d0ccc8";

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
  const zigzagClip = useMemo(() => {
    const pts: string[] = ["0% 0%", "100% 0%"];
    const TEETH = 34;
    for (let i = TEETH; i >= 0; i--) {
      const xPct = ((i / TEETH) * 100).toFixed(2);
      const yVal = i % 2 === 0 ? "100%" : "calc(100% - 6px)";
      pts.push(`${xPct}% ${yVal}`);
    }
    return `polygon(${pts.join(", ")})`;
  }, []);

  const dateStr = new Date(selectedFlower.date)
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
    .toUpperCase();

  const isBloomed = selectedFlower.state === "bloomed";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[101] overflow-y-auto flex flex-col items-center no-scrollbar"
      style={{
        paddingBottom: "48px",
        pointerEvents: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        background: "rgba(0,0,0,0.58)",
        backdropFilter: "blur(8px)",
        fontFamily: BODY,
      }}
    >
      {/* PRINTER HEAD */}
      <div
        className="sticky top-0 z-[50] w-full max-w-[390px] h-[58px] shrink-0 flex items-center justify-center"
        style={{
          background: "#182622",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            fontFamily: HEAD,
            color: "#FAFAFA",
            fontSize: 16,
            letterSpacing: "3px",
            opacity: 0.9,
          }}
        >
          CANOPY PRINTER
        </p>
      </div>

      {/* RECEIPT WRAPPER */}
      <div
        className="relative w-full max-w-[390px] overflow-hidden shrink-0"
        style={{
          zIndex: 20,
          filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.32))",
        }}
      >
        {/* TICKET PAPER */}
        <motion.div
          key={`receipt-${selectedFlower.id}`}
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="relative w-full flex flex-col"
          style={{
            background: "#FAF8F5",
            clipPath: zigzagClip,
            paddingBottom: "24px",
            minHeight: "400px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* CONTENT INSIDE PAPER */}
          <div className="pt-8 px-8 pb-4">
            {/* Flower Drawing */}
            <div className="flex justify-center mb-8">
              {selectedFlower.drawing ? (
                <img
                  src={selectedFlower.drawing}
                  alt="flower drawing"
                  style={{
                    maxHeight: 140,
                    objectFit: "contain",
                    filter: isBloomed
                      ? "drop-shadow(0px 6px 18px rgba(77,170,87,0.3))"
                      : "grayscale(1) brightness(0.6) drop-shadow(0px 6px 16px rgba(32,70,84,0.18))",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "rgba(28,46,42,0.08)",
                  }}
                />
              )}
            </div>

            {/* Feeling & Status */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <p
                  style={{
                    fontSize: 10,
                    color: "rgba(28,46,42,0.35)",
                    letterSpacing: "0.08em",
                    marginBottom: 2,
                  }}
                >
                  CURRENT STATE
                </p>
                <p
                  style={{
                    fontFamily: HEAD,
                    fontSize: 26,
                    color: TEAL,
                    lineHeight: 1.1,
                  }}
                >
                  {selectedFlower.emotion?.name || "Unknown"}
                </p>
              </div>
              <div
                className="px-3 py-1.5 rounded-full"
                style={{
                  background: isBloomed ? `${GREEN}20` : "rgba(28,46,42,0.08)",
                  color: isBloomed ? GREEN : TEAL,
                  border: `1px solid ${isBloomed ? `${GREEN}40` : "rgba(28,46,42,0.1)"}`,
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                {isBloomed ? "🌸 bloomed" : "🥀 wilted"}
              </div>
            </div>

            {/* Date */}
            <p
              style={{
                fontSize: 10,
                color: "rgba(28,46,42,0.4)",
                letterSpacing: "0.07em",
                textAlign: "right",
                marginBottom: 20,
              }}
            >
              {dateStr}
            </p>

            <div style={{ borderBottom: `2px dashed ${RULE}`, margin: "16px 0" }} />

            {/* Itemized Details */}
            {(selectedFlower.itemName || selectedFlower.whoFor) && (
              <div className="flex flex-col gap-3 my-4">
                <p
                  style={{
                    fontSize: 9,
                    color: "rgba(28,46,42,0.35)",
                    letterSpacing: "0.08em",
                  }}
                >
                  SUBJECT
                </p>

                {selectedFlower.itemName && (
                  <div className="flex justify-between items-end">
                    <p style={{ color: "rgba(28,46,42,0.5)", fontSize: 13, textTransform: "uppercase" }}>ITEM</p>
                    <p style={{ color: TEAL, fontSize: 16 }}>{selectedFlower.itemName}</p>
                  </div>
                )}
                {selectedFlower.whoFor && (
                  <div className="flex justify-between items-end">
                    <p style={{ color: "rgba(28,46,42,0.5)", fontSize: 13, textTransform: "uppercase" }}>FOR</p>
                    <p style={{ color: TEAL, fontSize: 16 }}>{selectedFlower.whoFor}</p>
                  </div>
                )}
              </div>
            )}

            {selectedFlower.amount > 0 && (
              <>
                <div style={{ borderBottom: `2px dashed ${RULE}`, margin: "16px 0" }} />
                <div className="flex justify-between items-center my-4">
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(28,46,42,0.5)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    TOTAL AMOUNT
                  </p>
                  <p style={{ fontFamily: HEAD, fontSize: 26, color: TEAL }}>
                    ₹{selectedFlower.amount.toFixed(2)}
                  </p>
                </div>
              </>
            )}

            {selectedFlower.journal && (
              <>
                <div style={{ borderBottom: `2px dashed ${RULE}`, margin: "16px 0" }} />
                <div className="my-4">
                  <p
                    style={{
                      fontSize: 9,
                      color: "rgba(28,46,42,0.35)",
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                    }}
                  >
                    ITEMIZED DETAILS
                  </p>
                  <p
                    style={{
                      fontStyle: "italic",
                      fontSize: 14,
                      color: TEAL,
                      lineHeight: 1.6,
                      opacity: 0.85,
                    }}
                  >
                    {selectedFlower.journal}
                  </p>
                </div>
              </>
            )}

            {selectedFlower.voiceNote && (
              <div className="my-4">
                <p
                  style={{
                    fontSize: 9,
                    color: "rgba(28,46,42,0.35)",
                    letterSpacing: "0.08em",
                    marginBottom: 8,
                  }}
                >
                  VOICE NOTE
                </p>
                <VoicePlayer src={selectedFlower.voiceNote} />
              </div>
            )}

            {/* Barcode and Branding */}
            <div className="flex flex-col items-center mt-12 mb-6">
              <div className="flex gap-[3px] mb-5 h-[44px] w-full justify-center opacity-80">
                {Array.from({ length: 42 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: Math.random() > 0.6 ? 2 : 1.5,
                      background: TEAL,
                      opacity: Math.random() > 0.2 ? 0.9 : 0.2,
                    }}
                  />
                ))}
              </div>
              <p
                style={{
                  fontSize: 9,
                  letterSpacing: "0.15em",
                  color: "rgba(28,46,42,0.35)",
                }}
              >
                CANOPY · PAUSE BEFORE YOU PURCHASE
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-between mt-8 mb-2">
              <button
                onClick={() => onDelete(selectedFlower.id)}
                className="w-[46px] h-[46px] shrink-0 flex items-center justify-center rounded-2xl transition-transform active:scale-95"
                style={{
                  border: `1.5px solid ${RULE}`,
                  color: "rgba(28,46,42,0.45)",
                }}
              >
                <Trash2 className="w-[18px] h-[18px]" />
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
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl transition-transform active:scale-95"
                style={{
                  border: `1.5px solid ${RULE}`,
                  color: TEAL,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                <Share className="w-4 h-4" /> SAVE TICKET
              </button>

              <button
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl transition-transform active:scale-95"
                style={{
                  background: TEAL,
                  color: "#FAFAFA",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                }}
              >
                DISCARD
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
